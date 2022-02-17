<?php

namespace App;

use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'username',
        'name',
        'email',
        'password',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password',
        'remember_token',
        'role',
    ];

    public function posts()
    {
        return $this->hasMany(\App\Post::class,'author_id');
    }



    public function can_post()
    {
        return $this->is_admin() || $this->is_author();
    }

    public function is_admin()
    {
        return $this->role == 'admin';
    }

    public function is_author()
    {
        return $this->role == 'author';
    }
}
