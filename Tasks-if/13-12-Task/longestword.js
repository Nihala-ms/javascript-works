function word(string){
    var test=string.split(" ");
    var longest="";
    for(var i=0;i<test.length;i++)
        {
            if(test[i].length>longest.length)
            {
                longest=test[i];
            }
        }
                return longest;                  


    
}

console.log(word("i love programming"));
