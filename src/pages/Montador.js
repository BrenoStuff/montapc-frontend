import React from 'react'
import styled from 'styled-components'
import Header from '../components/Header'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import MainContainer from '../components/MainContainer'
import ListPieces from '../components/ListPieces'
import { API_PATH } from '../config'

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
                graphicsCard: pcPieces.graphicsCard.data.id
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

            { pcPieces?.processor ? <ListPieces type="motherboard" role="montador" setPcPieces={setPcPieces} pcPieces={pcPieces}/> : "" }

            { pcPieces?.motherboard ? <ListPieces type="graphicscard" role="montador" setPcPieces={setPcPieces} pcPieces={pcPieces}/> : "" }

            { pcPieces?.graphicsCard ? <button onClick={() => createComputer()}> TERMINAR </button> : "" }
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