import { useEffect, useState } from 'react'

const prefix="codepen"
function useLocalStorage(key,initialvalue) {
    const storagekey=prefix+key
    const [value,setvalue]=useState(()=>{
        const jsonValue=localStorage.getItem(storagekey)
        if(jsonValue)
        {
            return JSON.parse(jsonValue)
        }
        else{
            return initialvalue
        }
    })
    useEffect(()=>{
        localStorage.setItem(storagekey,JSON.stringify(value))
    },[storagekey,value])
  return [value,setvalue]
}

export default useLocalStorage