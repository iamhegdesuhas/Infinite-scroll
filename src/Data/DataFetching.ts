import { contacts } from "./contacts"

export const PAGE_SIZE= 25
export const getContacts=(pageNumber:number)=>{
    return new Promise((resolve,reject)=>{
        const lastCount=(pageNumber-1)*PAGE_SIZE||0
        const numberOfContacts=pageNumber*PAGE_SIZE||PAGE_SIZE
        const contactsArray= contacts.results.slice(lastCount,numberOfContacts)
        setTimeout(() => {
            resolve({contactDetails:contactsArray,hasMore:numberOfContacts<contacts.info.results})
        }, 1000);
    })
}