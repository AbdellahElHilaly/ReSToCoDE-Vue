
export default class Helper {

    static saveFormData(object) {
        const formeData = new FormData();
        for (const key in object) {
            formeData.append(key, object[key]);
        }
        return formeData;
    }

    static copyObject(older, newer) {
        for (const key in older) {
            newer[key] = older[key];
        }
    }
    static filterObject(object, keys) {
        const filtered = {};
        Object.keys(object).forEach(key => {
            if (keys.includes(key)) {
                filtered[key] = object[key];
            }
        });
        return filtered;
    }
        
}


