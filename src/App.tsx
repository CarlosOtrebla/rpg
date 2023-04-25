/* eslint-disable indent */
import React from 'react';
import { useEffect } from 'react';
import * as C from './App.styles';
import { Character } from './components/Character';
import { useCharacter } from './hooks/useCharacter';


const App = () => {
  const Char = useCharacter('Otrebla');
  const Char2 = useCharacter('João');

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
  }, []);

  const handleKeyDown = (e: KeyboardEvent) => {
    
    switch (e.code) {
      case 'KeyA':
        Char.moveLeft();
        break;
      case 'ArrowLeft':
        Char2.moveLeft();
        break;

      case 'KeyW':
        Char.moveUp();
        break;
      case 'ArrowUp':
        Char2.moveUp();
        break;

      case 'KeyD':
        Char.moveRight();
        break;
      case 'ArrowRight':
        Char2.moveRight();
        break;

      case 'KeyS':
        Char.moveDown();
        break;
      case 'ArrowDown':
        Char2.moveDown();
        break;
    }
  };

  return (
  
    <C.Container>
      <C.Map>
        
        <Character x={Char.x} y={Char.y} size={30} side={Char.side} name={Char.name} />
        <Character x={Char2.x} y={Char2.y} size={30} side={Char2.side} name={Char2.name}/>
      </C.Map>
    </C.Container>
  );
};

export default App;
