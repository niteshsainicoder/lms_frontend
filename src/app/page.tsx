'use client';
import { useEffect } from "react";

export default function Home() {
  useEffect(()=>{
    window.location.href = '/login'
  },[])
  return (
    <div className=" w-screen h-screen bg-slate-200  flex items-center justify-center">
      This is the assignment From <span> Accadmically </span>
    </div>
    
  );
}
