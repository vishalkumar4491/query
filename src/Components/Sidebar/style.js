import styled from "styled-components"

export const SideContainer = styled.div`
    width: 16%;
    height: 100vh;
    background: #fff;

    @media (max-width: 768px) {
    
    width: 0%;
    height: 0%;
  }
`

export const ButtonWrapper= styled.div`
    display: flex;
`

export const PaymentButton= styled.button`
    background: cyan;
`