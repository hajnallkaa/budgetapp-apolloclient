import {gql} from '@apollo/client';

export const LOAD_TRANSACTIONS = gql`
    query{
        getAllTransactions{
            id
            type
            category
            date
            value
        }
    }
`

export const GET_MONEY = gql`
    query{
        getMoney
    }
`

export const GET_EXPENSE_STAT = gql`
    query{
        getDaysofExpense {
            x
            y
          }
    }
`

export const GET_INCOME_STAT = gql`
    query{
        getDaysofIncome {
            x
            y
          }
    }
`

export  const GET_EXPENSES = gql`
    query {
        getTransactionsByCategory (category:"Expense"){
        type
        value
        }
    }
`

export  const GET_INCOMES = gql`
    query {
        getTransactionsByCategory (category:"Income"){
        type
        value
        }
    }
`

export  const GET_TRANSACTIONS = gql`
    query {
        getAllTransactions{
            id
            type
            category
            value
            date
        }
    }
`