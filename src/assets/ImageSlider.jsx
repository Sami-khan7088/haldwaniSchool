import React, { useEffect, useReducer, useState } from 'react'
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl'
const ImageSlider = () => {
    let [num,setnum]=useState(0);
    let initial="http://sgtbpsbarapura.com/banner_gallery/ban1.jpg"
    const [todo,dispatch]=useReducer(reducer,initial)
    useEffect(()=>{
        dispatch({type:num})
   },[num])

    function reducer(todo,action){
        console.log(todo)
        switch(action.type){
            case 0: return todo="http://sgtbpsbarapura.com/banner_gallery/ban3.jpg";
            case 1: return todo="http://sgtbpsbarapura.com/banner_gallery/ban1.jpg";   
            case 2: return todo="http://sgtbpsbarapura.com/banner_gallery/ban2.jpg"; 
            case 3: return todo="http://sgtbpsbarapura.com/banner_gallery/ban4.jpg";      
        }
    }
  return (
    <div className='MAincontainer2'>
        <div className='imageArea' style={{backgroundImage:`url(${todo})`}}>
        <div className='leftArrow'>
            <SlArrowLeft  onClick={
                ()=>{
                    if(num>0)
                    {setnum(num-1)}
                    else{
                        setnum(3-num)
                    }
            
            }}style={{backgroundColor:"rgb(98,84,243)",borderRadius:"5px",margin:"10px",padding:"10px 5px"}}/>
        </div>
        <div className='rightArrow'>
        <SlArrowRight onClick={()=>{if(num<3){setnum(num+1)}else{setnum(num-3)}}} style={{backgroundColor:"rgb(98,84,243)",borderRadius:"5px",margin:"10px",padding:"10px 5px"}} />
        </div>
        </div>
    </div>
  )
}

export default ImageSlider