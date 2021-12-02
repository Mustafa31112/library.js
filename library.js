const library = {
       tracks: { t01: { id: "t01",
                        name: "Code Monkey",
                        artist: "Jonathan Coulton",
                        album: "Thing a Week Three" },
                 t02: { id: "t02",
                        name: "Model View Controller",
                        artist: "James Dempsey",
                        album: "WWDC 2003"},
                 t03: { id: "t03",
                        name: "Four Thirty-Three",
                        artist: "John Cage",
                        album: "Woodstock 1952"}
               },
       playlists: { p01: { id: "p01",
                           name: "Coding Music",
                           tracks: ["t01", "t02"]
                         },
                    p02: { id: "p02",
                           name: "Other Playlist",
                           tracks: ["t03"]
                         }
                  }
     };
     
     /////////////////////////////
     // FUNCTIONS TO IMPLEMENT:
     /////////////////////////////
     
     // prints a list of all playlists, in the form:
     // p01: Coding Music - 2 tracks
     // p02: Other Playlist - 1 tracks
     
     printPlaylists = function () {
     
            for (item in this.playlists) {
              id = this.playlists[item].id;
              name = this.playlists[item].name;
              tracks = this.playlists[item].tracks.length;
              console.log(id + ": by " + name + " - " + tracks + " tracks.")
            }
          
     }
     // prints a list of all tracks, using the following format:
     // t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
     // t02: Model View Controller by James Dempsey (WWDC 2003)
     // t03: Four Thirty-Three by John Cage (Woodstock 1952)
     // const printTracks = function(library) {
     // let tracks = library['tracks']
     // for (track in tracks)
     // console.log(`${tracks[track]['id']} ${tracks[track][['name']]} ${tracks[track][['album']]}`)
     // }
     // printTracks(library);
     
     // prints a list of tracks for a given playlist, using the following format:
     printTracks = function () {
     
            for (item in this.tracks) {
              trackNum = this.tracks[item].id;
              name = this.tracks[item].name;
              artist = this.tracks[item].artist;
              album = this.tracks[item].album;
              console.log(trackNum + ": " + name + " by " + artist + " (" + album + ")")
            }
          
          }
     // printPlaylist(p01)
     // p01: Coding Music - 2 tracks
     // t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
     // t02: Model View Controller by James Dempsey (WWDC 2003)
     printPlaylist = function (playlistId) {
     
            var playListId = this.playlists[playlistId];
            var playListName = this.playlists[playlistId].name;
            var playListLength = this.playlists[playlistId].tracks.length;
            console.log(playlistId + ": " + playListName + " - " + playListLength + " tracks.");
          
            for (track in this.playlists[playlistId].tracks) {
          
              trackId = this.playlists[playlistId].tracks[track];
          
              trackName = this.tracks[trackId].name;
              trackArtist = this.tracks[trackId].artist;
              trackAlbum = this.tracks[trackId].album;
          
              console.log(trackId + ": " + trackName + " by " + trackArtist + " (" + trackAlbum + ")");
          
            }
          
          },
     // ${library['playlist'][playlistId]['track'].length}
     
     // printPlaylist('p01');
     
     // for (track in tracks)
     // for (playlist in playlists)
     // console.log(`${playlists[playlist]['tracks']} ${tracks[track]['name']} ${tracks[track]['name']}`)
     // printPlaylist(library);
     
     
     // adds an existing track to an existing playlist
     addTrackToPlaylist = function (trackId, playlistId) {
     
            library.playlists[playlistId].tracks.push(trackId);
            console.log(library.playlists[playlistId].tracks)
        
        },
     
     // addTrackToPlaylist('t03','p01');
     // console.log(library.playlists)
     
     // generates a unique id
     // (already implemented: use this for addTrack and addPlaylist)
     generateUid = function () {
            return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
          },
     
     
     
     // adds a track to the library
     addTrack = function (name, artist, album) {
            uid = this.uid();
            this.tracks[uid] = {name: name, artist: artist, album: album};
            console.log(this.tracks);
          
          }
     
     // addTrack('Water', 'Sweet', 'Lion')
     
     
     // adds a playlist to the library
     
     addPlaylist = function (name) {
            uid = this.generateUid();
            this.playlists[generateUid] = {id: generateUid, name: name, tracks: ""};
            console.log(this.playlists);
          
          }
     // addTrack('Water', 'Sweet', 'Lion')
     
     
     // STRETCH:
     // given a query string string, prints a list of tracks
     // where the name, artist or album contains the query string (case insensitive)
     // tip: use "string".search("tri") 
     // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search
     const printSearchResults = function(query) {
     
     }
     
     
     library.printPlaylists();
     library.printTracks();
     library.printPlaylist("p01");
     library.addTrackToPlaylist("t03", "p01");
     library.addTrack("Sweet");
     library.addPlaylist("Lion")