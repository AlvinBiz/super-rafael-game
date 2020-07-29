import Entity from './entity.js';
import Jump from './traits/jump.js';
import Velocity from './traits/velocity.js';
import {loadRafSprite} from './sprites.js';


export function createRaf() {
 return loadRafSprite()
 .then(sprite => {

  const raf = new Entity();

  raf.addTrait(new Velocity());
  raf.addTrait(new Jump());

  raf.draw = function drawRaf(context) {
    sprite.draw('idleRightFace', context, this.pos.x, this.pos.y);
  }


  return raf;
  });
}
