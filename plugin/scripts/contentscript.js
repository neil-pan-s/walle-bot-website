/* eslint-disable no-undef */

window.addEventListener('message', async (evt) => {
  if (evt.source === window && evt.data.walle) {    
    try {
      const { id, type } = evt.data

      // content-script 需要通过background-script实现跨域请求
      chrome.runtime.sendMessage(evt.data, (result) => {
        sendMessage({ id, type, data: result.response, error: result.error })
      })

    } catch(e) {
      console.warn(`#Walle_Devtools# content-script fail `, e)
    }
  }
})

async function sendMessage(data) {
  const source = ';(() => window.__Walle_Devtools_Message(' + JSON.stringify(data) + '))(window)'
  excuteScript(source)
}

async function excuteScript(source) {
  const script = document.createElement('script')
  script.textContent = source
  document.documentElement.appendChild(script)
  script.parentNode.removeChild(script)
}

async function injectScript(src, cb) { 
  return new Promise((resolve) => {
    var e = document.createElement('script'); 
    e.type = 'text/javascript'; 
    e.src = src; 
    e.onload = () => { 
      resolve() 
      cb && cb() 
    }
    document.body.appendChild(e) 
  })
}

async function injectStyle(src, cb) { 
  return new Promise((resolve) => {
    var e = document.createElement('link'); 
    e.setAttribute('rel', 'stylesheet')
    e.setAttribute('href', src)
    e.onload = () => { 
      resolve() 
      cb && cb() 
    }
    document.head.appendChild(e) 
  })
}

const WALLE_SCRIPTS = {
  'www.douban.com': 'https://walle.neil-pan.com/sns/walle-sns.min.js',
  'q.10jqka.com.cn': 'https://walle.neil-pan.com/stock/walle-stock.min.js',

  // dev use 
  // 'q.10jqka.com.cn': 'http://localhost:8080/devtools.js',
}

;(() => {

  const hostname = location.hostname
  const hostnames = Object.keys(WALLE_SCRIPTS)

  if (hostnames.includes(hostname) && location.pathname === '/') {
    const js = WALLE_SCRIPTS[hostname]

    if (js.startsWith('/')) {
      injectScript(location.origin + js)
    } else {
      injectScript(js)
    }
  }
})() 

// 注册 Walle_Devtools 标识, 用于网页加载时判断是否有Walle插件
excuteScript('window.__Walle_Devtools = true')
// 插入Devtools 跨域通信机制实现
injectScript(chrome.extension.getURL('scripts/inject.js'))

console.info('Walle Devtools 😜')