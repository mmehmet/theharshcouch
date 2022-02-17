<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
	<head>
	    <meta charset="utf-8">
	    <meta http-equiv="X-UA-Compatible" content="IE=edge">
	    <meta name="viewport" content="width=device-width, initial-scale=1">

	    <title>{{ config('app.name', 'Laravel') }} @if(isset($name)) | {{ $name }} @endif</title>

	    @if (Request::is('contact'))<!-- CSRF Token -->
	    <meta name="csrf-token" content="{{ csrf_token() }}">
	    @endif

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Raleway:100,600" rel="stylesheet" type="text/css">
        <link href='http://fonts.googleapis.com/css?family=Open+Sans:400,700,600' rel='stylesheet' type='text/css'>
        <link href="{{ asset('css/font-awesome.css') }}" rel="stylesheet" type="text/css">

	    <link rel="shortcut icon" href="{{ asset('img/favicon.ico') }}">
	    <link rel="apple-touch-icon" href="{{ asset('img/couch_1400.png') }}">

	    <!-- Styles -->
	    <link href="{{ asset('css/app.css') }}" rel="stylesheet" type="text/css">
	    <link href="{{ asset('css/thc.css') }}" rel="stylesheet" type="text/css">
	    @if (Request::route()->getName() === 'welcome')<link href="{{ asset('css/home.css') }}" rel="stylesheet" type="text/css">
	    @elseif (Request::is('live') || Request::is('episodes/*'))<link href="{{ asset('css/flat.audio.css') }}" rel="stylesheet" type="text/css">
	    @elseif (Request::is('admin/edit/*') || Request::is('admin/new-episode'))<link href="http://cdnjs.cloudflare.com/ajax/libs/summernote/0.8.8/summernote.css" rel="stylesheet">
	    @endif

	    <!-- Scripts -->
		<script src="{{ asset('js/ttzc.js') }}"></script>
	</head>
