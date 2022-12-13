import styled from 'styled-components'
import { useEffect, useState } from 'react'
import CardComputer from './cards/CardComputer'
import { API_PATH } from '../config'

const ListComputers = () => {
  const [computers, setComputers] = useState([])

  useEffect(() => {
    loadComputers()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const loadComputers = async () => {
  const response = await fetch(`${API_PATH}computer/list`)
  const result = await response.json()
  console.log(JSON.stringify(result))
  setComputers(result.computer)
  }

  return (
    <CardsBackground>
      <GridDiv>
          {computers.length === 0 ? "" : computers.map((computer) => (
            <CardComputer key={computer.id} computer={computer} setComputers={setComputers} computers={computers}/>
          )
          )}
      </GridDiv>
    </CardsBackground>
  )
}

const GridDiv = styled.div`
  color: #303030;
  width: 760px;
  height: 288px;
  display: grid;
  margin: 20px 0 0 0;
  grid-auto-flow: column;
  grid-auto-columns: 25%;
`

const CardsBackground = styled.div`
  color: #303030;
  width: 800px;
  height: auto;
  display: flex;
  background: #FFFFFF;
  border-radius: 12px;
  justify-content: center;
  align-items: center;
  margin: 0 0 33px 0;
`

export default ListComputers