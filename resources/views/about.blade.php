@extends('layouts.app')

@section('content')
	<div class="container">
	    <div class="row">
        	<div class="col-md-10 col-md-offset-1">
                <div class="panel panel-default">
                    <div class="panel-heading mb-20">
                    	<h1>About <b>{{ config('app.name') }}</b></h1>
                    </div>

                    <div class="panel-body">
				        <div class="col-md-12 mb-20">
					        <span class="bullet"><a href="{{ url('/live') }}"><i class="fa fa-headphones" aria-hidden="true"></i></a></span>
					        <span class="bullet-p">We broadcast the show <a href="{{ url('/live') }}">live</a> on Tuesday evenings from 10 PM Australian Eastern DAYLIGHT Time (That's <script>new TTZC.Widget({ t:'9 PM', tz:'Sydney' }).display(); </script> where you are, according to your computer). There's more information about the live broadcast <a href="{{ route('live') }}">here</a>.</span>
				        </div>

				        <div class="col-md-12 mb-10">
					        <span class="bullet"><a href="{{ route('subscribe') }}"><i class="fa fa-podcast"></i></a></span>
					        <span class="bullet-p">Or you could <a href="{{ route('subscribe') }}">subscribe to the podcast</a>.</span>
				        </div>

				        <div class="col-md-12 mb-20">
                            <hr />
                            <h3>Recent episodes:</h3>
	                    	@if (isset($posts) && count($posts))
	                    		@foreach($posts as $post)
		                    		<a href="/episodes/{{ $post->slug }}" class="btn btn-block btn-large episode">
		                    			{{ $post->title }} <i class="fa fa-caret-right"></i>
		                    		</a>
		                    		<p class="episode">{{ $post->description ?? '' }}</p>
		                    	@endforeach
	                    	@else
	                    	(No episodes available! Something's gone wrong...)
	                    	@endif
                            <hr />
					        <span class="bullet"><a href="{{ route('episodes') }}"><i class="fa fa-archive"></i></a></span>
					        <span class="bullet-p"><a href="{{ route('episodes') }}">Tally ho! There's even more in the archives...</a></span>
				        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
