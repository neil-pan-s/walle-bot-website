
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