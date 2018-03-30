
    var tag = document.createElement('script');

    tag.src = "//www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);


    var player;



    function onYouTubeIframeAPIReady() {

        player = new YT.Player('player', {
            height: '390',
            width: '640',
            
            // What the flop playlist
            // https://www.youtube.com/playlist?list=PLwUmS78P9jN2rLrgfiMUPIJjZL0kukfo-

            // 1st video in What The Flop
            // https://www.youtube.com/watch?v=IMlQFgRacQU&list=PLwUmS78P9jN2rLrgfiMUPIJjZL0kukfo-&t=0s&index=1
            videoId: cur_video_id,

            playerVars: {
                listType:'playlist',
                list: cur_list,
                autoplay: 0,
                controls: 1
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









setTimeout(function(){
    addPlaylist()
},10000);


function addPlaylist(){

    var videos = player.getPlaylist();
    var cur_videos = document.getElementById('player_wrapper').getElementsByClassName('link');

    for (var i=0;i<9;i++){

        var href='?v='+videos[i]/*&t=6s*/+
                    '&list='+cur_list+
                    '&index='+(i+1)
        ;

        cur_videos[i].getElementsByTagName('a')[0].href = href;

        var src = 'http://img.youtube.com/vi/'+videos[i]+'/0.jpg';
        cur_videos[i].getElementsByTagName('img')[0].src = src;
    }
}
