
export default class Algorithme {
    static search(text, key) {
        const vowels = ["a", "e", "i", "o", "u", "y"];
        const alphabet = "bcdfghjklmnpqrstvwxz";

        // check if the key have vowels and alphabet

        if(key.split("").some(char => vowels.includes(char)) && !key.split("").some(char => alphabet.includes(char))) {
            return text.toLowerCase().includes(key.toLowerCase());
        }

        const textWithoutVowels = text.toLowerCase().split("").filter(char => !vowels.includes(char)).join("");
        const keyWithoutVowels = key.toLowerCase().split("").filter(char => !vowels.includes(char)).join("");

        return textWithoutVowels.includes(keyWithoutVowels);
    }
}