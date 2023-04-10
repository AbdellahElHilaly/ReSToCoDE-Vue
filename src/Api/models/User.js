export default class User {

    constructor() {
        this.id = 0;
        this.name = '';
        this.email = '';
        this.current_password = '';
        this.password = '';
        this.password_confirmation = '';
        this.rule_id = 1;
        this.left = 0;
        this.right = 0;
    }
}


/*
defualt export class User 

=> import User from './User.js'

withou default export class User

=> import {User} from './User.js'
*/