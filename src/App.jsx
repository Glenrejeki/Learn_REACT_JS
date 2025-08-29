import Header from "./Header.jsx"
import MenuCafe from "./MenuCafe.jsx"
import Mood from "./Mood.jsx"
import Button from "./Button.jsx"
import Button2 from "./Button2.jsx"

function App(){
  return (
    <div >
      <Mood hari="senin" mood = "😞" />
      <Mood hari="Jumat" mood = "😄" />
     <Header/>
     <MenuCafe/>
     <Button/>
     <Button2/>
    </div>
    
  )
}

export default App