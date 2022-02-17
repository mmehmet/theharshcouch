@extends('layouts.app')

@section('content')
    <div class="container">
        <div class="row">
            <div class="col-md-10 col-md-offset-1">
                <div class="panel panel-default">
                    <div class="panel-heading mb-20">
                        <h1>{{ $name }}</h1>
                    </div>

                    <div class="panel-body">
                        <div class="col-md-12 mb-30">
                	        <span class="bullet"><a href="http://theharshcouch.com/thc/feed.xml"><i class="fa fa-rss" aria-hidden="true"></i></a></span>
                	        <span class="bullet-p">Here is <a href="http://theharshcouch.com/thc/feed.xml">the podcast feed</a>.</span>
                        </div>

                        <div class="col-md-12 mb-30">
                	        <span class="bullet"><a href="https://itunes.apple.com/au/podcast/the-harsh-couch/id863706998?mt=2"><i class="fa fa-apple"></i></a></span>
                	        <span class="bullet-p"><a href="https://itunes.apple.com/au/podcast/the-harsh-couch/id863706998?mt=2">Add podcast</a> on iPhone, iPad, other iOS devices or in iTunes.</span>
                        </div>

                        <div class="col-md-12 mb-30">
                            <span class="bullet"><a href="http://subscribeonandroid.com/theharshcouch.com/thc/feed.xml"><i class="fa fa-android"></i></a></span>
                            <span class="bullet-p"><a href="http://subscribeonandroid.com/theharshcouch.com/thc/feed.xml">Add podcast</a> on Android devices.</span>
                        </div>

                        <div class="col-md-12 mb-30">
                            <span class="bullet"><a href="http://www.stitcher.com/s?fid=48005&refid=stpr"><i class="fa fa-podcast"></i></a></span>
                            <span class="bullet-p">We are also on the <a href="http://www.stitcher.com/s?fid=48005&refid=stpr">Stitcher service</a>.</span>
                        </div>

                        <div class="col-md-12 mb-20">
                            <p>If you're using an iPhone or Mac, you'll find <em>The Harsh Couch</em> in the iTunes podcast directory. Download Apple's <a href="https://itunes.apple.com/au/app/podcasts/id525463029?mt=8">Podcasts app in the App Store</a> and then search for "The Harsh Couch". You could also try one of the other podcast apps out there, such as <a href="https://itunes.apple.com/au/app/downcast/id393858566?mt=8">Downcast</a>, <a href="https://itunes.apple.com/au/app/pocket-casts/id414834813?mt=8">Pocket Casts</a>, <a href="https://itunes.apple.com/au/app/castro-high-fidelity-podcasts/id723142770?mt=8">Castro</a>, <a href="https://itunes.apple.com/au/app/network/id723422355?mt=8">Network</a>, or <a href="https://itunes.apple.com/au/app/instacast-4-podcast-client/id577056377?mt=8">Instacast</a>.</p>

                            <p>If you're using Android we recommend <a href="https://play.google.com/store/apps/details?id=au.com.shiftyjelly.pocketcasts">Pocket Casts</a>, <a href="https://play.google.com/store/apps/details?id=mobi.beyondpod&hl=en">BeyondPod</a>, or <a href="https://play.google.com/store/apps/details?id=com.podcast.podcasts&hl=en">Podcast Player</a>.</p>

                            <p>The show is also available on multiple platforms via the <a href="http://www.stitcher.com/">Stitcher network</a>. Download the Stitcher app on your <a href="http://itunes.apple.com/au/app/stitcher-radio/id288087905?mt=8">iOS</a> or <a href="https://play.google.com/store/apps/details?id=com.stitcher.app">Android</a> device ... and even in some cars.</p>

                            <p>You can also listen to individual shows via the player on each show page, or just download the show files and use any other audio application or device that can handle MP3s.</p>

                            <p><em>Did that all make sense? It can be tricky to get your head around if you're not already a podcast listener... sorry. <a href="{{ route('contact') }}">Let us know</a> if there are other details that would help.</em></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
