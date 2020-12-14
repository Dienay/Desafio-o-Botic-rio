import styled from 'styled-components'

export const ContainerLoading = styled.div`
    align-items: center;
    display: flex;
    height: 100vh;
    justify-content: center;
    width: 100vw;

    img {
        animation: fadein 1.5s ease-in-out alternate infinite;

        @keyframes fadein {
        from { opacity: 1; }
        to { opacity: 0.2; }
        }

        width: 80vw;
    }
`