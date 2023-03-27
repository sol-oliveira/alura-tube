import React, { useEffect } from 'react';
import  { StyledFavorites }  from './StyledFavorites';

export default function Favorites(props)  {

  const [following, setFollowing] = React.useState([]);  

  function fetchFollowing() {	

		fetch('https://api.github.com/users/sol-oliveira/following')
		.then(async (respostaDoServer) => {
			const dadosDaResposta = await respostaDoServer.json()
			return dadosDaResposta
		}).then(function(respostaCompleta) {
      setFollowing(respostaCompleta);
    });
    
	}

  useEffect(() => {   
    fetchFollowing();    
  }, []);

  return (
  <StyledFavorites> 
     
    <section>
      <h2>Aluratubes Favoritos</h2>
      <div>
        {following.filter((item) => {
          return item.html_url
          .toLowerCase()
          .includes(props.searchValue.toLowerCase());
          }).map((item, index) => {
            return (
              <a href={item.html_url} target="_blank" key={index}>
                <img src={item.avatar_url} />
                <span>{`@${item.login}`}</span>
              </a>
            );
        })}
      </div>
    </section>
 
  </StyledFavorites>
  );
}


