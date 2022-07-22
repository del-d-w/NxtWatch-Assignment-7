import {
  VideoCardContainer,
  ThumbnailImage,
  VideoCardBottomContainer,
  VideoDetailsContainer,
  VideoDetailsText,
  NavLink,
} from './styledComponents'

const VideoCardTwo = props => {
  const {details} = props
  const {title, id, thumbnailUrl, viewCount} = details
  return (
    <NavLink to={`videos/${id}`}>
      <VideoCardContainer>
        <ThumbnailImage src={thumbnailUrl} alt="video thumbnail" />
        <VideoCardBottomContainer>
          <VideoDetailsContainer>
            <VideoDetailsText>{title}</VideoDetailsText>
            <VideoDetailsText>{viewCount} views</VideoDetailsText>
          </VideoDetailsContainer>
        </VideoCardBottomContainer>
      </VideoCardContainer>
    </NavLink>
  )
}

export default VideoCardTwo
