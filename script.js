
    var tag = document.createElement('script');

    tag.src = "https://www.youtube.com/iframe_api";
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
    addPlaylist();
    addComments();
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

        var src = 'https://img.youtube.com/vi/'+videos[i]+'/0.jpg';
        cur_videos[i].getElementsByTagName('img')[0].src = src;
    }
}

function addComments(){

    var xmlhttp = new XMLHttpRequest();
    var url = 'https://www.googleapis.com/youtube/v3/commentThreads'+
                '?part=snippet'+
                '&videoId='+cur_video_id+
                '&key='+cur_key+
                '&maxResults=4'
    ;

    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var myArr = JSON.parse(this.responseText);
            var comments = filter_comments(myArr.items)

            displayComments(comments);
        }
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();

    // https://www.googleapis.com/youtube/v3/commentThreads
    //         ?part=snippet
    //         &videoId=IMlQFgRacQU
    //         &key=AIzaSyBlki-XWA4lYvSKybp4Ld5UJ81FZHc_C_U
    //         &maxResults=4
}

function displayComments(comments){

    var html = '';

    for(var i=0;i<comments.length;i++){
        html +=
                '<div class="comment">'+
                '    <small class="text-secondary">'+
                '        <span class="username">'+comments[i].username+'</span> wrote :'+
                '    </small>'+
                '    <p>'+comments[i].comment+'</p>'+
                '</div>'
        ;
    }

    document
        .getElementsByClassName('comment_existing')[0]
        .insertAdjacentHTML('afterbegin',html)
    ;
}

function filter_comments(items){

    var comments = [];

    for (var i=0;i<items.length;i++){
        var comment = {
            'username': items[i].snippet.topLevelComment.snippet.authorDisplayName,
            'comment' : items[i].snippet.topLevelComment.snippet.textDisplay
        };
        comments.push(comment);
    }

    return comments;
}


//===========================

function add_new_comment(comment){

    var html =
            '<div class="comment">'+
            '    <small class="text-secondary">'+
            '        <span class="username">'+'localhost'+'</span> wrote :'+
            '    </small>'+
            '    <p>'+comment+'</p>'+
            '</div>'
    ;

    $('.comment_existing').append(html);

}

$(document).ready(function(){
    $('.comment_submit').submit(function(e){
        e.preventDefault();
        $.post('comments.php',{'comment':$('textarea').val(),'video_id':cur_video_id})
            .done(function(data){
                data = JSON.parse(data);
                add_new_comment(data[0].comment);

                $('textarea').val('');
            })
    });

    setTimeout(
        function(){
            $.get('comments.php?video_id='+cur_video_id).done(function(data){
                data = JSON.parse(data);

                for(var i=0;i<data.length;i++){
                    add_new_comment(data[i].comment);
                }
            })
        },
        15000
    );

});
