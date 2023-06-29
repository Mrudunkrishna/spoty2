import React, { useEffect, useState } from 'react'
import spotify from '../assets/Spotify_logo.png';
import img from '../assets/spotify_md.png'
import styled from "styled-components"


const Container=styled.div`
   
    
    margin: -10px;
    padding-right: 30px;
    background-image: url(${img});
    background-repeat: no-repeat;
    background-size: cover;
    height: 100%;
    width: 100%;

    *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  a {
    color: #000;
    text-decoration: none;
  }
  ul {
    list-style: none;
  }
  .new{
    margin: auto;
  }

     .new{
     padding-right: 10px;
    top: 39em;
    background-image: url(${img});
    background-repeat: no-repeat;
    background-size: 100% 62em;
    height: 950px;
    width: 1850px;
    
  } 
 
    .main-nav {
    display: flex;
    background-color: rgba(25, 20, 20, 0.65);
    align-items: center;
    height: 80px;
    padding: 20px 0;
    position: fixed;
    z-index: 3;
    width: 100%;
  }
  
  .main-nav ul {
    display: flex;
  }
  .main-nav ul.nav-options li {
    margin-bottom: 13px;
    margin-left: 50px;
  }

  .main-nav ul.nav-options {
    flex: 1;
    margin-left: 800px;
    font-family: 'lineto-black';
    width: 100px;
    font-size: 15.8px;
    letter-spacing: -0.8px;
    margin-top: 1px;
    font-weight: bold;
  }
  .white-text {
    color: #fff;
    margin-right: 20px;
  }
  .grey-text {
    color: #dcdcdc;
  }

  img.spotify-logo {
    margin-left: 150px;
    width: 8%;
  }
  .line{
  border: 0.5px solid white;
    margin-top: 1.8px;
    height: 16px;
  }
  /* Cards */
  .cards {
    display: grid;
    z-index: 1;
  }
  
  .card2-text-container {
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    align-items: center;
    margin-bottom: 100px;
    height: 35em;
  }
  
  .card2-text {
   
    font-weight: bolder;
    color: #fff;
    letter-spacing: -1.2px;
    font-size: 78px;
    margin-top: auto;
  }
  .card2-text2 {
    color: #fff;
   
    margin-top: 25px;
    font-size: 21px;
  }
  .card-2 
  
  /* Buttons */
  .btn-green {
    position: relative;
    border: none;
    background-color: #1db954;
    width: 215px;
    height: 500px;
    padding: 16px;
    top: 18px;
    right: 114px;
    border-radius: 25px;
  }
  
  .btn-white-text {
    box-sizing: border-box;
    color: #fff;
    font-size: 29px;
    font-family: lineto-pro-book;
    letter-spacing: 2px;
  }
  
  .btn-green-card2 {
    position: relative;
    border: none;
    background-color: #1db954;
    width: 245px;
    height: 50px;
    padding: 16px;
    top: 45px;
    right: 10px;
    border-radius: 25px;
  }
  
  a.green:hover {
    color: #1db954;
  }
  
  .btn-green:hover,
  .btn-green-card2:hover {
    background-color: #21ce61;
    transform: scale(1.06);
  }
  
  .nav-btn {
    position: fixed;
    top: 14px;
    right: 60px;
    z-index: 4;
    display: none;
  }
  
  
  .spotify-logo-sidebar {
    display: none;
  }
 .btn{
    margin-top: 100px;
 } 
 .count{
    margin-left: 50px;
    margin-top: 50px;
    font-size: 28px;
 }
 .count h5{
    color: #000;
 }

 @media (max-width: 768px) {
    // Styles for screens smaller than 768px
   
    .new{
        width: 100%;
        height: 862px;
      }

      img.spotify-logo{
        margin-top: 60px;
        width: 90px;
        margin-left: 10px;
      }

    .main-nav {
      flex-direction: row;
      align-items: flex-start;
      height: auto;
      padding: 10px;
    }
    
    .main-nav ul.nav-options {
      margin: 0;
      flex-direction: column;
      align-items: flex-start;
    }
    
    .nav-btn {
      display: block;
    }
    .line{
      display: none;
    }
  }
  
 `;

export const Spotify = () => {
    const [first, setfirst] = useState(0)
useEffect(()=>{
  console.log(first);
},[first])
    
  return (
   
    <Container>
    <div className='new'>
     <div class="nav-btn">
      <i class="fa fa-bars fa-2x"></i>
      <i class="fa fa-close fa-2x"></i>
    </div>
    <div class="container">
      <nav class="main-nav">
        <img class="spotify-logo" src={spotify} alt=""/>
        <ul class="nav-options">
          <li><a href="#" class="white-text green">Premium</a></li>
          <li><a href="#" class="white-text green">Help</a></li>
          <li><a href="#" class="white-text green">Download</a></li>
          <li><div class="line"></div></li>
          <li><a href="#" class="grey-text green">Sign up</a></li>
          <li><a href="#" class="grey-text green">Log In</a></li>
          <img class="spotify-logo-sidebar display" src={spotify}/>
        </ul>
      </nav>
      <div class="cards">
        <div class="card-2">
          <div class="card2-text-container">
            <h1 class="card2-text">Music for everyone.</h1>
            <h5 class="card2-text2">Millions of songs. No credit card needed.</h5>
            <div className='btn-green-card2 btn-white-text' onClick={()=>{setfirst(first+1)
            console.log("usestate : ",first)}}><h5>UPDATE</h5>
            <div className='count'><h5>Count:{first}</h5></div>
            </div>
          </div>
        </div>
        
     
      </div>
      
    </div>
    </div>
    </Container>
  
  )
}

export default Spotify