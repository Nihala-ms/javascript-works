class Movie{
    setMovie(id,title,language,genre)
    {
        this.id=id,
        this.title=title,
        this.language=language,
        this.genre=genre
    }
    displayMovie()
    {
        console.log(this.id,this.title,this.language,this.genre);
        
    }
}

var lokhaMovie=new Movie();
var Hridyapoorvam=new Movie();
lokhaMovie.setMovie("MV1021","LOKHA","Malayalam","Thriller");
Hridyapoorvam.setMovie("MV1022","Hridyapoorvam","Malayalam","comedy drama")
lokhaMovie.displayMovie();
Hridyapoorvam.displayMovie();