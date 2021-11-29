import React from 'react';
import { Pie } from '@ant-design/charts';
import {useQuery} from "@apollo/client";
import {GET_EXPENSES} from '../Graphql/Queries'

const ExpenseChart: React.FC = () => {
  const{data} = useQuery(GET_EXPENSES)
  const [expenses, setExpenses] = React.useState<IChart[]>([
    {
      type: "",
      value: 0,
    }
  ]);
  
  React.useEffect(() => {
        if (data){
        setExpenses(data.getTransactionsByCategory)
        }
    } , [data])

  
  let config = {
    appendPadding: 10,
    data: expenses,
    angleField: 'value',
    colorField: 'type',
    color: ['#34626C', '#839B97', '#5E8B7E', '#CFD3CE', '#C6B497', '#8E7F7F'],
    radius: 1,
    innerRadius: 0.6,
    label: {
      type: 'inner',
      offset: '-50%',
      content: '{value}',
      style: {
        textAlign: 'center',
        fontSize: 14,
      },
    },
    interactions: [{ type: 'element-selected' }, { type: 'element-active' }],
    statistic: {
      title: false,
      content: {
        style: {
          whiteSpace: 'pre-wrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        },
        content: '$',
      },
    },
  };
  return <Pie {...config} />;
};

export default ExpenseChart;