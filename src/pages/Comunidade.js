import React from 'react'
import Header from '../components/Header'
import styled from 'styled-components'
import MainContainer from '../components/MainContainer'
import ListComputers from '../components/ListComputers'

const Comunidade = () => {
return (
	<>
	<Header/>
	<MainContent>
	<MainContainer>
		<div>Comunidade</div>
		<ListComputers/>
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

export default Comunidade