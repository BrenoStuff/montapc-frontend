import styled from 'styled-components'

const ListComputers = () => {
  return (
    <GridDiv>
        <div>ListComputers</div>

    </GridDiv>
  )
}

const GridDiv = styled.div`
    color: #303030;
    width: 760px;
    height: 288px;
    display: grid;
    gap: 52px;
    grid-auto-flow: column;
    grid-auto-columns: 21%;
`

export default ListComputers