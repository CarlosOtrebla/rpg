import * as C from './App.styles'
import { Character } from './components/Character'
import { useCharacter } from './hooks/useCharacter'

const App = () => {

  const Char = useCharacter();
  

  return (
    <C.Container>
      <C.Map>
        <Character x={Char.x} y={Char.y} size={20}/>
      </C.Map>
    </C.Container>

  )
}

export default App