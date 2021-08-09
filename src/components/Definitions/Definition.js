import React from 'react'
import './Definition.css'

const Definitions = ({data,word,category,lightMode}) => {
   
    return (
        <div className='definition'>
            {data[0] && word && category ==="en" && (
                <audio
                    style={{backgroundColor:'#', borderRadius:10,alignSelf:'center',width:'95%'}}
                    src={data[0].phonetics[0] && data[0].phonetics[0].audio}
                    controls
                >
                  Your Browser does not support the audio.
                </audio>
                )}
            {word ===''
            ?<span className='subtitle'>Start by typing word in search</span>
            :(data.map((mean)=>
            mean.meanings.map((item) =>
               item.definitions.map((def)=>
                 <div className='singleMean'
                   style={{ backgroundColor:lightMode?'#1e2e4f':'#fff',
                         color:lightMode?'#fff':'#08090a'     
                   }} 
                 >
                     <b>{def.definition}</b>
                     <hr style={{ backgroundColor: "black", width: "100%" }} />
                     {def.example && (
                     <span><b>Example: </b>{def.example}</span>
                     )}
                     {def.synonyms && (
                     <span><b>synonyms: </b> {def.synonyms.map((syn) =>`${syn},`)}</span>
                     )}
                 </div>
               )
                )
            ))
        } 
        </div>
    )
}

export default Definitions;
