import React from "react"
import img from "./Images/first.png"
import './MainImage.css'

export default function MainImage(){
    return(
        <>
        <img className="image" src={img} alt="image"/>
        </>
    )

}