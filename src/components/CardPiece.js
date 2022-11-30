import styled from 'styled-components'

const CardPiece = ({ piece, onClick, pieceNow, isMontador, setAction, setPieceNow, pcPieces, setPcPieces }) => {

    const { image, name, description, price } = piece

    const handleAddPiece = () =>{
        if (Object.keys(pcPieces).length === 0){
            setAction(`by${pieceNow}`)
            if (pieceNow === 'processor') {
                setPieceNow('motherboard')
            } else {
                setPieceNow('processor')
            }
        }
        if (Object.keys(pcPieces) === 1) {
            if (Object.keys(pcPieces)[0] === 'processor'){
                setAction('byMotherboard')
                setPieceNow('graphicsCard')
            }
            if (Object.keys(pcPieces)[0] === 'graphicscard') {
                setAction('byProcessor')
                setPieceNow('motherboard')
            }
            else {
                setAction('byProcessor')
            }
        }
        if (Object.keys(pcPieces) === 2) {
            console.log('ACABOU')
        }
    }

    return (
        <CardUser onClick={onClick}>
            <Img src={image} alt={name} />
            <TextBox>
                <h3>{name}</h3>

                { isMontador ? <button onClick={() => handleAddPiece()}> add </button> : "" }
            </TextBox>
        </CardUser>
        )
}

const Img = styled.img`
    background: #CCC;
    border-radius: 50%;
    height: 50px;
    width: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin:0 10px 0 0;
`

const TextBox = styled.div`
    color: black;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 0 0 10px;
`

const CardUser = styled.div`
    width: 300px;
    background: #EEE;
    display: flex;
    padding: 10px;
    border-radius: 10px;
    margin: 15px;
`

export default CardPiece