import { useState } from 'react';

const Content = () => {
  const [name , setName];
  const handlenames = () => {
    const names = ["Eren", " Mikasa", "kenny"];
    const int = Math.floor(Math.random() * 3);
    return names[int];
  };
  const handelclick = ()=>{
    console.log("you clicked it");
    
  }
  const handelclick2 = (name)=>{
    console.log(`${name} has clicked`);
    
  }
  const handelclick3 = (e)=>{
    console.log(e.target.innerText);
    
  }
  return (
   <main>
    <p onDoubleClick={handelclick}>
      Hello {handlenames()}!
    </p>
    <button onClick={handelclick}> Click it</button>
    <button onClick={() => handelclick2("jagrit")}> Click it </button>
    <button onClick={(e) => handelclick3(e)}> Click it </button>
   </main>
  );
};

export default Content;
