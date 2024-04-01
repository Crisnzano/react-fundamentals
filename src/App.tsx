import React from 'react';
import logo from './logo.svg';
import './App.css';
import MyReactApp from './components/CreatingNesting';
import AboutPage from './components/About';
import Profile from './components/Profile';
import ShoppingList from './components/ShoppingList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MyReactApp/>
        <AboutPage/>
        <Profile/>
        <ShoppingList/>
      </header>
    </div>
  );
}

export default App;
