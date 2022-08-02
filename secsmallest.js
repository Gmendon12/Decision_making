const findSndSmallest = (x,y,z) => {
    if ((y > x && y < z) || (y > z && y < x)){
      return (y);
    }
    
    else if ((x > y && x < z) || (x > z && x < y)){
      return (x)
    }
    
    else {
      return (z)
    }
};
