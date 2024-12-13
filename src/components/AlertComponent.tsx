'use client';
import React, { useEffect, useState } from 'react'
import { useContexts } from './context';

const AlertComponent = () => {
    const [Completed, setCompleted] = useState(true);
    const { popUpMessage } = useContexts();

    useEffect(() => {
        if (popUpMessage !== '') {


            setCompleted(false);
            const timer = setTimeout(() => {
                setCompleted(true);
            }, 4000);
            return () => clearTimeout(timer);
        }
    }, [popUpMessage])
    return (
        <div className={`absolute rounded-md overflow-hidden bottom-7 ${Completed ? 'translate-y-2 opacity-0 ' : '-translate-y-8 opcacity-100'} transition-all duration-[1000ms]  min-w-[200px] flex flex-col items-center p-4  max-w-[300px] md:max-w-[400px] h-16  bg-slate-800`}>
            <h1 className='line-clamp-1 font-bold text-stone-300 pointer-events-none'>{popUpMessage}</h1>
            <span className={`absolute bg-red-700 bottom-0 left-0 transition-all delay-1000 duration-[2000ms] ${Completed ? 'w-0' : 'w-full'} h-1 `}></span>
        </div>
    )
}

export default AlertComponent
