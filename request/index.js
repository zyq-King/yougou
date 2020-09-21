export const request=(params)=>{
  return new Promise((resolve,reject)=>{
    wx.request({
      ...params,
      success:(results)=>{
        resolve(results);
      },
      fail:(err)=>{
        reject(err)
      }
    })
  })
}