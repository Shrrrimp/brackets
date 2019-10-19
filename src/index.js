module.exports = function check(str, bracketsConfig) {
  // your solution
  let arr=[];
  if(str.length%2 != 0){
    return false;
  }
  for (let i = 0; i<str.length; ++i){

    for (let elem = 0; elem<bracketsConfig.length; ++elem){

      if(str[i] == bracketsConfig[elem][1] && arr[arr.length -1] == bracketsConfig[elem][0]){
        arr.pop();
        break;
      }

      else {
        if(str[i] == bracketsConfig[elem][0]){
          arr.push(str[i]);
          break;
        }
      }
    }
  }

  if(arr.length == 0){
    return true;
  }
  return false;
}
