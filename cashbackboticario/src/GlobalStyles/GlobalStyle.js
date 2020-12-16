import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-rows: 1fr 4fr;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100vw;

`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 400px;
    padding: 40px 0;
    width: 90vw;

    h2 {
        margin-bottom: 50px;
    }

    input {
        border-radius: 0;
        border: 1px solid #C4C4C4;
        display: block;
        margin-bottom: 8px;
        padding: 8px;
        width: 100%;
        width: 320px;
    }

    button {
        border-radius: 0;
        font-size: 14px;
        font-weight: bold;
        margin-top: 8px;
        text-transform: uppercase;
        width: 320px;
    }

    @media only screen and (min-width: 500px) {
        border: 1px solid #C4C4C4;
    }
    
`