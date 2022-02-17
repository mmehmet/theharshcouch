<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Post;


class GuestController extends Controller
{

    public function index()
    {
        $posts = Post::where('active', true)->orderBy('created_at','desc')->select(['title', 'slug'])->get();

        return view('index')
            ->with('name', 'Show Archive')
            ->with('posts', $posts);
    }

    public function about()
    {
        $posts = Post::where('active', true)->orderBy('created_at','desc')->select(['title', 'slug', 'description'])->paginate(3);

        return view('about')
            ->with('name', 'About Us')
            ->with('posts', $posts);
    }

    public function contactus()
    {
        # code...
    }

    public function contact_form()
    {
        $operators = [
            '&#43;' => 'add',
            '&#45;' => 'subtract',
            '&times;' => 'multiply',
        ];
        $ops = [
            '&#43;',
            '&#45;',
            '&times;'
        ];
        $op = $ops[mt_rand(0,2)];

        return view('contact')
            ->with('name', 'Contacting Us')
            ->with('operand_1', mt_rand(0, 9))
            ->with('operator', $operators[$op])
            ->with('op', $op)
            ->with('operand_2', mt_rand(1, 9));
    }

    public function show($slug)
    {
        $post = Post::where('slug', $slug)->first();
        if (!$post) {
            return redirect(route('episodes'))
                ->withErrors([
                    'Wha?',
                    'That episode does not appear to exist in this universe...',
                    'Has there been an accident involving quantum entanglement?',
                ]);
        }

        return view('episode')
            ->with('name', $post->title)
            ->with('post', $post);
    }

    public function feed()
    {
        $itunesns='http://www.itunes.com/dtds/podcast-1.0.dtd';
        $atomns='http://www.w3.org/2005/Atom';
        $content = 'http://purl.org/rss/1.0/modules/content/';
        $root = '<?xml version="1.0" encoding="utf-8" standalone="no"?>
        <rss version="2.0" 
            xmlns:content="http://purl.org/rss/1.0/modules/content/"
            xmlns:wfw="http://wellformedweb.org/CommentAPI/"
            xmlns:dc="http://purl.org/dc/elements/1.1/"
            xmlns:atom="http://www.w3.org/2005/Atom"
            xmlns:itunes="http://www.itunes.com/dtds/podcast-1.0.dtd"
            xmlns:media="http://search.yahoo.com/mrss/"
        />';
        $summary = "The Harsh Couch is a weekly wireless programme in which we review Australian and World news, politics, sport and other things that are making us sad, glad or mad. Four blokes sit on The Harsh Couch: a doctor, a lapsed lawyer, a stay-at-home dad, a couple of anarchists (one a crypto-anarchist), some true believers, a former political staffer, a couple of dot-com survivors, a Buddhist, a chef and three cooks, a couple of musicians, three fathers, a former employee of the World Bank, a former public servant, current and former tertiary educators, a current employee of a Big Four bank, a bottle-shop worker, four old friends, a Queenslander, a Sydneysider, a South-East Asian, and a NSW country boy.";
        $keywords = [
            'theharshcouch',
            'ideas',
            'politics',
            'political',
            'science',
            'art',
            'philosophy',
            'current affairs',
            'interesting',
            'technology',
        ];

        $xml = new \SimpleXMLElement($root);

        $channel = $xml->addChild('channel');

        // atom link - google balks at it... lets remove it if it's google reading it.
        if (isset($_SERVER['HTTP_USER_AGENT']) and (!stristr($_SERVER['HTTP_USER_AGENT'],'google'))) {
            $atomlink = $channel->addChild('link','',$atomns);
            $atomlink->addAttribute('href', config('app.url') . $_SERVER['REQUEST_URI']);
            $atomlink->addAttribute('rel', "self");
            $atomlink->addAttribute('type', "application/rss+xml");
        }

        // rss 2.0 stuff
        $channel->addChild('title', config('app.name'));
        $channel->addChild('link', config('app.url'));
        $channel->addChild('description', 'The Harsh Couch - Angry People');
        $channel->addChild('generator', 'Custom builder using PHP (fckyeh!)');
        $channel->addChild('docs', 'http://blogs.law.harvard.edu/tech/rss');
        $channel->addChild('language',config('app.fallback_locale'));
        $channel->addChild('copyright', '© 2016 theharshcouch.com');
        $channel->addChild('pubDate', gmdate('r'));
        $channel->addChild('lastBuildDate', gmdate('r'));

        // itunes
        $channel->addChild('author', env('SITENAME', 'theharshcouch.com'), $itunesns);
        $channel->addChild('summary', $summary, $itunesns);
        $channel->addChild('keywords', implode(',', $keywords), $itunesns);
        $image = $channel->addChild('image', '', $itunesns);
        $image->addAttribute('href', asset('img/couch_1400.png'));
        $channel->addChild('explicit','yes', $itunesns);
        $owner = $channel->addChild('owner', '', $itunesns);
        $owner->addChild('name', 'Wibbly le Monde', $itunesns);
        $owner->addChild('email', 'wibbly@theharshcouch.com', $itunesns);
        $channel->addChild('block','no', $itunesns);
        $cat = $channel->addChild('category', '', $itunesns);
        $cat->addAttribute('text','News & Politics');
        $subcat = $channel->addChild('category', '', $itunesns);
        $subcat->addAttribute('text','Society & Culture');

        $posts = Post::where('active', true)->orderBy('created_at','desc')->get();

        foreach ($posts as $post) {
            $link = config('app.url') . '/episodes/' . $post->slug;
            $item = $channel->addChild('item');
            $item->addChild('title', $post->title);
            $item->addChild('link', $link);
            $item->addChild('description', $post->description);
            $item->addChild('pubDate', gmdate('r', strtotime($post->created_at)));
            $enclosure = $item->addChild('enclosure');
            $enclosure->addAttribute('url', $post->audio_link);
            $enclosure->addAttribute('type', "audio/mpeg");
            $enclosure->addAttribute('length', 0);
            $item->addChild('guid', $link);
            $item->addChild('author', env('SITENAME', 'theharshcouch.com'), $itunesns);
            $item->addChild('explicit','yes', $itunesns);
            $item->addChild('subtitle', substr($post->description, 0, 255), $itunesns);
            $item->addChild('summary', $post->description, $itunesns);
            $item->addChild('encoded', 'Visit &lt;a href=&quot;' . $link . '&quot;&gt;' . $link . '&lt;/a&gt; for show notes', $content);
        }

        header('Content-type: text/xml');
        echo $xml->asXML();
    }

    private function get_remote_filesize($url)
    {
        static $regex = '/^Content-Length: *+\K\d++$/im';

        if (!$fp = @fopen($url, 'rb')) {
            return 0;
        }

        if (isset($http_response_header)
            && preg_match($regex, implode("\n", $http_response_header), $matches)
        ) {
            return (int)$matches[0];
        }

        return strlen(stream_get_contents($fp));
    }
}
