import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

let xxxxxxxx:string = 'bbb';



// const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
// chrome.scripting.executeScript({
//   target: { tabId: tab.id as number },
//   function: onRun,
// });

// function onRun() {
//   // document.body.style.backgroundColor = "#fcc";
//   console.log("Hello from the background script");
//   let selectionText = window.getSelection().toString();
//   console.log(`selection changed:${selectionText}`);

//   const s = new Intl.Segmenter("ja", {granularity: "word"});
//   const ss = s.segment('本日は晴天なり');

//   for(const seg of ss) {
//     console.log(seg.segment);
//   }

//   xxxxxxxx='iiaiaiaiaiaia'

//   // chrome.windows.create({
//   //   url: 'http://localhost:3000', 
//   //   type: 'popup',
//   //   width: 400, 
//   //   height: 300
//   // });
  
// }


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App text={xxxxxxxx} />
  </React.StrictMode>
)