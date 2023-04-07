import './App.css';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from './store/customerReducer';
import { addMoney, getMoney } from './store/cashReducer';

function App() {

  const [value, setValue] = useState(5);

  const dispatch = useDispatch();
  const cash = useSelector(state => state.cash.cash)
  const customers = useSelector(state => state.customer.customers)

  const addCash = () => {
    dispatch(addMoney(value))
  }
  const getCash = () => {
    dispatch(getMoney(value))
  }

  const addCustomer = (name) => {
    const customer = {
      name,
      id: Date.now(),
    }

    dispatch(addUser(customer))
  }

  const removeCustomer = (customer) => {
    dispatch(removeUser(customer))
  }

  return (
    <div className="App">
      <div>{cash}</div>
      <div style={{display:'flex', justifyContent: 'center', paddingTop: '20px'}}>
          <input type='text' onChange={e => setValue(e.target.value)}/>
          <button onClick={() => addCash()}>Add value</button>
          <button onClick={() => getCash()}>Get value</button>
          <button onClick={() => addCustomer(prompt())}>Add user</button>
        </div>
        {customers.length > 0 ? 
        <div>
          {customers.map(customer => 
            <div onClick={() => {removeCustomer(customer)}} key={customer.id}>{customer.name}</div>
            )}
        </div>
        :
        <div>No customers</div>
        }
      
    </div>
  );
}

export default App;
