const removeExclamationMarks= (s) => {
    return s.split('!').join('');
      
    
    
  }

//o 

const removeExclamationMarks2= (s) => {
    return s.replaceAll('!','');
      
    
    
  }

console.log(removeExclamationMarks2("!Holabuenas!")) 