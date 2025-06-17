import React, { useState } from 'react';
import Header from './components/Header';
import Intro from './components/Intro';
import TabSwitcher from './components/TabSwitcher'

function App() {

  


  return (
    <>
      <div>
        <Header />
        <main className='mainContent'>
          <Intro />
          <TabSwitcher />
        </main>
      </div>
    </>
  )
}

export default App;
