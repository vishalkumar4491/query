import React, {useState} from 'react'
import './style.css'
import styled from 'styled-components'

const AccordionDetails = ({date, content, mail, time}) => {
    const [show, setShow] = useState(false)

    return (     
        <>
            {/* if closed */}
            {!show ? 
            <ClosedContainer onClick={() => setShow(!show)}>
                <LeftSide>
                    <div>
                        {mail}
                    </div>
                    <div>
                        {content.slice(0, 43) + '...'}
                    </div>
                </LeftSide>
                <RightSide>
                    <div>
                        {date}
                    </div>
                    <div>
                        {time}
                    </div>
                </RightSide>                             
            </ClosedContainer>
            
            : 
            
            // if open
            <OpenContainer onClick={() => setShow(!show)}>
                <Top>
                    <div>
                        {mail}
                    </div>
                    <div>
                        {date}
                        {time}
                    </div>

                    <MiddleBorder />
                </Top>
                <Bottom>
                    <p> {content} </p> 
                </Bottom>                             
            </OpenContainer>}            
        </>
    )
}


const ClosedContainer = styled.div`
  padding: 8px 8px;
  border: 2px solid #ccc;
  border-radius: 8px;
  margin: 8px;
  width: 100%;

  /* overflow: hidden; */
  /* resize: none; */
  font-size: 18px;
  margin-top: 30px;
  background: white;
  position: relative;
  color: rgb(126, 123, 123);
`

const LeftSide = styled.div`
  margin-left: 10px;
`

const RightSide = styled.div`
  position: absolute;
  right: 25px;
  top: 5px;
`

const OpenContainer = styled.div`
  padding: 8px 8px;
  border: 2px solid #ccc;
  border-radius: 8px;
  margin: 8px;
  width: 100%;
  font-size: 18px;
  margin-top: 30px;
  background: rgb(248, 244, 244);
  position: relative;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
`

const MiddleBorder = styled.div`
  padding-bottom: 5px;
  border-bottom: 2px solid #ccc;
  margin: 0 -0.5em;
  border-radius: 8px;
`

const Top = styled.div`

`

const Bottom = styled.div`
  margin-top: 5px;
` 

export default AccordionDetails
