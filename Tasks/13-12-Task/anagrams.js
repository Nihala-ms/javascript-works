function anagram(word1,word2){
    w1=word1.toLowerCase().split("").sort().join();
    w2=word2.toLowerCase().split("").sort().join();

    return w1==w2;
}

console.log(anagram("silent","listen"));


















// function anagram(word1,word2)
// {
//     if(word1.length==word2.length)
//     {

    
//     let isangram=true;
//     for(let w1 of word1)
//     {
//         if(word2.indexOf(w1)==-1)
//         {
//             isangram=false;
//             break;
//         }
//     }
//     return isangram;
    
// }
// else
// {
//     return isangram=false;
// }
// }

// console.log(anagram("listen","silent"));

