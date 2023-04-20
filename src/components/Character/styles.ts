import styled from "styled-components";

export const Container = styled.div<{ size: number, left: number, top: number }>`
    position: absolute;
    background-color: blue;
    width: ${props => props.size}px;
    height:${props => props.size}px;
    left:${props => props.left}px;;
    top:${props => props.top}px
`;