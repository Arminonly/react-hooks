import React, { useState, useRef, useEffect } from "react";

export default function UseRefExample() {
  const [value, setValue]= useState('initial')
  const renderCount = useRef(1);
  const inputRef = useRef(null)
  const focus = ()=>inputRef.current.focus()

  const styles = {
    hr: {
      width: "500px",
    },
  };

  useEffect(()=>{
    renderCount.current++
  })
  return (
    <div>
      <h3>Количество рендеров {renderCount.current}</h3>
      <input type='text' ref = {inputRef} onChange={e=>setValue(e.target.value)} value ={value} />
      <button onClick = {focus}>focus</button>
      <hr style={styles.hr} />
    </div>
  );
}
