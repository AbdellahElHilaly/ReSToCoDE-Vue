import { RESTOCODE_URL} from '@/Api/Config/config.js';
import { useAppSpinnerStore } from '@/store/appSpinnerStore.js'


export default class Testter {

    static async connection() {

        try {
            useAppSpinnerStore().show("server");
            const response = await fetch(`${RESTOCODE_URL}/test`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                }
            });

            useAppSpinnerStore().hide();
            const responseData = await response.json();
            console.log(responseData);
            return responseData;
    
        } catch (error) {
            console.error(error);
            useRouter().push('/500');
        }

    }    

}