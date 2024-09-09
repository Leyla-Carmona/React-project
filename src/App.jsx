import './App.css';
import ComponenteA from './components/componenteA';
import ComponenteB from './components/componenteB';

function App() {
  const miemoji = "🛫"
  const miBoton = "Buscar Destino"
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
