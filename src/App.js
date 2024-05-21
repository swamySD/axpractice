import logo from './logo.svg';

import './App.css';
import Fetch from './components/fetch';
import Counter from './components/Counter';
import ParentComponent from './components/ParentComponent';
import Form from './components/Form';
import CustomForm from './components/CustomForm';
import Apis from './components/Apis';
import Debouncing from './components/Debouncing';
import Memo from './components/Memo';
import { useTranslation } from 'react-i18next';
import Sorting from './components/sorting';
import MultipleFilters from './components/MultiSorting';

function App() {
  const {t,i18n} =useTranslation()
  let data=`<p style="font-size:'20px'">this is my House</p>`
  
  const languages=[
    {code:'en',lang:'English'},
    {code:'fr',lang:'French'},
    {code:'hi',lang:'hindi'},
  ]

  const LanguageSelector=(code)=>{
    i18n.changeLanguage(code)
    console.log(code)
  }

  return (
    <div className="App">
      <div dangerouslySetInnerHTML={{ __html: data }}>
        
      </div>
      {/* <Fetch/> */}
      {/* <Counter/> */}
      {/* <ParentComponent/>
      <Form/> */}
      {/* <CustomForm/> */}
       {/* <Apis/>
      <Debouncing/> */}
      {/* <Form/> */}
      <div className='btn-container'>
        {
          languages.map((lng)=>{
            return(
              <button key={lng.code} onClick={()=>LanguageSelector(lng.code)} className={lng.code === i18n.language ? "selected-lang":'lang-button'}>{lng.lang}</button>
            )
          })
        }
      </div>
      <h1>{t('greeting')}</h1>
      <Memo/>
      <Sorting/>
      <MultipleFilters/>
    </div>
  );
}

export default App;
