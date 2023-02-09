import React from 'react';
import CheckComponent from './components/CheckComponent';
import MyAgGrid from './components/MyAgGrid';
import RoComponentPromesas from './components/RoComponentPromesas';

const App = () => {
  return (
    <div className="App">

        <RoComponentPromesas/>
        <br/>
        <CheckComponent labelOn={'on'} labelOff={'off'}/>
        <MyAgGrid/>

    </div>
  );
}
export default App;