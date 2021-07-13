import React, {useState} from 'react'
// import {MiddleContainer, DivContainer} from './style'
import styled from 'styled-components'
import './style.css'

import Orders from './Orders'

import {details} from './Api'

const Index = () => {

    const [data, setData] = useState(details)

    return (
        <Container>

            <h1>Chat our legal expert for any query</h1>

            <DivContainer>
                <h3>Services/Orders</h3>

                <div>
                    {
                        data.map((elem) => {
                            return <Orders key={elem.id} {...elem} />
                        })
                    }
                </div>


            </DivContainer>
            
        </Container>
    )
}

const Container = styled.div`
    width:30%;
    
    height: 100vh;
    margin-left: 2.5%;
    margin-right: 2%;
    margin-top: 1%;
    

    h1{
        margin-bottom: 15px;
    }
`
const DivContainer = styled.div`
    border: 2px solid #ccc;
    background-color: white;
    width: 95%;
    height: auto;
    margin-left: 5%;
    
    border-radius: 8px;
    padding-left: 20px;
    padding-top: 20px;
    padding-right: 10px;

    

    h3{
        font-weight: 400;
        font-size: 22px;
        margin-bottom: 20px;
    }
`



export default Index
