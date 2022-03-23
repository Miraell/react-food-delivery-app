import './App.sass';
import React from 'react';
import {Cards} from './components/Cards';
import {Categories} from './components/Categories';
import {Header} from './components/Header';
import {RestrauntsList} from './components/RestrauntList';

function App() {
  return (
    <div className="App">
      <div className="header__wrapper">
        <Header />
      </div>

      <main>
        <Cards />
        <Categories />
        <RestrauntsList />
      </main>
    </div>
  );
}

export default App;
