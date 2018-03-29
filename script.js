
    // 2. This code loads the IFrame Player API code asynchronously.
    var tag = document.createElement('script');

    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);


    // 3. This function creates an <iframe> (and YouTube player)
    //    after the API code downloads.
    var player;




     function onGoogleLoad() {
        gapi.client.setApiKey('AIzaSyBlki-XWA4lYvSKybp4Ld5UJ81FZHc_C_U');
        gapi.client.load('youtube', 'v3', function() {

            var request = gapi.client.youtube.playlistItems.list({
                // part: 'snippet',
                playlistId: 'PLwUmS78P9jN2rLrgfiMUPIJjZL0kukfo-',
                maxResults: 10
            });

            request.execute(function(response) {
                for (var i = 0; i < response.items.length; i++) {
                    console.log(response.items[i].snippet.title + " published at " + response.items[i].snippet.publishedAt)
                }
            });
        });
    }



    // buildApiRequest(
    //     'GET',
    //     '/youtube/v3/playlists',
    //     {
    //         'channelId': 'PLwUmS78P9jN2rLrgfiMUPIJjZL0kukfo-',
    //         'maxResults': '10'
    //         // 'part': 'snippet,contentDetails'
    //     }
    // );


    function onYouTubeIframeAPIReady() {
        player = new YT.Player('player', {
            // height: '390',
            // width: '640',
            
            // What the flop playlist
            // https://www.youtube.com/playlist?list=PLwUmS78P9jN2rLrgfiMUPIJjZL0kukfo-

            // 1st video in What The Flop
            // https://www.youtube.com/watch?v=IMlQFgRacQU&list=PLwUmS78P9jN2rLrgfiMUPIJjZL0kukfo-&t=0s&index=1
            videoId: 'IMlQFgRacQU',

            playerVars: {
                listType:'playlist',
                list: 'PLwUmS78P9jN2rLrgfiMUPIJjZL0kukfo-'

                // 'autoplay': 0,
                // 'controls': 1,
                // 'playlist':[
                //     'IMlQFgRacQU'
                // ]
            },

              events: {
                'onReady': onPlayerReady,
                'onStateChange': onPlayerStateChange
            }
        });
    }


    // 4. The API will call this function when the video player is ready.
    function onPlayerReady(event) {
        event.target.playVideo();
    }


    // 5. The API calls this function when the player's state changes.
    //    The function indicates that when playing a video (state=1),
    //    the player should play for six seconds and then stop.
    var done = false;
    function onPlayerStateChange(event) {
        if (event.data == YT.PlayerState.PLAYING && !done) {
            setTimeout(stopVideo, 6000);
            done = true;
        }
    }
    function stopVideo() {
        player.stopVideo();
    }
