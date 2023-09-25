"use client"
import { openDrawer } from "../../redux/drawerSlice"
import {  Badge, Button, Input } from "antd"
import { useRouter } from "next/navigation"
import {BsBasket} from 'react-icons/bs'

import { useDispatch , useSelector } from "react-redux"
import DarkModeButton from "../DarkModeButton/DarkModeButton"
import { useEffect, useState } from "react"
const Header = () => {
    const router= useRouter()
    const [name,setName]=useState("")
    const dispatch = useDispatch()
    const count = useSelector(state=>state.basket)
    useEffect(()=>{
   router.push(`/?search=${name}`)
    },[name])
  return (
    <div className={`flex fixed z-50 top-0 w-full justify-between items-center h-12 bg-purple-400  px-10 `}>
        <div className="text-white font-bold text-2xl">Codio</div>
        <Input value={name}  onChange={(e)=>{setName(e.target.value)}} placeholder="Ürün Ara" className="w-1/2 "/>
        <div className="flex gap-x-5">
        <DarkModeButton/>
        <Badge count={count?.length}>
        <BsBasket size={25} className="cursor-pointer" onClick={()=>{dispatch(openDrawer())}}/>
        </Badge>
        </div>
      
        
    </div>
  )
}

export default Header