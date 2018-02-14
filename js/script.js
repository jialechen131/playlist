// quick fix for Cloud9 warning:
/* global $ */

// Class 2:
// Complete displayList() to show a single song in the list

// Class 2:
// Complete displayList() to show all the songs in the list
// Complete clearList() funcion

// Class 3:
// Complete the addSong function to take an input from input boxes and push a new song to the playlist array. 

// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

// Songs
// var mySong = {
// 	"title":"24K Magic",
// 	"artist":"Bruno Mars",
// 	"mp3-url":"https://open.spotify.com/track/6b8Be6ljOzmkOmFslEb23P",
// 	"image-url":"https://images-na.ssl-images-amazon.com/images/I/71Gr9aCHQfL._SY355_.jpg",
// }

var myPlayList = [
	{
		"title":"24K Magic",
		"artist":"Bruno Mars",
		"mp3-url":"https://open.spotify.com/track/6b8Be6ljOzmkOmFslEb23P",
		"image-url":"https://images-na.ssl-images-amazon.com/images/I/71Gr9aCHQfL._SY355_.jpg",
	},
	{
		"title":"Sir Duke",
		"artist":"Stevie Wonder",
		"mp3-url":"https://open.spotify.com/track/2udw7RDkldLFIPG9WYdVtT",
		"image-url":"https://upload.wikimedia.org/wikipedia/en/thumb/e/e2/Songs_in_the_key_of_life.jpg/220px-Songs_in_the_key_of_life.jpg",
	},
	{
		"title":"Sorry",
		"artist":"Justin Bieber",
		"mp3-url":"https://open.spotify.com/track/09CtPGIpYB4BrO8qb1RGsF",
		"image-url":"http://assets-s3.usmagazine.com/uploads/assets/articles/93827-justin-biebers-sorry-choreographer-spills-video-style-secrets-parris-goebel/1445638548_justin-bieber-sorry-dancers-zoom.jpg",
	},
    {
        "title":"",
        "artist":"",
        "mp3-url":"",
        "image-url":""
    }
	

];



// DOCUMENT READY FUNCTION
$( document ).ready(function() {
  //$('body').append("<p>Title: " + myPlayList[0].title + "</p>");
  //$('body').append("<p>Artist:" + myPlayList[0].artist + "</p>");
  //$('body').append("<img src= " + myPlayList[0]["image-url"] + ">");
  //$('body').append("<a href='" +  myPlayList[0]["mp3-url"] + "'>play</a>");
  //$('body').append("<p>Title: " + myPlayList[1].title + "</p>");
  //$('body').append("<p>Artist:" + myPlayList[1].artist + "</p>");
  //$('body').append("<img src= " + myPlayList[1]["image-url"] + ">");
  //$('body').append("<a href='" +  myPlayList[1]["mp3-url"] + "'>play</a>"); 
  //$('body').append("<p>Title: " + myPlayList[2].title + "</p>");
  //$('body').append("<p>Artist:" + myPlayList[2].artist + "</p>");
  //$('body').append("<img src= " + myPlayList[2]["image-url"] + ">");
  //$('body').append("<a href='" +  myPlayList[2]["mp3-url"] + "'>play</a>"); 
  
  for (var i=0; i<myPlayList.length; i=4){
    
  	
  }                 
});

function displayList(){


  
}

function clearList(){
  
  
  
}

function addSong(){
 
  
  
}
