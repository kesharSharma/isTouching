function isTouching(sprite1, fixed){
    if (sprite1.x - fixed.x < fixed.width/2 + sprite1.width/2
      && fixed.x - sprite1.x < fixed.width/2 + sprite1.width/2
      && sprite1.y - fixed.y < fixed.height/2 + sprite1.height/2
      && fixed.y - sprite1.y < fixed.height/2 + sprite1.height/2){
        return true;
      }
  
  else{
    return false;
  }
  }