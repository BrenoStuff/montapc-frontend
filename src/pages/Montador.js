import React from 'react'
import styled from 'styled-components'
import Header from '../components/Header'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import MainContainer from '../components/MainContainer'
import ListPieces from '../components/ListPieces'

const Montador = () => {

    const { first } = useParams()
	
    const [pcPieces, setPcPieces] = useState({})

    return (
        <>
        <MainContent>
        <Header/>
        <MainContainer>
            <div>Montador</div>
			<ListPieces type={first} role="montador" setPcPieces={setPcPieces} pcPieces={pcPieces}/>

            { pcPieces?.processor ? <ListPieces type="motherboard" role="montador" setPcPieces={setPcPieces} pcPieces={pcPieces}/> : "" }

            { pcPieces?.motherboard ? <ListPieces type="graphicscard" role="montador" setPcPieces={setPcPieces} pcPieces={pcPieces}/> : "" }

            { pcPieces?.graphicsCard ? <button> continuar </button> : "" }
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