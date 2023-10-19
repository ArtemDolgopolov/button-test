import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDumpsterFire ,faCoffee, faEarListen, faHeart, faDharmachakra, faStar } from '@fortawesome/free-solid-svg-icons';

const IconDisplay = () => {
  const [randomIcon, setRandomIcon] = useState(null);
  const iconArray = [faDumpsterFire, faEarListen, faHeart, faDharmachakra, faCoffee, faStar];

  const getRandomIcon = () => {
    const randomIndex = Math.floor(Math.random() * iconArray.length);
    setRandomIcon(iconArray[randomIndex]);
  };

  const handleButtonClick = () => {
    getRandomIcon();
  };

  useEffect(() => {
    if (randomIcon) {
      const timer = setTimeout(() => {
        setRandomIcon(null);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [randomIcon]);

  return (
    <div className="icon-display">
      <button onClick={handleButtonClick}>
        Click me
      </button>
      {randomIcon && <p>Icon</p>}
      {randomIcon && <FontAwesomeIcon icon={randomIcon} size="3x" />}
    </div>
  );
};

export default IconDisplay; 