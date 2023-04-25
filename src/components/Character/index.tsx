import React from 'react';
import * as C from './styles';
import { CharacterSides } from '../../types/CharacterSides';

type Props = {
  x: number;
  y: number;
  size: number;
  side: CharacterSides;
  name: string;
};

export const Character = ({ size, x, y, side, name }: Props) => {
  const sides = {
    down: 0,
    left: -30,
    right: -60,
    up: -90,
  };

  return (
    <C.Container
      size={size}
      left={x * size}
      top={y * size}
      sidePos={sides[side] ?? 0}
    >
      <C.charName>{name}</C.charName>
      
    </C.Container>
  );
};
