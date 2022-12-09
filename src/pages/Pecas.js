import Header from '../components/Header'
import MainContainer from '../components/MainContainer'
import ListPieces from '../components/ListPieces'

const Pecas = () => {
	return (
		<>
		<Header/>
		<MainContainer>
			<h1>Peças</h1>
				<div>
					<h3>Listagem de todas</h3>
				</div>
				<div>
					<h3>Processadores</h3>
					<ListPieces type="processor"/>
				</div>
				<div>
					<h3>Placa mães</h3>
					<ListPieces type="motherboard"/>
				</div>
				<div>
					<h3>Placas de vídeo</h3>
					<ListPieces type="graphicscard"/>
				</div>
		</MainContainer>
		</>
	)
}

export default Pecas