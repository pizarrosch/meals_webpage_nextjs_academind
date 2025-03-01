'use client'

import s from './image-picker.module.css';
import {useRef} from "react";

export default function ImagePicker({label, name}) {
  const imageInput = useRef();
  function handlePickClick() {
    imageInput.current.click();
  }
  
  return (
    <div className={s.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={s.controls}>
        <input className={s.input} type='file' id={name} name={name} accept='image/phg, image/jpeg' ref={imageInput}/>
        <button className={s.button} type='button' onClick={handlePickClick}>Pick an image</button>
      </div>
    </div>
  )
}