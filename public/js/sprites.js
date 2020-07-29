import SpriteSheet from './SpriteSheet.js';
import {loadImage} from './loaders.js'

export function loadBackgroundSprites() {

  return loadImage('../DeepForestPackNA/Tileset/DeepForestOrangeYellow.png')
  .then(image => {
      const sprites = new SpriteSheet(image, 16, 16);
      sprites.defineTile('ground', 1, 0);

      sprites.defineTile('skyOne', 1, 11);
      sprites.defineTile('skyTwo', 2, 11);
      sprites.defineTile('skyThree', 3, 11);
      sprites.defineTile('skyFour',4, 11);
      sprites.defineTile('skyFive', 5, 11);
      sprites.defineTile('skySix', 6, 11);
      sprites.defineTile('skySeven', 1, 11);
      sprites.defineTile('skyEight', 1, 12);
      sprites.defineTile('skyNine', 2, 12);
      sprites.defineTile('skyTen', 3, 12);
      sprites.defineTile('skyEleven', 4, 12);
      sprites.defineTile('skyTwelve', 5, 12);
      sprites.defineTile('skyFourteen', 1, 11);
      sprites.defineTile('skyFifteen', 7, 12);
      sprites.defineTile('skySixteen', 0, 13);
      sprites.defineTile('skySeventeen', 1, 13);
      sprites.defineTile('skyEightteen', 2, 13);
      sprites.defineTile('skyNineteen', 5, 14);
      sprites.defineTile('skyTwenty', 6, 14);
      sprites.defineTile('skyTwentyOne', 7, 14);
      sprites.defineTile('skyTwentyTwo', 4, 13);
      sprites.defineTile('skyTwentyThree', 1, 14);
      sprites.defineTile('skyTwentyFour', 1, 16);
      sprites.defineTile('skyTwentyFive', 3, 16);
      sprites.defineTile('skyTwentySix', 7, 16);
      sprites.defineTile('skyTwentySeven', 1, 14);
      sprites.defineTile('skyTwentyEight', 4, 16);
      sprites.defineTile('skyTwentyNine', 5, 16);
      sprites.defineTile('skyThirty', 6, 16);
      sprites.defineTile('skyThirtyOne', 1, 11);
      sprites.defineTile('skyThirtyTwo', 1, 11);
      return sprites;
    });
}


export function loadRafSprite() {
  return loadImage('../DeepForestPackNA/Tileset/Character - 1.png')
  .then(image => {
      const sprites = new SpriteSheet(image, 16, 16);
      sprites.define('idleRightFace', 4 * 16, 4 * 16, 16, 32);

      return sprites;
    });
}
