function FindIntersection(strArr) { 
    // code goes here 
    var resultStr = '';
    var resultStr2 = '';
    var arr1 = strArr[0].split(',');
    var arr2 = strArr[1].split(',');
  
    for(let i=0; i<arr1.length; i++) {
      for(let j=0; j<arr2.length; j++) {
        if(arr1[i] === arr2[j]) {
          resultStr += arr1[i];
          resultStr += ',';
        }
      }
    }
    for(let i = 0 ; i<resultStr.length; i++) {
      if(resultStr[i] !== ' ') {
        resultStr2 += resultStr[i];
      }
    }
    if(resultStr2.length === 0){
        document.querySelector("#result").innerHTML= false;
      return false
    }else {
      resultStr2 = resultStr2.slice(0, -1);
      document.querySelector("#result").innerHTML= resultStr2;
      return resultStr2; 
    }
    
  
  }
     
  // keep this function call here 
  console.log(FindIntersection(["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"]));