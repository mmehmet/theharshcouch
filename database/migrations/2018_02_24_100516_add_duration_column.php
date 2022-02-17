<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddDurationColumn extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        if (!Schema::hasColumn('posts', 'duration')){
            Schema::table('posts', function (Blueprint $table) {
                $table->time('duration')->after('audio_link');
            });
        }
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        if (Schema::hasColumn('posts', 'duration')){
            Schema::table('posts', function (Blueprint $table) {
                $table->dropColumn('duration');
            });
        }
    }
}
