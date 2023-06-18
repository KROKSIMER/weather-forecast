import { Box } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import React from "react";

function WheatherChanger(Weather) {
  const [image, setImage] = useState(null);
  React.useEffect(() => {
    if (Weather.Weather === 'Thunderstorm'){
      setImage('Thunderstorm');
    }
    else if (Weather.Weather === 'Drizzle'){
      setImage('Drizzle');
    }
    else if (Weather.Weather === 'Rain'){
      setImage('Rain');
    }
    else if (Weather.Weather === 'Snow'){
      setImage('Snow');
    }
    else if (Weather.Weather === 'Mist' || image === 'Smoke' || image === 'Haze' || image === 'Fog'){
      setImage('Mist');
    }
    else if (Weather.Weather === 'Dust' || image === 'Haze' || image === 'Ash'){
      setImage('Dust');
    }
    else if (Weather.Weather === 'Squall'){
      setImage('Squall');
    }
    else if (Weather.Weather === 'Tornado'){
      setImage('Tornado');
    }
    else if (Weather.Weather === 'Clear'){
      setImage('Clear');
    }
    else if (Weather.Weather === 'Clouds'){
      setImage('Clouds');
    }
  }, [Weather.Weather])
  



  return (
    <Box>
        <img src={'Images/' + image + '.png'} alt={image} />
    </Box>
  );
}

export default WheatherChanger;
