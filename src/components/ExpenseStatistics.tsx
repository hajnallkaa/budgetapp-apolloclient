import React from 'react'
import { Layout } from 'antd';
import HeaderComp from './HeaderComp';
import { Column } from '@ant-design/charts';
import {useQuery} from "@apollo/client";
import {GET_EXPENSE_STAT} from '../Graphql/Queries'

const {  Content } = Layout;



const ExpenseStatistics: React.FC = () => {
  const{data} = useQuery(GET_EXPENSE_STAT)
  const [statistic, setStatistic] = React.useState<IDateStat[]>([
    {
      x: 0,
      y: 0
    }
  ]);


  React.useEffect(() => {
    if (data){
    setStatistic(data.getDaysofExpense)
    }
}, [data])


    return (
        <Layout className="layout" >
            <HeaderComp/>
        <Content style={{ padding: '0 50px', marginTop: '20px'}}>
          <div className="site-layout-content">
          <>
            <Column
              data={statistic}
              height={500}
              xField="x"
              yField="y"
              color='#34626C'
            />
          </>
          </div>
        </Content>
      </Layout>
    )
}

export default ExpenseStatistics
