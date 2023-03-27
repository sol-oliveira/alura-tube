import { StyledTimeline } from "./StyledTimeline";

export default function Timeline(props) {  
  const playlistNames = Object.keys(props.playlists);  
  return (
      <StyledTimeline>
          {playlistNames.map((playlistName, index) => {
              const videos = props.playlists[playlistName];           
              return (
                  <section key={index}>               
                      <h2>{playlistName}</h2>
                      <div>                     
                          { videos.filter((video) => {
                            return video.title
                            .toLowerCase()
                            .includes(props.searchValue.toLowerCase());
                            }).map((video, i) => {
                              return (                              
                                  <a href={video.url} key={i}>
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

