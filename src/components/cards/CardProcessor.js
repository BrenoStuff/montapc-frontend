import styled from 'styled-components'

const CardProcessor = (piece, isMontador) => {
    const {image, name, description, price} = piece

    const handleAdd = () => {
    }

    return (
        <CardUser onClick={() => {}}>
            <Img src={image} alt={name} />
            <TextBox>
                <h3>{name}</h3>
                <p>{description}</p>
                <p>{price}</p>
                
                { isMontador ? <button onClick={() => handleAdd()}> add </button> : "" }
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

export default CardProcessor