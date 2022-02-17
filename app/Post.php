<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Post extends Model
{

    public function author()
    {
    	return $this->belongsTo(\App\User::class, 'author_id');
    }

    public function is_draft()
    {
    	return !$this->active;
    }

}
