
window.__Walle_Devtools_Message = async (data) => {
  try {
    const { id, type } = data

    if (type === 'ajax' || type === 'download') {
      window[`__Walle_Devtools_Callback_${id}`](data.data, data.error)
      delete window[`__Walle_Devtools_Callback_${id}`]
    }
  } catch(e) {
    console.warn(`#window.__Walle_Devtools_Message# fail `, e)
  }
}

window.__Walle_Devtools_Ajax = async (data) => {
  return new Promise((r,j) => {
    try {
      const id = new Date().getTime()
      
      window[`__Walle_Devtools_Callback_${id}`] = (response, error) => { 
        response && r(response)
        error && j(error)
      }
      
      // FormData object could not be cloned
      // 转换为json数据 在插件中再次处理为FormData
      if(Object.prototype.toString.call(data.data) === '[object FormData]') {
        const json = {}
        data.data.forEach((value, key) => json[key] = value)
        
        data.data = json
        // FormData 标识
        data.data.isFormData = true
      }

      window.postMessage({ id, type: 'ajax', data, walle: true } , '*')
    } catch(e) {
      console.warn(`#window.__Walle_Devtools_Ajax# fail `, e)
      j(e)
    }
  })
}

window.__Walle_Devtools_Download = async (data) => {
  return new Promise((r,j) => {
    try {
      const id = new Date().getTime()
      
      window[`__Walle_Devtools_Callback_${id}`] = (response, error) => { 
        response && r(response)
        error && j(error)
      }
      
      window.postMessage({ id, type: 'download', data, walle: true } , '*')
    } catch(e) {
      console.warn(`#window.__Walle_Devtools_Download# fail `, e)
      j(e)
    }
  })
}

