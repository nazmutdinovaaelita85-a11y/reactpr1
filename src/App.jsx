
import { Header } from "./components/Header/Header"
import { Banner } from "./components/Banner/Banner"
import { Preim } from "./components/Preim/Preim"
import { Forma } from "./components/Forma/Forma"
import { Footer } from "./components/Footer/Footer"
export function App() {

  return (
    <div className="layout">
      < Header />
      <div className="main">
        <Banner />
        <Preim />
        <Forma/>



      </div>
      < Footer/>



    </div>
  )
}


