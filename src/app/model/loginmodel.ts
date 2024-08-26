export interface loginmodel{
    username: string
    password:string
}

export interface user{
    id: string
    password:string
    name: string
    role: string
    gender: string
    email: string
}

export interface Role {
    value: string;
    viewValue: string;
  }