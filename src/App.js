import React, { useState } from 'react';
import './App.css';
import InfiniteScroll from './Components/InfiniteScroll';
import Pagination from './Components/Pagination';

function App() {
  const [view, setView] = useState('pagination');
  return (
    <div className='App'>
      <h1>Welcome to random users</h1>

      <nav className='nav'>
        <button onClick={() => setView('pagination')}>Pagination</button>
        <button onClick={() => setView('infiniteScroll')}>
          Infinite Scroll
        </button>
      </nav>

      {view === 'pagination' ? <Pagination /> : <InfiniteScroll />}
    </div>
  );
}

export default App;
