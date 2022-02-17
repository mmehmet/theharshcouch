								<input type="hidden" name="_token" value="{{ csrf_token() }}">
								<div class="row">
									<div class="form-group col-sm-12">
										<label class="col-md-2 col-md-offset-2 control-label" for="slug">Slug</label>
										<div class="col-md-3">
											<input type="text" name="slug" class="form-control" required
												value="{{ $post->slug ?? date('Y-m-d') }}"
												@if (isset($post->slug)) disabled @endif
												/>
										</div>
										<div class="col-md-3 text-right">
											<label class="control-label" for="save">
												<input type="checkbox" name="save" style="display:inline-block;margin-right:5px;" @if(isset($post) && !$post->active) checked @endif />
												Save as Draft?
											</label>
										</div>
									</div>

									<div class="form-group col-sm-12">
										<label class="col-md-2 col-md-offset-2 control-label" for="title">Title</label>
										<div class="col-md-6">
											<input type="text" name="title" class="form-control" required
												value="{{ $post->title ?? old('title') }}"
												/>
										</div>
									</div>

									<div class="form-group col-sm-12">
										<label class="col-md-2 col-md-offset-2 control-label" for="description">Description</label>
										<div class="col-md-6">
											<textarea name="description" class="form-control" rows="5">
												{{ $post->description ?? old('description') }}
											</textarea>
										</div>
									</div>

									<div class="form-group col-sm-12">
										<label class="col-md-2 col-md-offset-2 control-label" for="audio_link">MP3 File URL</label>
										<div class="col-md-6">
											<input type="text" name="audio_link" class="form-control" required
												value="{{ $post->audio_link ?? old('audio_link') }}"
												/>
										</div>
									</div>

									<div class="form-group col-sm-12">
										<label class="col-md-2 col-md-offset-2 control-label" for="duration">MP3 File Duration</label>
										<div class="col-md-2">
											<input type="text" name="duration" class="form-control" title="HH:MM:SS"
												value="{{ $post->duration ?? old('duration') }}"
												/>
										</div>
										<label class="col-md-2 text-right control-label" for="size">MP3 File Size</label>
										<div class="col-md-2">
											<input type="number" name="size" class="form-control" title="in bytes"
												value="{{ $post->size ?? old('size') }}"
												/>
										</div>
									</div>

									<div class="form-group col-sm-12">
										<label class="col-md-2 col-md-offset-2 control-label" for="quote">Quote</label>
										<div class="col-md-6">
											<textarea name="quote" class="form-control" rows="5">
												{{ $post->quote ?? old('quote') }}
											</textarea>
										</div>
									</div>

									<label class="col-md-12 control-label" for="body">Show Notes</label>
									<div class="form-group col-sm-12">
										<textarea name="body" class="form-control" rows="10" id="shownotes">
											{{ $post->body ?? old('body') }}
										</textarea>
									</div>

								    <div class="col-sm-12 text-right">
								        <button type="submit" class="btn btn-success enable-when-loaded">
								            <span class="control-label">Save</span>
								            <i class="fa fa-arrow-right"></i>
								        </button>
								    </div>
								</div>