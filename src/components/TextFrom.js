import React, {useState} from 'react'

export default function TextFrom(props) {

    const upperCase = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase", "success");
    }
    const lowerCase = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase", "success");
    }
    const capitalized = ()=>{
        var s = text.split(" ");
        var ans="";
        for(var i=0;i<s.length;i++)
        {
            var temp = "";
            temp = s[i].slice(0,1).toUpperCase();
            temp += s[i].slice(1,s[i].length).toLowerCase();
            console.log(temp);
            ans += temp+" ";
        }
        setText(ans);
        props.showAlert("Words are Capitalized", "success");
    }
    const clearText = ()=>{
        setText("");
        props.showAlert("Textbox Cleared", "success");
    }
    const handleOnChange = (event)=>{
        setText(event.target.value)
    }

    const [text, setText] = useState('');
    return (
        <>
        <div style={{color : props.mode==='dark' ? 'white' : 'black'}}>
            <h2 className='my-3'>{props.heading}</h2>
            <div className="mb-3">
                <textarea style={{backgroundColor : props.mode==='dark' ? 'black' : 'white', color : props.mode==='light' ? 'black' : 'white'}} rows="8" className="form-control my-3" value={text} onChange={handleOnChange} id="myBox"/>
            </div>
            <button className={`btn btn-primary mx-2 bg-${props.mode==='primary'?'black':'primary'}`} onClick={upperCase}>Convert to Uppercase</button>
            <button className={`btn btn-primary mx-2 bg-${props.mode==='primary'?'black':'primary'}`} onClick={lowerCase}>Convert to Lowercase</button>
            <button className={`btn btn-primary mx-2 bg-${props.mode==='primary'?'black':'primary'}`} onClick={capitalized}>Capitalized</button>
            <button className={`btn btn-primary mx-2 bg-${props.mode==='primary'?'black':'primary'}`} onClick={clearText}>Clear</button>
        </div>
        <div className="container my-3" style={{color : props.mode==='light' ? 'black' : 'white'}}>
            <h3>Your Summary :- </h3>
            <p>{text.split(" ").length} Words and {text.length} Characters</p>
            <p>{0.008 * text.split(" ").length} minutes to read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:<i>Enter some text to Preview</i>}</p>
        </div>
        </>
    )
}
