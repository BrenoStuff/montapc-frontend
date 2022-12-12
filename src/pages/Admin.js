import Header from '../components/Header'
import styled from 'styled-components'
import MainContainer from '../components/MainContainer'
import { API_PATH } from '../config'
import { useState, useEffect } from 'react'
import Alert from '../components/Alert'
import ListPieces from '../components/ListPieces'
import Modal from '../components/Modal'

const Admin = () => {

    const [error, setError] = useState({hasError: false, message: "Erro no servidor! Por favor, tente novamente!"})
    const [success, setSuccess] = useState(false)
    const [type, setType] = useState('processor')
    const [showModal, setShowModal] = useState(false)
    const [pieceToEdit, setPieceToEdit] = useState({})

    useEffect(() => {
        
    },[type])

    function handleTypeChange(event) {
        setType(event.target.value);
        console.log(event.target.value)
    }

    const handleEditChange = (event) =>{
        setPieceToEdit({...pieceToEdit, [event.target.name]: event.target.value })
    }

    const createPiece = async (data, type) => {
        const response = await fetch(`${API_PATH + type}/create`, {
            method: 'POST',
            body: JSON.stringify(data)
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

    const updatePiece = async (data) => {
        const response = await fetch(`${API_PATH + type}/update`, {
            method: 'PUT',
            body: JSON.stringify(data)
        })
        const result = await response.json()
        if(result?.success){
            setShowModal(false)
        }
    }

    const handleSubmitPiece = (event, type) => {
        event.preventDefault()
        if(type === 'graphicscard'){
            const { name, description, pciExpress, price, image} = event.target
            createPiece({
            name: name.value,
            description: description.value,
            pciExpress: pciExpress.value,
            price: price.value,
            image: image.value
            }, type)
        } else {
            const { name, description, socket, typeMemory, pciExpress, price, image} = event.target
            createPiece({
                name: name.value,
                description: description.value,
                socket: socket.value,
                typeMemory: typeMemory.value,
                pciExpress: pciExpress.value,
                price: price.value,
                image: image.value
            }, type)
        }
    }

    const handleSubmitUpdate = (event) => {
        event.preventDefault()
        if(type === 'graphicscard'){
            const { id, name, description, pciExpress, price, image} = event.target
            updatePiece({
            id: id.value,
            name: name.value,
            description: description.value,
            pciExpress: pciExpress.value,
            price: price.value,
            image: image.value
            }, type)
        } else {
            const { id, name, description, socket, typeMemory, pciExpress, price, image} = event.target
            updatePiece({
                id: id.value,
                name: name.value,
                description: description.value,
                socket: socket.value,
                typeMemory: typeMemory.value,
                pciExpress: pciExpress.value,
                price: price.value,
                image: image.value
            }, type)
        }
    }

    return (
        <>
        <MainContent>
        <Header/>
            <MainContainer>
                <h1>Admin</h1>

                <select defaultValue={type} onChange={(event) => handleTypeChange(event)}>
                    <option value="processor">Processador</option>
                    <option value="motherboard">Placa mae</option>
                    <option value="graphicscard">Placa de video</option>
                </select>

                <h1>{type}</h1>

                {error.hasError ? <Alert type="error" message={error.message}/> : ""}
                {success.hasSuccess ? <Alert type="success" message={success.message}/> : ""}

                {type === 'processor' ?
                    <form onSubmit={(event) => handleSubmitPiece(event, 'processor')}>
                        <p>Nome: <input type="text" name="name"/></p>
                        <p>Desc: <input type="text" name="description"/></p>
                        <p>Sock: <input type="text" name="socket"/></p>
                        <p>Memo: <input type="text" name="typeMemory"/></p>
                        <p>PciE: <input type="text" name="pciExpress"/></p>
                        <p>Pric: <input type="text" name="price"/></p>
                        <p>Imag: <input type="text" name="image"/></p>
                        <button type="submit"> Send </button>
                    </form>
                : ""}

                {type === 'motherboard' ?
                    <form onSubmit={(event) => handleSubmitPiece(event, 'motherboard')}>
                        <p>Nome: <input type="text" name="name"/></p>
                        <p>Desc: <input type="text" name="description"/></p>
                        <p>Sock: <input type="text" name="socket"/></p>
                        <p>Memo: <input type="text" name="typeMemory"/></p>
                        <p>PciE: <input type="text" name="pciExpress"/></p>
                        <p>Pric: <input type="text" name="price"/></p>
                        <p>Imag: <input type="text" name="image"/></p>
                    <button type="submit"> Send </button>
                </form>
                : ""}

                {type === 'graphicscard' ?
                    <form onSubmit={(event) => handleSubmitPiece(event, 'graphicscard')}>
                        <p>Nome: <input type="text" name="name"/></p>
                        <p>Desc: <input type="text" name="description"/></p>
                        <p>PciE: <input type="text" name="pciExpress"/></p>
                        <p>Pric: <input type="text" name="price"/></p>
                        <p>Imag: <input type="text" name="image"/></p>
                        <button type="submit"> Send </button>
                    </form>
                : ""}

                <ListPieces type={type} role="admin" setShowModal={setShowModal} setPieceToEdit={setPieceToEdit} showModal={showModal}/>
            </MainContainer>
        </MainContent>

        <Modal showModal={showModal} setShowModal={setShowModal}>
            <h1>Edit {type}</h1>
            {type === 'graphicscard' ?
                <form onSubmit={(event) => handleSubmitUpdate(event)}>
                    <input type="hidden" name="id" value={pieceToEdit.id}/>
                    <p>Name: <input type="text" name="name" value={pieceToEdit.name} onChange={(event)=>handleEditChange(event)}/></p>
                    <p>Description: <input type="text" name="description" value={pieceToEdit.description} onChange={(event)=>handleEditChange(event)}/></p>
                    <p>pciExpress: <input type="text" name="pciExpress" value={pieceToEdit.pciExpress} onChange={(event)=>handleEditChange(event)}/></p>
                    <p>Price: <input type="text" name="price" value={pieceToEdit.price} onChange={(event)=>handleEditChange(event)}/></p>
                    <p>Image: <input type="text" name="image" value={pieceToEdit.image} onChange={(event)=>handleEditChange(event)}/></p>
                    <button type="submit">Update</button>
                </form>
                :
                <form onSubmit={(event) => handleSubmitUpdate(event)}>
                    <input type="hidden" name="id" value={pieceToEdit.id}/>
                    <p>Name: <input type="text" name="name" value={pieceToEdit.name} onChange={(event)=>handleEditChange(event)}/></p>
                    <p>Description: <input type="text" name="description" value={pieceToEdit.description} onChange={(event)=>handleEditChange(event)}/></p>
                    <p>Socket: <input type="text" name="socket" value={pieceToEdit.socket} onChange={(event)=>handleEditChange(event)}/></p>
                    <p>typeMemory: <input type="text" name="typeMemory" value={pieceToEdit.typeMemory} onChange={(event)=>handleEditChange(event)}/></p>
                    <p>pciExpress: <input type="text" name="pciExpress" value={pieceToEdit.pciExpress} onChange={(event)=>handleEditChange(event)}/></p>
                    <p>Price: <input type="text" name="price" value={pieceToEdit.price} onChange={(event)=>handleEditChange(event)}/></p>
                    <p>Image: <input type="text" name="image" value={pieceToEdit.image} onChange={(event)=>handleEditChange(event)}/></p>
                    <button type="submit">Update</button>
                </form>
            }
        </Modal>
        </>
    )
}

const MainContent = styled.div`
    color: white;
    height: 900px;
    background: #7700C0;
`
export default Admin