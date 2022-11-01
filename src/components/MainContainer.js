import styled from 'styled-components'

const MainContainer = ({children}) => {
  return (
    <Container>
        {children}
    </Container>
  )
}

const Container = styled.div`
	width: 800px;
	margin: 0 auto;
  padding: 20px 0;
`

export default MainContainer