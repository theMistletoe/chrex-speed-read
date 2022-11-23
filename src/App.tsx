import { useEffect, useState } from 'react'
import './App.css'
import useInterval, { Control, State } from './useInterval'

type Props = {
  text: string
}

function App(props: Props) {
  const [count, setCount] = useState(0)
  const [arr, setArr] = useState<string[]>([])
  const [displayWord, setDisplayWord] = useState<string>('');

  useEffect(() => {
    chrome.tabs.query( {active:true, currentWindow:true}, function(tabs:any) {
      chrome.tabs.sendMessage(tabs[0].id, {message: '選択範囲ちょうだい'}, function(item){
        if(!item){
          alert('選択範囲が見つかりませんでした');
          return;
        }
        console.log({item});

        const s = new Intl.Segmenter("ja", {granularity: "word"});
        const ss = s.segment(item);

        const temp = [];
        for(const seg of ss) {
          console.log(seg.segment);
          temp.push(seg.segment);
        }
        setCount(0);
        setArr(temp);
        
            
          });
        });
      }, [])

  // useEffect(() => {
  //   arr.map((item) => {
  //     setInterval(() => {
  //       console.log("1秒経過");
  //       setDisplayWord(item);
  //     }, 1000);
  //   })
  // }, [arr])
  const increment = () => {
    if (arr.length < count) return stop();
    setDisplayWord(arr[count]);
    setCount(count + 1)
  }
  const [state, {start, stop}]:[State, Control] = useInterval({onUpdate: increment, interval: 100, autostart: true});



  // useEffect(() => {
  //   console.log('useEffect')
  //   console.log(props.text)
  //   console.log(window);
  //   console.log(window.getSelection());
    
  //   let selectionText = window.getSelection().toString();
  //   console.log(`selection changed:${selectionText}`);
  //   console.log('xxxxxxxx');
    

  //   const s = new Intl.Segmenter("ja", {granularity: "word"});
  //   const ss = s.segment('本日は晴天なり');

  //   const temp = [];
  //   for(const seg of ss) {
  //     console.log(seg.segment);
  //     temp.push(seg.segment);
  //   }
  //   setArr(temp);
  // }, [])

  return (
    <div className="App">
      <p>{displayWord}</p>
    </div>
  )
}

export default App
