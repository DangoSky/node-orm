enum Status {
  SUCCESS = 0,
}

// 接口统一的响应格式
export class ApiResponse {
  code: number
  msg: string
  data: Object

  constructor(code = Status.SUCCESS, msg = '', data = {}) {
    this.code = code;
    this.msg = msg;
    this.data = data;
  }

  // static getSucess(): RouterResponse {
  //   return new RouterResponse(RouterResponseCode.Success, "请求处理成功。", {});
  // }

  // setCode(code: number): void {
  //   this.code = code;
  // }

  // setMessage(message: string): void {
  //   this.message = message;
  // }

  // setResult(result: Record<string, unknown>): void {
  //   this.result = result;
  // }

  toJSON() {
    return {
      code: this.code,
      msg: this.msg,
      data: this.data
    }
  }
}
