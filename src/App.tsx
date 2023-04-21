import { useEffect } from 'react'
import * as C from './App.styles'
import { Character } from './components/Character'
import { useCharacter } from './hooks/useCharacter'


const App = () => {

  const Char = useCharacter();

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)

  }, []);

  const  handleKeyDown = (e: KeyboardEvent) => {
    console.log(e.code)
    switch(e.code) {
      case 'KeyA':
      case 'ArrowLeft':
        Char.moveLeft();
      break;
      case 'KeyW':
      case 'ArrowUp':
        Char.moveUp();
      break;
      case 'KeyD':
      case 'ArrowRight':
        Char.moveRight();
      break;
      case 'KeyS':
      case 'ArrowDown':
        Char.moveDown();
      break;
    }
  }

  

  return (
    <C.Container>
      <C.Map>
        <Character x={Char.x} y={Char.y} size={30}/>
      </C.Map>
    </C.Container>

  )
}

export default App