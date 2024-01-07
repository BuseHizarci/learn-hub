import { EncryptStorage } from "encrypt-storage";

const key = process.env.REACT_APP_STORAGE_ENCRYPTEION_KEY;
const EncryptStorageInstance = new EncryptStorage(key);


export const setLocalStorage= (key , value )=>{
    EncryptStorageInstance.setItem(key, value)
}
export const getLocalStorage = (key) =>{
    return EncryptStorageInstance.getItem(key)
}


