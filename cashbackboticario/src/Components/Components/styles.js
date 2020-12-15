import styled from 'styled-components'

export const ContainerMenu = styled.div`
    border-top: 1px solid rgba(0, 0, 0, 0.25);
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    height: 49px;
    justify-content: center;
    position: fixed;
    bottom: 0;
    width: 100vw;
    background-color: #fff;

    div {
        align-items: center;
        border-right: 1px solid rgba(0, 0, 0, 0.18);
        display: flex;
        justify-content: center;
        width: 100%;
    }

    div:last-child {
        border-right: none;
    }

    img {
        height: 20px;
        width: 20px;
    }
`