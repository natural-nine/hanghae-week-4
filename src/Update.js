import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { deleteWord, deleteWordFB, updateWord, updateWordFB } from "./redux/modules/word";


const WordBox = styled.div`
    width:200px;
    height:200px;
    border:1px solid black;
    display: flex;
    flex-direction: column;   
`

const Update = (props) =>{
    const history = useHistory();
    const dispatch = useDispatch();
    const params = useParams();
    let listBox = useSelector((state)=>state.word.list);
    const wordIndex = parseInt(params.id);
    console.log(listBox[wordIndex].id)
    // console.log(props.match.params.id)
    
    
    return(
        <>
        <h1>This is Update Page</h1>
        <h2>{listBox[wordIndex].firstWord}</h2>
        <button onClick={()=>{dispatch(updateWordFB(listBox[wordIndex].id)); history.push("/")}}>Complete!</button>
        <button onClick={()=>{dispatch(deleteWordFB(listBox[wordIndex].id)); history.push("/")}}>Delete Word!</button>
        {/* <button onClick={()=>{console.log("delete button"); dispatch(deleteWord(wordIndex)); history.push("/")}}>Delete Word</button> */}
        </>
    );
}; 


export default Update;