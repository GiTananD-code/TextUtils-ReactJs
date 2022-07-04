
import React,{useState} from 'react'

export default function About() {

    // Declare a new state variable, which we'll call "count"
    const [myStyle, setStyle] = useState({
        color:'black',
        backgroundColor: 'white',
        border: '2px solid black'
    })
    const [btnText, setBtnText] = useState("Enable dark mode")
    
    const toggleStyle=()=>{
        if(myStyle.color === 'black'){
            setStyle({
                color:'white',
                backgroundColor: 'black',
                border: '2px solid red'
            })
            setBtnText("Enable light mode")
        }
        else{
            setStyle({
                    color:'black',
                    backgroundColor: 'white',
                    border: '2px solid black'
                })
            setBtnText("Enable dark mode")
        }
    }

  return (
    <>
   <div className="container my-3">
   <h2>About Us</h2>
    <dl className=" my-3" style={myStyle}>
    
    <dt className="col-sm-3 my-3">Description lists</dt>
    <dd className="col-sm-9">A description list is perfect for defining terms.</dd>
  
    <dt className="col-sm-3">Term</dt>
    <dd className="col-sm-9">
      <p>Definition for the term.</p>
      <p>And some more placeholder definition text.</p>
    </dd>
  
    <dt className="col-sm-3">Another term</dt>
    <dd className="col-sm-9">This definition is short, so no extra paragraphs or anything.</dd>
  
    <dt className="col-sm-3 text-truncate">Truncated term is truncated</dt>
    <dd className="col-sm-9">This can be useful when space is tight. Adds an ellipsis at the end.</dd>
  
    <dt className="col-sm-3">Nesting</dt>
    <dd className="col-sm-9">
      <dl className="row">
        <dt className="col-sm-4">Nested definition list</dt>
        <dd className="col-sm-8">I heard you like definition lists. Let me put a definition list inside your definition list.</dd>
      </dl>
    </dd>  
  </dl>
  <button className="btn btn-secondary" onClick={toggleStyle}>{btnText}</button>
  </div>
  </>
  )
}
