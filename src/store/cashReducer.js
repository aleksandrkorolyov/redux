const defaultState = {
    cash: 25000,
  }

  const ADD_CASH = 'ADD_CASH'
  const GET_CASH = 'GET_CASH'

export const cashReducer = (state = defaultState, action) => {
    switch (action.type) {
      case ADD_CASH:
        return {...state, cash: Number(state.cash) + Number(action.payload)}
      case GET_CASH:
        return {...state, cash: Number(state.cash) - Number(action.payload)}
      default:
        return state
    }
    
  }
  
  export const addMoney = (cash) => ({type: ADD_CASH, payload: cash})
  export const getMoney = (cash) => ({type: GET_CASH, payload: cash})