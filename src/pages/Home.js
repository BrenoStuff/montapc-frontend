import Header from '../components/Header'
import styled from 'styled-components'
import MainContainer from '../components/MainContainer'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
        <MainContent>
        <Header/>
        <MainContainer>
          <h1>Home</h1>
          <div>
            <Link to="/montador/processor">Processador</Link>
          </div>
          <div>
            <Link to="/montador/motherboard">Placa Mãe</Link>
          </div>
          <div>
            <Link to="/montador/graphicscard">Placa de Vídeo</Link>
          </div>
        </MainContainer>
        </MainContent>
    </>
  )
}

const MainContent = styled.div`
  color: white;
  height: 900px;
  background: #7700C0;
  & a {
    color: white;
    text-decoration: none;
  }
`
export default Home