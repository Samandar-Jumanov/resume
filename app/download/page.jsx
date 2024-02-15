"use client"

import detectOs from '@/components/detectOs'
import React , { useEffect , useState} from 'react'
import detectOS from '@/components/detectOs'
const Download = () => {

    const [os , setOs ] = useState("Windows")
     
    useEffect(() => {
      detectOS().then((res ) => setOs(res))
      .catch((err ) => console.log(err))
    }, []);



  return (
    <div>
        All files should be here 
    </div>
  )
}

export default Download