
const defaultState = {
    customers: []
  }

  const ADD_CUSTOMER = 'ADD_CUSTOMER';
  const REMOVE_CUSTOMER = 'REMOVE_CUSTOMER';

export const customerReducer = (state = defaultState, action) => {
    switch (action.type) {
      case ADD_CUSTOMER:
        return {...state, customers: [...state.customers, action.payload]}
      case REMOVE_CUSTOMER:
        return {...state, customers: state.customers.filter((customer) => customer.id !== action.payload.id)}
      default:
        return state
    }
    
  }

  export const addUser = (payload) => ({ type: ADD_CUSTOMER, payload})
  export const removeUser = (payload) => ({ type: REMOVE_CUSTOMER, payload})