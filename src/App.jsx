import Proyectos from './componentes/proyectos/Proyectos'
import Tec from './componentes/tec/Tec'
import Presentacion from './componentes/presentacion/Presentacion'

import './App.css'
import Footer from './componentes/footer/Footer'
import Menu from './componentes/menu/Menu'

function App() {

  return (<>
  {/* <Menu /> */}
    <Presentacion />
    <Proyectos />
    <Tec />
    <Footer />
  </>
  )
}

export default App
