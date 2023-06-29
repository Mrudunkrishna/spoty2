import React, { useEffect, useState } from 'react'
import styled from "styled-components"

const Container=styled.div`
width:500px;
 height:500px;
 background-color:yellow;


 .btn{width:50px;
 height:50px;
 background-color:red;}
 `;

export const Home = () => {

  const [first, setValue] = useState(0)
useEffect(()=>{
  console.log(first);
},[first])




  return (
    <Container>
      <h1>hai</h1>
     
      <div className='butn'>
      <input type='text' onChange={(e)=>console.log(e.target.value)}/>
        <button onClick={()=>console.log("first",first)} className='btn' type='button'>button</button>
        <button onClick={()=>setValue(first+1)}>Change</button>
        <div>Count:{first}</div>
    
      </div>
      </Container>
   
  )
}
export default Home