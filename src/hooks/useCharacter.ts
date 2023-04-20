import { useState } from "react" 

export const useCharacter = () => {
    
    const [pos, setPos] = useState({x: 3, y: 4})

    const moveLeft = () => {
        setPos(pos => ({
            x: pos.x -1,
            y: pos.y
        }))
    }

    const moveRight = () => {
        setPos(pos => ({
            x: pos.x +1,
            y: pos.y
        }))
    }
    const moveUp = () => {
        setPos(pos => ({
            x: pos.x,
            y: pos.y+1
        }))
    }
    const moveDown = () => {
        setPos(pos => ({
            x: pos.x,
            y: pos.y-1
        }))
    }

    return {
        x: pos.x,
        y: pos.y,
        moveDown,
        moveLeft,
        moveRight,
        moveUp
    }
}