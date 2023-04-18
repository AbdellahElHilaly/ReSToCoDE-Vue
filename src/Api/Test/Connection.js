import { RESTOCODE_URL} from '@/Api/Config/config.js';
import { useAppSpinnerStore } from '@/store/appSpinnerStore.js'
import router from '@/router';


export default class Connection {

    static async test() {

        try {
            // useAppSpinnerStore().show("server");
            const response = await fetch(`${RESTOCODE_URL}/test`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                }
            });

            const responseData = await response.json();
            // console.log(responseData);
            return responseData;
    
        } catch (error) {
            window.location.href = '/500';
            console.error(error);
        }

    }    

}
