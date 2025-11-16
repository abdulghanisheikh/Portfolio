import React, { useEffect, useRef } from 'react'

const CustomCursor=()=>{
    const cursorRef=useRef(null);
    useEffect(()=>{
        let cursor=cursorRef.current;
        function handleMouseMove(e){
            cursor.style.left=e.x+"px";
            cursor.style.top=e.y+"px";
        }
        window.addEventListener("mousemove",handleMouseMove);
        return ()=>window.removeEventListener("mousemove",handleMouseMove);
    },[]);
    return <div id='cursor' ref={cursorRef}></div>
}
export default CustomCursor;