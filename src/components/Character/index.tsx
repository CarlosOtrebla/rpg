import * as C from './styles'

type Props = {
    x: number;
    y: number;
    size: number
}

export const Character = ({size, x, y}: Props) => {
    // const size = 30;
    return (
        <C.Container
            size={size}
            left={x*size}
            top={y*size}
            >
            
        </C.Container>
    )
}