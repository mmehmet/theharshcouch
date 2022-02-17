@extends('layouts.app')

@section('content')
    <div class="container">
        <div class="row">
            <div class="col-md-10 col-md-offset-1">
                <div class="panel panel-default">
                    <div class="panel-heading"><h1>{{ $name }}</h1></div>

                    <div class="panel-body">
                        <div class="col-md-12 mb-30">
                            <h3>Leave a comment</h3>
                            <p>There's a comment section on the bottom of each show page. Go and vent there.</p>
                            <hr />

                            <h3>By phone</h3>
                            <p>Leave us a phone message. We might even use it on the show.</p>
                            <p>We love a good rant.</p>
                            <p>If you're in Australia, call (02) 8094 1248.</p>
                            <p>Elsewhere on this sick planet, use +61280941248</p>
                            <hr />

                            <h3>By Email</h3>
                            <p class="mb-20">Of course we have email, but we're not crazy enough to publish our addresses here. If you're feeling lucky, you could try our first names at this domain &mdash; or just use the form below and we'll receive the contents by email...</p>
                        </div>

                        <section class="col-md-10 col-md-offset-1">
                            <form class="form-horizontal panel panel-default" role="form" method="POST" action="{{ route('contactus') }}">
                                <div class="panel-body">
                                    <p>Fields marked with <span class="required">*</span> are required.</p>

                                    <div class="row">
                                        <label class="col-md-5 control-label" for="email">Email <span class="required">*</span></label>
                                        <div class="col-md-6 mb-10"><input type="text" placeholder="you@example.com" class="form-control" id="email" name="email" required /></div>
                                    </div>

                                    <div class="row">
                                        <label class="col-md-5 control-label" for="name">Name</label>
                                        <div class="col-md-6 mb-10"><input type="text" placeholder="Your name here" class="form-control" id="name" name="name" /></div>
                                    </div>

                                    <div class="row">
                                        <label class="col-md-5 control-label" for="twitter">Twitter</label>
                                        <div class="col-md-6 mb-10"><input type="text" placeholder="@twitter-handle" class="form-control" id="twitter" name="twitter" /></div>
                                    </div>

                                    <div class="row">
                                        <label class="col-md-5 control-label" for="phone">Phone</label>
                                        <div class="col-md-6 mb-10"><input type="text" placeholder="including international code" class="form-control" id="phone" name="phone" /></div>
                                    </div>

                                    <div class="row">
                                        <label class="col-md-5 control-label" for="quotable">Can we quote you on the show?</label>
                                        <div class="col-md-6 mb-10"><input type="text" placeholder="yes" class="form-control" id="quotable" name="quotable" /></div>
                                    </div>

                                    <div class="row">
                                        <label class="col-md-5 control-label" for="comments">Comments <span class="required">*</span></label>
                                        <div class="col-md-6 mb-10"><textarea class="form-control" id="comments" name="comments" rows="5" required></textarea></div>
                                    </div>

                                    <div class="row">
                                        <label class="col-md-5 control-label">You'll need to solve this math problem <span class="required">*</span></label>
                                        <div class="col-md-6 mb-10">
                                            <span style="display:inline-block">{{ $operand_1 }} {{ $op }} {{ $operand_2 }} = </span>
                                            <input type="text" placeholder="?" class="form-control" id="answer" name="answer" style="width:5em;display:inline-block" />
                                            <input type="hidden" name="operand_1" value="{{ $operand_1 }}"/>
                                            <input type="hidden" name="operator" value="{{ $operator }}"/>
                                            <input type="hidden" name="operand_2" value="{{ $operand_2 }}"/>
                                        </div>
                                    </div>
                                </div>
                                <div class="panel-footer">
                                    <div class="text-right"><input type="submit" class="btn btn-success" value="Send &#9654;" /></div>
                                </div>
                            </form>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
