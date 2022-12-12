import styled from 'styled-components'
import CardProcessor from './cards/CardProcessor'
import CardMotherboard from './cards/CardMotherboard'
import Cardgraphicscard from './cards/CardGraphicsCard'
import { API_PATH } from '../config'
import { useState, useEffect } from 'react'
import PreparePiece from '../helpers/PreparePiece'

const ListPieces = ({type, action = '/list', role = "view", setPcPieces, pcPieces, showModal, setShowModal, setPieceToEdit}) => {

    const [pieces, setPieces] = useState([])

    useEffect(() => {
        loadPiece()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [showModal, type])

    const loadPiece = async () => {
		const response = await fetch(`${API_PATH + type + action}`, action === '/list' ? {} : {
            method: 'POST',
            body: JSON.stringify(PreparePiece(pcPieces, "processor"))
        })
		const result = await response.json()
        setPieces(result[type])
    }

    return (
        <>
            <CardsBackground>
                <ScrollDiv>
                    {//eslint-disable-next-line
                    pieces.length > 0 ? pieces.map((piece) => {
                        if (type === 'motherboard') {
                            return <CardMotherboard key={piece.id} piece={piece} role={role} setPieces={setPieces} pieces={pieces} setPcPieces={setPcPieces} pcPieces={pcPieces} setShowModal={setShowModal} setPieceToEdit={setPieceToEdit}/>
                        } else if (type === 'processor') {
                            return <CardProcessor key={piece.id} piece={piece} role={role} setPieces={setPieces} pieces={pieces} setPcPieces={setPcPieces} pcPieces={pcPieces} setShowModal={setShowModal} setPieceToEdit={setPieceToEdit}/>
                        } else if (type === 'graphicscard') {
                            return <Cardgraphicscard key={piece.id} piece={piece} role={role} setPieces={setPieces} pieces={pieces} setPcPieces={setPcPieces} pcPieces={pcPieces} setShowModal={setShowModal} setPieceToEdit={setPieceToEdit}/>
                        }
                    }) : "Carregando peças..."}
                </ScrollDiv>
            </CardsBackground>
        </>

    )
}

const ScrollDiv = styled.div`
    color: #303030;
    width: 760px;
    height: 288px;
    display: grid;
    gap: 52px;
    grid-auto-flow: column;
    grid-auto-columns: 21%;
    overflow-x: auto;
    overscroll-behavior-inline: contain;
`
const CardsBackground = styled.div`
    width: 800px;
    height: 332px;
    display: flex;
    background: #FFFFFF;
    border-radius: 12px;
    justify-content: center;
    align-items: center;
    margin: 0 0 33px 0;
`

export default ListPieces