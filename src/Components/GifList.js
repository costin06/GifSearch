import React from 'react';
import Gif from './Gif';

const GifList = props => { 
  
  return(
    <ul className="gif-list">
          

      { props.gif.map(element => 

  
        <Gif
        key={element.id}
        src={element.images.fixed_height.url}
        
        /> 

      )}
    </ul> 
  );
}

export default GifList;
