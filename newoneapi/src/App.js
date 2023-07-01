import './App.css';
import CountriesList from './components/countries/CountriesList';
import CounterProvider from './components/contexts/CounterProvider';
import Counter from '../src/components/counter/Counter'
function App() {
  return (
    <>
     <CounterProvider>
     <div className='container'>
     {/*<CountriesList/>*/ }
      <Counter/>
      </div>      
     </CounterProvider>
    </>
  );
}

export default App;
