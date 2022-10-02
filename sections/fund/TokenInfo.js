import {useToken  } from 'wagmi'
import styled from 'styled-components'
import Subtitle from '../../components/typography/Subtitle'

const Container = styled.div`
  margin-top: 5%;
`


const TokenInfo = () => {
    const { data, isError, isLoading } = useToken({
        address: '0x2107B0F3bB0ccc1CcCA94d641c0E2AB61D5b8F3E',
        chainId: 80_001,
        formatUnits: 'ether'
      })

      if (isLoading) return <div>Fetching token…</div>
      if (isError) return <div>Error fetching token</div>
      return <Container>
        <Subtitle text='Token info'/>
      <div>Token: {data?.symbol}</div> 
      <div>Token name: {data?.name}</div> 
      <div>Total Supply: {data?.totalSupply.formatted}</div>
        
      </Container>
}

export default TokenInfo