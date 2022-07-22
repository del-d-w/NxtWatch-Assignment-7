import {Component} from 'react'

import {AiFillHome, AiFillFire} from 'react-icons/ai'
import {SiYoutubegaming} from 'react-icons/si'
import {MdPlaylistAdd} from 'react-icons/md'

import CartContext from '../../context/CartContext'

import {
  SideBarContainer,
  NavItemsContainer,
  ItemText,
  TextItemContainer,
  SideBarBottomContainer,
  BottomText,
  IconsContainer,
  IconImage,
  NavLink,
} from './styledComponents'

class SideBar extends Component {
  renderStatusItems = () => (
    <CartContext.Consumer>
      {value => {
        const {activeTabItem, activeTab, isDarkTheme} = value

        const onClickHomeTabItem = () => {
          activeTabItem('HOME')
        }
        const onClickTrendingTabItem = () => {
          activeTabItem('TRENDING')
        }

        const onClickGamingTabItem = () => {
          activeTabItem('GAMING')
        }

        const onClickSavedVideosTabItem = () => {
          activeTabItem('SAVED VIDEOS')
        }

        const bgColor = isDarkTheme ? '#ffffff' : '#000000'

        const textColor = isDarkTheme ? '#f9f9f9' : '#181818'

        return (
          <SideBarContainer>
            <NavItemsContainer>
              <TextItemContainer
                isActive={activeTab === 'HOME' ? '#f1f5f9' : 'transparent'}
                isActiveColor={bgColor}
                onClick={onClickHomeTabItem}
              >
                <NavLink
                  to="/"
                  color={activeTab === 'HOME' ? '#ff0000' : {bgColor}}
                >
                  <AiFillHome />
                  <ItemText
                    color={activeTab === 'HOME' ? '#ff0000' : {textColor}}
                  >
                    Home
                  </ItemText>
                </NavLink>
              </TextItemContainer>
              <TextItemContainer
                isActive={activeTab === 'TRENDING' ? '#f1f5f9' : 'transparent'}
                onClick={onClickTrendingTabItem}
              >
                <NavLink
                  to="/trending"
                  color={activeTab === 'TRENDING' ? '#ff0000' : {textColor}}
                >
                  <AiFillFire />
                  <ItemText
                    color={activeTab === 'TRENDING' ? '#ff0000' : {bgColor}}
                  >
                    Trending
                  </ItemText>
                </NavLink>
              </TextItemContainer>
              <TextItemContainer
                isActive={activeTab === 'GAMING' ? '#f1f5f9' : 'transparent'}
                onClick={onClickGamingTabItem}
              >
                <NavLink
                  to="/gaming"
                  color={activeTab === 'GAMING' ? '#ff0000' : {textColor}}
                >
                  <SiYoutubegaming />
                  <ItemText
                    color={activeTab === 'GAMING' ? '#ff0000' : {bgColor}}
                  >
                    Gaming
                  </ItemText>
                </NavLink>
              </TextItemContainer>
              <TextItemContainer
                isActive={
                  activeTab === 'SAVED VIDEOS' ? '#f1f5f9' : 'transparent'
                }
                onClick={onClickSavedVideosTabItem}
              >
                <NavLink
                  to="/saved-videos"
                  color={activeTab === 'SAVED VIDEOS' ? '#ff0000' : {textColor}}
                >
                  <MdPlaylistAdd />
                  <ItemText
                    color={activeTab === 'SAVED VIDEOS' ? '#ff0000' : {bgColor}}
                  >
                    Saved videos
                  </ItemText>
                </NavLink>
              </TextItemContainer>
            </NavItemsContainer>
            <SideBarBottomContainer>
              <BottomText color={textColor}>CONTACT US</BottomText>
              <IconsContainer>
                <IconImage
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                  alt="facebook logo"
                />
                <IconImage
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                  alt="twitter logo"
                />
                <IconImage
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                  alt="linked in logo"
                />
              </IconsContainer>
              <ItemText color={textColor}>
                Enjoy! Now to see your channels and recommendations!
              </ItemText>
            </SideBarBottomContainer>
          </SideBarContainer>
        )
      }}
    </CartContext.Consumer>
  )

  render() {
    return <>{this.renderStatusItems()}</>
  }
}

export default SideBar
