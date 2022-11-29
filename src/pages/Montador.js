import React from 'react'
import styled from 'styled-components'
import Header from '../components/Header'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import MainContainer from '../components/MainContainer'
import { API_PATH } from '../config'
import CardPiece from '../components/CardPiece'

const Montador = () => {

    const { first } = useParams()
    const [pcPieces, setPcPieces] = useState([])
	const [pieceNow, setPieceNow] = useState()
	const [action, setAction] = useState()
	const [pieces, setPieces] = useState([])

    useEffect(() => {
		requestFirstPieces()
		requestPieces()
	},[])

    const requestFirstPieces = async () => {
		const response = await fetch(`${API_PATH + first}/list`)
		const result = await response.json()
		setPieces(result[first])
		setPieceNow(first)
    }

	const requestPieces = async () => {
		const response = await fetch(`${API_PATH + pieceNow + action}`)
		const result = await response.json()
		if(result !== undefined)
		setPieces(result[pieceNow])
		//TO AQUI
		
	}

    return (
        <>
        <MainContent>
        <Header/>
        <MainContainer>
            <div>Montador</div>
            <p>Primeiro: {first}</p>
			{
				pieces.length === 0
				? <p>Nenhuma peça</p>
				: pieces.map((piece) =>  
					(
					<CardPiece piece={piece} key={piece.id} type={pieceNow} isMontador={true} setAction={setAction} pcPieces={pcPieces} setPieceNow={setPieceNow} setPcPieces={setPcPieces}/>
					)
				)
			}
			<hr/>
			<h3>requestPieces</h3>
        </MainContainer>
        </MainContent>
        </>
    )
}

const MainContent = styled.div`
  color: white;
  height: 900px;
  background: #7700C0;
`

export default Montador