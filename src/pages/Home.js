import Header from '../components/Header'
import styled from 'styled-components'

const Home = () => {
  return (
    <>
        <MainContent>
        <Header/>
          <h1>Home</h1>
        </MainContent>
    </>
  )
}

const MainContent = styled.div`
  color: white;
  height: 900px;
  background: #7700C0;
`
export default Home