var chunkIt = function(arr,length){
    newArr = [];
    for(var i = 0; i < arr.length; i += length){
        myChunk = arr.slice(i, i + length);
        newArr.push(myChunk);
    }
   console.log(newArr);
}
chunkIt(["potatoes","molasses","greg","wirt","beatrice","adelaide","mrs. whispers","abc"], 3);