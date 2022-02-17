@extends('layouts.app')

@section('content')
    <div class="container">
        <div class="row">
        	<div class="col-md-10 col-md-offset-1">
                <div class="panel panel-default">
                    <div class="panel-heading"><h1>Editing Episode {{ $post->slug }}</h1></div>

                    <div class="panel-body">
                        <div class="col-md-12 mb-20">
                            <form method="post" action="{{ route('admin.update', $post->slug) }}">
@include('admin.form')
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
