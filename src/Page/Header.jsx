
import "./Css/Headercss.css";

import { SlShare } from 'react-icons/sl'; 
import {SlOptions} from 'react-icons/sl';
import {SlClose} from 'react-icons/sl';


import React, { useState, useEffect } from 'react';
import { Menu, Button } from 'antd';
import styled from 'styled-components';
import { BrowserView, MobileView } from 'react-device-detect';
import { MenuOutlined, MenuFoldOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

import { BiInfoCircle } from "react-icons/bi";
import { BiHomeHeart } from "react-icons/bi";
import { BiDoorOpen } from "react-icons/bi";
import { BiBookmarkHeart } from "react-icons/bi";
import { BiConversation } from "react-icons/bi";


const Header = () => {

  


    return (
        <div id ="headerbig"  >

        <div id = "titlename"> <span className ="e">너와나의 </span> 
       <span className ="highlight">  특별한동행 </span>  </div> 
            

       <div id = "icon-hd"> 

      <div className="modalbig">
             
      <div className="modalpa2" > 
          <input type="checkbox" id="check_box" />
    <label for="check_box">
      <span></span>
      <span></span>
      <span></span>
    </label>
    <div id="side_menu">
      <ul>
        <li><div className="grid-it1">
    <div className="down1">
        <div id ="menu1" className='link-2'>    
            <Link to='/' > <BiHomeHeart  size="35" color="#89CFD3"  />  </Link> </div> 
        <div id ="menu2"> <p>HOME</p></div> 
    </div>
</div></li>


        <li><div className="grid-it2">
    <div className="down1">
        <div id ="menu1" className='link-2'>
        <Link to="/Info" >   <BiInfoCircle  size="35" color="#89CFD3"  /> </Link> </div>
        <div id ="menu2">
        <p>행사안내</p> </div>
        </div> 
    </div></li>


        <li><div className="grid-it3">
    <div className="down1">
        <div id ="menu1" className='link-2'>
        <Link to="/Course" > <BiDoorOpen  size="35" color="#89CFD3"  /></Link></div> 
        <div id ="menu2">
        <p>코스안내</p> </div>
        </div> 
    </div></li>

        <li><div className="grid-it4">
    <div className="down1">
        <div id ="menu1" className='link-2'>
        <Link to="/Booking" > <BiBookmarkHeart  size="35" color="#89CFD3"  />   </Link></div> 
        <div id ="menu2">
        <p>예약하기</p> </div>
        </div> 
</div></li>

        <li><div className="grid-it5">
    <div className="down1">
        <div id ="menu1" className='link-2'>
        <Link to="/Review" > <BiConversation  size="35" color="#89CFD3"  /> </Link></div> 
        <div id ="menu2">
        <p>후기작성</p> </div>
        </div> 
</div> </li>




      </ul>
    </div>

                </div>
       </div>
                    
      </div>
      </div>

      );
}


export default Header;