import React from 'react';
import { List as MyList, Avatar } from 'antd';
import {DollarCircleOutlined, DeleteOutlined} from '@ant-design/icons';
import {useQuery, useMutation} from "@apollo/client";
import {GET_TRANSACTIONS} from '../Graphql/Queries'
import {DELETE_TRANSACTION_MUTATION} from '../Graphql/Mutations';

const incomestyle = {
    backgroundColor: '#839B97'
}

const expensestyle = {
    backgroundColor: '#8E7F7F'
}

const List: React.FC = () => {
    const{data} = useQuery(GET_TRANSACTIONS);
    const [deleteTransaction] = useMutation(DELETE_TRANSACTION_MUTATION);
    const [transactions, setTransactions] = React.useState<ITransactions[]>([{
      id: 0,
      type: "",
      category: "",
      value: 0,
      date: ""
    }])

    React.useEffect(() => {
      if (data){
      setTransactions(data.getAllTransactions)
      }
  }, [data])
    
   
    
    return (
        

        <div style={{overflowY: 'scroll', height: '400px'}}>
        <MyList itemLayout="horizontal" dataSource={transactions} renderItem={transaction => (
            
                <MyList.Item>
                    <MyList.Item.Meta
                    key={transaction.id}
                    avatar={<Avatar style={transaction.category === 'Income' ? incomestyle : expensestyle}><DollarCircleOutlined /></Avatar>}
                    title={<a href="https://ant.design">{transaction.type}</a>}
                    description={transaction.date + ' - ' + transaction.value +'$'}
                    />
                    <DeleteOutlined  style={{marginRight: '10px'}} onClick={() => {
                  deleteTransaction({ variables: { id: transaction.id } });
                }}/>
                </MyList.Item>
            
            )}
        />
        </div>
        


    )

}

export default List
