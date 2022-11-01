import styled from 'styled-components'
import Header from '../components/Header'
import MainContainer from '../components/MainContainer'

const Pecas = () => {
  return (
    <>
    <Header/>
	<MainContainer>
		<h1>Peças</h1>
		<DivRow>
			<div>
				<h3>Processadores</h3>
			</div>
			<div>
				<h3>Placa mães</h3>
			</div>
			<div>
				<h3>Placas de vídeo</h3>
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
        width: 266px; 
    } & h3 {
        margin: 5px 0;
    }
`

export default Pecas