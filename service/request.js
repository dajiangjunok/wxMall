export default function request(option){
  const baseURL='http://106.54.54.237:8000/api/w1'
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

