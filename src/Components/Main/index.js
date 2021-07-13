import React from 'react'
import styled from 'styled-components'

import Sidebar from '../Sidebar'
import Middle from '../Middle'
import Right from '../Right'

const Main = () => {
    return (
        <Container>
            <Sidebar />
            <Middle />
            <Right />
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    background: #eff2f8;
    
`

export default Main
