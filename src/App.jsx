import Proyectos from './componentes/proyectos/Proyectos'
import Tec from './componentes/tec/Tec'
import Presentacion from './componentes/presentacion/Presentacion'

import './App.css'
import Footer from './componentes/footer/Footer'

function App() {

  return (<>
    <Presentacion />
    <Tec />
    <Proyectos />
    <Footer />
  </>
  )
}

export default App
