@extends('layouts.app')

@section('content')
    <div class="container">
        <div class="row">
        	<div class="col-md-10 col-md-offset-1">
                <div class="panel panel-default">
                    <div class="panel-heading"><h1>{{ $name }}</h1></div>

                    <div class="panel-body">
                    	@if (isset($posts) && count($posts))
                    		@foreach($posts as $post)
	                    		<a href="/episodes/{{ $post->slug }}" class="btn btn-block btn-large episode">
	                    			{{ "$post->title" }} <i class="fa fa-caret-right"></i>
	                    		</a>
	                    	@endforeach
                    	@else
                    	No episodes available! Something's gone wrong...
                    	@endif
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
