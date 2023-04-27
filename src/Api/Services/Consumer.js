import { RESTOCODE_URL , AUTH_TOKEN } from '@/Api/Config/config.js';
import  StoreManager from '@/Helpers/StoreManager.js';
import router from '@/router';
import { useAppUserStore } from '@/store/appUserStore.js'
import Helper from '@/Helpers/Helper.js';


export default class Consumer {
    constructor(endPoint) {
        this.endPoint = endPoint;
        this.url = `${RESTOCODE_URL}/${endPoint}`;
        this.token = localStorage.getItem(AUTH_TOKEN);

        this.storeManager = new StoreManager(this.endPoint);
    }

    async index() {
        if(!this.storeManager.isEmpty())  return this.storeManager.getAll();
        const response = await fetch(this.url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${this.token}`,
            }
        });
        if (response.status === 401) {
            localStorage.removeItem(AUTH_TOKEN);
            router.push('/login');
        }
        let data = await response.json();
        data = data.Body;
        this.storeManager.setAll(data);
        return data;
    }

    async store(formeData) {
        formeData.append("_method", "POST");
        const response = await fetch(this.url, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${this.token}`,
                'Accept': 'application/json',
            },
            body: formeData,
        });
    
        const result = await response.json();
        console.log(result);
        let msg = {
                'message' : result.message,
                'status' : false,
                'data' : null,
        }
        if (response.status === 401) {
            window.location.href = '/login';
        }
        else if (response.status === 200) {
            if(result.Header.status) {
                const newData = result.Body;
                this.storeManager.set(newData);
                msg.status = true;
                msg.data = newData;
            }
        }
        return msg;
    }

    async show(id) {
        const response = await fetch(this.url+'/'+id, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${this.token}`,
            }
        });
        if (response.status === 401) {
            localStorage.removeItem(AUTH_TOKEN);
            router.push('/login');
        }
        let data = await response.json();
        data = data.Body
        if(id === 'today'){
            this.storeManager.setAll(data); 
            return data;
        }

        this.storeManager.set(data[0])
        return data;

    }



    async update(id, formeData) {
            formeData.append("_method", "PUT");
            const response = await fetch(`${this.url}/${id}`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${this.token}`,
                    'Accept': 'application/json',
                },
                body: formeData,
            });  

            const result = await response.json();
            let msg = {
                    'message' : result.message,
                    'status' : false,
                    'data' : null,
            }
            if (response.status === 401) {
                window.location.href = '/login';
            }
            else if (response.status === 200) {
                if(result.Header.status) {
                    this.storeManager.set(result.Body);
                    msg.status = true;
                    msg.data = result.Body;
                }
            }
            return msg;

    }

    async destroy(id) {

        const response = await fetch(`${this.url}/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${this.token}`,
            }
        });

        let result = await response.json();
        let msg = {
                'message' : result.message,
                'status' : false,
        }

        if (response.status === 401) {
            window.location.href = '/login';
        }
        else if (response.status === 200) {
            if(result.Header.status) {
                const newData = await this.index();
                this.storeManager.clear
                this.storeManager.setAll(newData);
                msg.status = true;
            }
        }
        return msg;
    }


}
