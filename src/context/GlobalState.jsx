import React, { createContext, useReducer } from "react";
import AppReducer from './Appreducer';

//initial State
const initialSate = {
    transactions : []
    
    // transactions : [
    //     {id:1, text:"Flower", amount:-20},
    //     {id:2, text:"Book", amount:220},
    //     {id:3, text:"Cemara", amount:-100},
    //     {id:4, text:"OnePLus", amount:3000}
    // ]
}

// Create Context
export const GlobalContext = createContext(initialSate);

// Provider Component
export const GlobalProvider = ({children})=>{
    const [state, dispatch] = useReducer(AppReducer, initialSate)

    //Action
    function deleteTransaction(id){
        dispatch({
            type:'DELETE_TRANSACTION',
            payload: id
        });
    }

    function addTransaction(transaction){
        dispatch({
            type:'ADD_TRANSACTION',
            payload: transaction
        });
    }

    return(
        <GlobalContext.Provider value={{transactions:state.transactions, deleteTransaction, addTransaction}}>
            {children}
        </GlobalContext.Provider>
    )
}