function encrypt(txt){
    /*
     * Encrypts the character according to the pattern.
     * @param {txt} string.
     * @returns {encrypted_txt} string.
    */

    let encrypted_txt = "";
    let encrypted_char = "";
    let current_char = "";
    
    for(let i = 0; i < txt.length; i++){
        current_char = txt[i];
        if(current_char == "a" || current_char == "e" || current_char == "i" || current_char == "o" || current_char == "u"){
            switch(current_char){ //Encrypt the current character according to the pattern here defined.
                case "a":
                    encrypted_char = "enter";
                    break;
                case "e":
                    encrypted_char = "imes";
                    break;
                case "i":
                    encrypted_char = "ai";
                    break;
                case "o":
                    encrypted_char = "ober";
                    break;
                case "u":
                    encrypted_char = "ufat";
                    break;
            }
            encrypted_txt = encrypted_txt + encrypted_char; //Adds the encrypted vowel to the encrypted text.
        }else{
            encrypted_txt = encrypted_txt + current_char; //It is not a vowel. Adds the character to the encrypted text.
        }
    }
    return encrypted_txt;
}

function decrypt(txt){
    /*
     * Decrypts the encrypted text based on the defined pattern.
     * @param {txt} string - The encrypted string to be decrypted.
     * @returns {decrypt_txt} string - The decrypted string.
    */

    let decrypt_txt = "";
    
    decrypt_txt = txt.replace(/enter/mg, "a");
    decrypt_txt = decrypt_txt.replace(/ai/mg, "e");
    decrypt_txt = decrypt_txt.replace(/imes/mg, "i");
    decrypt_txt = decrypt_txt.replace(/ober/mg, "o");
    decrypt_txt = decrypt_txt.replace(/ufat/mg, "u");

    return decrypt_txt;
}


let txt = "hola mundo";
console.log(encrypt(txt));
let txt_2 = "hoberlenter mufatndober";
console.log(decrypt(txt_2));