import {useEffect, useState} from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    min-height: 500px;
`

const Quests = () => {
    const [address, setAddress] = useState()

    useEffect(() => {
        const add = localStorage.getItem('eye_address');
        if (add) {
            setAddress(add);
        }

      },[]);
    return <Container>11/2022
     </Container>
}

export default Quests 