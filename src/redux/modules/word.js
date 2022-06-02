// widgets.js
import {db} from "../../firebase";
import {collection, doc, getDoc, getDocs, addDoc, updateDoc, deleteDoc} from "firebase/firestore";
// Actions
const LOAD   = 'word/LOAD';
const CREATE = 'word/CREATE';
const DELETE = 'word/DELETE';
const UPDATE = 'word/UPDATE';

const initialState = {
  list:[]
}


export const deleteWordFB = (wordId) => {
  return async function (dispatch, getState) {
    const docRef = doc(db, "my_dic", wordId);
    await deleteDoc(docRef)
    const wordList = getState().word.list;
    const wordIndex = wordList.findIndex((b)=>{
      return b.id == wordId
    })
    dispatch(deleteWord(wordIndex));
  }
}

export const updateWordFB = (wordId, wordCompleted) => {
  return async function (dispatch, getState) {    
    console.log(wordCompleted)
    const docRef = doc(db, "my_dic", wordId);
    await updateDoc(docRef, { completed: !wordCompleted});

    const wordList = await getState().word.list;
    const wordIndex = wordList.findIndex((v)=>{
      return v.id == wordId;
    })
    dispatch(updateWord(wordIndex))
  }
}
// return function (dispatch) {
//   words_db.doc(word.id).update({ completed: !word.completed });
//   dispatch(updateComplete(word.id));
// };
// };

export const createWordFB = (word) => {
  return async function (dispatch) {
    const docRef = await addDoc(collection(db, "my_dic"), word)
    console.log(docRef);
    const wordData = {id:docRef.id, ...word}
    dispatch(createWord(wordData));
  }
}

export const loadWordFB = () => {
  return async function (dispatch) {
    const wordData = await getDocs(collection(db, "my_dic"));
    // console.log(wordData);  
    let wordList = [];
    wordData.forEach((doc)=> {
      // console.log(doc.data())
      wordList.push({id:doc.id,...doc.data()});
    })

    dispatch(loadWord(wordList))
  };
};
 


// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case "word/LOAD" : {
      return {
        list: action.word
      }
    }
    // do reducer stuff 
    case "word/CREATE":{
      const newWordList = [ ...state.list. action.word];
      // console.log(newWordList)
      return {
        ...state,
        list : newWordList
      }
    }
    case "word/UPDATE":{
      console.log("now complete")
      console.log(action.word)
      const updateWordList = state.list.map((l, idx)=>{
        if(action.word == idx){
          return {...l, completed:!l.completed};
        }else{
          return l;
        } 
      });
      return {list:updateWordList};
    }
   
    case "word/DELETE":{
      const newWordList = state.list.filter((l, idx)=>{
        return action.word !== idx;
      })
      return {
        list:newWordList
      }
    }
    // case "bucket/DELETE": {
    //   const new_bucket_list = state.list.filter((l, idx) => {
    //     return parseInt(action.bucket_index) !== idx;
    //   });
  
    //  return {list: new_bucket_list};
    // }
    // let added_words = [action.word, ...state.word_list];
    //   return {
    //     ...state,
    //     word_list: added_words,
    //   };
    default: return state;
  }
}

// Action Creators
// export function loadWidgets() {
//   return { type: LOAD };
// }

export function createWord(word) {
  return {type:CREATE, word:word};
}

export function deleteWord(word) {
  return { type: DELETE, word };
}

export function loadWord(word) {
  return { type: LOAD, word};
}

export function updateWord(word){
  return { type: UPDATE, word};
}
// side effects, only as applicable
// e.g. thunks, epics, etc
