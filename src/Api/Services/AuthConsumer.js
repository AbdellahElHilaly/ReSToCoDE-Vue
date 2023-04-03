import { RESTOCODE_URL  , RESTOCODE_AUTH_URL , AUTH_TOKEN} from '@/Api/Config/config.js';

/*

Route::group(['prefix' => 'auth'], function () {
    Route::post('login', [AuthController::class, 'login']);
    Route::post('register', [AuthController::class, 'register']);
    Route::post('edite', [AuthController::class, 'editProfile']);
    Route::post('logout', [AuthController::class, 'logout']);
    Route::get('refresh', [AuthController::class, 'refresh']);
    Route::get('profile', [AuthController::class, 'getProfile']);
    Route::get('delete', [AuthController::class, 'deleteProfile']);
    Route::get('activate', [AuthController::class, 'activateAccount']);
    Route::post('forgotPassword', [AuthController::class, 'forgotPassword']);
    Route::get('ressetpassword', [AuthController::class, 'ressetPassword']);
    Route::post('resendcode', [AuthController::class, 'resendActivationMail']);

});


*/



export default class AuthConsumer {


    constructor() {
        this.url = `${RESTOCODE_URL}/auth`;
        this.token = localStorage.getItem(AUTH_TOKEN);
    }


    async signUp(data) {
        const response = await fetch(`${this.url}/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify(data),
        });

        return response.json();
    }

    async activateAccount(data) {
        const response = await fetch(`${this.url}/activate?left=${data.left}&right=${data.right}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
        });
        return response.json();
        
    }

    async login(data) {
        const response = await fetch(`${this.url}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify(data),
        });

        return response.json();
    }


    async resendActivationMail(data) {
        const response = await fetch(`${this.url}/resendcode`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify(data),
        });

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
        return response.json();
    }

    async forgotPassword(data) {
        const response = await fetch(`${this.url}/forgotPassword`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify(data),
        });

        return response.json();
    }

    async ressetPassword(data) {
        
        const response = await fetch(`${this.url}/ressetpassword?left=${data.left}&right=${data.right}&password=${data.password}&password_confirmation=${data.password_confirmation}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
        });

        return response.json();
    }
    
    




}