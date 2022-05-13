import React from 'react';
import './App.css';
import StoreCom1 from './storeCom/storeCom1';

import useStore1 from './store/store1'
import useStore2 from './store/store1'
import Header from './components/Header';
import Context from './Helper/Context';
import Footer from './components/Footer';
import Body from './components/Body';

// let models = [{useStore1},{useStore2}]

class Dispatcher {
  data = {}
  callback = {}
  update = (namespace) => {
    console.log('Dispatcher-update', {namespace, callback: this.callback});
    
    if (!this.callback[namespace]) return 
    this.callback[namespace].forEach((callback) => {
      const data = this.data[namespace]
      callback(data)
    })
    
  }
}

const dispatch = new Dispatcher()

function App() {
  console.log('app');
  
  return (
    <div className="App">
      <Context.Provider value={dispatch}>
        <StoreCom1 hook={useStore1} onUpdate={(val) => {
          console.log('appUpdate', val);
          
          dispatch.data['useStore1'] = val
          dispatch.update('useStore1')
        }}/>
        <Header/>
        <Body/>
        <Footer></Footer>
      </Context.Provider>
    </div>
  );
}

export default App;
