import logo from './logo.svg';

import './App.css';
import Fetch from './components/fetch';
import Counter from './components/Counter';
import ParentComponent from './components/ParentComponent';
import Form from './components/Form';
import CustomForm from './components/CustomForm';
import Apis from './components/Apis';
import Debouncing from './components/Debouncing';

function App() {


  let data=`<p style="font-size:'20px'">this is my House</p>`
 
  return (
    <div className="App">
      <div dangerouslySetInnerHTML={{ __html: data }}>
        
      </div>
      {/* <Fetch/> */}
      {/* <Counter/> */}
      {/* <ParentComponent/>
      <Form/> */}
      {/* <CustomForm/> */}
       <Apis/>
      {/*<Debouncing/> */}
      {/* <Form/> */}
    </div>
  );
}

export default App;
