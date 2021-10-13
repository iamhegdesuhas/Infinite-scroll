import { useEffect, useState } from "react"
import { getContacts } from "../Data/DataFetching"

export const useGetContacts=(pageNumber:number)=>{

    const [contacts,setContacts] =useState<any[]>([])
    const [loading,setLoading] =useState<boolean>(false)
    const [error,setError] =useState<boolean>(false)
    const [hasMore,setHasMore] =useState<boolean>(true)

    async function fetchContacts(pageNumber:number){
        setLoading(true)
        try {
            const response:any=await getContacts(pageNumber)
            const{hasMore,contactDetails}=response
            setHasMore(hasMore)
            setContacts(prevContacts=>[...prevContacts,...contactDetails])
            setLoading(false)
        } catch (error) {
            setError(true)
            setLoading(false)
        }
    }
    useEffect(()=>{
        fetchContacts(pageNumber)
    },[pageNumber])

    return {contacts,loading,error,hasMore}
}