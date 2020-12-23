import React from 'react'
import HelloWorld from './Components/HelloWorld';
import Header from './Components/Header';
import Footer from './Components/Footer'
import { Stack, Text } from '@chakra-ui/react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

function App() {
  return (
      <Stack>
        <Router>

        <Header />

        <Switch>
          <Route exact path="/">
            {/* <Text p="5px">This is the home page</Text> */}
            <HelloWorld name='Kyle'/> 
          </Route>
          <Route path="/about">
            <Text p="5px">About me</Text>
          </Route>
        </Switch>

        <Footer />

        </Router>
      </Stack>
  );
}

export default App;
