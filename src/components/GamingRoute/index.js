import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'

import VideoCardTwo from '../GamingVideoItem'

import Header from '../Header'

import SideBar from '../SideBar'

import CartContext from '../../context/CartContext'

import {
  SearchVideosContainer,
  VideosContainer,
  ProductsLoaderContainer,
  HomeStickyContainer,
  HomeSideContainer,
  HomeContainer,
  NotFoundContainer,
  Image,
  Heading,
  Desc,
  Retry,
  NavLink,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class GamingRoute extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    searchedVideos: [],
  }

  componentDidMount() {
    this.getSuggestionVideos()
  }

  getSuggestionVideos = async () => {
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/videos/gaming`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    if (response.ok) {
      const fetchedData = await response.json()
      const updatedData = fetchedData.videos.map(each => ({
        id: each.id,
        publishedAt: each.published_at,
        thumbnailUrl: each.thumbnail_url,
        viewCount: each.view_count,
        title: each.title,
      }))
      this.setState({
        searchedVideos: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    }
    if (response.ok !== true) {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
  }

  renderLoadingView = () => (
    <ProductsLoaderContainer
      className="products-loader-container"
      data-testid="loader"
    >
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </ProductsLoaderContainer>
  )

  renderGamingVideos = () => (
    <CartContext.Consumer>
      {value => {
        const {isDarkTheme} = value

        const {searchedVideos} = this.state

        const bgColor = isDarkTheme ? '#0f0f0f' : '#f9f9f9'

        return (
          <SearchVideosContainer data-testid="gaming" bgColor={bgColor}>
            <h1>Gaming</h1>
            <VideosContainer bgColor={bgColor}>
              {searchedVideos.map(each => (
                <VideoCardTwo key={each.id} details={each} />
              ))}
            </VideosContainer>
          </SearchVideosContainer>
        )
      }}
    </CartContext.Consumer>
  )

  renderFailureView = () => (
    <NotFoundContainer>
      <Image
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
        alt="failure view"
        className="jobs-failure-img"
      />
      <Heading>Oops! Something Went Wrong</Heading>
      <Desc className="jobs-failure-description">
        We are having some trouble to complete your request.Please try again.
      </Desc>
      <NavLink>
        <Retry
          className="button"
          type="button"
          onClick={this.getSuggestionVideos}
        >
          Retry
        </Retry>
      </NavLink>
    </NotFoundContainer>
  )

  renderAllVideos = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderGamingVideos()

      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      default:
        return null
    }
  }

  render() {
    return (
      <CartContext.Consumer>
        {value => {
          const {isDarkTheme} = value

          const bgColor = isDarkTheme ? '#0f0f0f' : '#f9f9f9'

          return (
            <div data-testid="home">
              <Header />
              <HomeContainer data-testid="home" bgColor={bgColor}>
                <HomeStickyContainer>
                  <SideBar />
                </HomeStickyContainer>
                <HomeSideContainer bgColor={bgColor}>
                  {this.renderAllVideos()}
                </HomeSideContainer>
              </HomeContainer>
            </div>
          )
        }}
      </CartContext.Consumer>
    )
  }
}

export default GamingRoute
