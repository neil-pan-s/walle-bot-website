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

async function excuteScript(source, isAutoRemove = true) {
  const script = document.createElement('script')
  script.textContent = source
  document.documentElement.appendChild(script)
  isAutoRemove && script.parentNode.removeChild(script)
}

async function injectScript(src, cb, el) { 
  return new Promise((resolve) => {
    var e = document.createElement('script'); 
    e.type = 'text/javascript'; 
    e.src = src; 
    e.onload = () => { 
      resolve() 
      cb && cb() 
    }
    (el || document.body).appendChild(e) 
  })
}

async function injectStyle(src, cb, el) { 
  return new Promise((resolve) => {
    var e = document.createElement('link'); 
    e.setAttribute('rel', 'stylesheet')
    e.setAttribute('href', src)
    e.onload = () => { 
      resolve() 
      cb && cb() 
    }
    (el || document.head).appendChild(e) 
  })
}

const WALLE_SCRIPTS = {
  'www.douban.com': 'https://walle.neil-pan.com/sns/walle-sns.min.js',
  'q.10jqka.com.cn': 'https://walle.neil-pan.com/stock/walle-stock.min.js',

  // dev use
  // 'www.douban.com': 'http://localhost:8080/devtools.js',
  // 'q.10jqka.com.cn': 'http://localhost:8080/devtools.js',
}

document.addEventListener('DOMContentLoaded', async () => {
  const hostname = location.hostname
  const hostnames = Object.keys(WALLE_SCRIPTS)

  // 仅限首页加载 walle-bot-js 以免影响正常页面访问
  if (hostnames.includes(hostname) && location.pathname === '/') {
    const js = WALLE_SCRIPTS[location.hostname]

    if (js.startsWith('/')) {
      injectScript(location.origin + js)
    } else {
      injectScript(js)
    }
  }
})

// 脚本钩子函数支持 支撑跨域iframe等网页 执行相应脚本屏蔽或调整相应内容
// url中使用 ?_walle_script= 'xxx' 传递的脚本将直接执行
;(async () => {
  const search = location.search.replace('?', '')
  const searchs = search.split('&').reduce((map, item) => { 
    const [key, value] = item.split('=')
    map[key] = value
    return map
  }, {})
  const _walle_script = searchs['_walle_script']
  if (_walle_script) {
    excuteScript(decodeURIComponent(_walle_script), false)
  }
})();

// 注册 Walle_Devtools 标识, 用于网页加载时判断是否有Walle插件
excuteScript('window.__Walle_Devtools = true')
// 插入Devtools 跨域通信机制实现 此处保证页面加载开始时首先执行插件代码
injectScript(chrome.extension.getURL('scripts/inject.js'), null, document.documentElement)

// console.info('Walle Devtools 😜')