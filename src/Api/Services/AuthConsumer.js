import { RESTOCODE_URL  , AUTH_TOKEN} from '@/Api/Config/config.js';

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

});


*/



export default class AuthConsumer {


    constructor() {
        this.url = `${RESTOCODE_URL}/auth`;
        this.token = localStorage.getItem(AUTH_TOKEN);
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

    




}