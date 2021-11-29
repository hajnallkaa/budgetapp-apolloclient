import React from 'react'
import { Layout } from 'antd';
import { Column } from '@ant-design/charts';
import {useQuery} from "@apollo/client";
import {GET_INCOME_STAT} from '../Graphql/Queries'


const {  Content, Footer } = Layout;


const IncomeStatistics: React.FC = () => {
  const{data} = useQuery(GET_INCOME_STAT)
  const [stat, setStat] = React.useState<IDateStat[]>([
    {
      x: 0,
      y: 0
    }
  ]);

  React.useEffect(() => {
    if (data){
    setStat(data.getDaysofIncome)
    }
}, [data])

    return (
        <Layout className="layout" >
        <Content style={{ padding: '0 50px', marginTop: '20px'}}>
          <div className="site-layout-content">
          <>
            <Column
              data={stat}
              height={500}
              xField="x"
              yField="y"
              color='#8a7d67'
            />
          </>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    )
}

export default IncomeStatistics;
