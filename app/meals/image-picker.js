'use client'

import s from './image-picker.module.css';
import {useRef, useState} from "react";
import Image from 'next/image';

export default function ImagePicker({label, name}) {
  
  const [pickedImage, setPickedImage] = useState(null);
  
  function handleImageChange(e) {
    const file = e.target.files[0];
    
    if(!file) {
      setPickedImage(null);
    }
    
    const fileReader = new FileReader();
    
    fileReader.onload = () => {
      setPickedImage(fileReader.result);
    }
    
    fileReader.readAsDataURL(file);
  }
  
  const imageInput = useRef();
  
  function handlePickClick() {
    imageInput.current.click();
  }
  
  return (
    <div className={s.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={s.controls}>
        <div className={s.preview}>
          {!pickedImage && <p>No image picked yet</p>}
          {pickedImage && <Image src={pickedImage} alt='My image' fill />}
        </div>
        <input className={s.input} type='file' id={name} name={name} accept='image/phg, image/jpeg' ref={imageInput}
               onChange={handleImageChange} required />
        <button className={s.button} type='button' onClick={handlePickClick}>Pick an image</button>
      </div>
    </div>
  )
}