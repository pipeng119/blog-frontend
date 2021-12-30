export interface User {
  username: string;
  password: string;
  remember?: boolean;
}

export type TLogin = {
  username: string;
  token: string;
}
