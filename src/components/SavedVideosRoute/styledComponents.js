import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const SearchVideosContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => props.bgColor};
  overflow-y: scroll;
  padding: 30px;
`

export const SearchInput = styled.input`
  width: 250px;
  border: 1px solid #64748b;
  border-radius: 2px;
  margin-left: 60px;
  padding: 3px;
  padding-right: 10px;
  padding-left: 10px;
`

export const VideosContainer = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-type: none;
`

export const TrendingHeadContainer = styled.div`
  display: flex;
  align-items: center;
  height: 100px;
  margin-left: 50px;
  background-color: ${props => props.bgColor};
  width: 100%;
`

export const TrendingLogo = styled.div`
  background-color: #94a3b8;
  border: 0px none;
  border-radius: 50px;
  height: 50px;
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
`

export const TrendingHead = styled.h1`
  color: ${props => props.color};
  font-family: Roboto;
  font-weight: bold;
`

export const ProductsLoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  @media screen and (min-width: 768px) {
    width: 70%;
  }
`

export const HomeStickyContainer = styled.div`
  position: sticky;
  position: -webkit-sticky;
`
export const HomeSideContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  width: 100%;
  background-color: ${props => props.bgColor};
`
export const HomeContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100vw;
  background-color: ${props => props.bgColor};
`

export const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  align-items: center;
  background-color: ${props => props.bgColor};
`

export const Image = styled.img`
  width: 250px;
  margin: 10px;
`

export const Heading = styled.h1`
  color: black;
  font-size: 30px;
  margin: 15px;
  color: ${props => props.textColor};
`

export const Desc = styled.p`
  color: ${props => props.textColor};
  font-size: 20px;
  margin-left: 15px;
`
export const NavLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #1e293b;
  text-decoration: none;
  margin-bottom: 32px;
`

export const Retry = styled.button`
  padding: 15px;
  color: blue;
  cursor: pointer;
`
