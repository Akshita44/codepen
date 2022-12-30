import { useEffect } from 'react';
import './App.css';
import Editor from './Editor';
// import {language} from "@codemirror/language"
import { javascript } from '@codemirror/lang-javascript';
import useLocalStorage from './hooks/useLocalStorage';
function App() {
  const [html,sethtml]=useLocalStorage("html","")
  const [css,setcss]=useLocalStorage("css","")
  const [js,setjs]=useLocalStorage("js","")
  const [srcDoc,setsrcdoc]=useLocalStorage("")
  useEffect(()=>{
    const timeout=setTimeout(()=>{
      setsrcdoc(`<html>
      <body>${html}</body>
      <style>${css}</style>
      <script>${js}</script>
      </html>`)
    },250)

    return ()=>clearInterval(timeout)
  },[html,css,js,setsrcdoc])

  return (
    <>
      <div className='pane top'>
        <Editor language="xml" displayName="HTML" value={html} onChange={sethtml} extensions={[javascript({jsx:true})]}/>
        <Editor language="css" displayName="CSS" value={css} onChange={setcss} extensions={[javascript({jsx:true})]}/>
        <Editor language="javascript" displayName="JS" value={js} onChange={setjs} extensions={[javascript({jsx:true})]}/>
      </div>
      <div className='pane'>
        <iframe 
        srcDoc={srcDoc}
        title="Output"
        sandbox='allow-scripts'
        frameBorder={0}
        width="100%"
        height="100%"
        // to allow it to only access on;y the scripts not the document cookies for security purposes
        />
      </div>
    </>
  );
}

export default App;
