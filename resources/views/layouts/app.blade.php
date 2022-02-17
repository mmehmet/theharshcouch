@include('partials.head')
  <body>
    <div id="app">
        @include('partials.nav')
        @include('partials.alert')
        @yield('content')
    </div>

    <!-- Scripts -->
    <script src="{{ asset('js/app.js') }}"></script>
    <script src="{{ asset('js/date.js') }}"></script>
    @if (Request::is('live') || Request::is('episodes/*'))@include('partials.script')
    @if (Request::is('episodes/*'))@include('partials.disqus')@endif
    @elseif (Request::is('admin/edit/*') || Request::is('admin/new-episode'))
    <script src="http://cdnjs.cloudflare.com/ajax/libs/summernote/0.8.8/summernote.js"></script>
    <script>
      $(document).ready(function() {
          $('#shownotes').summernote();
      });
    </script>
    @endif
    <script>
      (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
      (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
      m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
      })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

      ga('create', 'UA-57164415-2', 'auto');
      ga('send', 'pageview');
    </script>
  </body>
</html>
