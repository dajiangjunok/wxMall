export default function request(option){
  // const baseURL='http://106.54.54.237:8000/api/w1'
  // const baseURL = "http://123.207.32.32:8000/api/hy"
  const baseURL = "http://106.54.54.237:8000/api/hy"

  return new Promise((resolve,reject)=>{
    wx.request({
      url: baseURL + option.url,
      method: option.method || 'get',
      data: option.data || null,
      success: resolve,
      fail: reject
    })
  })
}

