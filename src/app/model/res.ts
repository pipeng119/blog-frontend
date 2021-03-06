export class Res<T> {
  code: number;
  data: T;
  message: string;
  constructor(code: number, data: T, message: string) {
    this.code = code;
    this.data = data;
    this.message = message;
  }
}

export interface IUrlConfig {
  url: string;
}
