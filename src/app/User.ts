import { stringify } from 'querystring'

export class User {
    constructor(
      public username:string,
      public password:string,
      public email:string,
      public country:string,
      public gender:string

    ){}

}