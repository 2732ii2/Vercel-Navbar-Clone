import { useState } from 'react';
import './App.css'

export default function App() {
  var list=["home","about Us ","Career","Event"];
  const [left,setleft]=useState(0);
  const [state,setstate]=useState(0);
  return (
    <div className='main'>
      {
        list.map((e,i)=>{
          return <div key={i}   onClick={()=>setstate(i)} onMouseEnter={(element)=>{
            // alert(e);
            if(i==1){
              setleft(11);
      
            }
            else if(i==0){
                setleft(0);
              }
            else if(i==2){
              setleft(22);
            }
            else if(i==3){
              setleft(33);
            }
            
              
          }} className='samedivs' style={{borderBottom:i==state?"2px solid red":"",padding:i==state?"2px":""}}>{e}</div>
        })
      }
    <div className='abs'>
    <div className='slider'
        style={{marginLeft:`${left}0px`}}
      
      >
    </div>
      
    </div>
    <div style={{marginTop:"100px",marginLeft:"-400px"}}>
      {list[state]}
    
    </div>
      
    </div>
  )
}
