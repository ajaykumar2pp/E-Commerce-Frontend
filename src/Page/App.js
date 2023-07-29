import React from 'react'
import NavbarComp from '../components/NavbarComp'
import FooterComp from '../components/FooterComp'

const App = () => {
  return (
    <>
      <NavbarComp />
      <div className="App">
        <h3>E- Com Product Available</h3>
      </div>
      <FooterComp  />
    </>
  )
}

export default App