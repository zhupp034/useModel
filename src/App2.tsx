// import React from 'react';
// import './App.css';
// import StoreCom1 from './storeCom/storeCom1';

// import store1 from './store/store1'
// import Header from './components/Header';
// import Context from './Helper/Context';



class Dispatcher {
  data = {}
  callback = {}
  update = () => {

  }
}

const dispatch = new Dispatcher()

function App() {
  return (
    <div className="App">
      {/* <Context.Provider value={dispatch}>
        <StoreCom1 hook={store1} onUpdate={(val) => {
          dispatch.data['store1'] = val
        }}/>
        <Header/>
      </Context.Provider> */}
    </div>
  );
}

export default App;
