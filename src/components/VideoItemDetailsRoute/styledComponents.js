import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100vw;
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
export const VideoDetailsSideContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;
  width: 100%;
  align-items: center;
`

export const VideoDetailsTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 90%;
`

export const VideoDetailsTitle = styled.p`
  font-family: 'Roboto';
  color: #181818;
  margin-left: 10px;
  font-weight: bold;
`

export const ViewsDetailsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 90%;
`
export const LikesContainer = styled.div`
  display: flex;
`

export const ViewsText = styled.p`
  color: ${props => props.color};
  font-family: Roboto;
  margin-left: 10px;
`

export const IconContainer = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-right: 15px;
  cursor: pointer;
  background-color: transparent;
  border: 0px none;
  color: ${props => props.color};
`

export const HorizontalLine = styled.hr`
  background-color: #181818;
  color: #181818;
  width: 100%;
  margin: 15px;
`
export const ChannelContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`
export const ChannelLogo = styled.img`
  height: 50px;
  width: 50px;
`
export const LogoContainer = styled.div`
  background-color: #cbd5e1;
  border-radius: 40px;
  padding: 10px;
  width: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ChannelDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`

export const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  align-items: center;
  background-color: #fff;
`

export const Image = styled.img`
  width: 300px;
  margin: 20px;
`

export const Heading = styled.h1`
  color: black;
  text-align: center;
  font-size: 30px;
`

export const Desc = styled.p`
  color: black;
  text-align: center;
  font-size: 20px;
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
