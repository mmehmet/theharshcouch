<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;
use App\User;

class NewUserWibbly extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        $automic = new User;
        $automic->setAttribute('username', 'automic');
        $automic->setAttribute('name', 'Colonel Ivan Sayed McChinghauser III');
        $automic->setAttribute('email', 'mic@showeb.net');
        $automic->setAttribute('role', 'admin');
        $automic->setAttribute('password', bcrypt('secret'));
        $automic->save();

        $wibbly = new User;
        $wibbly->setAttribute('username', 'wibbly');
        $wibbly->setAttribute('name', 'Wibbly Le Monde');
        $wibbly->setAttribute('email', 'geoff@asiasecure.com');
        $wibbly->setAttribute('role', 'admin');
        $wibbly->setAttribute('password', bcrypt('secret'));
        $wibbly->save();
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
}
