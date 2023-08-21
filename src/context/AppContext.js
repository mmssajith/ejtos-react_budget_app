import React, { createContext, useReducer } from 'react';

export const AppReducer = (state, action) => {
    let new_allocation = []
    switch (action.type){
        case "ADD_ALLOCATION":
            

    } 
}

const initialState = {
    budget: 2000,
    expenses: [
        { id: "Marketing", name: 'Marketing', cost: 50 },
        { id: "Finance", name: 'Finance', cost: 300 },
        { id: "Sales", name: 'Sales', cost: 70 },
        { id: "Human Resource", name: 'Human Resource', cost: 40 },
        { id: "IT", name: 'IT', cost: 500 },
    ],
    currency: '£'
}
export const AppContext = createContext();

export const AppProvider = (props) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);
    return (
        <AppContext.Provider

        >
            {props.children}
        </AppContext.Provider>
    );
}