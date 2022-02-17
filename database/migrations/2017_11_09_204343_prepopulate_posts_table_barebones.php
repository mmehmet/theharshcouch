<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;
use App\Post;
use App\User;

class PrepopulatePostsTableBarebones extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     * @throws \Exception
     */
    public function up()
    {
        $author = User::where('username', 'wibbly')->first();
        if (!$author) {
            throw new \Exception('No Wibbly');
        }

        $json = '[
            {"created_at" : "2017-11-07", "slug" : "2017.11.07", "title" : "Decoherence"},
            {"created_at" : "2017-10-31", "slug" : "2017.10.31", "title" : "Mockracy"},
            {"created_at" : "2017-10-24", "slug" : "2017.10.24", "title" : "Pick All the Fckn Cherries"},
            {"created_at" : "2017-10-17", "slug" : "2017.10.17", "title" : "We\'re All Going to Die, But How Soon?"},
            {"created_at" : "2017-10-10", "slug" : "2017.10.10", "title" : "Dorodango"},
            {"created_at" : "2017-09-19", "slug" : "2017.09.19", "title" : "We All Work for Frank"},
            {"created_at" : "2017-09-12", "slug" : "2017.09.12", "title" : "Sensu Lato"},
            {"created_at" : "2017-09-05", "slug" : "2017.09.05", "title" : "More Lord Bucketheads"},
            {"created_at" : "2017-08-29", "slug" : "2017.08.29", "title" : "Larrikinism"},
            {"created_at" : "2017-08-22", "slug" : "2017.08.22", "title" : "The Illegitimate Government"},
            {"created_at" : "2017-08-16", "slug" : "2017.08.16", "title" : "The Mystery of the Croatian Arse Topaz"},
            {"created_at" : "2017-08-08", "slug" : "2017.08.08", "title" : "Deassuring"},
            {"created_at" : "2017-08-01", "slug" : "2017.08.01", "title" : "A Stank of Bin Chickens"},
            {"created_at" : "2017-07-25", "slug" : "2017.07.25", "title" : "Grow Your Own"},
            {"created_at" : "2017-07-18", "slug" : "2017.07.18", "title" : "Total F**kn Clown Party"},
            {"created_at" : "2017-07-11", "slug" : "2017.07.11", "title" : "Honeyeater Tongue Man"},
            {"created_at" : "2017-07-04", "slug" : "2017.07.04", "title" : "C**t of a Pope"},
            {"created_at" : "2017-06-27", "slug" : "2017.06.27", "title" : "Harry Not\'ere and the Sweaty Shoe of Glory"},
            {"created_at" : "2017-06-20", "slug" : "2017.06.20", "title" : "The Salad Linkage"},
            {"created_at" : "2017-06-13", "slug" : "2017.06.13", "title" : "Thorvald Spartan von Daggenhurst"},
            {"created_at" : "2017-06-06", "slug" : "2017.06.06", "title" : "Bamix Lobotomy"},
            {"created_at" : "2017-05-30", "slug" : "2017.05.30", "title" : "Killing Live Cows"},
            {"created_at" : "2017-05-22", "slug" : "2017.05.22", "title" : "Ecuador sur la Thames"},
            {"created_at" : "2017-05-16", "slug" : "2017.05.16", "title" : "The Pirates of Pyongyang"},
            {"created_at" : "2017-05-09", "slug" : "2017.05.09", "title" : "Barrels of Non-Halal Pork"},
            {"created_at" : "2017-05-02", "slug" : "2017.05.02", "title" : "Tokamak"},
            {"created_at" : "2017-04-25", "slug" : "2017.04.25", "title" : "Dead Digger Day"},
            {"created_at" : "2017-04-18", "slug" : "2017.04.18", "title" : "All Goats Are Bad Actors"},
            {"created_at" : "2017-03-28", "slug" : "2017.03.28", "title" : "Pique Mete"},
            {"created_at" : "2017-03-21", "slug" : "2017.03.21", "title" : "Recalibrate Your Bubble"},
            {"created_at" : "2017-03-13", "slug" : "2017.03.13", "title" : "The Secessionists Turned Left"},
            {"created_at" : "2017-03-07", "slug" : "2017.03.07", "title" : "Elvis and The Colonel"},
            {"created_at" : "2017-03-01", "slug" : "2017.03.01", "title" : "Bad Land"},
            {"created_at" : "2017-02-21", "slug" : "2017.02.21", "title" : "Something Heinous in Cambodia"},
            {"created_at" : "2017-02-14", "slug" : "2017.02.14", "title" : "Rocket Propelled Heart Attack"},
            {"created_at" : "2017-02-07", "slug" : "2017.02.07", "title" : "Bernardi Gras"},
            {"created_at" : "2017-01-31", "slug" : "2017.01.31", "title" : "America\'s Enema"},
            {"created_at" : "2017-01-24", "slug" : "2017.01.24", "title" : "Southern Right Whale Porn"},
            {"created_at" : "2017-01-17", "slug" : "2017.01.17", "title" : "Smoke Em If You Got Em"},
            {"created_at" : "2016-12-13", "slug" : "2016.12.13", "title" : "Curious Fluids"},
            {"created_at" : "2016-12-06", "slug" : "2016.12.06", "title" : "Triple Burner"},
            {"created_at" : "2016-11-29", "slug" : "2016.11.29", "title" : "Dribbling Miserable Prognathous Boutique Swineturd"},
            {"created_at" : "2016-11-22", "slug" : "2016.11.22", "title" : "Very Very Mediocre"},
            {"created_at" : "2016-11-15", "slug" : "2016.11.15", "title" : "Nothing But Interesting Times"},
            {"created_at" : "2016-11-14", "slug" : "2016.11.14", "title" : "Bonus Episode: The Pineapple Express"},
            {"created_at" : "2016-11-08", "slug" : "2016.11.08", "title" : "Apocalypse Eve"},
            {"created_at" : "2016-11-01", "slug" : "2016.11.01", "title" : "Genitalia of Non-Human Species"},
            {"created_at" : "2016-10-25", "slug" : "2016.10.25", "title" : "Incompatible With Living"},
            {"created_at" : "2016-10-18", "slug" : "2016.10.18", "title" : "The Misanthropic Division"},
            {"created_at" : "2016-10-11", "slug" : "2016.10.11", "title" : "Bad Moon Rising"},
            {"created_at" : "2016-10-04", "slug" : "2016.10.04", "title" : "What You Already Knew Is Right"},
            {"created_at" : "2016-09-27", "slug" : "2016.09.27", "title" : "Nexus of Clusterf**ks"},
            {"created_at" : "2016-09-20", "slug" : "2016.09.20", "title" : "Doubleplusgood"},
            {"created_at" : "2016-09-13", "slug" : "2016.09.13", "title" : "Careless Thinkers"},
            {"created_at" : "2016-09-06", "slug" : "2016.09.06", "title" : "Court Certified Racist"},
            {"created_at" : "2016-08-30", "slug" : "2016.08.30", "title" : "Fatal Familial Insomnia"},
            {"created_at" : "2016-08-23", "slug" : "2016.08.23", "title" : "Clement or Cunctatious"},
            {"created_at" : "2016-08-16", "slug" : "2016.08.16", "title" : "Stasis is Death"},
            {"created_at" : "2016-08-09", "slug" : "2016.08.09", "title" : "Too Hyperbolic to Be Considered Factual"},
            {"created_at" : "2016-08-03", "slug" : "2016.08.03", "title" : "Rain Bombs"},
            {"created_at" : "2016-07-26", "slug" : "2016.07.26", "title" : "Rabid Narcissistic Fool"},
            {"created_at" : "2016-06-28", "slug" : "2016.06.28", "title" : "Right Wingnuts"},
            {"created_at" : "2016-06-21", "slug" : "2016.06.21", "title" : "The Tonne"},
            {"created_at" : "2016-06-14", "slug" : "2016.06.14", "title" : "Vunt"},
            {"created_at" : "2016-06-08", "slug" : "2016.06.08", "title" : "Skeptic Shock Syndrome"},
            {"created_at" : "2016-05-31", "slug" : "2016.05.31", "title" : "Eat the Rich"},
            {"created_at" : "2016-05-24", "slug" : "2016.05.24", "title" : "Arc of Instability"},
            {"created_at" : "2016-05-10", "slug" : "2016.05.10", "title" : "Send in the Clowns"},
            {"created_at" : "2016-05-03", "slug" : "2016.05.03", "title" : "Bollocks to the Budget"},
            {"created_at" : "2016-04-26", "slug" : "2016.04.26", "title" : "Acupuncture of the Genitals"},
            {"created_at" : "2016-04-19", "slug" : "2016.04.19", "title" : "Denuded and Degraded"},
            {"created_at" : "2016-03-29", "slug" : "2016.03.29", "title" : "It Is As It Is"},
            {"created_at" : "2016-03-22", "slug" : "2016.03.22", "title" : "An Exciting Time to be Australian"},
            {"created_at" : "2016-03-15", "slug" : "2016.03.15", "title" : "Translational Medicine"},
            {"created_at" : "2016-03-08", "slug" : "2016.03.08", "title" : "Just Say No"},
            {"created_at" : "2016-03-01", "slug" : "2016.03.01", "title" : "Like Nuremberg, Only Much More Kitsch"},
            {"created_at" : "2016-02-23", "slug" : "2016.02.23", "title" : "Cancer Makes You Fully Sick"},
            {"created_at" : "2016-02-16", "slug" : "2016.02.16", "title" : "Political Pageant Queen"},
            {"created_at" : "2016-02-09", "slug" : "2016.02.09", "title" : "Pezzullo the Tool-o"},
            {"created_at" : "2016-02-02", "slug" : "2016.02.02", "title" : "Mother Farquhar"},
            {"created_at" : "2016-01-26", "slug" : "2016.01.26", "title" : "The Day of Slug Sex"},
            {"created_at" : "2016-01-19", "slug" : "2016.01.19", "title" : "Offenderati and Defenderati"},
            {"created_at" : "2015-12-08", "slug" : "2015.12.08", "title" : "A Little Bit of Con-Artistry"},
            {"created_at" : "2015-12-01", "slug" : "2015.12.01", "title" : "The Recent Freudian Revival"},
            {"created_at" : "2015-11-24", "slug" : "2015.11.24", "title" : "Glam Animals (aka Glaminals)"},
            {"created_at" : "2015-11-17", "slug" : "2015.11.17", "title" : "Grapefruiting"},
            {"created_at" : "2015-11-10", "slug" : "2015.11.10", "title" : "Bad Walnuts feat. Kevinathy"},
            {"created_at" : "2015-11-03", "slug" : "2015.11.03", "title" : "Bullied by Amnesty"},
            {"created_at" : "2015-10-13", "slug" : "2015.10.13", "title" : "Freedom Cousins"},
            {"created_at" : "2015-10-06", "slug" : "2015.10.06", "title" : "Mental Health Awareness"},
            {"created_at" : "2015-09-29", "slug" : "2015.09.29", "title" : "Folks is Folks"},
            {"created_at" : "2015-09-22", "slug" : "2015.09.22", "title" : "Not Corrupt, Not a Thief"},
            {"created_at" : "2015-09-15", "slug" : "2015.09.15", "title" : "Captain (Malcolm) Bligh\'s Mutiny"},
            {"created_at" : "2015-09-08", "slug" : "2015.09.08", "title" : "Brick Veneereal Welfare Wasteland of Shit"},
            {"created_at" : "2015-09-01", "slug" : "2015.09.01", "title" : "The Second-Hand Flaperon Market"},
            {"created_at" : "2015-08-25", "slug" : "2015.08.25", "title" : "Tangled Bank"},
            {"created_at" : "2015-08-18", "slug" : "2015.08.18", "title" : "#OneTermWanker"},
            {"created_at" : "2015-08-11", "slug" : "2015.08.11", "title" : "Kurlpurlunu"},
            {"created_at" : "2015-08-04", "slug" : "2015.08.04", "title" : "Anyone Who Had a Heart"},
            {"created_at" : "2015-07-28", "slug" : "2015.07.28", "title" : "Just the Two of Us"},
            {"created_at" : "2015-07-21", "slug" : "2015.07.21", "title" : "Helicopter Mother of the House"},
            {"created_at" : "2015-07-14", "slug" : "2015.07.14", "title" : "Quaker Grannies"},
            {"created_at" : "2015-07-07", "slug" : "2015.07.07", "title" : "Gangsta in China"},
            {"created_at" : "2015-06-30", "slug" : "2015.06.30", "title" : "Don\'t Touch Aunty"},
            {"created_at" : "2015-06-23", "slug" : "2015.06.23", "title" : "Choose a Side"},
            {"created_at" : "2015-06-16", "slug" : "2015.06.16", "title" : "God\'s On Shard"},
            {"created_at" : "2015-06-09", "slug" : "2015.06.09", "title" : "Nematode Farts"},
            {"created_at" : "2015-06-02", "slug" : "2015.06.02", "title" : "The Dumbest Nation"},
            {"created_at" : "2015-05-26", "slug" : "2015.05.26", "title" : "The George Brandis Death Cult"},
            {"created_at" : "2015-05-19", "slug" : "2015.05.19", "title" : "Breakdancing Frank Lowy"},
            {"created_at" : "2015-05-14", "slug" : "2015.05.14", "title" : "Circle Trigonists"},
            {"created_at" : "2015-05-12", "slug" : "2015.05.12", "title" : "Public Service Announcement"},
            {"created_at" : "2015-05-05", "slug" : "2015.05.05", "title" : "Overton window"},
            {"created_at" : "2015-04-28", "slug" : "2015.04.28", "title" : "Prachanda Path"},
            {"created_at" : "2015-04-21", "slug" : "2015.04.21", "title" : "The One Day of the Year"},
            {"created_at" : "2015-04-14", "slug" : "2015.04.14", "title" : "It\'s All About Richie"},
            {"created_at" : "2015-03-17", "slug" : "2015.03.17", "title" : "Confessions of an English Onion-Eater"},
            {"created_at" : "2015-03-10", "slug" : "2015.03.10", "title" : "The Dancing Man"},
            {"created_at" : "2015-03-03", "slug" : "2015.03.03", "title" : "Vale Jeff the T-Rex"},
            {"created_at" : "2015-02-24", "slug" : "2015.02.24", "title" : "Piffle"},
            {"created_at" : "2015-02-17", "slug" : "2015.02.17", "title" : "Cheap Nasty Russian"},
            {"created_at" : "2015-02-10", "slug" : "2015.02.10", "title" : "The 39", "title" : "Percenters"},
            {"created_at" : "2015-02-03", "slug" : "2015.02.03", "title" : "Unpopular and Incompetent"},
            {"created_at" : "2015-01-27", "slug" : "2015.01.27", "title" : "Herd Immunity"},
            {"created_at" : "2015-01-20", "slug" : "2015.01.20", "title" : "Whistling Dixie"},
            {"created_at" : "2015-01-13", "slug" : "2015.01.13", "title" : "Just 950", "title" : "Lashes To Go"},
            {"created_at" : "2014-12-16", "slug" : "2014.12.16", "title" : "Deaf to the Bullshit"},
            {"created_at" : "2014-12-09", "slug" : "2014.12.09", "title" : "The Counter-Fascination Clique"},
            {"created_at" : "2014-12-02", "slug" : "2014.12.02", "title" : "Good Week, Tosspot?"},
            {"created_at" : "2014-11-25", "slug" : "2014.11.25", "title" : "No Cuts to the ABC"},
            {"created_at" : "2014-11-18", "slug" : "2014.11.18", "title" : "Weird and Graceless"},
            {"created_at" : "2014-11-11", "slug" : "2014.11.11", "title" : "Small-to-Medium Ideas Are OK"},
            {"created_at" : "2014-11-04", "slug" : "2014.11.04", "title" : "The Sport of Kings"},
            {"created_at" : "2014-10-28", "slug" : "2014.10.28", "title" : "Endling"},
            {"created_at" : "2014-10-21", "slug" : "2014.10.21", "title" : "The Adventures of Edward Gough Whitlam"},
            {"created_at" : "2014-10-14", "slug" : "2014.10.14", "title" : "Tosspot Tony"},
            {"created_at" : "2014-09-23", "slug" : "2014.09.23", "title" : "Meat Tray Mania"},
            {"created_at" : "2014-09-16", "slug" : "2014.09.16", "title" : "Beer and Peaches"},
            {"created_at" : "2014-09-09", "slug" : "2014.09.09", "title" : "No-Risk Capitalism"},
            {"created_at" : "2014-09-03", "slug" : "2014.09.03", "title" : "The Sports Desk"},
            {"created_at" : "2014-09-02", "slug" : "2014.09.02", "title" : "Tripodi forgets everything"},
            {"created_at" : "2014-08-26", "slug" : "2014.08.26", "title" : "Three-headed Sky Man"},
            {"created_at" : "2014-08-19", "slug" : "2014.08.19", "title" : "The Boltiverse"},
            {"created_at" : "2014-08-12", "slug" : "2014.08.12", "title" : "Mister Peta Credlin"},
            {"created_at" : "2014-08-05", "slug" : "2014.08.05", "title" : "Team Australia"},
            {"created_at" : "2014-07-29", "slug" : "2014.07.29", "title" : "Satan\'s Bukkake Party"},
            {"created_at" : "2014-07-22", "slug" : "2014.07.22", "title" : "Machinations"},
            {"created_at" : "2014-07-15", "slug" : "2014.07.15", "title" : "Pig Iron Bob rides again"},
            {"created_at" : "2014-07-08", "slug" : "2014.07.08", "title" : "Sir John Howard for GG"},
            {"created_at" : "2014-07-01", "slug" : "2014.07.01", "title" : "Clive Went Nuts"},
            {"created_at" : "2014-06-24", "slug" : "2014.06.24", "title" : "A Dropkick and a Punt"},
            {"created_at" : "2014-06-17", "slug" : "2014.06.17", "title" : "Surf Rage"},
            {"created_at" : "2014-06-10", "slug" : "2014.06.10", "title" : "Issues Multiple, Syntax Tortured"},
            {"created_at" : "2014-06-03", "slug" : "2014.06.03", "title" : "Running Amok with Scissors"},
            {"created_at" : "2014-05-27", "slug" : "2014.05.27", "title" : "Ghosts of Rumtown Past"},
            {"created_at" : "2014-05-20", "slug" : "2014.05.20", "title" : "Kill the Poor"},
            {"created_at" : "2014-05-13", "slug" : "2014.05.13", "title" : "Lies and Promises"},
            {"created_at" : "2014-05-06", "slug" : "2014.05.06", "title" : "Value Addled"},
            {"created_at" : "2014-04-29", "slug" : "2014.04.30", "title" : "Clive for President"},
            {"created_at" : "2014-04-22", "slug" : "2014.04.22", "title" : "Bazza O\'Farrell, Nifty Nev and Son of Bruce"},
            {"created_at" : "2014-04-15", "slug" : "2014.04.15", "title" : "Jimmy Sharman\'s Boxers Rebellion"},
            {"created_at" : "2014-04-08", "slug" : "2014.04.08", "title" : "Joined by Dr Gob"}
        ]';

        $data = json_decode($json);

        foreach ($data as $key => $episode) {
            $post = new Post;
            $post->setAttribute('author_id', $author->id);
            $post->setAttribute('title', "$episode->slug $episode->title");
            $post->setAttribute('slug', $episode->created_at);
            $post->setAttribute('created_at', $episode->created_at);
            $post->setAttribute('active', true);
            $post->setAttribute('audio_link', 'http://files.krypton.com/thc/THC' . str_replace('.', '', $episode->slug) . '.mp3');
            $post->save();
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
