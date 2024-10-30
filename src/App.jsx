import './App.css';
import ComponenteA from './components/componenteA';
import ComponenteB from './components/componenteB';

function App() {
  
  return (
    <>
      <div className='box'>
        < ComponenteA
          emoji={miemoji}
          titulo="Viajes Aventura"
        />
        <ComponenteB
          textoBtn={miBoton}
        />
      </div>
    </>
  )
}

export default App;
