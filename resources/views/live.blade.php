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
                        <div class="col-md-12 mb-20">
                	        @include('partials.jplayer')
                        </div>

                        <div class="col-md-12 mb-20">
                	        <p>The Harsh Couch is broadcast live on <b>Tuesdays at 10 PM, <a href="http://www.australia.gov.au/about-australia/facts-and-figures/time-zones-and-daylight-saving">Australian Eastern DAYLIGHT Time (Sydney, Melbourne, Hobart, Canberra)</a></b>.</p>
                	        <p>In your timezone, this is <b><script>new TTZC.Widget({ t:'9 PM', tz:'Sydney' }).display(); </script></b> (This is calculated from the timezone your computer is reporting to us. Unless you live somewhere in the western Pacific it'll be on Tuesday!).</p>
                            <p>Delays, cancellations and reminders are announced on the <a href="http://twitter.com/theharshcouch">@theharshcouch</a> Twitter account. <em>Don't tell Mr McCool we have a Twitter account. I don't think he's noticed yet...</em></p>
                            <p>You can also use other software to listen to the live feed at this address:<br /> <a href="http://live.mcrent.fm:8000/listen">http://live.mcrent.fm:8000/listen</a></p>
                            <p>The live feed is a 64kbps MP3 stream.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
