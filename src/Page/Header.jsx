
import "./Css/Headercss.css";

import React, {  useEffect, useRef, useState  } from 'react';
import { Link, NavLink } from 'react-router-dom';

import { BiInfoCircle } from "react-icons/bi";
import { BiHomeHeart } from "react-icons/bi";
import { BiDoorOpen } from "react-icons/bi";
import { BiBookmarkHeart } from "react-icons/bi";
import { BiConversation } from "react-icons/bi";


const Header = () => { 

    const activeStyle = {
        color:"black"
      }


    return ( <div className="headerbig">
       

<div className="h-title"> 
 <span className ="e-highlight"> 너와나의 </span>  
<span className ="highlight">  특별한동행 </span>
</div>  

<div className="h-menu">
  
<div className="grid-it1">
    <div className="down1">
        <div id ="menu1" className='link-2'>    
            <Link to='/' > <BiHomeHeart  size="35" color="#89CFD3"  />  </Link> </div> 
        <div id ="menu2"> <p>HOME</p></div> 
    </div>
</div>

<div className="grid-it2">
    <div className="down1">
        <div id ="menu1" className='link-2'>
        <Link to="/Info" >   <BiInfoCircle  size="35" color="#89CFD3"  /> </Link> </div>
        <div id ="menu2">
        <p>행사안내</p> </div>
        </div> 
    </div>

<div className="grid-it3">
    <div className="down1">
        <div id ="menu1" className='link-2'>
        <Link to="/Course" > <BiDoorOpen  size="35" color="#89CFD3"  /></Link></div> 
        <div id ="menu2">
        <p>코스안내</p> </div>
        </div> 
    </div>

<div className="grid-it4">
    <div className="down1">
        <div id ="menu1" className='link-2'>
        <Link to="/Booking" > <BiBookmarkHeart  size="35" color="#89CFD3"  />   </Link></div> 
        <div id ="menu2">
        <p>예약하기</p> </div>
        </div> 
</div>

<div className="grid-it5">
    <div className="down1">
        <div id ="menu1" className='link-2'>
        <Link to="/Review" > <BiConversation  size="35" color="#89CFD3"  /> </Link></div> 
        <div id ="menu2">
        <p>후기작성</p> </div>
        </div> 
</div>

</div>





<div className="h-sidebar">

<input type="checkbox" id="check_box" />
    <label for="check_box">
      <span></span>
      <span></span>
      <span></span>
    </label>
    <div id="side_menu">


<div className="sideh-menu">
<div className="sideh-menu-1">
<NavLink exact to='/' style={{ textDecoration: 'none'}} activeStyle={activeStyle}> Home </NavLink>

<NavLink to="/Info"  activeStyle={activeStyle} ><div className="sideh-text1">   <span> Introduce </span> <br></br> </div></NavLink>
<NavLink to="/Course" style={{ textDecoration: 'none'}} activeStyle={activeStyle} ><div className="sideh-text2" >  <span> Caurse </span> <br></br> </div></NavLink>
<NavLink to="/Booking" style={{ textDecoration: 'none'}} activeStyle={activeStyle} ><div className="sideh-text3" > <span> Booking </span> <br></br></div></NavLink>
<NavLink to="/Review"style={{ textDecoration: 'none'}} activeStyle={activeStyle}  ><div className="sideh-text4" >  <span> Reviews </span> <br></br></div></NavLink>



    </div>

</div>
</div>




      </div>      </div>      

      );
}


export default Header;