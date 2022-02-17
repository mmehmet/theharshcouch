<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddSizeColumnToPosts extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        if (!Schema::hasColumn('posts', 'size')){
            Schema::table('posts', function (Blueprint $table) {
                $table->integer('size')->after('duration');
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
        if (Schema::hasColumn('posts', 'size')){
            Schema::table('posts', function (Blueprint $table) {
                $table->dropColumn('size');
            });
        }
    }
}
