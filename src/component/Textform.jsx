 import React,{useState} from 'react'

 const Textform = (props) => {
  const  Handleclick=( )=>{
    console.log('clicked')
    let newText= text.toUpperCase();
    setText(newText) 
}
  const  Handleme=( )=>{
    console.log('clicked')
    
    let newText= text.toLowerCase();
    setText(newText) 
}
const  Change=(event)=>{
    console.log('clicked on change')
    setText(event.target.value)
}
 
  
    const [text, setText]= useState('put in word');
    
   return (<>
     <div >
       <div className="mb-3 " >
   <h1>{props.heading}</h1>
  <textarea  onChange={Change} value={text} className="form-control" id="exampleFormControlTextarea1" rows="8"></textarea>
</div >
<div className="set">
<button  onClick={Handleclick} type="button" class="btn btn-primary">To Upper Case</button>
<button  onClick={Handleme} type="button" class="btn btn-primary">To lower Case</button> 
</div>
     </div>

 <div className="container not">
<h2>Your text summery</h2>
 <p>You have {text.length} characters and{text.split(" ").length-1}  words</p>
 <p>
  You can  read this in {0.8*text.length} seconds
 </p>
</div>
</>
   )
 }
 
 export default Textform
 