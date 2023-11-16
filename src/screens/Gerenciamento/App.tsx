// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import senaiLogo from '../../assets/sesi-senai.png'
import logo from '../../assets/logo.png'

import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>

      <header>
          <div className="logoDiv">
              <img src={senaiLogo} alt="SESI SENAI" className='senaiLogo'/>
          </div>
          <div className="agendas">
              <img src={logo} alt="Agenda S" className='logo'/>
              <p className="headerText">Agenda S</p>
          </div>
      </header>

        <div className="container">
            <img src={senaiLogo} alt="SESI SENAI" className='senaiLogoMid'/>
            <div className="buttonsDiv">
                <p className="divTitle">Faça seu Login</p>
                <input className="input" type="text" placeholder="E-mail institucional"/>
                <input className="input" type="password" placeholder="Senha"/>
                <a href="./home.html"><button className="buttonBlue"><p className="buttonText">Entrar</p></button></a>
            </div>
        </div>

    </>
  )
}

export default App
