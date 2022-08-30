/** person information */
export interface User {
  username: string;
  password: string;
  remember?: boolean;
}

/** haha */
export type TLogin = {
  username: string;
  token: string;
}
