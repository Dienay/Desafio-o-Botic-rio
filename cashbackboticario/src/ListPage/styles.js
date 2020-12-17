import styled from "styled-components";

export const List = styled.div`
    margin: 0 auto;
    width: 100%;
    max-width: 1350px;
`

export const Title = styled.div`
    h2 {
        border-bottom: 1px solid #C4C4C4;
        padding: 8px 0;
        text-align: center;
    }
`

export const Items = styled.ul`
    padding: 8px;
    margin-bottom: 0;

    li {
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid #C4C4C4;
        padding: 4px;
        padding-bottom: 8px;
        margin-bottom: 8px;
    }

    li:last-child {
        margin-bottom: 40px;
    }

    h3 {
        font-size: 16px;
    }

    p {
        margin: 0;
    }

    @media only screen and (min-width: 500px) {
        li{
            border: 1px solid #C4C4C4;
        }

        li:last-child {
        margin-bottom: 0;
    }
    }

`

export const SmallCard = styled.div`
        border: 1px solid #C4C4C4;
        padding: 8px 16px;
        text-align: center;

        > h3 {
            color: #396C38;
        }

        @media only screen and (min-width: 500px) {
        div {
            display: flex;
        }

        div h3:last-child {
            margin-left: 4px;
        }

        > h3{
            font-size: 2em;
        }
    }
`