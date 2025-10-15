import React, { useEffect, useState } from 'react';
import './BackToTop.css';

export default function BackToTop(){
  const [visible, setVisible] = useState(false);
  useEffect(()=>{
    const onScroll = ()=> setVisible(window.scrollY > 300);
    window.addEventListener('scroll', onScroll);
    return ()=> window.removeEventListener('scroll', onScroll);
  },[]);
  return visible ? (
    <button className="back-to-top" onClick={()=>window.scrollTo({top:0,behavior:'smooth'})} aria-label="Вверх">↑</button>
  ) : null;
}
