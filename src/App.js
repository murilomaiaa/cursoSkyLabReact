import React from 'react';
import api from './services/api'
    
import './styles.css'

import Main from "./pages/main";
import Header from './components/Header'

const App = () => (
  <div className="App">
    <Header />
    <Main />
  </div>
)

export default App;
