@extends('layouts.app')

@section('content')
    <div class="flex-center position-ref full-height">
        <div class="content">
            <div class="title mb-30"><a href="{{ url('/about') }}">What is The Harsh Couch?</a></div>
            <div class="tagline mb-10">{{ config('app.tagline') }}</div>
        </div>
    </div>
@endsection
