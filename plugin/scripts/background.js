/* eslint-disable no-undef */

// 浏览器插件机制允许插件中的脚本跨域请求 通过此机制实现任意脚本的跨域AJAX通信

chrome.runtime.onMessage.addListener((request, _, sendResponse) => {
  try {
    const { type, url, data, opts } = request.data
 
    if(request.type === 'ajax') {
      ajax(type, url, data, opts).then((response) => sendResponse({ response })).catch((error) => sendResponse({ error }))
    } 

    if(request.type === 'download') {
      download(url).then((response) => sendResponse({ response })).catch((error) => sendResponse({ error }))
    }     
  } catch(e) {
    console.warn(`#Walle_Devtools# background-script fail `, e)
  }

  return true
})

async function ajax(type = 'GET', url, data, opts = {} ) {

  // FormData object could not be cloned
  // 将json数据处理为FormData
  if (data && data.isFormData) {
    const formdata = new FormData()

    delete data.isFormData

    for(let key in data) {
      formdata.append(key, data[key])
    }

    data = formdata
  }

  return new Promise((r, j) => {
    $.ajax(Object.assign({
      type,
      url,
      data,
      async: opts.async || true,
      dataType: opts.dataType || 'html',
      // cors with cookies 
      // crossDomain: true,
      // xhrFields: {withCredentials: true},

      success: (...args) => r(...args),
      error:(...args) => j(...args),
    }, opts))
  })
}

async function download(imgUrl) {
  return new Promise((r, j) => {
    const req = new XMLHttpRequest()
    req.open('GET', imgUrl, true)
    req.responseType = 'blob'
    req.onload = () => r(req.response)
    req.onerror = j
    req.send(null)
  })
}
