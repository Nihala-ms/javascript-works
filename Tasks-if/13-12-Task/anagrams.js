function anagrams(str1,str2){
    if(str1.length!=str2.length)
    {
        return false;
    }
        return str1.split("").sort().join("") === str2.split("").sort().join("");

}

console.log(anagrams("silent","listen"));
