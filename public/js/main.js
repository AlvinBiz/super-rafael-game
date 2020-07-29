import Timer from './time.js'
import Entity from './entity.js';
import {loadLevel} from './loaders.js';
import {createRaf} from './entities.js';

import keyboard from './keyboardState.js';


const canvas = document.getElementById('screen');
const context = canvas.getContext('2d');


Promise.all([
  createRaf(),
  loadLevel('1-1'),
])
.then(([raf, level]) => {


  const gravity = 2000;
  raf.pos.set(64, 64);

  level.entities.add(raf);

  const SPACE = 32;
  const input = new keyboard();
  input.addMapping(32, keyState => {
    if(keyState) {
      raf.jump.start();
    } else {
      raf.jump.cancel();
    }
  });
  input.listenTo(window);


  const timer = new Timer(1/60);
  timer.update = function update(deltaTime) {

      level.update(deltaTime);
      level.comp.draw(context);
      raf.vel.y += gravity * deltaTime;

  }

  timer.start();
});


    // sprites.draw('sky', context, 45, 62);
    // context.drawImage(image,
    //   0, 0, 16, 16,
    //   0, 0, 16, 16);
