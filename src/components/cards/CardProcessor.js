import styled from 'styled-components'
import { useEffect, useState } from 'react'
import { FiTrash2, FiEdit2 } from 'react-icons/fi'
import { API_PATH } from '../../config'
import Modal2 from '../Modal2'

const CardProcessor = ({piece, role, setPieces, pieces, setPcPieces, pcPieces, setShowModal, setPieceToEdit}) => {
    const { id, name, description, image } = piece

    const [isSelected, setIsSelected] = useState(false)
    const [ showModal2, setShowModal2 ] = useState(false)

    useEffect(() => {
        handleIsSelected()
    // eslint-disable-next-line
    }, [pcPieces])

    const handleIsSelected = () => {
        if (pcPieces?.processor) {
            if (pcPieces.processor.data.id === id) {
                setIsSelected(true)
            } else {
                setIsSelected(false)
            }
        } else {
            setIsSelected(false)
        }
    }

    const handleAddPiece = () => {
        setPcPieces({...pcPieces,
            processor: {
                data: {
                    id,
                    name,
                    description,
                    socket: piece.socket,
                    typememory: piece.typememory,
                    pciexpress: piece.pciexpress,
                    price: piece.price,
                    image
                }
            } 
        })
        setIsSelected(true)
    }

    const deletePiece = async (id) => {
        const response = await fetch(`${API_PATH}processor/delete`,{
            method: 'DELETE',
            body: JSON.stringify({id: id})
        })
        const result = await response.json()
        if(result?.success){
            const piecesFiltered = pieces.filter((piece) => {return piece.id !== id})
            setPieces(piecesFiltered)
        } else {
            console.error(result?.error)
        }
    }

    const handleEditPiece = () =>{
        setShowModal(true)
        setPieceToEdit({
            id,
            name,
            description,
            socket: piece.socket,
            typememory: piece.typememory,
            pciexpress: piece.pciexpress,
            price: piece.price,
            image
        })
    }

    return (
        <>
        <Holder onClick={() => setShowModal2(true)}>
            <Background  style={isSelected ? {background: "#33C542", border: "none"} : {}}>
                <Image src={image}/>
                <TextBox>
                    <h3>{name}</h3>
                    <p>{description}</p>
                </TextBox>
            </Background>
            {role === "montador" ? <DivButton><Button onClick={() => handleAddPiece()}> {isSelected ? "X" : "+"} </Button></DivButton> : ""}
            {role === "admin" ? <DivButton><Button role="admin" onClick={() => deletePiece(id)}> <FiTrash2/> </Button><Button role="admin" onClick={() => handleEditPiece()}> <FiEdit2/> </Button></DivButton> : ""}
        </Holder>

        <Modal2 showModal2={showModal2} setShowModal2={setShowModal2}>
            <h1>Informa????es processador</h1>
            <p>Nome: {name}</p>
            <p>Descri????o: {description}</p>
            <p>Socket: {piece.socket}</p>
            <p>Tipo da mem??ria: {piece.typememory}</p>
            <p>PciExpress: {piece.pciexpress}</p>
            <p>Pre??o: {piece.price}</p>
      </Modal2>
        </>
    )
}

const TextBox = styled.div`
    height: 138px;
    width: 100%;
    color: #303030;
    padding: 5px 0 0 0;
    & h3 {
        text-align: center;
        font-weight: 700;
        font-size: 16px;
        line-height: 20px;
    }
`

const Image = styled.img`
    width: 111px;
    height: 138px;
`

const Holder = styled.div`
    width: 150px;
    height: 247px;
    position: relative;
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
    width: ${props => props.role === "admin" ? "50%" : "100%"};
    height: 100%;
    background: ${props => props.role === "admin" ? "#d91818" : "#33C542"};
    border-radius: 7px;
    border: none;
    &:hover {
        cursor: pointer;
        background: ${props => props.role === "admin" ? "#ad1d1d" : "#299e38"};
    }
`

export default CardProcessor