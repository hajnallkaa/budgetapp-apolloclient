import React from 'react'
import { useState } from 'react';
import {Form} from 'antd';
import {Card, Typography, Divider} from 'antd';
import './style.css';
import 'antd/dist/antd.css';
import {useQuery} from "@apollo/client";
import {GET_MONEY} from '../Graphql/Queries'
import {useMutation} from '@apollo/client'
import { CREATE_TRANSACTION_MUTATION } from "../Graphql/Mutations";



type SizeType = Parameters<typeof Form>[0]['size'];



const MyForm: React.FC = () => {
    const{data} = useQuery(GET_MONEY)
    const [componentSize, setComponentSize] = useState<SizeType | 'default'>('default');
    const [budget, setBudget] = React.useState(0);
    const [formState, setFormState] = useState({
      category: '',
      type: '',
      value:0,
      date:''
    });

    React.useEffect(() => {
      if (data){
      setBudget(data.getMoney)
      }
  }, [data])

    const onFormLayoutChange = ({ size }: { size: SizeType }) => {
    setComponentSize(size);
  };

  
  const [createTransaction] = useMutation(CREATE_TRANSACTION_MUTATION, {
    variables: {
        category: formState.category,
        type: formState.type,
        value: formState.value,
        date: formState.date,
      }
});
  
 
    return (
      <>
        <Card title="Expense Tracker">
        <div style={{display: 'flex', justifyContent: 'center', fontSize: '30px'}}>
        

      <Typography>Your balance is {budget} dollar</Typography>
      
        
          </div>
          <Divider />
         
        
        <form className='Form' onSubmit={(e) => {
            e.preventDefault();
            createTransaction();
          }} style={{padding:'10px'}}>
        <div>
          <div>
            <label htmlFor='category'>Category</label>
            <select className='inputstyle' id="category" value={formState.category}
              onChange={(e) =>
                setFormState({
                  ...formState,
                  category: e.target.value
                })
              }>
                <option value="Income">Income</option>
                <option value="Expense">Expense</option>
            </select>
          </div>
          <div>
            <label htmlFor='type'>Type</label>
            <select className='inputstyle' id="type" value={formState.type}
              onChange={(e) =>
                setFormState({
                  ...formState,
                  type: e.target.value
                })
              }>
                <option value="Salary">Salary</option>
                <option value="Business">Business</option>
                <option value="Bills">Bills</option>
                <option value="Grocery">Grocery</option>
                <option value="Fun">Fun</option>
                <option value="Loan">Loan</option>
            </select>
          </div>
          <div>
            <label htmlFor='value'>Amount</label>
            <input className='inputstyle' value={formState.value}
              onChange={(e) =>
                setFormState({
                  ...formState, 
                  value: Number(e.target.value)
                })
              }type='number' id='value' />
          </div>
          <div>
            <label htmlFor='date'>Date</label>
            <input className='inputstyle'  value={formState.date}
              onChange={(e) =>
                setFormState({
                  ...formState,
                  date: e.target.value
                })
              } type='date' id='date' />
          </div>
        </div>
        <button type="submit">Add</button>
      </form> 

      </Card>
    </>
    )
}

export default MyForm
