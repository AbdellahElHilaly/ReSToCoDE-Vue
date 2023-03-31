import { RESTOCODE_URL , AUTH_TOKEN } from '@/Api/Config/config.js';

export class Consumer {
    constructor(path) {
        this.path = path;
        this.url = `${RESTOCODE_URL}/${path}`;
        this.token = localStorage.getItem(AUTH_TOKEN);
    }

    async get() {
        const response = await fetch(this.url, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${this.token}`,
            'Accept': 'application/json',
        }
        });

        if (response.status === 401) {
            window.location.href = '/login';
        }

        return response.json();

    }

    async storeGame(data) {
        const response = await fetch(this.url, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${this.token}`,
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify(data),
        });
    
        if (response.status === 401) {
            window.location.href = '/login';
        }

        return response.json();
        
    }

}
