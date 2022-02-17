<nav class="navbar navbar-default navbar-static-top">
    <div class="container">
        <div class="navbar-header">

            <!-- Collapsed Hamburger -->
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#app-navbar-collapse" aria-expanded="false">
                <span class="sr-only">Toggle Navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>

            <!-- Branding Image -->
            <a href="{{ url('/') }}" class="navbar-brand"><img src="/img/couch_sm.jpg" alt="logo" /><span>{{ config('app.name') }}</span></a>
        </div>

        <div class="collapse navbar-collapse" id="app-navbar-collapse">
            <!-- Left Side Of Navbar -->
            <ul class="nav navbar-nav">
            </ul>

            <!-- Right Side Of Navbar -->
            <ul class="nav navbar-nav navbar-right">
                @guest

                <li @if (Request::route()->getName() === 'about') class="active" @endif><a href="{{ route('about') }}">About Us</a></li>
                <li @if (Request::route()->getName() === 'live') class="active" @endif><a href="{{ route('live') }}">Listen Live!</a></li>
                <li @if (Request::route()->getName() === 'episodes') class="active" @endif><a href="{{ route('episodes') }}">Episodes</a></li>
                <li @if (Request::route()->getName() === 'subscribe') class="active" @endif><a href="{{ route('subscribe') }}">Subscribe</a></li>
                <li @if (Request::route()->getName() === 'contact') class="active" @endif><a href="{{ route('contact') }}">Contact</a></li>
                <li><a href="http://mcrent.fm" class="navbar-mcrent"><img src="/img/mcrentfm_sm.png" alt="McRrent" /></a></li>
                @else

                <li @if (Request::route()->getName() === 'admin') class="active" @endif><a href="{{ route('admin.home') }}">Episodes</a></li>
                <li @if (Request::route()->getName() === 'new-episode') class="active" @endif><a href="{{ route('new-episode') }}">New Episode</a></li>
                <li class="dropdown">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false" aria-haspopup="true">
                        {{ Auth::user()->username }} <span class="caret"></span>
                    </a>

                    <ul class="dropdown-menu">
                        <li>
                            <a href="{{ route('logout') }}"
                                onclick="event.preventDefault();
                                         document.getElementById('logout-form').submit();">
                                Logout
                            </a>

                            <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                                {{ csrf_field() }}
                            </form>
                        </li>
                    </ul>
                </li>
                @endguest

            </ul>
        </div>
    </div>
</nav>