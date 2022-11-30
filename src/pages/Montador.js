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
	
    const [pcPieces, setPcPieces] = useState({})
	const [pieceNow, setPieceNow] = useState()
	const [action, setAction] = useState()
	const [pieces, setPieces] = useState([])

	useEffect(() => {
		loadFirstPiece(first)
	}, [])

	const loadFirstPiece = async (piece) => {
		const response = await fetch(`${API_PATH + piece}/list`)
		const result = await response.json()
		setPieces(result[piece])
		setPieceNow(piece)
    }

	const loadNextPiece = async () => {
		const response = await fetch(`${API_PATH + pieceNow + action}`, {
			method: 'POST',
			body: 
		})
		const result = await response.json()
		console.log('console.log pieceNow: ' + pieceNow)
		setPieces(result[pieceNow])
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
					<CardPiece piece={piece} key={piece.id} isMontador={true} setAction={setAction} pieceNow={pieceNow} setPieceNow={setPieceNow} pcPieces={pcPieces} setPcPieces={setPcPieces}/>
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