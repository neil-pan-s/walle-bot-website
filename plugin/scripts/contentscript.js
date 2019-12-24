
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
  'localhost': '/devtools.js',
  '127.0.0.1': '/devtools.js',

  'www.douban.com': 'https://walle.neil-pan.com/walle-sns.min.js',
  'q.10jqka.com.cn': 'https://walle.neil-pan.com/walle-stock.min.js',

  // dev use 
  // 'q.10jqka.com.cn': 'http://localhost:8080/devtools.js',
}

;(() => {

  const hostname = location.hostname
  const hostnames = Object.keys(WALLE_SCRIPTS)

  if (hostnames.includes(hostname)) {
    const js = WALLE_SCRIPTS[hostname]

    if (js.startsWith('/')) {
      injectScript(location.origin + js)
    } else {
      injectScript(js)
    }
  }
})() 


console.info('Walle Devtools 😜')