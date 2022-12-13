import { FiTrash2 } from 'react-icons/fi'
import styled from 'styled-components'
import { API_PATH } from '../../config'
import { useState, useEffect } from 'react'

const CardComputer = ({computer, setComputers, computers}) => {

  const { id, processor, graphicscard, motherboard } = computer
  const { cardComputer, setCardComputer } = useState({})

  useEffect(() => {
    loadCardComputer()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const deleteComputer = async (id) => {
    const response = await fetch(`${API_PATH}computer/delete`, {
      method: "DELETE",
      body: JSON.stringify({ id: id }),
    })
    const result = await response.json()
    if (result?.success) {
      const computersFiltered = computers.filter((computer) => {
        return computer.id !== id
      })
      setComputers(computersFiltered)
    } else {
      console.error(result?.error)
    }
  }

  const loadCardComputer = async () => {
    const responseProcessor = await fetch(`${API_PATH}processor/list-by-id`, {
      method: "POST",
      body: JSON.stringify({ id: processor })
    })
    const resultProcessor = await responseProcessor.json()

    const responseGraphicsCard = await fetch(`${API_PATH}graphicscard/list-by-id`, {
      method: "POST",
      body: JSON.stringify({ id: graphicscard })
    })
    const resultGraphicsCard = await responseGraphicsCard.json()

    const responseMotherboard = await fetch(`${API_PATH}motherboard/list-by-id`, {
      method: "POST",
      body: JSON.stringify({ id: motherboard })
    })
    const resultMotherboard = await responseMotherboard.json()

    setCardComputer({
      processor: resultProcessor.processor,
      graphicscard: resultGraphicsCard.graphicscard,
      motherboard: resultMotherboard.motherboard
    })
  }


  return (
    <Holder>
            <Background>
                <TextBox>
					{
						cardComputer === undefined ? "" : <>
							<h3>{CardComputer.processor.name}</h3>
							<h3>{CardComputer.motherboard.name}</h3>
							<h3>{CardComputer.graphicscard.name}</h3>
						</>
					}
                </TextBox>
            </Background>
            <DivButton><Button role="admin" onClick={() => deleteComputer(id)}> <FiTrash2/> </Button></DivButton>
        </Holder>
    )
}

const TextBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 276px;
  width: 100%;
  color: #303030;
  padding: 5px 0 0 0;
  & h3 {
      font-weight: 700;
      font-size: 16px;
      line-height: 20px;
  }
`

const Holder = styled.div`
    width: 150px;
    height: 247px;
    position: relative;
`

const Background = styled.div`
    width: 150px;
    height: 226px;
    margin: 0 15px 0 0;
    border: 1px solid #303030;
    border-radius: 7px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const DivButton = styled.div`
    position: absolute;
    color: white;
    width: 85px;
    height: 31px;
    left: 32px;
    top: 215px;
`
const Button = styled.button`
    color: white;
    width: 100%;
    height: 100%;
    background: #d91818;
    border-radius: 7px;
    border: none;
    &:hover {
        cursor: pointer;
        background: #ad1d1d;
    }
`

export default CardComputer