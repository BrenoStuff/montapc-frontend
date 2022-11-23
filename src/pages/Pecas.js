import { useState, useEffect} from 'react'
import styled from 'styled-components'
import Header from '../components/Header'
import MainContainer from '../components/MainContainer'
import CardPiece from '../components/CardPiece'
import { API_PATH } from '../config'

const Pecas = () => {
	const [processors, setProcessors] = useState([])
	const [motherboards, setMotherboards] = useState([])
	const [graphicsCards, setGraphicsCards] = useState([])

	useEffect(() => {
		requestPieces()
	},[])
	
	const requestPieces = async () => {
		const responseProcessor = await fetch(`${API_PATH}processor/list`)
		const resultProcessor = await responseProcessor.json()
		setProcessors(resultProcessor.processor)
		
		const responseMotherboards = await fetch(`${API_PATH}motherboard/list`)
		const resultMotherboards = await responseMotherboards.json()
		setMotherboards(resultMotherboards.motherboard)
		
		const responseGraphicsCards = await fetch(`${API_PATH}graphicscard/list`)
		const resultGraphicsCards = await responseGraphicsCards.json()
		setGraphicsCards(resultGraphicsCards.graphicscard)
	}

	return (
		<>
		<Header/>
		<MainContainer>
			<h1>Peças</h1>
			<DivRow>
				<div>
					<h3>Listagem de todas</h3>
				</div>
				<div>
					<h3>Processadores list</h3>
					{
						processors.length === 0
						? <p>Nenhuma peça</p>
						: processors.map((processor) =>  
							(
							<CardPiece piece={processor} key={processor.id}/>
							)
						)
					}
				</div>
				<div>
					<h3>Placa mães</h3>
					{
						motherboards.length === 0
						? <p>Nenhuma peça</p>
						: motherboards.map((motherboard) =>  
							(
							<CardPiece piece={motherboard} key={motherboard.id}/>
							)
						)
					}
				</div>
				<div>
					<h3>Placas de vídeo</h3>
					{
						graphicsCards.length === 0
						? <p>Nenhuma peça</p>
						: graphicsCards.map((graphicsCard) =>  
							(
							<CardPiece piece={graphicsCard} key={graphicsCard.id}/>
							)
						)
					}
				</div>
			</DivRow>
		</MainContainer>
		</>
	)
}

const DivRow = styled.div`
    display: flex;
    flex-direction: row;
    & div {
        margin: 10px 0;
        width: 200px;
    } & h3 {
        margin: 5px 0;
    }
`

export default Pecas