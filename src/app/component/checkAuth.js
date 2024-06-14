"use client"
import { useState } from "react"
import { useRouter } from 'next/navigation'

const CheckAuth=()=>{

    const router=useRouter()

    const [isAuthenticated,setisAuthenticated]=useState(false)

  return(
    <>
        {
            isAuthenticated?(
                <></>
            ):(
                router.push('/login')
            )
        }
    </>
  )
}

export default CheckAuth