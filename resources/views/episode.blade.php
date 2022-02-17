@extends('layouts.app')

@section('content')
    <div class="container">
        <div class="row">
        	<div class="col-md-10 col-md-offset-1">
                <div class="panel panel-default">
                    <div class="panel-heading"><h1>
                        @guest{{ $post->title }}@else<a href="{{ route('admin.edit', $post->slug) }}">{{ $post->title}}</a>@endguest
                    </h1></div>

                    <div class="panel-body">
                        <div class="col-md-12 mb-20">
                            <p class="lead">{{ $post->description ?? 'description goes here' }}</p>
                            
                            @include('partials.jplayer')
                        </div>

                        <div class="col-md-12 mb-20">
                            <span class="bullet"><a href="{{ $post->audio_link }}"><i class="fa fa-download"></i></a></span>
                            <span class="bullet-p"><a href="{{ $post->audio_link }}">Download this show</a></span>
                        </div>

                        <div class="col-md-12 mb-20">
                            <span class="bullet"><a href="{{ route('subscribe') }}"><i class="fa fa-podcast"></i></a></span>
                            <span class="bullet-p"><a href="{{ route('subscribe') }}">subscribe to the podcast</a></span>
                        </div>

                        <div class="col-md-12 mb-10">
                            <span class="bullet"><a href="#discourse-comments"><i class="fa fa-comments"></i></a></span>
                            <span class="bullet-p"><a href="#discourse-comments">Comment on this episode (below the show notes)</a></span>
                        </div>

                        <div class="col-md-12 mb-20">
                            <h2>Show Notes</h2>
                            <hr />
                            <h3>Quote</h3>
                            <div class="quote">
                                {!! $post->quote ?? 'quote goes here' !!}
                            </div>
                            <hr />
                        	{!! $post->body ?: 'stuff goes here...' !!}
                        </div>

                        <div class="col-md-12 mb-20">
                            <h3>Rise up, commentariat...</h3>
                            <div id="discourse-comments"></div>

                            <div id="disqus_thread"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
