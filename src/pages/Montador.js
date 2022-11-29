import React from 'react'
import styled from 'styled-components'
import Header from '../components/Header'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import MainContainer from '../components/MainContainer'
import { API_PATH } from '../config'

const Montador = () => {

    const { first } = useParams()
    const [piece, setPiece] = useState()

    useEffect(() => {
		requestPiece()
	},[])

    const requestPiece = async (first) => {
		const response = await fetch(`${API_PATH + first}/list`)
		const result = await response.json()
        console.log(result.first)
		setPiece(result.first)
    }

    return (
        <>
        <MainContent>
        <Header/>
        <MainContainer>
            <div>Montador</div>
            <p>Primeiro: {first}</p>
        </MainContainer>
        </MainContent>
        </>
    )
}

const MainContent = styled.div`
  color: white;
  height: 900px;
  background: #7700C0;
`

export default Montador