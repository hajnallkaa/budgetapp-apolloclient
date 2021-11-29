import React, { FC } from 'react';
import Budget from './components/Budget';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import './App.css';
import Main from './components/Main';
import  Statistics  from './components/Statistics';

import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
   from, HttpLink,
  } from "@apollo/client";


  
  const link = from([
    new HttpLink({uri: "http://localhost:4000/graphql"})
  ])
  
  const client = new ApolloClient({
    link: link,
    cache: new InMemoryCache()
  });

const App: FC = () => (
<ApolloProvider client={client}>
  <Router>
  <div className="App">
    <Switch>
      <Route exact path="/">
          <Main/>
      </Route>
      <Route path="/budget">
          <Budget/>
      </Route>
      <Route path="/statistics">
          <Statistics/>
      </Route>
      
  </Switch>
  </div>
  </Router>
  </ApolloProvider>
);

export default App;
