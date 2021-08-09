//rafce boilerplate for react component
import { createTheme, MenuItem, TextField, ThemeProvider } from '@material-ui/core'
import React from 'react'
import './Header.css'
import languages from '../../data/languages'


const Header = ({category,setCategory,word,setWord,lightMode}) => {

    const darkTheme = createTheme({
        palette: {
            primary:{
                main:lightMode?'rgb(58, 56, 56)':'#fff'
            },
          type:lightMode?'light':'dark',
        },
      });
      const handleChange=(language)=>{
        setCategory(language)
        setWord('')
      

      }
 
    return (
        <div className='header'
        >
            <span className='title'>{word?word:'Word Hunt'}</span>
            <div className='inputs'>
              <ThemeProvider theme={darkTheme}>
                <TextField 
                required
                className='search'
                label='search' 
                value={word}
                onChange={(e)=>setWord(e.target.value)}
                /> 
                <TextField //for selecting language
                  className='select'
                  select
                  label="Language"
                  value={category}
                  onChange= {(e)=> handleChange(e.target.value)}
                  
                >
                  {languages.map((options)=>(
                     <MenuItem key={options.label} value={options.label} >
                     {options.value}
                    </MenuItem>
                  ))}
                </TextField>

              </ThemeProvider>
              
            </div>
        </div>
    )
}

export default Header
