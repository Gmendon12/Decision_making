
const findGrades = (a) => {
    if (a <= 10){
      return "E";
    }
    
    if ((a >= 11) && (a <= 20)){
      return "D";
    }
    
    if ((a >= 21) && (a<=30)){
      return "C";
    }
    
    if((a >=31) && (a <= 40)){
      return "B"
    }
    
    if((a >=41) && (a <= 50)){
      return "A"
    }
  };