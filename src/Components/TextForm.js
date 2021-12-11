import React,{useState} from 'react'


export default function TextForm(props) {

    const handleUpClick = () =>{
        console.log("UpperCase Clicked" +text);
        let newText=text.toUpperCase();

        setText(newText);
        props.showAlert("Converted to upper case","success");
    }
    const handleOnChange = (event) =>{
        console.log("Onchange");
        setText(event.target.value);
    }
    const handleDownClick = ()=>{
        // Console.log("LowerCase Clicked");
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lower case","success");
    }
    const handleClear = () =>{
        let newText="";
        setText(newText);
        props.showAlert("text cleared","success");
    }
    const handleCapitalizedCase = () =>{
        let newText=text.toLowerCase();
        newText=text.split(" ");
        for(var i=0;i<newText.length;i++){
            if(i>0 && newText[i].length===1){
                continue;
            }
                newText[i]=newText[i].toLowerCase();
            newText[i]=newText[i].charAt(0).toUpperCase()+newText[i].slice(1);
        }
        let str=newText.join(" ");
        setText(str);
        props.showAlert("Converted to capitalized","success");
    }
    const [text, setText] = useState('');
    // text= "new state";   Wrong way to change state name;
    // setText("new text");
    return (
        <>
        <div className="container"  style={{color : props.mode==='dark'?'white':'black' }}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                <textarea placeholder="Enter text here" className="form-control" style={{backgroundColor : props.mode==='dark'?'gray':'white',color : props.mode==='dark'?'white':'black' }} value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert To UpperCase</button> 
                <button className="btn btn-primary mx-1" onClick={handleDownClick}>Convert To LowerCase</button>
                <button className="btn btn-primary mx-1" onClick={handleClear}>Clear Area</button>
                <button className="btn btn-primary mx-1" onClick={handleCapitalizedCase}>Capitalized Case</button>
        </div>
        <div className="container my-3" style={{color : props.mode==='dark'?'white':'black' }}>
            <h1> Your text summery</h1>
            <p>{text===""?text.split(" ").length-1:text.trimRight().split(" ").length} words and {text.length} Characters</p>
            <p>{text===""?0:0.008*(text.trimRight().split(" ").length)} Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter somthing to preview"}</p>
        </div>
        </>
    )
}
