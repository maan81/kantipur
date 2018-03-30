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
            <div class="comment_submit">
                <textarea class="col-lg-12" placeholder="Your Comments"></textarea>
                <button class="btn btn-default btn-outline-primary float-right">Post</button>
            </div>
            <div class="clearfix"></div>
            <div class="comment_existing">
                <div class="comment">
                    <small class="text-secondary">Someone Wrote :</small>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id dolor efficitur, tincidunt purus vitae, sagittis massa. Ut ullamcorper lectus ex, sit amet mollis eros consectetur ut. In hac habitasse platea dictumst. Fusce magna enim, fringilla nec mattis nec, efficitur non ligula. Proin posuere non quam sit amet elementum. Praesent eget lorem et metus varius aliquam. Donec urna est, sagittis at dolor sit amet, bibendum aliquam ex.
                    </p>
                </div>
                <div class="comment">
                    <small class="text-secondary">Someone Wrote :</small>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id dolor efficitur, tincidunt purus vitae, sagittis massa. Ut ullamcorper lectus ex, sit amet mollis eros consectetur ut. In hac habitasse platea dictumst. Fusce magna enim, fringilla nec mattis nec, efficitur non ligula. Proin posuere non quam sit amet elementum. Praesent eget lorem et metus varius aliquam. Donec urna est, sagittis at dolor sit amet, bibendum aliquam ex.
                    </p>
                </div>
                <div class="comment">
                    <small class="text-secondary">Someone Wrote :</small>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id dolor efficitur, tincidunt purus vitae, sagittis massa. Ut ullamcorper lectus ex, sit amet mollis eros consectetur ut. In hac habitasse platea dictumst. Fusce magna enim, fringilla nec mattis nec, efficitur non ligula. Proin posuere non quam sit amet elementum. Praesent eget lorem et metus varius aliquam. Donec urna est, sagittis at dolor sit amet, bibendum aliquam ex.
                    </p>
                </div>
            </div>
        </div>

    </div>
</div>
<!-- /container -->

<script src="//code.jquery.com/jquery-3.2.1.slim.min.js" ></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"></script>
<script src="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>

<script type="text/javascript">
    var cur_video_id = '<?=isset($_GET['v'])?$_GET['v']:'IMlQFgRacQU'?>';
    var cur_list = '<?=isset($_GET['list'])?$_GET['list']:'PLwUmS78P9jN2rLrgfiMUPIJjZL0kukfo-'?>';
    var cur_index = '<?=isset($_GET['index'])?$_GET['index']:'null'?>';
</script>

<script type="text/javascript" src="script.js"></script>

</body>
</html>
