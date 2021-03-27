import React, { useState } from "react";
import "./PriceBox.css";
import star from "./assets/star.svg";

function PriceBox({
  title,
  saving,
  savingPercent,
  mainPrice,
  discountPrice,
  type,
  result
}) {
  const priceboxBorder = 'none'
  const priceboxBackground = '#21272c'
  const saveColor = '#465d68'
  const[border , setBorder]= useState(priceboxBorder)
  const[background, setBackground]= useState(priceboxBackground)
  const[savingColor, setSavingColor]= useState(saveColor)
  const handleChange = () =>{
    if(border===priceboxBorder){
      setBorder('2px solid #FFFFFF')
      setBackground('#374B5B')
      setSavingColor('#28333D')
    }else{
      setBorder(priceboxBorder)
      setBackground(priceboxBackground)
      setSavingColor(saveColor)
    }
  }
  return (
    <div className="priceBox" onClick={handleChange} style={{border:border,background:background}}>
      <div className="priceBox__desc">
        <button className='priceBox__descTag'><span><img src={star} alt='star'/></span> {type} <span><img src={star} alt='star'/></span></button>
        <h6 className="priceBox__descHeading">{title}</h6>
        <p className="priceBox__descSaving" style={{color:savingColor}}>{saving}</p>
        <p className="priceBox__descSavingPercent">{savingPercent} <span>{result}</span></p>
      </div>
      <div className="priceBox__prices">
        <h4 className="priceBox__priceDiscount">{discountPrice}</h4>
        <h4 className="priceBox__priceMain">{mainPrice}</h4>
      </div>
    </div>
  );
}

export default PriceBox;
