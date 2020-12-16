import styled from "styled-components";

export const Container = styled.div`
    text-align: center;
    justify-self: center;
    width: 100%;
    max-width: 1350px;

    div {
        display: flex;
        display: none;
        align-self: flex-end;
        margin-bottom: 8px;
    }

    @media only screen and (min-width: 500px) {
        display: flex;
        justify-content: space-between;
        padding: 0 32px;

        div {
            display: inherit;
        }
    }
`
