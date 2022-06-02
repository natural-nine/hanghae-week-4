import React from "react";
import styled from "styled-components";
import {useDispatch} from "react-redux";
import {createWord, createWordFB} from "./redux/modules/word"
import { useHistory } from "react-router-dom";
 
const MainBox = styled.div`
    width: 400px;
    height: 90vh;
    border: 1px solid black;
    margin: 20px auto;
    background-color: #81ecec;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: none;
    border-radius: 10px;
    
    
`

const Head = styled.h1`
    margin: 15px 0px;
    font-size: 20px;
`

const WordForm = styled.form`
    display: flex;
    flex-direction: column;
`

const InputBox = styled.div`
    width: 350px;
    height: 80px;
    display: flex;
    flex-direction: column;
    border: 1px solid black;
    background-color: white;
    margin-top: 20px;
    border: none;
    border-radius: 10px;
`

const Span = styled.span`
    font-size: 10px;
    text-decoration: underline;
    margin: 8px 10px;
    
`
const FirstWordInput = styled.input`
    border: 1.5px solid black;
    padding: 10px;
    margin: 0px 10px;
    
`
const SecondWordInput = styled.input`
    border: 1.5px solid black;
    padding: 10px;
    margin: 0px 10px;
`
const ThirdWordInput = styled.input`
    border: 1.5px solid black;
    padding: 10px;
    margin: 0px 10px;
`
const FourthWordInput = styled.input`
    border: 1.5px solid black;
    padding: 10px;
    margin: 0px 10px;
`
const WordFormBtn = styled.button`
    margin-top: 50px;
    padding: 20px 10px;
    font-size: 15px;
    background-color: #6c5ce7;
    color:white;
    border: none;
    border-radius: 10px;
    &:hover{
        cursor: pointer;
    }
`


const Add = () => {
    const history = useHistory()
    const dispatch = useDispatch();

    const word1 = React.useRef(null)
    const word2 = React.useRef(null)
    const word3 = React.useRef(null)
    

    const wordSubmit = (e) => {
        if(word1.current.value == "" || word2.current.value == "" || word3.current.value == ""){
            alert("fuck you")
            e.preventDefault()
        }
        else{
            e.preventDefault();
        const firstWord = word1.current.value;
        const secondWord = word2.current.value;
        const thirdWord = word3.current.value;
        // console.log(word1.current.value,word2.current.value,word3.current.value,word4.current.value)
        word1.current.value = "";
        word2.current.value = "";
        word3.current.value = "";  
        const wordObj = {
            firstWord,
            secondWord,
            thirdWord,
            completed : true
        } 
        // console.log(wordObj)
        // dispatch(createWord(wordObj))
        dispatch(createWordFB(wordObj))
        history.push("/");
        }
    }
    return(
        <MainBox>
        <Head>Add Page</Head>
        <WordForm onSubmit={wordSubmit}>
            <InputBox>
            <Span>Word</Span>
            <FirstWordInput ref={word1}></FirstWordInput>
            </InputBox>
            <InputBox>
            <Span>Meaning</Span>
            <SecondWordInput ref={word2}></SecondWordInput>
            </InputBox>
            <InputBox>
            <Span>example</Span>
            <ThirdWordInput ref={word3}></ThirdWordInput>
            </InputBox>
            <WordFormBtn>Add Word</WordFormBtn>
        </WordForm>
        </MainBox>
    );
};

export default Add;