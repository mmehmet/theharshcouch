<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\Storage;
use App\Post;

class ScrapeOldHtml extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        $files = Storage::disk('local')->allFiles('thc');

        foreach ($files as $file) {
            $content = Storage::disk('local')->get($file);

            $title = substr($content, stripos($content, '<h1>') + 4);
            $title = substr($title, 0, stripos($title, '</h1>'));

            $description = substr($content, stripos($content, '<p>') + 3);
            $description = substr($description, 0, stripos($description, '</p>'));
            // \Log::debug(trim($description));

            $body = substr($content, stripos($content, '<article>') + 9);
            $body = substr($body, 0, stripos($body, '</article>'));
            $body = substr($body, stripos($body, '<h'));
            $body = stripos($body, '<hr>') === 0 ? substr($body, 4) : $body;
            $body = str_replace('h1', 'h2', $body);

            $quote = substr($body, stripos($body, '<blockquote>') + 12);
            $quote = substr($quote, 0, stripos($quote, '</blockquote>'));
            // \Log::debug(trim($quote));

            try {
                if ($post = Post::where('title', $title)->first()) {
                    $post->description = trim($description);
                    $post->quote = $quote ? trim($quote) : trim($description);
                    $post->body = trim($body);

                    $post->save();
                    // \Log::debug("$title - done!");
                }
            } catch (\Exception $e) {
                \Log::debug("$title could not be updated");
            }
        }
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
