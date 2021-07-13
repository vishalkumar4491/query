import React, {useState} from 'react'
import { details } from './Api'

import AccordionClosed from './AccordionClosed'

const Accordion = () => {

    const [data, setData] = useState(details)

    return (
        <>
            <section>
                {
                    data.map((curElem) => {
                        return <AccordionClosed key={curElem.id} {...curElem} />
                    })
                }
            </section>
        </>
    )
}

export default Accordion
