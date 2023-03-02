function isPangram(string){
  let lowercased = string.toLowerCase();
  let letters = "abcdefghijklmnopqrstuvwxyz";
  for (let i = 0; i < letters.length; i++){
    if(!lowercased.includes(letters[i])){
        return false;
    }
  }
  return true;
}