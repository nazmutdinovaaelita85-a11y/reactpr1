// компонент всегда пишется с заглавн букв

import { Banner } from "./components/Banner/Banner"
import { Catalog } from "./components/Catalog/Catalog"
import { Footer } from "./components/Footer/Footer"
import { Header } from "./components/Header/Header"
import { Routing } from "./Routing/Routing"

export function App() {
  return (
    <div className="layout">
      < Header />

      <Routing />
      
      < Footer />


    </div>
  )
}


