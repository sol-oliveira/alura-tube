import { StyledTimeline } from "./StyledTimeline";

export default function Timeline(props) {  
  const playlistNames = Object.keys(props.playlists);  
  return (
      <StyledTimeline>
          {playlistNames.map((playlistName) => {
              const videos = props.playlists[playlistName];           
              return (
                  <section>
                      <h2>{playlistName}</h2>
                      <div>
                          {videos.map((video) => {
                              return (
                                  <a href={video.url}>
                                      <img src={video.thumb} />
                                      <span>
                                          {video.title}
                                      </span>
                                  </a>
                              )
                          })}
                      </div>
                  </section>
              )
          })}
      </StyledTimeline>
  )
}

