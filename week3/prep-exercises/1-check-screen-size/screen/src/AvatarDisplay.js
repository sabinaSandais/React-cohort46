import React from 'react';
import { useWindowSize } from './useWindowSize'; // Ensure this path is correct
import { BigHead as Avatar } from '@bigheads/core'; // If the correct component name is BigHead
 // Adjusted import

const avatarOptions = (name) => ({
  Mithi: { skinTone: 'light', hair: 'short', eyes: 'happy', mouth: 'smile', facialHair: 'none' },
  Diana: { skinTone: 'tanned', hair: 'pixie', eyes: 'laughing', mouth: 'openSmile', facialHair: 'none' },
  Mikong: { skinTone: 'dark', hair: 'mohawk', eyes: 'wink', mouth: 'grin', facialHair: 'mediumBeard' },
});

 const randomProperty = (obj) => {
  const keys = Object.keys(obj);
  return obj[keys[keys.length * Math.random() << 0]];
};

const AvatarDisplay = () => {
  const { width } = useWindowSize(0, Infinity);
  let avatarName;

  if (width > 1000) {
    avatarName = 'Mithi';
  } else if (width < 700) {
    avatarName = 'Mikong';
  } else {
    avatarName = 'Diana';
  }

  const avatarProps = {
    ...avatarOptions(avatarName),
    hat: randomProperty({ none: 'none', beanie: 'beanie', turban: 'turban' }),
    hatColor: randomProperty({ blue: 'blue', black: 'black', pink: 'pink' }),
    accessory: randomProperty({ none: 'none', glassesRound: 'glassesRound', sunglasses: 'sunglasses' }),
    clothing: randomProperty({ shirt: 'shirt', hoodie: 'hoodie', sweater: 'sweater' }),
    clothingColor: randomProperty({ blue: 'blue', black: 'black', pink: 'pink' }),
    graphic: randomProperty({ none: 'none', bat: 'bat', cumbia: 'cumbia', deer: 'deer', diamond: 'diamond' }),
  };

  return <Avatar {...avatarProps} />;
};

export default AvatarDisplay;
