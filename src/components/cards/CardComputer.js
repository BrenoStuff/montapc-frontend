import { FiTrash2 } from 'react-icons/fi'
import styled from 'styled-components'
import { API_PATH } from '../../config'
import { useState, useEffect } from 'react'
import Modal from '../Modal'

const CardComputer = ({computer, setComputers, computers}) => {

  const { id, processor, graphicscard, motherboard } = computer
  const [ cardComputer, setCardComputer ] = useState({})
  const [ showModal, setShowModal] = useState(false)

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
    <>
    <Holder onClick={() => setShowModal(true)}>
            <Background>
                <TextBox>
                  { cardComputer?.processor ? <h3> • {cardComputer.processor.name} </h3> : "" }
                  { cardComputer?.motherboard ? <h3> • {cardComputer.motherboard.name } </h3> : "" }
                  { cardComputer?.graphicscard ? <h3> • {cardComputer.graphicscard.name } </h3> : "" }
                </TextBox>
            </Background>
            <DivButton><Button role="admin" onClick={() => deleteComputer(id)}> <FiTrash2/> </Button></DivButton>
        </Holder>

      <Modal showModal={showModal} setShowModal={setShowModal}>
        <h1>Informações computador</h1>
        { cardComputer?.processor ? <>
          <h3>Processador</h3>
          <p>Nome: {cardComputer.processor.name}</p>
          <p>Descrição: {cardComputer.processor.description}</p>
          <p>Socket: {cardComputer.processor.socket}</p>
        </> : "erro processor"}
        { cardComputer?.motherboard ? <>
          <h3>Placa mãe</h3>
          <p>Nome: {cardComputer.motherboard.name}</p>
          <p>Descrição: {cardComputer.motherboard.description}</p>
          <p>TypeMemory: {cardComputer.motherboard.typememory}</p>
        </> : "erro motherboard"}
        { cardComputer?.graphicscard ? <>
          <h3>Placa de vídeo</h3>
          <p>Nome: {cardComputer.graphicscard.name}</p>
          <p>Descrição: {cardComputer.graphicscard.description}</p>
          <p>PciExpress: {cardComputer.graphicscard.pciexpress}</p>
        </> : "erro graphicscard"}
      </Modal>
    </>
    )
}

const TextBox = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 276px;
  width: 150px;
  color: #303030;
  padding: 5px 0 0 0;
  & h3 {
      text-align: center;
      font-weight: 700;
      font-size: 16px;
      line-height: 20px;
  }
`

const Holder = styled.div`
    width: 150px;
    height: 247px;
    position: relative;
    margin: 0 0 10px 0;
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