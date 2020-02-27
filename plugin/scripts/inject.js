
let tick = 0

window.__Walle_Devtools_Message = async (data) => {
  try {
    const { id, type } = data

    if (type === 'ajax' || type === 'download') {
      if(!window[`__Walle_Devtools_Callback_${id}`]) { return }

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
      // 增加随机数避免请求过快 导致id相同
      const id = `${new Date().getTime()}${tick++}`
      
      window[`__Walle_Devtools_Callback_${id}`] = (response, error) => { 
        // dev use
        console.log(`#window.__Walle_Devtools_Ajax# `, data, response, error)
        
        response ? r(response) : j(error)
      }
      
      // 60s 内未返回结果作失败处理
      setTimeout(() => {
        if(!window[`__Walle_Devtools_Callback_${id}`]) { return }

        window[`__Walle_Devtools_Callback_${id}`](null, 'Timeout')
        delete window[`__Walle_Devtools_Callback_${id}`]
      }, 60*1000)

      ;(async () => {
        // FormData object could not be cloned
        // 转换为json数据 在插件中再次处理为FormData
        if(Object.prototype.toString.call(data.data) === '[object FormData]') {
          const json = {}

          for(let [key, value] of data.data) {
            // File object could not be cloned
            // 暂只支持数据中第一级检测 深层数据忽略
            if (Object.prototype.toString.call(value) === '[object File]') {
              const file = {
                name: value.name, 
                lastModified: value.lastModified,
                lastModifiedDate: value.lastModifiedDate,
                webkitRelativePath: value.webkitRelativePath,
                size: value.size,
                type: value.type,
              }

              const arrayBuffer = await value.arrayBuffer()
              const buffer = new Int8Array(arrayBuffer)
              // File 数据
              file.buffer = buffer
              // File 标识
              file.isFile = true

              json[key] = file
            } else {
              json[key] = value
            }
          }
          
          data.data = json
          // FormData 标识
          data.data.isFormData = true
        }

        window.postMessage({ id, type: 'ajax', data, walle: true } , '*')
      })();

    } catch(e) {
      console.warn(`#window.__Walle_Devtools_Ajax# fail `, e)
      j(e)
    }
  })
}

window.__Walle_Devtools_Download = async (data) => {
  return new Promise((r,j) => {
    try {
      // 增加随机数避免请求过快 导致id相同
      const id = `${new Date().getTime()}${tick++}`
      
      window[`__Walle_Devtools_Callback_${id}`] = (response, error) => { 
        // dev use
        console.log(`#window.__Walle_Devtools_Download# `, data, response, error)

        // blob 无法跨域传递 background-script和content-script为不同上下文环境 转为arrayBuffer传递
        if (response) {
          const arrayBuffer = new ArrayBuffer(response.size)
          const uint8Array = new Uint8Array(arrayBuffer)

          for(let i = 0; i < response.size; i++) {
            uint8Array[i] = response.buffer[i]
          }

          const blob = new Blob([arrayBuffer], { type: response.mime })
          r(blob)
        } else {
          j(error)
        }
      }
      
      // 60s 内未返回结果作失败处理
      setTimeout(() => {
        if(!window[`__Walle_Devtools_Callback_${id}`]) { return }

        window[`__Walle_Devtools_Callback_${id}`](null, 'Timeout')
        delete window[`__Walle_Devtools_Callback_${id}`]
      }, 60*1000)

      window.postMessage({ id, type: 'download', data, walle: true } , '*')
    } catch(e) {
      console.warn(`#window.__Walle_Devtools_Download# fail `, e)
      j(e)
    }
  })
}

// test
// window.__Walle_Devtools_Ajax({type: "GET", url: "http://baidu.com"})
// window.__Walle_Devtools_Download({url: "http://0305.oss-cn-hangzhou.aliyuncs.com/videos/b2e5ee766a9e8d9b81fdb8d74c87b079"})