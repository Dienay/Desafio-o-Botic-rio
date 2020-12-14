import styled from "styled-components";

export const Container = styled.div`
    
`

export const Header = styled.div`
    h2 {
        border-bottom: 1px solid #C4C4C4;
        padding: 8px 0;
        text-align: center;
    }
`

export const Items = styled.ul`
    padding: 8px;

    li {
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid #C4C4C4;
        padding: 4px;
        padding-bottom: 8px;
        margin-bottom: 8px;
    }

    li:last-child {
        margin-bottom: 32px;
    }

    h3 {
        font-size: 16px;
    }

    p {
        margin: 0;
    }

`

export const SmallCard = styled.div`
        border: 1px solid #C4C4C4;
        padding: 8px 16px;
        text-align: center;

        h3:last-child {
            color: #396C38;
        }
`