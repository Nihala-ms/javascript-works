    var word="javascripts";
    var vCount=0;
    var cCount=0;
    for(let w of word)
    {
        if(w=="a" || w=="e" || w=="i" || w=="o" || w=="u")
        {
            vCount++;
            
        }
        else{
            cCount++;
        }
    }

    console.log("vowel count of",word,":",vCount);
        console.log("consanant count of",word,":",cCount);

    
