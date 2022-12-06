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
	const [action, setAction] = useState()
	const [pieceNow, setPieceNow] = useState({})
	const [pieces, setPieces] = useState([])

	useEffect(() => {
		loadFirstPiece(first)
	}, [])

	const loadFirstPiece = async (piece) => {
		const response = await fetch(`${API_PATH + piece}/list`)
		const result = await response.json()
		setPieces(result[piece])
		setPieceNow(piece)
		setPcPieces([{type: piece}])
    }

	const loadNextPiece = async () => {
		const response = await fetch(`${API_PATH + pieceNow.type + action}`, {
			method: 'POST',
			body: pieceNow.data,
		})
		const result = await response.json()
		setPieces(result[pieceNow.type.type])
	}

    return (
        <>
        <MainContent>
        <Header/>
        <MainContainer>
            <div>Montador</div>
            <h3>Primeiro: {first}</h3>
			{
				pcPieces.length === 0
				? <p>Nenhuma peça</p>
				: pieces.map((piece) =>  
					(
					<CardPiece piece={piece} key={piece.id} isMontador={true}/>
					)
				)
			}
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