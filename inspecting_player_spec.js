describe("Player", function() {          // we have a describe() just like we do in Ruby  describe the Player class
  var player;
  var song;

  beforeEach(function() { // before block to dry up our code - saves us from 
    player = new Player(); // from having to create a new instance each time 
    song = new Song();
  });

  it("should be able to play a Song", function() {   // we also have it() for specific test cases 
    player.play(song); // execute stage of test  calling the play method on the player instance, passing in a song
    expect(player.currentlyPlayingSong).toEqual(song); // expectation/assertion - expect that the when we called the currentlyPlayingSong()
      // method on the player instance - it is the song that we passed in
    //demonstrates use of custom matcher
    expect(player).toBePlaying(song);      // toEqual vs .to eq       toBePlaying vs to be_playing 
  });

  describe("when song has been paused", function() {  // describe block    
    beforeEach(function() {     // before block to dry up our code - before each test is run - the player will play the song and the player will pause the song 
      player.play(song);
      player.pause();
    });

    it("should indicate that the song is currently paused", function() { // rather than it - we out it("should")
      expect(player.isPlaying).toBeFalsy();

      // demonstrates use of 'not' with a custom matcher
      expect(player).not.toBePlaying(song); // similar to Ruby
    });

    it("should be possible to resume", function() {
      player.resume(); // execute 
      expect(player.isPlaying).toBeTruthy(); // like .to be_true in Ruby
      expect(player.currentlyPlayingSong).toEqual(song);
    });
  });

  // demonstrates use of spies to intercept and test method calls
  it("tells the current song if the user has made it a favorite", function() {
    spyOn(song, 'persistFavoriteStatus'); //     //spy
    player.play(song);
    player.makeFavorite();

    expect(song.persistFavoriteStatus).toHaveBeenCalledWith(true);
  });

  //demonstrates use of expected exceptions
  describe("#resume", function() {      // resume is an instance method???? 
    it("should throw an exception if song is already playing", function() {   
      player.play(song);

      expect(function() { // this is saying that when we call the function/method resume on player - an error will be
        player.resume(); // raised with the message = "song is already playing"
      }).toThrowError("song is already playing");  // this is how we raise an error
    });
  });
});
