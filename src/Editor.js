import React, { useState } from 'react'
import CodeMirror from '@uiw/react-codemirror';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faCompressAlt,faExpandAlt} from "@fortawesome/free-solid-svg-icons"
// import {Controlled as ControlledEditor} from "react-codemirror2"
//  for importing the javascript support for the languages for which we are going to design the text editor 

// import 'codemirror/lib/codemirror.css';
// import 'codemirror/theme/material.css';
// import 'codemirror/mode/xml/xml';
// import 'codemirror/mode/javascript/javascript'
function Editor(props) {
    const {language,displayName,value,onChange,extensions}=props
    const [open,setopen]=useState(true)
    const handleChange = React.useCallback((value, viewUpdate) => {
        console.log('value:', value);
        onChange(value)
      }, [onChange]);
  return (
    <div className={`editor-container ${open? "":"collapsed"}`}>
        <div className='editor-title'>
            {displayName}
            <button type="button" className="btn" onClick={()=>setopen(!open)}><FontAwesomeIcon
            icon={open ? faCompressAlt : faExpandAlt}>
              </FontAwesomeIcon></button>
        </div>
        <CodeMirror
        value={value}
        height="40vh"
        className='code-mirror-wrapper'
        theme={'dark'}
        mode={language}
        extensions={extensions}
        onChange={handleChange}
        />
    </div>
  )
}

export default Editor