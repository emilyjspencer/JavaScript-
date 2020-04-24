// Return the length of the longest words in the provided string:


function findLongestWordLength(string)
{
  let arr = string.match(/\w[a-z]{0,}/gi);
  let result = arr[0];

  for(let x = 1 ; x < arr.length ; x++)
  {
    if(result.length < arr[x].length)
    {
    result = arr[x];
    } 
  }
  return result.length;
}


findLongestWordLength("The quick brown fox jumped over the lazy dog"); 

// 6