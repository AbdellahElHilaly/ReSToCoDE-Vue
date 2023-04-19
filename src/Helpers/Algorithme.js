
export default class Algorithme {

    static search(text, key) {
        
        const vowels = ["a", "e", "i", "o", "u", "y"];

        // if text or key is number  convert to string
        text = text.toString();
        key = key.toString();

        let  textWithoutVowels = text.toLowerCase().split("").filter(char => !vowels.includes(char)).join("");
        let keyWithoutVowels = key.toLowerCase().split("").filter(char => !vowels.includes(char)).join("");
        // remove spaces
        textWithoutVowels = textWithoutVowels.split(" ").join("");
        keyWithoutVowels = keyWithoutVowels.split(" ").join("");

        // remove duplicate characters and stay just one of each
        // textWithoutVowels = textWithoutVowels.split("").filter((char, index, self) => self.indexOf(char) === index).join("");
        // keyWithoutVowels = keyWithoutVowels.split("").filter((char, index, self) => self.indexOf(char) === index).join("");



        // if(keyWithoutVowels[0] !== textWithoutVowels[0]) return false;

        // chek if text have one of the key characters or more with the same order 

        let keyIndex = 0;
        let textIndex = 0;
        let keyLength = keyWithoutVowels.length;
        let textLength = textWithoutVowels.length;

        // check if text  have on of all  char of key with order 
        while(keyIndex < keyLength && textIndex < textLength) {
            if(keyWithoutVowels[keyIndex] === textWithoutVowels[textIndex]) keyIndex++;
            textIndex++;
        }

        return keyIndex === keyLength;



    }


}


