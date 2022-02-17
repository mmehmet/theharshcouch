<script type="text/javascript" src="{{ asset('js/jquery.jplayer.js') }}"></script>
    <script type="text/javascript">
        jQuery(document).ready(function($) {
            $("#jquery_jplayer_audio_1").jPlayer({
                ready: function(event) {
                    $(this).jPlayer("setMedia", {
                        title: "{{ $post->title ?? 'McRent.FM Live Stream' }}",
                        mp3: "{{ $post->audio_link ?? 'http://live.mcrent.fm:8000/listen' }}",
                    });
                },
                play: function() { // Avoid multiple jPlayers playing together.
                    $(this).jPlayer("pauseOthers");
                },
                timeFormat: {
                    showHour: true
                },
                swfPath: "js",
                supplied: "mp3",
                cssSelectorAncestor: "#jp_container_audio_1",
                useStateClassSkin: true,
                autoBlur: false,
                smoothPlayBar: true,
                remainingDuration: false,
                //remainingDuration: true,
                keyEnabled: true,
                keyBindings: {
                    // Disable some of the default key controls
                    muted: null,
                    volumeUp: null,
                    volumeDown: null
                },
                wmode: "window",
                preload: "metadata"
            });
        });
    </script>
