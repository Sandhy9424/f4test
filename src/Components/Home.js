import React, { useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { postFetching, postFetchSuccess, postFetchError } from "../redux/actions/postActions";
import { getAPIDetails } from "../redux/actions/postActions";

const Home = ()=>{

    const [word, setWord] = useState("")
    let {loading, data, error} = useSelector((state)=>state)
    console.log({loading, data, error})


    let dispatch = useDispatch();

    const getWordDetail = ()=>{

        // dispatch(postFetching());

        // axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
        // .then((response) => {
        //     dispatch(postFetchSuccess(response.data))
        // })
        // .catch((error)=>{
        //     dispatch(postFetchError(error.message))
        // })
        dispatch(getAPIDetails(word))
    }


    return(
        <div >
           <div className="homeClass">
                <input type="text" placeholder="Search for word..." 
                    onChange={(event)=>setWord(event.target.value)}/>
                <button onClick={getWordDetail}>Search</button>
           </div>

           <div className="wordDetails_Class">
            {
                data && 
                    data.map((item, index)=>{
                        return(
                            <div className="word_details">
                                <h2>{item.word}</h2>
                                <p>{item.phonetic}</p>
                                <audio controls >
                                    <source src={item.phonetics[0].audio}/>
                                </audio>
                                <p>{item.phonetic}</p>
                                <audio controls >
                                    <source src={item.phonetics[0].audio}/>
                                </audio>
                                {/* <h3>noun</h3> */}

                                {item.meanings && 
                                    item.meanings.map((meaning,index)=>{
                                        return(
                                            <div>
                                                <h3>{meaning.partOfSpeech}</h3>
                                                    {
                                                        meaning.definitions &&
                                                            meaning.definitions.map((define,index)=>{
                                                                return(
                                                                    <div>
                                                                        <p>{define.definition}</p>
                                                                    </div>
                                                                )
                                                            })
                                                    }
                                            </div>
                                        )
                                    })
                                /* <p>{item.meanings[0].definitions[0].definition}</p>
                                <p>{item.meanings[0].definitions[1].definition}</p> */}
                                {/* <p>{item.meanings[0].partOfSpeech}</p> */}
                                {/* <p>{item.meanings[1].definitions[1].definition}</p>
                                <p>{item.meanings[1].definitions[2].definition}</p> */}
                            </div>
                        )
                    })
            }
           </div>
        </div>
    )
}
export default Home;