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

 //Songs
// var mySong = {
 //	"title":"24K Magic",
// 	"artist":"Bruno Mars",
// 	"mp3-url":"https://open.spotify.com/track/6b8Be6ljOzmkOmFslEb23P",
// 	"image-url":"https://images-na.ssl-images-amazon.com/images/I/71Gr9aCHQfL._SY355_.jpg",
 //}

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
        "title":"Something Just Like This",
        "artist":"The Chainsmokers & Coldplay",
        "mp3-url":"https://open.spotify.com/search/results/something%20just%20like%20this",
        "image-url":"https://steemitimages.com/0x0/https://ipfs.io/ipfs/Qmd8ApMjsJdPzDeLdHJWZvTcpHzEnobDHPNxhYx84ZdUvU"
    }
	

];
myPlayList.push()


// DOCUMENT READY FUNCTION
$( document ).ready(function() {

  // $('body').append("<p>Title: " + myPlayList[0].title + "</p>");
 // $('body').append("<p>Artist:" + myPlayList[0].artist + "</p>");
 // $('body').append("<img src= " + myPlayList[0]["image-url"] + ">");
  //$('body').append("<a href='" +  myPlayList[0]["mp3-url"] + "'>play</a>");
  //$('body').append("<p>Title: " + myPlayList[1].title + "</p>");
  //$('body').append("<p>Artist:" + myPlayList[1].artist + "</p>");
  //$('body').append("<img src= " + myPlayList[1]["image-url"] + ">");
  //$('body').append("<a href='" +  myPlayList[1]["mp3-url"] + "'>play</a>"); 
  //$('body').append("<p>Title: " + myPlayList[2].title + "</p>");
  //$('body').append("<p>Artist:" + myPlayList[2].artist + "</p>");
  //$('body').append("<img src= " + myPlayList[2]["image-url"] + ">");
  //$('body').append("<a href='" +  myPlayList[2]["mp3-url"] + "'>play</a>"); 

  function displayList(){
  	console.log("hello");
	  for (var i=0; i<myPlayList.length; i++){
	    console.log(myPlayList[i].title);
	    console.log(myPlayList[i].artist);
	    console.log(myPlayList[i]["image-url"]);
	    console.log(myPlayList[i]["mp3-url"]);
	   $('body').append("<p>Title: " + myPlayList[i].title + "</p>");
	   $('body').append("<p>Artist:" + myPlayList[i].artist + "</p>");
	   $('body').append("<img src= " + myPlayList[i]["image-url"] + ">");
	   $('body').append("<a href='" +  myPlayList[i]["mp3-url"] + "'>play</a>");
	  }               
  }

	$("#displayAll").click(function(){
		console.log("hi");
		displayList();
	});
	
	
	function clearList(id){
		myPlayList.splice(id, 1);
		//displaySongs(myPlayList)
	}
	
	
	
		
	function clearAllSongs(){
		
	  
	}
	
	function addSong(){
	}
	  
	function createSong(){
	}
		
		
		$("#submit").click(function() {
	     var title =$("#title").val();
	     var artist =$("#artist").val();
	     var playLink =$("#play-link").val();
	     var albumImage =$("#album-image").val();
	     
	       
	       
	       
	 
	    });
	    
	
		$("#createSong").click(function(){
	
			createSong();
			//displaySongs(myPlayList);
		});
});