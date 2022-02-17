@extends('layouts.app')

@section('content')
    <div class="container">
        <div class="row">
        	<div class="col-md-10 col-md-offset-1">
                <div class="panel panel-default">
                    <div class="panel-heading"><h1>{{ $name }}</h1></div>

                    <div class="panel-body">
                    	@if (isset($posts) && count($posts))
                        <table class="table table-hover"> @foreach($posts as $post)
                            <tr>
                                <td>
        	                    	<a href="{{ route('admin.edit', $post->slug) }}" class="btn btn-large btn-block text-left">
                                        <i class="fa fa-pencil mr-30"></i>
        	                    		{{ "$post->title" }}
                                        @if ($post->is_draft()) (draft) @endif
        	                    	</a>
                                </td>
                                <td class="text-right">
                                    <a href="/episodes/{{ $post->slug }}" class="btn btn-default">
                                        View It <i class="fa fa-caret-right"></i>
                                    </a>
                                </td>
                                <td class="text-right">
                                    <a href="{{ route('admin.destroy', $post->slug) }}" class="btn btn-danger">
                                        <i class="fa fa-trash"></i>
                                    </a>
                                </td>
                            </tr> @endforeach
                        </table> @else
                    	No episodes available! Something's gone wrong...
                    	@endif
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
