import React from 'react'
import styled from 'styled-components'
import Header from '../components/Header'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import MainContainer from '../components/MainContainer'
import ListPieces from '../components/ListPieces'
import { API_PATH } from '../config'
import NextPiece from '../helpers/NextPiece'
import NextAction from '../helpers/NextAction'

const Montador = () => {

    const { first } = useParams()
	
    const [pcPieces, setPcPieces] = useState({})
    const [success, setSuccess] = useState({hasSuccess: false, message: "Ação realizada com sucesso!"})
    const [error, setError] = useState({hasError: false, message: "Error no servidor! Por favor, tente novamente mais tarde!"})

    const createComputer = async () => {
		const response = await fetch(`${API_PATH}computer/create`, {
            method: 'POST',
            body: JSON.stringify({
                processor: pcPieces.processor.data.id,
                motherboard: pcPieces.motherboard.data.id,
                graphicscard: pcPieces.graphicscard.data.id
            })
        })
		const result = await response.json()
        if (result?.success) {
            setSuccess({
                hasSuccess: true,
                message: "Peça criada com sucesso!"
            })
            setInterval(setSuccess({...success, hasSuccess: false}), 1000 * 5);
          } else if(result?.error){
            if(result?.error?.message){
              setError({
                hasError: true,
                message: result.error.message 
              })
              setInterval(() => setError({...error, hasError: false}), 1000 * 5);
            } else{
              setError({...error, hasError: true})
              setInterval(() => setError({...error, hasError: false}), 1000 * 5);
            }
        }
    }


    return (
        <>
        <MainContent>
        <Header/>
        <MainContainer>
            <div>Montador</div>
			        <ListPieces type={first} role="montador" setPcPieces={setPcPieces} pcPieces={pcPieces}/>

              { Object.keys(pcPieces).length >= 1 ? <ListPieces type={NextPiece(pcPieces, 1)} action={NextAction(pcPieces, 1)} role="montador" setPcPieces={setPcPieces} pcPieces={pcPieces}/> : "" }

              { Object.keys(pcPieces).length >= 2 ? <ListPieces type={NextPiece(pcPieces, 2)} action={NextAction(pcPieces, 2)} role="montador" setPcPieces={setPcPieces} pcPieces={pcPieces}/> : "" }

              { Object.keys(pcPieces).length >= 3 ? <button onClick={() => createComputer()}> TERMINAR </button> : "" }
        </MainContainer>
        </MainContent>
        </>
    )
}

const MainContent = styled.div`
  color: white;
  background: #7700C0;
`

export default Montador