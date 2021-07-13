import React, {useState} from 'react'
import styled from 'styled-components'
import { details} from './Api'



const Orders = ({type, price, ticket, date, paymentStatus, pay}) => {
    return (
        <Container>
            <PatentContainer>
                <PatentType>{type}</PatentType>              
                <PatentPrice> {price}</PatentPrice>
            </PatentContainer>

            <TicketContainer>
                <Ticket>Ticket #{ticket}</Ticket>
                <Dash>|</Dash>
                <Date>{date}</Date>
            </TicketContainer>

            <PaymentContainer>
                <PaymentStatus>{paymentStatus}</PaymentStatus>
                {pay ? (
                    <PayButton><TextPay>{pay}</TextPay></PayButton>
                ): null}
                
            </PaymentContainer>
            
        </Container>

    )
}

const Container = styled.div`
    border-bottom: 3px solid #ccc;
    margin-top: 30px;
    margin-bottom: 30px;  
`

const PatentContainer = styled.div`
    display: flex;
    color: #7e44dd;
    position: relative;
    font-size: 18px;
`
const PatentType = styled.div`

`
const PatentPrice = styled.div`
    position: absolute;
    left: 230px;
`

const TicketContainer = styled.div`
    display: flex;
    color: #888;
    position: relative;
    font-size: 18px;
    margin: 10px 0;
`
const Ticket = styled.div`
    
`

const Dash = styled.div`
    position: absolute;
    left:170px;
`

const Date = styled.div`
    position: absolute;
    left: 230px;
`

const PaymentContainer = styled.div`
    display: flex;
    position: relative;
    font-size: 18px;
    margin: 15px 0;
`

const PaymentStatus = styled.div`
    color: #000;
`

const PayButton = styled.button`
    position: absolute;
    background: rgb(24, 163, 163);
    color: white;
    border-radius:8px;
    left: 230px;
    height: 25px;
    text-align: center;
    align-items: center;    
`

const TextPay = styled.p`
    text-align: center;
    margin-top: -4px;
`

export default Orders