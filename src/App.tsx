import React from 'react';
import logo from './logo.svg';
import './App.css';
import MyReactApp from './components/CreatingNesting';
import AboutPage from './components/About';
import Profile from './components/Profile';
import ShoppingList from './components/ShoppingList';
import Board from './components/TicTacToe';
import Section from './components/Section';
import Heading from './components/Heading';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MyReactApp/>
        <AboutPage/>
        <Profile/>
        <ShoppingList/>
        <Board/>

      <Section level={1}>
      <Heading>Title</Heading>
      <Section level={2}>
        <Heading>Heading</Heading>
        <Heading>Heading</Heading>
        <Heading>Heading</Heading>
        <Section level={3}>
          <Heading>Sub-heading</Heading>
          <Heading>Sub-heading</Heading>
          <Heading>Sub-heading</Heading>
          <Section level={4}>
            <Heading>Sub-sub-heading</Heading>
            <Heading>Sub-sub-heading</Heading>
            <Heading>Sub-sub-heading</Heading>
          </Section>
        </Section>
      </Section>
    </Section>
    </header>
    </div>
  );
}


export default App;


