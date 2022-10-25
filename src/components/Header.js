import styled from 'styled-components'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <HeaderNav>
            <HeaderContainer>
                <Link to='/'> 
                    MONTAPC
                </Link>

                <nav>
                    <Ul>
                    <li><NavLink to='/comunidade' end>Comunidade</NavLink></li>
                    <li><NavLink to='/pecas' end>Peças</NavLink></li>
                    <li><NavLink to='/faq' end>FAQ</NavLink></li>
                    </Ul>
                </nav>
            </HeaderContainer>
        </HeaderNav>
    )
}
  
const HeaderNav = styled.header`
    height: 56px;
    background: #303030;
    color: white;
`

const HeaderContainer = styled.div`
    width: 800px;
    height: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    & a {
        text-decoration: none;
        color: white;
    }
`

const Ul = styled.div`
    display: flex;
    & li {
        list-style-type: none;
        margin: 0 0 0 20px;
    } & a {
        text-decoration: none;
        color: white;
    }
`

export default Header
  