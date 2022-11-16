import Header from '../components/Header'
import styled from 'styled-components'
import MainContainer from '../components/MainContainer'
import { API_PATH } from '../config'
import { useState } from 'react'
import Alert from '../components/Alert'

const Admin = () => {

    const [error, setError] = useState({hasError: false, message: "Erro no servidor! Por favor, tente novamente!"})
    const [success, setSuccess] = useState(false)

    const createPiece = async (data, type) => {
        const response = await fetch(`${API_PATH + type}/create`, {
            method: 'POST',
            body: JSON.stringify(data)
        })
        const result = await response.json()
        if (result?.success) {
            setSuccess(true)
            setInterval(setSuccess(false), 60 * 10);
          } else if(result?.error){
            if(result?.error?.message){
              setError({
                hasError: true,
                message: result.error.message 
              })
              setInterval(() => setError({...error, hasError: false}), 60 * 60);
            } else{
              setError({...error, hasError: true})
              setInterval(() => setError({...error, hasError: false}), 60 * 60);
            }
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

    return (
        <>
        <MainContent>
        <Header/>
            <MainContainer>
                <h1>Admin</h1>
                <DivRow>
                    <div>
                        <h3>Processador</h3>
                        <h4>Adicionar</h4>
                        <Alert type="error" opened={error.hasError}>{error.message}</Alert>
                        <Alert type="success" opened={success}>Processador cadastrado com sucesso!</Alert>
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
                    </div>
                    <div>
                        <h3>Placa mae</h3>
                        <h4>Adicionar</h4>
                        <Alert type="error" opened={error.hasError}>{error.message}</Alert>
                        <Alert type="success" opened={success}>Placa mãe cadastrada com sucesso!</Alert>
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
                    </div>
                    <div>
                        <h3>Placa de vídeo</h3>
                        <h4>Adicionar</h4>
                        <Alert type="error" opened={error.hasError}>{error.message}</Alert>
                        <Alert type="success" opened={success}>Placa de vídeo cadastrada com sucesso!</Alert>
                        <form onSubmit={(event) => handleSubmitPiece(event, 'graphicscard')}>
                            <p>Nome: <input type="text" name="name"/></p>
                            <p>Desc: <input type="text" name="description"/></p>
                            <p>PciE: <input type="text" name="pciExpress"/></p>
                            <p>Pric: <input type="text" name="price"/></p>
                            <p>Imag: <input type="text" name="image"/></p>
                            <button type="submit"> Send </button>
                        </form>
                    </div>
                </DivRow>
            </MainContainer>
        </MainContent>
        </>
    )
}

const DivRow = styled.div`
    display: flex;
    flex-direction: row;
    & div {
        margin: 10px 0;
        width: 266px; 
    } & h3 {
        margin: 5px 0;
    }
`

const MainContent = styled.div`
    color: white;
    height: 900px;
    background: #7700C0;
`
export default Admin