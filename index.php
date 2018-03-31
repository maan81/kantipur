<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8"/>
    <title>Kantipur TV</title>
    <link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
    <link rel="stylesheet" type="text/css" href="style.css">
</head>
<body>

<div class="container">

    <h2>What the flop ?</h2>

    <div class="row">

        <div id="video_wrapper" class="col-lg-6">
            <div id="player"></div>
            <div id="player_wrapper">
                <div id="player_wrapper" class="col-md-12">
                    <h5>Playlist</h5>
                    <div id="playlist" class="row">
                        <div class="link col-md-4">
                            <a href="#">
                                <img src="#" alt="">
                            </a>
                        </div>
                        <div class="link col-md-4">
                            <a href="#">
                                <img src="#" alt="">
                            </a>
                        </div>
                        <div class="link col-md-4">
                            <a href="#">
                                <img src="#" alt="">
                            </a>
                        </div>
                        <div class="link col-md-4">
                            <a href="#">
                                <img src="#" alt="">
                            </a>
                        </div>
                        <div class="link col-md-4">
                            <a href="#">
                                <img src="#" alt="">
                            </a>
                        </div>
                        <div class="link col-md-4">
                            <a href="#">
                                <img src="#" alt="">
                            </a>
                        </div>
                        <div class="link col-md-4">
                            <a href="#">
                                <img src="#" alt="">
                            </a>
                        </div>
                        <div class="link col-md-4">
                            <a href="#">
                                <img src="#" alt="">
                            </a>
                        </div>
                        <div class="link col-md-4">
                            <a href="#">
                                <img src="#" alt="">
                            </a>
                        </div>
                    </div>
                    <!-- /playlist -->
                </div>
                <!-- /playlist -->
            </div>
            <!-- /player_wrapper -->
        </div>

        <div id="comment_wrapper" class="col-lg-6">
            <form class="comment_submit" method="post">
                <textarea class="col-lg-12" placeholder="Your Comments"></textarea>
                <button class="btn btn-default btn-outline-primary float-right">Post</button>
            </form>
            <div class="clearfix"></div>
            <div class="comment_existing">
            </div>
        </div>

    </div>
</div>
<!-- /container -->

<script src="//code.jquery.com/jquery-3.2.1.min.js" ></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"></script>
<script src="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>

<script type="text/javascript">
    var cur_key = 'AIzaSyBlki-XWA4lYvSKybp4Ld5UJ81FZHc_C_U';
    var cur_video_id = '<?=isset($_GET['v'])?$_GET['v']:'IMlQFgRacQU'?>';
    var cur_list = '<?=isset($_GET['list'])?$_GET['list']:'PLwUmS78P9jN2rLrgfiMUPIJjZL0kukfo-'?>';
    var cur_index = '<?=isset($_GET['index'])?$_GET['index']:'null'?>';
</script>

<script type="text/javascript" src="script.js"></script>

</body>
</html>
