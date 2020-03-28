
// walle-devtools plugin required

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

injectScript('http://localhost:8888/walle-stock.min.js')