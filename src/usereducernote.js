import React, { useState,useEffect, useReducer } from "react";


 function reducer(state,action){

    switch (action.type) {
        case 'CREATE_NOTE':
           return {
               ...state,
               note: action.payload,
           } 
        case 'ADD_NOTE':
            return {
                addnote: [...state.addnote,state.note],
                note: ''
            }  
        case 'DELETE_NOTE' :
            return {
                addnote: state.addnote.filter((value) => value !== action.payload)
            } 
            
        case 'UPDATE_NOTE' :
            return {
                addnote : state.addnote.filter((value) => value !== action.payload.value)
            }
            default:
            return state;
    }

 }


export default function Usereducernote() {


  const [state,dispatch] = useReducer(reducer,{
      addnote : [],
      note: ''
  });



  return (
    <div>
      <textarea
        id="hj"
        onChange={(e) => {
            dispatch({type: "CREATE_NOTE", payload: e.target.value})
        }}
      ></textarea>

      <button
        onClick={() => {
            dispatch({type : "ADD_NOTE"})
            document.getElementById("hj").value = "";
        }}
      >
        Add
      </button>
      {state.addnote.map((value, index, arr) => (
        <div
          style={{
            height: "200px",
            margin: "10px",
            width: "200px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            border: "2px solid red",
          }}
          key={index}
        >
          <span> {value}</span>

          <button id={index} value={value} onClick={(e) =>{
              state.addnote.splice(e.target.id,1);
              dispatch({type: "DELETE_NOTE",payload : e.target.value})
              console.log(state.addnote)
          }}>
            Delete
          </button>

          <button id={index} value={value} onClick={(e) =>{

            const updatedValue = prompt("Update your Note :", e.target.value);
            state.addnote[e.target.id] = updatedValue;
              dispatch({type: "UPDATE_NOTE", payload: e.target.value})
          }}>
            update
          </button>
        </div>
      ))}
    </div>
  );
}
