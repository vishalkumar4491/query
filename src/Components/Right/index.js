import React, {useState} from 'react'
import styled from 'styled-components'

// import { IoIosSend } from 'react-icons/fa';
import SendIcon from '@material-ui/icons/Send';
import Accordion from './Accordion'
import './style.css'


const Right = () => {
    const [text, setText] = useState('')

    const inputEvent = (e) => {
        setText(e.target.value)
    }

    return (
        <RightContainer>
            <Accordion /> 
                            
            <textarea type="text" name="name" rows="7"  placeholder="Type your message here..." value={text} onChange={inputEvent}/>  

            <Buttons>
                <PaymentButton>Make Payment</PaymentButton>
                <SendButton>Send</SendButton>
            </Buttons>                                 
        </RightContainer>
    )
}

const RightContainer = styled.div`
    width: 45%;
    height: 100vh;
    margin-left:4%;
    margin-right:8%;
    margin-top:3%;
        
    /* @media (max-width: 768px) {
    
    width: 90%;
    margin-left: 2%;
  } */
`
const Buttons = styled.div`
    position: relative;
    margin-left: 15px;   
`

const PaymentButton = styled.button`
    background: rgb(24, 163, 163);   
`
const SendButton = styled.button`
    position: absolute;
    right: -15px;
`

export default Right
