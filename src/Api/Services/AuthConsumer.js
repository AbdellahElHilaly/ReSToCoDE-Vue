import { RESTOCODE_URL  , RESTOCODE_AUTH_URL , AUTH_TOKEN} from '@/Api/Config/config.js';
import { useAppAlertStore } from '@/store/appAlerStore.js'
import { useAppUserStore } from '@/store/appUserStore.js'
import User from '@/Api/models/User.js'
import router from '@/router';
import Helper from '@/Helpers/Helper.js';



export default class AuthConsumer {


    constructor() {
        this.url = `${RESTOCODE_URL}/auth`;
        this.token = localStorage.getItem(AUTH_TOKEN);
    }

    async signUp(userData) {
        
        const response = await fetch(`${this.url}/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${this.token}`,
            },
            body: JSON.stringify(userData),
        });

        let data = await response.json();
        if (response.status === 200) {
            useAppAlertStore().setCode(data.Header.code)
            useAppUserStore().setUser(data.Body);
            if(data.Header.status) useAppAlertStore().setLink('/activate')
        } else {
            useAppAlertStore().setCode(response.status);
        }

        return data;
    }

    async activateAccount(userData) {
        const response = await fetch(`${this.url}/activate?left=${userData.left}&right=${userData.right}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${this.token}`,
            },
        });
        let data = await response.json();
        if (response.status === 200){
            useAppAlertStore().setCode(data.Header.code)
            if(data.Header.code ===100 || data.Header.status){
                
                    setTimeout(() => {
                        router.push('/login');
                    }, 800);
            }

        } else {
            useAppAlertStore().setCode(response.status);
        }


        return data;
        
    }

    async trustDevice(userData) {
        const response = await fetch(`${this.url}/trust?left=${userData.left}&right=${userData.right}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
        });
        let data = await response.json();
        if (response.status === 200) {

            useAppAlertStore().setCode(data.Header.code)
            console.log(data.Header.code)


            if(data.Header.status){ 
                setTimeout(() => {
                    router.push('/login');
                }, 1000);
            } 
            
        } else {
            useAppAlertStore().setCode(response.status);
        }

        return data;
    }

    async login(data) {
        const response = await fetch(`${this.url}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${this.token}`,
            },
            body: JSON.stringify(data),
        });
        
        data = await response.json();
        if (response.status === 200) {
            useAppAlertStore().setCode(data.Header.code)
            if(data.Header.status){ 
                localStorage.setItem(AUTH_TOKEN, data.Body.token);
                useAppUserStore().setUser(data.Body);
                setTimeout(() => {
                    router.push('/');
                }, 1000);
            } 
            else if(data.Header.code === 400) {
                useAppUserStore().setUser(data.Body);
                useAppAlertStore().setLink('/activate')
            }
            else if(data.Header.code === 403){
                    useAppAlertStore().setLink('/verify')
                    useAppUserStore().setUser(data.Body);
            }

            
        } else {
            useAppAlertStore().setCode(response.status);
        }

        return data;

    }


    async resendActivationMail(data) {
        const response = await fetch(`${this.url}/resendcode`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${this.token}`,
            },
            body: JSON.stringify(data),
        });
        useAppAlertStore().setCode(response.status);

        return response.json();
    }

    async getProfile() {
        const response = await fetch(`${this.url}/profile`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${this.token}`,
            },
        });

        if (response.status === 401) {
            localStorage.removeItem(AUTH_TOKEN);
            router.push('/login');
        }
        useAppAlertStore().setCode(response.status);

        return response.json();
    }

    async forgotPassword(dataUser) {
        const response = await fetch(`${this.url}/forgotPassword`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${this.token}`,
            },
            body: JSON.stringify(dataUser),
        });

        useAppAlertStore().setCode(response.status);
        let data = await response.json();
        if (response.status === 200){
            useAppAlertStore().setCode(data.Header.code)

            if(data.Header.status){
                useAppUserStore().setUser(data.Body);
            }
        } 
        return data;

    }

    async ressetPassword(userData) {
        const response = await fetch(`${this.url}/ressetpassword?left=${userData.left}&right=${userData.right}&password=${userData.password}&password_confirmation=${userData.password_confirmation}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${this.token}`,
            },
        });
        useAppAlertStore().setCode(response.status);
        let data = await response.json();
        if (response.status === 200){
            useAppAlertStore().setCode(data.Header.code)

            if(data.Header.status){
                useAppUserStore().setUser(data.Body);
                setTimeout(() => {
                    router.push('/login');
                }, 1000);
            }
        } 
        return data;
    }

    async editProfile(userData) {
        const response = await fetch(`${this.url}/edite`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${this.token}`,
            },
            body: JSON.stringify(userData),
        });
        
        useAppAlertStore().setCode(response.status);
        let data = await response.json();
        if (response.status === 200){
            useAppAlertStore().setCode(data.Header.code)

            if(data.Header.status){
                useAppUserStore().setUser(data.Body);
            }
        } 
        return data;
    }


    async logOut() {
        const response = await fetch(`${this.url}/logout`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${this.token}`,
            },
        });
        useAppAlertStore().setCode(response.status);
        let data = await response.json();
        if (response.status === 200){
            useAppAlertStore().setCode(data.Header.code)

            if(data.Header.status){
                useAppUserStore().setUser(new User());
                localStorage.removeItem(AUTH_TOKEN);
            }
        } 

        return data;

    }

    async getRole() {
        if(useAppUserStore().getUser.role) return useAppUserStore().user.role;
        const response = await fetch(`${this.url}/profile`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${this.token}`,
            },
        });

        let data = await response.json();
        let role = null;
        if (response.status === 200 && data.Header.status)  role = data.Body.role;
        else localStorage.removeItem(AUTH_TOKEN);
        return role;
    }


    
    




}