import {config} from "../config.js"
const tips = {
  1:'抱歉，出现了一个错误~',
  1005:'appkey无效，请前往www.7yue.pro申请',
  3000:'期刊不存在'
}
class HTTP{
  request(params){
    if(!params){
      params.method = "GET"
    }
    wx.request({
      url: config.api_blink_url+params.url,
      method: params.method,
      data:params.data,
      header:{
        'content-type':'application/json',
        'appkey':config.appkey
      },
      success:(res)=>{
        let code = res.statusCode.toString()
        if(code.startsWith('2')){
          params.success  && params.success(res.data)
        }else{
          // 错误异常处理，一般在esle里面出现的异常，服务端错误
          let error_code = res.data.error_code
          this._show_error(error_code)
        }
      },
      fail:(err)=> {
        // 出现在fail函数里面的错误，一般是API调用失败，比如网络故障等等
        this._show_error(1)
      }
    })
  }
  _show_error(error_code){
    wx.showToast({
      title: tips[error_code],
      icon:'none',
      duration:2000
    })
  }
}

export {HTTP}