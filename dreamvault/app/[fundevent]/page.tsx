'use client'
 
import { useRouter } from 'next/navigation'
import { useSearchParams } from 'next/navigation'
export default function Page( ){
    const router = useRouter()
    const search=useSearchParams().get('id')
    return(
        <>
        <h1>More Detail Page</h1>
        <h1>ID : {search}</h1>
        </>
    )
}