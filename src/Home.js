import React, { useState } from "react";
import styled from "styled-components";
import {useHistory} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
// import {collection, doc, getDoc, getDocs, addDoc, updateDoc, deleteDoc} from "firebase/firestore";
// import {db} from "./firebase";
import {loadWordFB, deleteWordFB, updateWordFB } from "./redux/modules/word"
import {FaPen,FaCheck, FaTrashAlt} from "react-icons/fa"


const MainBox = styled.div`
    position: relative;
    width: 400px;
    height: 90vh;
    margin: auto;
    /* display: flex;
    flex-direction: column; */
    align-items: center;
    justify-content: center;
    border: none;
    border-radius: 10px;
    overflow-y: auto;
    background-color: #81ecec;
`

const H1 = styled.h1`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px 0px;
    font-size: 30px;
`
const WordListBox = styled.div`
    width:350px;
    height:230px;
    border:1px solid black;
    margin: 25px auto;
    border: none;
    border-radius: 10px;
    border: 1px #fdcb6e;
`
const WordBox = styled.div`
    margin: 10px 0px 10px 5px;
    display: flex;
    flex-direction: column;
  
`

const Span = styled.span`
    font-size: 10px;
    text-decoration: underline;
    margin-top: 6px;
    
`
const H2 = styled.h2`
    margin-top: 10px;
    font-size: 20px;
`


const AddBox = styled.div`
    position: relative;
`

const AddBtn = styled.button`
 position: fixed;
 bottom: 20px;
 right: 20px;
 border-radius: 50%;
 background-color: #6c5ce7;
 &:hover{
    cursor: pointer; 
 }
`
const PlusBtn = styled(FaPen)`
    color: white;
    font-size: 23px;
`
const DetailBox = styled.div`
    display: flex;
    justify-content: flex-end;
     
`
const CheckBtn = styled(FaCheck)`
    color: blck;
    &:hover{
    cursor: pointer; 
 }
`
const DeleteBtn = styled(FaTrashAlt)`
    margin-left: 10px;
    margin-right: 5px;
    &:hover{
    cursor: pointer; 
 }
`

const Home = () => {
    const dispatch = useDispatch();
    const history = useHistory()
    React.useEffect(()=>{
        dispatch(loadWordFB());
    },[])
    
    let listBox = useSelector((state)=>state.word.list);
    console.log(useSelector((state)=>state.word.lastValue))
    
    // const toggle= () => {setIsDark((current)=> !current)}
    const handleDelete = (id) => {
        dispatch(deleteWordFB(id));
    };

    const handleCompleted = (id, completed) => {
        dispatch(updateWordFB(id, completed))
    };

    return(
        <>
        <H1>My Dictionary</H1>
        <MainBox>        
            {listBox.map((i,index)=>{
                return(
                   
                    <WordListBox style={{backgroundColor: listBox[index].completed ? "white" : "#fdcb6e"}} key={index}>
                        <WordBox>
                            <Span style={{color: listBox[index].completed ? "black" : "white"}}>Word</Span>
                            <H2 style={{color: listBox[index].completed ? "black" : "white"}}>{i.firstWord}</H2>
                        </WordBox>
                        <WordBox>
                            <Span style={{color: listBox[index].completed ? "black" : "white"}}>Meaning</Span>
                            <H2 style={{color: listBox[index].completed ? "black" : "white"}}>{i.secondWord}</H2>
                        </WordBox>
                        <WordBox>
                            <Span style={{color: listBox[index].completed ? "black" : "white"}}>Example</Span>
                            <H2 style={{color: listBox[index].completed ? "#74b9ff" : "white"}}>{i.thirdWord}</H2>
                        </WordBox>
                        <DetailBox>
                            <CheckBtn style={{color: listBox[index].completed ? "black" : "white"}} onClick={()=>{handleCompleted(listBox[index].id, listBox[index].completed)}}/>
                            <DeleteBtn style={{color: listBox[index].completed ? "black" : "white"}} onClick={()=>{handleDelete(listBox[index].id)}}/>
                        </DetailBox>
                    </WordListBox>
        
                )
            })}
            <AddBox><AddBtn onClick={()=>{history.push("/add")}}><PlusBtn/></AddBtn></AddBox>
        </MainBox>
        </>
    );
};

export default Home;