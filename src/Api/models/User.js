export default class User {

    constructor() {
        this.name = '';
        this.email = '';
        this.password = '';
        this.password_confirmation = '';
        this.rule_id = 1;
    }
}


/*
defualt export class User 

=> import User from './User.js'

withou default export class User

=> import {User} from './User.js'
*/