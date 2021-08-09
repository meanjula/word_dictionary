
import { Container, Switch, withStyles } from '@material-ui/core';
import { grey } from '@material-ui/core/colors';
import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import Definitions from './components/Definitions/Definition';
import Header from './components/Header/Header';

//First install materialui and axios for this project 

function App() {
  const [data, setData] = useState([])
  const [word, setWord] = useState('')
  const [category, setCategory] = useState('en')
  const [lightMode,setLightMode] = useState(false)

  const DarkMode = withStyles({
    switchBase: {
      color: grey[300],
      '&$checked': {
        color: grey[500],
      },
      '&$checked + $track': {
        backgroundColor: grey[500],
      },
    },
    checked: {},
    track: {},
  })(Switch);

  //use googledictionary api
  const dictionaryApi = async() =>{
    try{
      const data = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/${category}/${word}`)
      setData(data.data)
    }
    catch(error){
      console.log(error)
    }
  }
  console.log(data)

  useEffect(()=>{
    dictionaryApi()
    //eslint-disable-next-line
  },[word, category]);
  
  return (
    <div className="App"
    style={{
      backgroundColor:lightMode?'#fff':'rgb(58, 56, 56)', 
      color:lightMode?'black':'white',
      transition:'all 0.5s linear'}}
    >
     <Container maxWidth ='md'>
       <div className='theme'>
         <span>{lightMode?'Dark':'Light'}Mode</span>
         <DarkMode checked={lightMode} onChange ={() => setLightMode(!lightMode)}/>
       </div>
       <Header 
         category={category} 
         setCategory={setCategory} 
         word={word} 
         setWord={setWord}
         setMeanings={setData}
         lightMode={lightMode} 
         setLightMode={setLightMode}
       />
      {data && (<Definitions
       word={word}
       category={category}
       data={data}
       lightMode={lightMode}
      /> )}
     </Container>
    </div>
  );
}

export default App;
