


<!DOCTYPE html>
<html>
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# githubog: http://ogp.me/ns/fb/githubog#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>JavaScriptButtons/dist/paypal-button.js at master · paypal/JavaScriptButtons · GitHub</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub" />
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub" />
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png" />
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png" />
    <link rel="logo" type="image/svg" href="https://github-media-downloads.s3.amazonaws.com/github-logo.svg" />
    <meta property="og:image" content="https://github.global.ssl.fastly.net/images/modules/logos_page/Octocat.png">
    <meta name="hostname" content="github-fe122-cp1-prd.iad.github.net">
    <meta name="ruby" content="ruby 1.9.3p194-tcs-github-tcmalloc (2012-05-25, TCS patched 2012-05-27, GitHub v1.0.36) [x86_64-linux]">
    <link rel="assets" href="https://github.global.ssl.fastly.net/">
    <link rel="conduit-xhr" href="https://ghconduit.com:25035/">
    <link rel="xhr-socket" href="/_sockets" />
    


    <meta name="msapplication-TileImage" content="/windows-tile.png" />
    <meta name="msapplication-TileColor" content="#ffffff" />
    <meta name="selected-link" value="repo_source" data-pjax-transient />
    <meta content="collector.githubapp.com" name="octolytics-host" /><meta content="github" name="octolytics-app-id" /><meta content="47AF59FE:3B90:16AAF3BF:52595A02" name="octolytics-dimension-request_id" />
    

    
    
    <link rel="icon" type="image/x-icon" href="/favicon.ico" />

    <meta content="authenticity_token" name="csrf-param" />
<meta content="Zd3gcShiVcnbAwYFVorpfnQCM+mgX/qbGj7ZqBcVvrQ=" name="csrf-token" />

    <link href="https://github.global.ssl.fastly.net/assets/github-1c7dbb8d7b87dc092768f2d88b14ab1038cb1fa3.css" media="all" rel="stylesheet" type="text/css" />
    <link href="https://github.global.ssl.fastly.net/assets/github2-05ac957fd66320d67807570af08967deeaffb967.css" media="all" rel="stylesheet" type="text/css" />
    

    

      <script src="https://github.global.ssl.fastly.net/assets/frameworks-5036c64d838328b79e082f548848e2898412e869.js" type="text/javascript"></script>
      <script src="https://github.global.ssl.fastly.net/assets/github-0818b6c0fb5cc21fd7ee0062b133b12cabe1d086.js" type="text/javascript"></script>
      
      <meta http-equiv="x-pjax-version" content="143789be21832e509e3d1d798edd37fc">

        <link data-pjax-transient rel='permalink' href='/paypal/JavaScriptButtons/blob/f44178033a0a2e5d8ab3de949e6d9a3c7fbf025d/dist/paypal-button.js'>
  <meta property="og:title" content="JavaScriptButtons"/>
  <meta property="og:type" content="githubog:gitrepository"/>
  <meta property="og:url" content="https://github.com/paypal/JavaScriptButtons"/>
  <meta property="og:image" content="https://github.global.ssl.fastly.net/images/gravatars/gravatar-user-420.png"/>
  <meta property="og:site_name" content="GitHub"/>
  <meta property="og:description" content="JavaScriptButtons - JavaScript for creating dynamic buttons that enable PayPal checkout"/>

  <meta name="description" content="JavaScriptButtons - JavaScript for creating dynamic buttons that enable PayPal checkout" />

  <meta content="476675" name="octolytics-dimension-user_id" /><meta content="paypal" name="octolytics-dimension-user_login" /><meta content="6712812" name="octolytics-dimension-repository_id" /><meta content="paypal/JavaScriptButtons" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="6712812" name="octolytics-dimension-repository_network_root_id" /><meta content="paypal/JavaScriptButtons" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/paypal/JavaScriptButtons/commits/master.atom" rel="alternate" title="Recent Commits to JavaScriptButtons:master" type="application/atom+xml" />

  </head>


  <body class="logged_out  env-production macintosh vis-public  page-blob">
    <div class="wrapper">
      
      
      


      
      <div class="header header-logged-out">
  <div class="container clearfix">

    <a class="header-logo-wordmark" href="https://github.com/">
      <span class="mega-octicon octicon-logo-github"></span>
    </a>

    <div class="header-actions">
        <a class="button primary" href="/signup">Sign up</a>
      <a class="button signin" href="/login?return_to=%2Fpaypal%2FJavaScriptButtons%2Fblob%2Fmaster%2Fdist%2Fpaypal-button.js">Sign in</a>
    </div>

    <div class="command-bar js-command-bar  in-repository">

      <ul class="top-nav">
          <li class="explore"><a href="/explore">Explore</a></li>
        <li class="features"><a href="/features">Features</a></li>
          <li class="enterprise"><a href="https://enterprise.github.com/">Enterprise</a></li>
          <li class="blog"><a href="/blog">Blog</a></li>
      </ul>
        <form accept-charset="UTF-8" action="/search" class="command-bar-form" id="top_search_form" method="get">

<input type="text" data-hotkey="/ s" name="q" id="js-command-bar-field" placeholder="Search or type a command" tabindex="1" autocapitalize="off"
    
    
      data-repo="paypal/JavaScriptButtons"
      data-branch="master"
      data-sha="9c942b968b751e0d26e684a0dc90232126478e8d"
  >

    <input type="hidden" name="nwo" value="paypal/JavaScriptButtons" />

    <div class="select-menu js-menu-container js-select-menu search-context-select-menu">
      <span class="minibutton select-menu-button js-menu-target">
        <span class="js-select-button">This repository</span>
      </span>

      <div class="select-menu-modal-holder js-menu-content js-navigation-container">
        <div class="select-menu-modal">

          <div class="select-menu-item js-navigation-item js-this-repository-navigation-item selected">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" class="js-search-this-repository" name="search_target" value="repository" checked="checked" />
            <div class="select-menu-item-text js-select-button-text">This repository</div>
          </div> <!-- /.select-menu-item -->

          <div class="select-menu-item js-navigation-item js-all-repositories-navigation-item">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" name="search_target" value="global" />
            <div class="select-menu-item-text js-select-button-text">All repositories</div>
          </div> <!-- /.select-menu-item -->

        </div>
      </div>
    </div>

  <span class="octicon help tooltipped downwards" title="Show command bar help">
    <span class="octicon octicon-question"></span>
  </span>


  <input type="hidden" name="ref" value="cmdform">

</form>
    </div>

  </div>
</div>


      


          <div class="site" itemscope itemtype="http://schema.org/WebPage">
    
    <div class="pagehead repohead instapaper_ignore readability-menu">
      <div class="container">
        

<ul class="pagehead-actions">


  <li>
  <a href="/login?return_to=%2Fpaypal%2FJavaScriptButtons"
  class="minibutton with-count js-toggler-target star-button entice tooltipped upwards"
  title="You must be signed in to use this feature" rel="nofollow">
  <span class="octicon octicon-star"></span>Star
</a>
<a class="social-count js-social-count" href="/paypal/JavaScriptButtons/stargazers">
  84
</a>

  </li>

    <li>
      <a href="/login?return_to=%2Fpaypal%2FJavaScriptButtons"
        class="minibutton with-count js-toggler-target fork-button entice tooltipped upwards"
        title="You must be signed in to fork a repository" rel="nofollow">
        <span class="octicon octicon-git-branch"></span>Fork
      </a>
      <a href="/paypal/JavaScriptButtons/network" class="social-count">
        226
      </a>
    </li>
</ul>

        <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public">
          <span class="repo-label"><span>public</span></span>
          <span class="mega-octicon octicon-repo"></span>
          <span class="author">
            <a href="/paypal" class="url fn" itemprop="url" rel="author"><span itemprop="title">paypal</span></a>
          </span>
          <span class="repohead-name-divider">/</span>
          <strong><a href="/paypal/JavaScriptButtons" class="js-current-repository js-repo-home-link">JavaScriptButtons</a></strong>

          <span class="page-context-loader">
            <img alt="Octocat-spinner-32" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
          </span>

        </h1>
      </div><!-- /.container -->
    </div><!-- /.repohead -->

    <div class="container">

      <div class="repository-with-sidebar repo-container ">

        <div class="repository-sidebar">
            

<div class="repo-nav repo-nav-full js-repository-container-pjax js-octicon-loaders">
  <div class="repo-nav-contents">
    <ul class="repo-menu">
      <li class="tooltipped leftwards" title="Code">
        <a href="/paypal/JavaScriptButtons" aria-label="Code" class="js-selected-navigation-item selected" data-gotokey="c" data-pjax="true" data-selected-links="repo_source repo_downloads repo_commits repo_tags repo_branches /paypal/JavaScriptButtons">
          <span class="octicon octicon-code"></span> <span class="full-word">Code</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

        <li class="tooltipped leftwards" title="Issues">
          <a href="/paypal/JavaScriptButtons/issues" aria-label="Issues" class="js-selected-navigation-item js-disable-pjax" data-gotokey="i" data-selected-links="repo_issues /paypal/JavaScriptButtons/issues">
            <span class="octicon octicon-issue-opened"></span> <span class="full-word">Issues</span>
            <span class='counter'>20</span>
            <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>        </li>

      <li class="tooltipped leftwards" title="Pull Requests"><a href="/paypal/JavaScriptButtons/pulls" aria-label="Pull Requests" class="js-selected-navigation-item js-disable-pjax" data-gotokey="p" data-selected-links="repo_pulls /paypal/JavaScriptButtons/pulls">
            <span class="octicon octicon-git-pull-request"></span> <span class="full-word">Pull Requests</span>
            <span class='counter'>1</span>
            <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>


    </ul>
    <div class="repo-menu-separator"></div>
    <ul class="repo-menu">

      <li class="tooltipped leftwards" title="Pulse">
        <a href="/paypal/JavaScriptButtons/pulse" aria-label="Pulse" class="js-selected-navigation-item " data-pjax="true" data-selected-links="pulse /paypal/JavaScriptButtons/pulse">
          <span class="octicon octicon-pulse"></span> <span class="full-word">Pulse</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

      <li class="tooltipped leftwards" title="Graphs">
        <a href="/paypal/JavaScriptButtons/graphs" aria-label="Graphs" class="js-selected-navigation-item " data-pjax="true" data-selected-links="repo_graphs repo_contributors /paypal/JavaScriptButtons/graphs">
          <span class="octicon octicon-graph"></span> <span class="full-word">Graphs</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

      <li class="tooltipped leftwards" title="Network">
        <a href="/paypal/JavaScriptButtons/network" aria-label="Network" class="js-selected-navigation-item js-disable-pjax" data-selected-links="repo_network /paypal/JavaScriptButtons/network">
          <span class="octicon octicon-git-branch"></span> <span class="full-word">Network</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>
    </ul>


  </div>
</div>

            <div class="only-with-full-nav">
              

  

<div class="clone-url open"
  data-protocol-type="http"
  data-url="/users/set_protocol?protocol_selector=http&amp;protocol_type=clone">
  <h3><strong>HTTPS</strong> clone URL</h3>
  <div class="clone-url-box">
    <input type="text" class="clone js-url-field"
           value="https://github.com/paypal/JavaScriptButtons.git" readonly="readonly">

    <span class="js-zeroclipboard url-box-clippy minibutton zeroclipboard-button" data-clipboard-text="https://github.com/paypal/JavaScriptButtons.git" data-copied-hint="copied!" title="copy to clipboard"><span class="octicon octicon-clippy"></span></span>
  </div>
</div>

  

<div class="clone-url "
  data-protocol-type="subversion"
  data-url="/users/set_protocol?protocol_selector=subversion&amp;protocol_type=clone">
  <h3><strong>Subversion</strong> checkout URL</h3>
  <div class="clone-url-box">
    <input type="text" class="clone js-url-field"
           value="https://github.com/paypal/JavaScriptButtons" readonly="readonly">

    <span class="js-zeroclipboard url-box-clippy minibutton zeroclipboard-button" data-clipboard-text="https://github.com/paypal/JavaScriptButtons" data-copied-hint="copied!" title="copy to clipboard"><span class="octicon octicon-clippy"></span></span>
  </div>
</div>


<p class="clone-options">You can clone with
      <a href="#" class="js-clone-selector" data-protocol="http">HTTPS</a>,
      or <a href="#" class="js-clone-selector" data-protocol="subversion">Subversion</a>.
  <span class="octicon help tooltipped upwards" title="Get help on which URL is right for you.">
    <a href="https://help.github.com/articles/which-remote-url-should-i-use">
    <span class="octicon octicon-question"></span>
    </a>
  </span>
</p>

  <a href="http://mac.github.com" data-url="github-mac://openRepo/https://github.com/paypal/JavaScriptButtons" class="minibutton sidebar-button js-conduit-rewrite-url">
    <span class="octicon octicon-device-desktop"></span>
    Clone in Desktop
  </a>


              <a href="/paypal/JavaScriptButtons/archive/master.zip"
                 class="minibutton sidebar-button"
                 title="Download this repository as a zip file"
                 rel="nofollow">
                <span class="octicon octicon-cloud-download"></span>
                Download ZIP
              </a>
            </div>
        </div><!-- /.repository-sidebar -->

        <div id="js-repo-pjax-container" class="repository-content context-loader-container" data-pjax-container>
          


<!-- blob contrib key: blob_contributors:v21:ffab66b518b08dd9a02ecda0618e0f24 -->

<p title="This is a placeholder element" class="js-history-link-replace hidden"></p>

<a href="/paypal/JavaScriptButtons/find/master" data-pjax data-hotkey="t" class="js-show-file-finder" style="display:none">Show File Finder</a>

<div class="file-navigation">
  
  

<div class="select-menu js-menu-container js-select-menu" >
  <span class="minibutton select-menu-button js-menu-target" data-hotkey="w"
    data-master-branch="master"
    data-ref="master"
    role="button" aria-label="Switch branches or tags" tabindex="0">
    <span class="octicon octicon-git-branch"></span>
    <i>branch:</i>
    <span class="js-select-button">master</span>
  </span>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax>

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <span class="select-menu-title">Switch branches/tags</span>
        <span class="octicon octicon-remove-close js-menu-close"></span>
      </div> <!-- /.select-menu-header -->

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" class="js-select-menu-tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" class="js-select-menu-tab">Tags</a>
            </li>
          </ul>
        </div><!-- /.select-menu-tabs -->
      </div><!-- /.select-menu-filters -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/paypal/JavaScriptButtons/blob/css-buttons/dist/paypal-button.js"
                 data-name="css-buttons"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="css-buttons">css-buttons</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/paypal/JavaScriptButtons/blob/gh-pages/dist/paypal-button.js"
                 data-name="gh-pages"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="gh-pages">gh-pages</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item selected">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/paypal/JavaScriptButtons/blob/master/dist/paypal-button.js"
                 data-name="master"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="master">master</a>
            </div> <!-- /.select-menu-item -->
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/paypal/JavaScriptButtons/tree/0.9.1/dist/paypal-button.js"
                 data-name="0.9.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="0.9.1">0.9.1</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/paypal/JavaScriptButtons/tree/0.9/dist/paypal-button.js"
                 data-name="0.9"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="0.9">0.9</a>
            </div> <!-- /.select-menu-item -->
        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

    </div> <!-- /.select-menu-modal -->
  </div> <!-- /.select-menu-modal-holder -->
</div> <!-- /.select-menu -->

  <div class="breadcrumb">
    <span class='repo-root js-repo-root'><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/paypal/JavaScriptButtons" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">JavaScriptButtons</span></a></span></span><span class="separator"> / </span><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/paypal/JavaScriptButtons/tree/master/dist" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">dist</span></a></span><span class="separator"> / </span><strong class="final-path">paypal-button.js</strong> <span class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="dist/paypal-button.js" data-copied-hint="copied!" title="copy to clipboard"><span class="octicon octicon-clippy"></span></span>
  </div>
</div>


  <div class="commit commit-loader file-history-tease js-deferred-content" data-url="/paypal/JavaScriptButtons/contributors/master/dist/paypal-button.js">
    Fetching contributors…

    <div class="participation">
      <p class="loader-loading"><img alt="Octocat-spinner-32-eaf2f5" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32-EAF2F5.gif" width="16" /></p>
      <p class="loader-error">Cannot retrieve contributors at this time</p>
    </div>
  </div>

<div id="files" class="bubble">
  <div class="file">
    <div class="meta">
      <div class="info">
        <span class="icon"><b class="octicon octicon-file-text"></b></span>
        <span class="mode" title="File Mode">file</span>
          <span>382 lines (308 sloc)</span>
        <span>14.746 kb</span>
      </div>
      <div class="actions">
        <div class="button-group">
            <a class="minibutton tooltipped leftwards js-conduit-mac-openfile-check"
               href="http://mac.github.com"
               data-url="github-mac://openRepo/https://github.com/paypal/JavaScriptButtons?branch=master&amp;filepath=dist%2Fpaypal-button.js"
               title="Open this file in GitHub for Mac">
                <span class="octicon octicon-device-desktop"></span> Open
            </a>
              <a class="minibutton disabled js-entice" href=""
                 data-entice="You must be signed in to make or propose changes">Edit</a>
          <a href="/paypal/JavaScriptButtons/raw/master/dist/paypal-button.js" class="button minibutton " id="raw-url">Raw</a>
            <a href="/paypal/JavaScriptButtons/blame/master/dist/paypal-button.js" class="button minibutton ">Blame</a>
          <a href="/paypal/JavaScriptButtons/commits/master/dist/paypal-button.js" class="button minibutton " rel="nofollow">History</a>
        </div><!-- /.button-group -->
          <a class="minibutton danger empty-icon js-entice" href=""
             data-entice="You must be signed in and on a branch to make or propose changes">
          Delete
        </a>
      </div><!-- /.actions -->

    </div>
        <div class="blob-wrapper data type-javascript js-blob-data">
        <table class="file-code file-diff">
          <tr class="file-code-line">
            <td class="blob-line-nums">
              <span id="L1" rel="#L1">1</span>
<span id="L2" rel="#L2">2</span>
<span id="L3" rel="#L3">3</span>
<span id="L4" rel="#L4">4</span>
<span id="L5" rel="#L5">5</span>
<span id="L6" rel="#L6">6</span>
<span id="L7" rel="#L7">7</span>
<span id="L8" rel="#L8">8</span>
<span id="L9" rel="#L9">9</span>
<span id="L10" rel="#L10">10</span>
<span id="L11" rel="#L11">11</span>
<span id="L12" rel="#L12">12</span>
<span id="L13" rel="#L13">13</span>
<span id="L14" rel="#L14">14</span>
<span id="L15" rel="#L15">15</span>
<span id="L16" rel="#L16">16</span>
<span id="L17" rel="#L17">17</span>
<span id="L18" rel="#L18">18</span>
<span id="L19" rel="#L19">19</span>
<span id="L20" rel="#L20">20</span>
<span id="L21" rel="#L21">21</span>
<span id="L22" rel="#L22">22</span>
<span id="L23" rel="#L23">23</span>
<span id="L24" rel="#L24">24</span>
<span id="L25" rel="#L25">25</span>
<span id="L26" rel="#L26">26</span>
<span id="L27" rel="#L27">27</span>
<span id="L28" rel="#L28">28</span>
<span id="L29" rel="#L29">29</span>
<span id="L30" rel="#L30">30</span>
<span id="L31" rel="#L31">31</span>
<span id="L32" rel="#L32">32</span>
<span id="L33" rel="#L33">33</span>
<span id="L34" rel="#L34">34</span>
<span id="L35" rel="#L35">35</span>
<span id="L36" rel="#L36">36</span>
<span id="L37" rel="#L37">37</span>
<span id="L38" rel="#L38">38</span>
<span id="L39" rel="#L39">39</span>
<span id="L40" rel="#L40">40</span>
<span id="L41" rel="#L41">41</span>
<span id="L42" rel="#L42">42</span>
<span id="L43" rel="#L43">43</span>
<span id="L44" rel="#L44">44</span>
<span id="L45" rel="#L45">45</span>
<span id="L46" rel="#L46">46</span>
<span id="L47" rel="#L47">47</span>
<span id="L48" rel="#L48">48</span>
<span id="L49" rel="#L49">49</span>
<span id="L50" rel="#L50">50</span>
<span id="L51" rel="#L51">51</span>
<span id="L52" rel="#L52">52</span>
<span id="L53" rel="#L53">53</span>
<span id="L54" rel="#L54">54</span>
<span id="L55" rel="#L55">55</span>
<span id="L56" rel="#L56">56</span>
<span id="L57" rel="#L57">57</span>
<span id="L58" rel="#L58">58</span>
<span id="L59" rel="#L59">59</span>
<span id="L60" rel="#L60">60</span>
<span id="L61" rel="#L61">61</span>
<span id="L62" rel="#L62">62</span>
<span id="L63" rel="#L63">63</span>
<span id="L64" rel="#L64">64</span>
<span id="L65" rel="#L65">65</span>
<span id="L66" rel="#L66">66</span>
<span id="L67" rel="#L67">67</span>
<span id="L68" rel="#L68">68</span>
<span id="L69" rel="#L69">69</span>
<span id="L70" rel="#L70">70</span>
<span id="L71" rel="#L71">71</span>
<span id="L72" rel="#L72">72</span>
<span id="L73" rel="#L73">73</span>
<span id="L74" rel="#L74">74</span>
<span id="L75" rel="#L75">75</span>
<span id="L76" rel="#L76">76</span>
<span id="L77" rel="#L77">77</span>
<span id="L78" rel="#L78">78</span>
<span id="L79" rel="#L79">79</span>
<span id="L80" rel="#L80">80</span>
<span id="L81" rel="#L81">81</span>
<span id="L82" rel="#L82">82</span>
<span id="L83" rel="#L83">83</span>
<span id="L84" rel="#L84">84</span>
<span id="L85" rel="#L85">85</span>
<span id="L86" rel="#L86">86</span>
<span id="L87" rel="#L87">87</span>
<span id="L88" rel="#L88">88</span>
<span id="L89" rel="#L89">89</span>
<span id="L90" rel="#L90">90</span>
<span id="L91" rel="#L91">91</span>
<span id="L92" rel="#L92">92</span>
<span id="L93" rel="#L93">93</span>
<span id="L94" rel="#L94">94</span>
<span id="L95" rel="#L95">95</span>
<span id="L96" rel="#L96">96</span>
<span id="L97" rel="#L97">97</span>
<span id="L98" rel="#L98">98</span>
<span id="L99" rel="#L99">99</span>
<span id="L100" rel="#L100">100</span>
<span id="L101" rel="#L101">101</span>
<span id="L102" rel="#L102">102</span>
<span id="L103" rel="#L103">103</span>
<span id="L104" rel="#L104">104</span>
<span id="L105" rel="#L105">105</span>
<span id="L106" rel="#L106">106</span>
<span id="L107" rel="#L107">107</span>
<span id="L108" rel="#L108">108</span>
<span id="L109" rel="#L109">109</span>
<span id="L110" rel="#L110">110</span>
<span id="L111" rel="#L111">111</span>
<span id="L112" rel="#L112">112</span>
<span id="L113" rel="#L113">113</span>
<span id="L114" rel="#L114">114</span>
<span id="L115" rel="#L115">115</span>
<span id="L116" rel="#L116">116</span>
<span id="L117" rel="#L117">117</span>
<span id="L118" rel="#L118">118</span>
<span id="L119" rel="#L119">119</span>
<span id="L120" rel="#L120">120</span>
<span id="L121" rel="#L121">121</span>
<span id="L122" rel="#L122">122</span>
<span id="L123" rel="#L123">123</span>
<span id="L124" rel="#L124">124</span>
<span id="L125" rel="#L125">125</span>
<span id="L126" rel="#L126">126</span>
<span id="L127" rel="#L127">127</span>
<span id="L128" rel="#L128">128</span>
<span id="L129" rel="#L129">129</span>
<span id="L130" rel="#L130">130</span>
<span id="L131" rel="#L131">131</span>
<span id="L132" rel="#L132">132</span>
<span id="L133" rel="#L133">133</span>
<span id="L134" rel="#L134">134</span>
<span id="L135" rel="#L135">135</span>
<span id="L136" rel="#L136">136</span>
<span id="L137" rel="#L137">137</span>
<span id="L138" rel="#L138">138</span>
<span id="L139" rel="#L139">139</span>
<span id="L140" rel="#L140">140</span>
<span id="L141" rel="#L141">141</span>
<span id="L142" rel="#L142">142</span>
<span id="L143" rel="#L143">143</span>
<span id="L144" rel="#L144">144</span>
<span id="L145" rel="#L145">145</span>
<span id="L146" rel="#L146">146</span>
<span id="L147" rel="#L147">147</span>
<span id="L148" rel="#L148">148</span>
<span id="L149" rel="#L149">149</span>
<span id="L150" rel="#L150">150</span>
<span id="L151" rel="#L151">151</span>
<span id="L152" rel="#L152">152</span>
<span id="L153" rel="#L153">153</span>
<span id="L154" rel="#L154">154</span>
<span id="L155" rel="#L155">155</span>
<span id="L156" rel="#L156">156</span>
<span id="L157" rel="#L157">157</span>
<span id="L158" rel="#L158">158</span>
<span id="L159" rel="#L159">159</span>
<span id="L160" rel="#L160">160</span>
<span id="L161" rel="#L161">161</span>
<span id="L162" rel="#L162">162</span>
<span id="L163" rel="#L163">163</span>
<span id="L164" rel="#L164">164</span>
<span id="L165" rel="#L165">165</span>
<span id="L166" rel="#L166">166</span>
<span id="L167" rel="#L167">167</span>
<span id="L168" rel="#L168">168</span>
<span id="L169" rel="#L169">169</span>
<span id="L170" rel="#L170">170</span>
<span id="L171" rel="#L171">171</span>
<span id="L172" rel="#L172">172</span>
<span id="L173" rel="#L173">173</span>
<span id="L174" rel="#L174">174</span>
<span id="L175" rel="#L175">175</span>
<span id="L176" rel="#L176">176</span>
<span id="L177" rel="#L177">177</span>
<span id="L178" rel="#L178">178</span>
<span id="L179" rel="#L179">179</span>
<span id="L180" rel="#L180">180</span>
<span id="L181" rel="#L181">181</span>
<span id="L182" rel="#L182">182</span>
<span id="L183" rel="#L183">183</span>
<span id="L184" rel="#L184">184</span>
<span id="L185" rel="#L185">185</span>
<span id="L186" rel="#L186">186</span>
<span id="L187" rel="#L187">187</span>
<span id="L188" rel="#L188">188</span>
<span id="L189" rel="#L189">189</span>
<span id="L190" rel="#L190">190</span>
<span id="L191" rel="#L191">191</span>
<span id="L192" rel="#L192">192</span>
<span id="L193" rel="#L193">193</span>
<span id="L194" rel="#L194">194</span>
<span id="L195" rel="#L195">195</span>
<span id="L196" rel="#L196">196</span>
<span id="L197" rel="#L197">197</span>
<span id="L198" rel="#L198">198</span>
<span id="L199" rel="#L199">199</span>
<span id="L200" rel="#L200">200</span>
<span id="L201" rel="#L201">201</span>
<span id="L202" rel="#L202">202</span>
<span id="L203" rel="#L203">203</span>
<span id="L204" rel="#L204">204</span>
<span id="L205" rel="#L205">205</span>
<span id="L206" rel="#L206">206</span>
<span id="L207" rel="#L207">207</span>
<span id="L208" rel="#L208">208</span>
<span id="L209" rel="#L209">209</span>
<span id="L210" rel="#L210">210</span>
<span id="L211" rel="#L211">211</span>
<span id="L212" rel="#L212">212</span>
<span id="L213" rel="#L213">213</span>
<span id="L214" rel="#L214">214</span>
<span id="L215" rel="#L215">215</span>
<span id="L216" rel="#L216">216</span>
<span id="L217" rel="#L217">217</span>
<span id="L218" rel="#L218">218</span>
<span id="L219" rel="#L219">219</span>
<span id="L220" rel="#L220">220</span>
<span id="L221" rel="#L221">221</span>
<span id="L222" rel="#L222">222</span>
<span id="L223" rel="#L223">223</span>
<span id="L224" rel="#L224">224</span>
<span id="L225" rel="#L225">225</span>
<span id="L226" rel="#L226">226</span>
<span id="L227" rel="#L227">227</span>
<span id="L228" rel="#L228">228</span>
<span id="L229" rel="#L229">229</span>
<span id="L230" rel="#L230">230</span>
<span id="L231" rel="#L231">231</span>
<span id="L232" rel="#L232">232</span>
<span id="L233" rel="#L233">233</span>
<span id="L234" rel="#L234">234</span>
<span id="L235" rel="#L235">235</span>
<span id="L236" rel="#L236">236</span>
<span id="L237" rel="#L237">237</span>
<span id="L238" rel="#L238">238</span>
<span id="L239" rel="#L239">239</span>
<span id="L240" rel="#L240">240</span>
<span id="L241" rel="#L241">241</span>
<span id="L242" rel="#L242">242</span>
<span id="L243" rel="#L243">243</span>
<span id="L244" rel="#L244">244</span>
<span id="L245" rel="#L245">245</span>
<span id="L246" rel="#L246">246</span>
<span id="L247" rel="#L247">247</span>
<span id="L248" rel="#L248">248</span>
<span id="L249" rel="#L249">249</span>
<span id="L250" rel="#L250">250</span>
<span id="L251" rel="#L251">251</span>
<span id="L252" rel="#L252">252</span>
<span id="L253" rel="#L253">253</span>
<span id="L254" rel="#L254">254</span>
<span id="L255" rel="#L255">255</span>
<span id="L256" rel="#L256">256</span>
<span id="L257" rel="#L257">257</span>
<span id="L258" rel="#L258">258</span>
<span id="L259" rel="#L259">259</span>
<span id="L260" rel="#L260">260</span>
<span id="L261" rel="#L261">261</span>
<span id="L262" rel="#L262">262</span>
<span id="L263" rel="#L263">263</span>
<span id="L264" rel="#L264">264</span>
<span id="L265" rel="#L265">265</span>
<span id="L266" rel="#L266">266</span>
<span id="L267" rel="#L267">267</span>
<span id="L268" rel="#L268">268</span>
<span id="L269" rel="#L269">269</span>
<span id="L270" rel="#L270">270</span>
<span id="L271" rel="#L271">271</span>
<span id="L272" rel="#L272">272</span>
<span id="L273" rel="#L273">273</span>
<span id="L274" rel="#L274">274</span>
<span id="L275" rel="#L275">275</span>
<span id="L276" rel="#L276">276</span>
<span id="L277" rel="#L277">277</span>
<span id="L278" rel="#L278">278</span>
<span id="L279" rel="#L279">279</span>
<span id="L280" rel="#L280">280</span>
<span id="L281" rel="#L281">281</span>
<span id="L282" rel="#L282">282</span>
<span id="L283" rel="#L283">283</span>
<span id="L284" rel="#L284">284</span>
<span id="L285" rel="#L285">285</span>
<span id="L286" rel="#L286">286</span>
<span id="L287" rel="#L287">287</span>
<span id="L288" rel="#L288">288</span>
<span id="L289" rel="#L289">289</span>
<span id="L290" rel="#L290">290</span>
<span id="L291" rel="#L291">291</span>
<span id="L292" rel="#L292">292</span>
<span id="L293" rel="#L293">293</span>
<span id="L294" rel="#L294">294</span>
<span id="L295" rel="#L295">295</span>
<span id="L296" rel="#L296">296</span>
<span id="L297" rel="#L297">297</span>
<span id="L298" rel="#L298">298</span>
<span id="L299" rel="#L299">299</span>
<span id="L300" rel="#L300">300</span>
<span id="L301" rel="#L301">301</span>
<span id="L302" rel="#L302">302</span>
<span id="L303" rel="#L303">303</span>
<span id="L304" rel="#L304">304</span>
<span id="L305" rel="#L305">305</span>
<span id="L306" rel="#L306">306</span>
<span id="L307" rel="#L307">307</span>
<span id="L308" rel="#L308">308</span>
<span id="L309" rel="#L309">309</span>
<span id="L310" rel="#L310">310</span>
<span id="L311" rel="#L311">311</span>
<span id="L312" rel="#L312">312</span>
<span id="L313" rel="#L313">313</span>
<span id="L314" rel="#L314">314</span>
<span id="L315" rel="#L315">315</span>
<span id="L316" rel="#L316">316</span>
<span id="L317" rel="#L317">317</span>
<span id="L318" rel="#L318">318</span>
<span id="L319" rel="#L319">319</span>
<span id="L320" rel="#L320">320</span>
<span id="L321" rel="#L321">321</span>
<span id="L322" rel="#L322">322</span>
<span id="L323" rel="#L323">323</span>
<span id="L324" rel="#L324">324</span>
<span id="L325" rel="#L325">325</span>
<span id="L326" rel="#L326">326</span>
<span id="L327" rel="#L327">327</span>
<span id="L328" rel="#L328">328</span>
<span id="L329" rel="#L329">329</span>
<span id="L330" rel="#L330">330</span>
<span id="L331" rel="#L331">331</span>
<span id="L332" rel="#L332">332</span>
<span id="L333" rel="#L333">333</span>
<span id="L334" rel="#L334">334</span>
<span id="L335" rel="#L335">335</span>
<span id="L336" rel="#L336">336</span>
<span id="L337" rel="#L337">337</span>
<span id="L338" rel="#L338">338</span>
<span id="L339" rel="#L339">339</span>
<span id="L340" rel="#L340">340</span>
<span id="L341" rel="#L341">341</span>
<span id="L342" rel="#L342">342</span>
<span id="L343" rel="#L343">343</span>
<span id="L344" rel="#L344">344</span>
<span id="L345" rel="#L345">345</span>
<span id="L346" rel="#L346">346</span>
<span id="L347" rel="#L347">347</span>
<span id="L348" rel="#L348">348</span>
<span id="L349" rel="#L349">349</span>
<span id="L350" rel="#L350">350</span>
<span id="L351" rel="#L351">351</span>
<span id="L352" rel="#L352">352</span>
<span id="L353" rel="#L353">353</span>
<span id="L354" rel="#L354">354</span>
<span id="L355" rel="#L355">355</span>
<span id="L356" rel="#L356">356</span>
<span id="L357" rel="#L357">357</span>
<span id="L358" rel="#L358">358</span>
<span id="L359" rel="#L359">359</span>
<span id="L360" rel="#L360">360</span>
<span id="L361" rel="#L361">361</span>
<span id="L362" rel="#L362">362</span>
<span id="L363" rel="#L363">363</span>
<span id="L364" rel="#L364">364</span>
<span id="L365" rel="#L365">365</span>
<span id="L366" rel="#L366">366</span>
<span id="L367" rel="#L367">367</span>
<span id="L368" rel="#L368">368</span>
<span id="L369" rel="#L369">369</span>
<span id="L370" rel="#L370">370</span>
<span id="L371" rel="#L371">371</span>
<span id="L372" rel="#L372">372</span>
<span id="L373" rel="#L373">373</span>
<span id="L374" rel="#L374">374</span>
<span id="L375" rel="#L375">375</span>
<span id="L376" rel="#L376">376</span>
<span id="L377" rel="#L377">377</span>
<span id="L378" rel="#L378">378</span>
<span id="L379" rel="#L379">379</span>
<span id="L380" rel="#L380">380</span>
<span id="L381" rel="#L381">381</span>

            </td>
            <td class="blob-line-code">
                    <div class="highlight"><pre><div class='line' id='LC1'><span class="cm">/*!</span></div><div class='line' id='LC2'><span class="cm"> * PayPalJSButtons</span></div><div class='line' id='LC3'><span class="cm"> * JavaScript integration for PayPal&#39;s payment buttons</span></div><div class='line' id='LC4'><span class="cm"> * @version 1.0.1 - 2013-07-15</span></div><div class='line' id='LC5'><span class="cm"> * @author Jeff Harrell &lt;https://github.com/jeffharrell/&gt;</span></div><div class='line' id='LC6'><span class="cm"> */</span></div><div class='line' id='LC7'><span class="k">if</span> <span class="p">(</span><span class="k">typeof</span> <span class="nx">PAYPAL</span> <span class="o">===</span> <span class="s1">&#39;undefined&#39;</span> <span class="o">||</span> <span class="o">!</span><span class="nx">PAYPAL</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC8'>	<span class="kd">var</span> <span class="nx">PAYPAL</span> <span class="o">=</span> <span class="p">{};</span></div><div class='line' id='LC9'><span class="p">}</span></div><div class='line' id='LC10'><br/></div><div class='line' id='LC11'><span class="nx">PAYPAL</span><span class="p">.</span><span class="nx">apps</span> <span class="o">=</span> <span class="nx">PAYPAL</span><span class="p">.</span><span class="nx">apps</span> <span class="o">||</span> <span class="p">{};</span></div><div class='line' id='LC12'><br/></div><div class='line' id='LC13'><span class="p">(</span><span class="kd">function</span> <span class="p">(</span><span class="nb">document</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC14'><br/></div><div class='line' id='LC15'>	<span class="s1">&#39;use strict&#39;</span><span class="p">;</span></div><div class='line' id='LC16'><br/></div><div class='line' id='LC17'>	<span class="kd">var</span> <span class="nx">app</span> <span class="o">=</span> <span class="p">{},</span></div><div class='line' id='LC18'>		<span class="nx">paypalURL</span> <span class="o">=</span> <span class="s1">&#39;https://{env}.paypal.com/cgi-bin/webscr&#39;</span><span class="p">,</span></div><div class='line' id='LC19'>		<span class="nx">qrCodeURL</span> <span class="o">=</span> <span class="s1">&#39;https://{env}.paypal.com/webapps/ppint/qrcode?data={url}&amp;pattern={pattern}&amp;height={size}&#39;</span><span class="p">,</span></div><div class='line' id='LC20'>		<span class="nx">bnCode</span> <span class="o">=</span> <span class="s1">&#39;JavaScriptButton_{type}&#39;</span><span class="p">,</span></div><div class='line' id='LC21'>		<span class="nx">prettyParams</span> <span class="o">=</span> <span class="p">{</span></div><div class='line' id='LC22'>			<span class="nx">name</span><span class="o">:</span> <span class="s1">&#39;item_name&#39;</span><span class="p">,</span></div><div class='line' id='LC23'>			<span class="nx">number</span><span class="o">:</span> <span class="s1">&#39;item_number&#39;</span><span class="p">,</span></div><div class='line' id='LC24'>			<span class="nx">locale</span><span class="o">:</span> <span class="s1">&#39;lc&#39;</span><span class="p">,</span></div><div class='line' id='LC25'>			<span class="nx">currency</span><span class="o">:</span> <span class="s1">&#39;currency_code&#39;</span><span class="p">,</span></div><div class='line' id='LC26'>			<span class="nx">recurrence</span><span class="o">:</span> <span class="s1">&#39;p3&#39;</span><span class="p">,</span></div><div class='line' id='LC27'>			<span class="nx">period</span><span class="o">:</span> <span class="s1">&#39;t3&#39;</span><span class="p">,</span></div><div class='line' id='LC28'>			<span class="nx">callback</span><span class="o">:</span> <span class="s1">&#39;notify_url&#39;</span></div><div class='line' id='LC29'>		<span class="p">},</span></div><div class='line' id='LC30'>		<span class="nx">locales</span> <span class="o">=</span> <span class="p">{</span></div><div class='line' id='LC31'>			<span class="nx">da_DK</span><span class="o">:</span> <span class="p">{</span> <span class="nx">buynow</span><span class="o">:</span> <span class="s1">&#39;Køb nu&#39;</span><span class="p">,</span> <span class="nx">cart</span><span class="o">:</span> <span class="s1">&#39;Læg i indkøbsvogn&#39;</span><span class="p">,</span> <span class="nx">donate</span><span class="o">:</span> <span class="s1">&#39;Doner&#39;</span><span class="p">,</span> <span class="nx">subscribe</span><span class="o">:</span> <span class="s1">&#39;Abonner&#39;</span><span class="p">,</span> <span class="nx">item_name</span><span class="o">:</span> <span class="s1">&#39;Vare&#39;</span><span class="p">,</span> <span class="nx">number</span><span class="o">:</span> <span class="s1">&#39;Nummer&#39;</span><span class="p">,</span> <span class="nx">amount</span><span class="o">:</span> <span class="s1">&#39;Pris&#39;</span><span class="p">,</span> <span class="nx">quantity</span><span class="o">:</span> <span class="s1">&#39;Antal&#39;</span> <span class="p">},</span></div><div class='line' id='LC32'>			<span class="nx">de_DE</span><span class="o">:</span> <span class="p">{</span> <span class="nx">buynow</span><span class="o">:</span> <span class="s1">&#39;Jetzt kaufen&#39;</span><span class="p">,</span> <span class="nx">cart</span><span class="o">:</span> <span class="s1">&#39;In den Warenkorb&#39;</span><span class="p">,</span> <span class="nx">donate</span><span class="o">:</span> <span class="s1">&#39;Spenden&#39;</span><span class="p">,</span> <span class="nx">subscribe</span><span class="o">:</span> <span class="s1">&#39;Abonnieren&#39;</span><span class="p">,</span> <span class="nx">item_name</span><span class="o">:</span> <span class="s1">&#39;Artikel&#39;</span><span class="p">,</span> <span class="nx">number</span><span class="o">:</span> <span class="s1">&#39;Nummer&#39;</span><span class="p">,</span> <span class="nx">amount</span><span class="o">:</span> <span class="s1">&#39;Betrag&#39;</span><span class="p">,</span> <span class="nx">quantity</span><span class="o">:</span> <span class="s1">&#39;Menge&#39;</span> <span class="p">},</span></div><div class='line' id='LC33'>			<span class="nx">en_AU</span><span class="o">:</span> <span class="p">{</span> <span class="nx">buynow</span><span class="o">:</span> <span class="s1">&#39;Buy Now&#39;</span><span class="p">,</span> <span class="nx">cart</span><span class="o">:</span> <span class="s1">&#39;Add to Cart&#39;</span><span class="p">,</span> <span class="nx">donate</span><span class="o">:</span> <span class="s1">&#39;Donate&#39;</span><span class="p">,</span> <span class="nx">subscribe</span><span class="o">:</span> <span class="s1">&#39;Subscribe&#39;</span><span class="p">,</span> <span class="nx">item_name</span><span class="o">:</span> <span class="s1">&#39;Item&#39;</span><span class="p">,</span> <span class="nx">number</span><span class="o">:</span> <span class="s1">&#39;Number&#39;</span><span class="p">,</span> <span class="nx">amount</span><span class="o">:</span> <span class="s1">&#39;Amount&#39;</span><span class="p">,</span> <span class="nx">quantity</span><span class="o">:</span> <span class="s1">&#39;Quantity&#39;</span> <span class="p">},</span></div><div class='line' id='LC34'>			<span class="nx">en_GB</span><span class="o">:</span> <span class="p">{</span> <span class="nx">buynow</span><span class="o">:</span> <span class="s1">&#39;Buy Now&#39;</span><span class="p">,</span> <span class="nx">cart</span><span class="o">:</span> <span class="s1">&#39;Add to Cart&#39;</span><span class="p">,</span> <span class="nx">donate</span><span class="o">:</span> <span class="s1">&#39;Donate&#39;</span><span class="p">,</span> <span class="nx">subscribe</span><span class="o">:</span> <span class="s1">&#39;Subscribe&#39;</span><span class="p">,</span> <span class="nx">item_name</span><span class="o">:</span> <span class="s1">&#39;Item&#39;</span><span class="p">,</span> <span class="nx">number</span><span class="o">:</span> <span class="s1">&#39;Number&#39;</span><span class="p">,</span> <span class="nx">amount</span><span class="o">:</span> <span class="s1">&#39;Amount&#39;</span><span class="p">,</span> <span class="nx">quantity</span><span class="o">:</span> <span class="s1">&#39;Quantity&#39;</span> <span class="p">},</span></div><div class='line' id='LC35'>			<span class="nx">en_US</span><span class="o">:</span> <span class="p">{</span> <span class="nx">buynow</span><span class="o">:</span> <span class="s1">&#39;Buy Now&#39;</span><span class="p">,</span> <span class="nx">cart</span><span class="o">:</span> <span class="s1">&#39;Add to Cart&#39;</span><span class="p">,</span> <span class="nx">donate</span><span class="o">:</span> <span class="s1">&#39;Donate&#39;</span><span class="p">,</span> <span class="nx">subscribe</span><span class="o">:</span> <span class="s1">&#39;Subscribe&#39;</span><span class="p">,</span> <span class="nx">item_name</span><span class="o">:</span> <span class="s1">&#39;Item&#39;</span><span class="p">,</span> <span class="nx">number</span><span class="o">:</span> <span class="s1">&#39;Number&#39;</span><span class="p">,</span> <span class="nx">amount</span><span class="o">:</span> <span class="s1">&#39;Amount&#39;</span><span class="p">,</span> <span class="nx">quantity</span><span class="o">:</span> <span class="s1">&#39;Quantity&#39;</span> <span class="p">},</span></div><div class='line' id='LC36'>			<span class="nx">es_ES</span><span class="o">:</span> <span class="p">{</span> <span class="nx">buynow</span><span class="o">:</span> <span class="s1">&#39;Comprar ahora&#39;</span><span class="p">,</span> <span class="nx">cart</span><span class="o">:</span> <span class="s1">&#39;Añadir al carro&#39;</span><span class="p">,</span> <span class="nx">donate</span><span class="o">:</span> <span class="s1">&#39;Donar&#39;</span><span class="p">,</span> <span class="nx">subscribe</span><span class="o">:</span> <span class="s1">&#39;Suscribirse&#39;</span><span class="p">,</span> <span class="nx">item_name</span><span class="o">:</span> <span class="s1">&#39;Artículo&#39;</span><span class="p">,</span> <span class="nx">number</span><span class="o">:</span> <span class="s1">&#39;Número&#39;</span><span class="p">,</span> <span class="nx">amount</span><span class="o">:</span> <span class="s1">&#39;Importe&#39;</span><span class="p">,</span> <span class="nx">quantity</span><span class="o">:</span> <span class="s1">&#39;Cantidad&#39;</span> <span class="p">},</span></div><div class='line' id='LC37'>			<span class="nx">es_XC</span><span class="o">:</span> <span class="p">{</span> <span class="nx">buynow</span><span class="o">:</span> <span class="s1">&#39;Comprar ahora&#39;</span><span class="p">,</span> <span class="nx">cart</span><span class="o">:</span> <span class="s1">&#39;Añadir al carrito&#39;</span><span class="p">,</span> <span class="nx">donate</span><span class="o">:</span> <span class="s1">&#39;Donar&#39;</span><span class="p">,</span> <span class="nx">subscribe</span><span class="o">:</span> <span class="s1">&#39;Suscribirse&#39;</span><span class="p">,</span> <span class="nx">item_name</span><span class="o">:</span> <span class="s1">&#39;Artículo&#39;</span><span class="p">,</span> <span class="nx">number</span><span class="o">:</span> <span class="s1">&#39;Número&#39;</span><span class="p">,</span> <span class="nx">amount</span><span class="o">:</span> <span class="s1">&#39;Importe&#39;</span><span class="p">,</span> <span class="nx">quantity</span><span class="o">:</span> <span class="s1">&#39;Cantidad&#39;</span> <span class="p">},</span></div><div class='line' id='LC38'>			<span class="nx">fr_CA</span><span class="o">:</span> <span class="p">{</span> <span class="nx">buynow</span><span class="o">:</span> <span class="s1">&#39;Acheter&#39;</span><span class="p">,</span> <span class="nx">cart</span><span class="o">:</span> <span class="s1">&#39;Ajouter au panier&#39;</span><span class="p">,</span> <span class="nx">donate</span><span class="o">:</span> <span class="s1">&#39;Faire un don&#39;</span><span class="p">,</span> <span class="nx">subscribe</span><span class="o">:</span> <span class="s1">&#39;Souscrire&#39;</span><span class="p">,</span> <span class="nx">item_name</span><span class="o">:</span> <span class="s1">&#39;Objet&#39;</span><span class="p">,</span> <span class="nx">number</span><span class="o">:</span> <span class="s1">&#39;Numéro&#39;</span><span class="p">,</span> <span class="nx">amount</span><span class="o">:</span> <span class="s1">&#39;Montant&#39;</span><span class="p">,</span> <span class="nx">quantity</span><span class="o">:</span> <span class="s1">&#39;Quantité&#39;</span> <span class="p">},</span></div><div class='line' id='LC39'>			<span class="nx">fr_FR</span><span class="o">:</span> <span class="p">{</span> <span class="nx">buynow</span><span class="o">:</span> <span class="s1">&#39;Acheter&#39;</span><span class="p">,</span> <span class="nx">cart</span><span class="o">:</span> <span class="s1">&#39;Ajouter au panier&#39;</span><span class="p">,</span> <span class="nx">donate</span><span class="o">:</span> <span class="s1">&#39;Faire un don&#39;</span><span class="p">,</span> <span class="nx">subscribe</span><span class="o">:</span> <span class="s1">&#39;Souscrire&#39;</span><span class="p">,</span> <span class="nx">item_name</span><span class="o">:</span> <span class="s1">&#39;Objet&#39;</span><span class="p">,</span> <span class="nx">number</span><span class="o">:</span> <span class="s1">&#39;Numéro&#39;</span><span class="p">,</span> <span class="nx">amount</span><span class="o">:</span> <span class="s1">&#39;Montant&#39;</span><span class="p">,</span> <span class="nx">quantity</span><span class="o">:</span> <span class="s1">&#39;Quantité&#39;</span> <span class="p">},</span></div><div class='line' id='LC40'>			<span class="nx">fr_XC</span><span class="o">:</span> <span class="p">{</span> <span class="nx">buynow</span><span class="o">:</span> <span class="s1">&#39;Acheter&#39;</span><span class="p">,</span> <span class="nx">cart</span><span class="o">:</span> <span class="s1">&#39;Ajouter au panier&#39;</span><span class="p">,</span> <span class="nx">donate</span><span class="o">:</span> <span class="s1">&#39;Faire un don&#39;</span><span class="p">,</span> <span class="nx">subscribe</span><span class="o">:</span> <span class="s1">&#39;Souscrire&#39;</span><span class="p">,</span> <span class="nx">item_name</span><span class="o">:</span> <span class="s1">&#39;Objet&#39;</span><span class="p">,</span> <span class="nx">number</span><span class="o">:</span> <span class="s1">&#39;Numéro&#39;</span><span class="p">,</span> <span class="nx">amount</span><span class="o">:</span> <span class="s1">&#39;Montant&#39;</span><span class="p">,</span> <span class="nx">quantity</span><span class="o">:</span> <span class="s1">&#39;Quantité&#39;</span> <span class="p">},</span></div><div class='line' id='LC41'>			<span class="nx">he_IL</span><span class="o">:</span> <span class="p">{</span> <span class="nx">buynow</span><span class="o">:</span> <span class="s1">&#39;וישכע הנק&#39;</span><span class="p">,</span> <span class="nx">cart</span><span class="o">:</span> <span class="s1">&#39;תוינקה לסל ףסוה&#39;</span><span class="p">,</span> <span class="nx">donate</span><span class="o">:</span> <span class="s1">&#39;םורת&#39;</span><span class="p">,</span> <span class="nx">subscribe</span><span class="o">:</span> <span class="s1">&#39;יונמכ ףרטצה&#39;</span><span class="p">,</span> <span class="nx">item_name</span><span class="o">:</span> <span class="s1">&#39;טירפ&#39;</span><span class="p">,</span> <span class="nx">number</span><span class="o">:</span> <span class="s1">&#39;רפסמ&#39;</span><span class="p">,</span> <span class="nx">amount</span><span class="o">:</span> <span class="s1">&#39;םוכס&#39;</span><span class="p">,</span> <span class="nx">quantity</span><span class="o">:</span> <span class="s1">&#39;מותכ&#39;</span> <span class="p">},</span></div><div class='line' id='LC42'>			<span class="nx">id_ID</span><span class="o">:</span> <span class="p">{</span> <span class="nx">buynow</span><span class="o">:</span> <span class="s1">&#39;Beli Sekarang&#39;</span><span class="p">,</span> <span class="nx">cart</span><span class="o">:</span> <span class="s1">&#39;Tambah ke Keranjang&#39;</span><span class="p">,</span> <span class="nx">donate</span><span class="o">:</span> <span class="s1">&#39;Donasikan&#39;</span><span class="p">,</span> <span class="nx">subscribe</span><span class="o">:</span> <span class="s1">&#39;Berlangganan&#39;</span><span class="p">,</span> <span class="nx">item_name</span><span class="o">:</span> <span class="s1">&#39;Barang&#39;</span><span class="p">,</span> <span class="nx">number</span><span class="o">:</span> <span class="s1">&#39;Nomor&#39;</span><span class="p">,</span> <span class="nx">amount</span><span class="o">:</span> <span class="s1">&#39;Harga&#39;</span><span class="p">,</span> <span class="nx">quantity</span><span class="o">:</span> <span class="s1">&#39;Kuantitas&#39;</span> <span class="p">},</span></div><div class='line' id='LC43'>			<span class="nx">it_IT</span><span class="o">:</span> <span class="p">{</span> <span class="nx">buynow</span><span class="o">:</span> <span class="s1">&#39;Paga adesso&#39;</span><span class="p">,</span> <span class="nx">cart</span><span class="o">:</span> <span class="s1">&#39;Aggiungi al carrello&#39;</span><span class="p">,</span> <span class="nx">donate</span><span class="o">:</span> <span class="s1">&#39;Donazione&#39;</span><span class="p">,</span> <span class="nx">subscribe</span><span class="o">:</span> <span class="s1">&#39;Iscriviti&#39;</span><span class="p">,</span> <span class="nx">item_name</span><span class="o">:</span> <span class="s1">&#39;Oggetto&#39;</span><span class="p">,</span> <span class="nx">number</span><span class="o">:</span> <span class="s1">&#39;Numero&#39;</span><span class="p">,</span> <span class="nx">amount</span><span class="o">:</span> <span class="s1">&#39;Importo&#39;</span><span class="p">,</span> <span class="nx">quantity</span><span class="o">:</span> <span class="s1">&#39;Quantità&#39;</span> <span class="p">},</span></div><div class='line' id='LC44'>			<span class="nx">ja_JP</span><span class="o">:</span> <span class="p">{</span> <span class="nx">buynow</span><span class="o">:</span> <span class="s1">&#39;今すぐ購入&#39;</span><span class="p">,</span> <span class="nx">cart</span><span class="o">:</span> <span class="s1">&#39;カートに追加&#39;</span><span class="p">,</span> <span class="nx">donate</span><span class="o">:</span> <span class="s1">&#39;寄付&#39;</span><span class="p">,</span> <span class="nx">subscribe</span><span class="o">:</span> <span class="s1">&#39;購読&#39;</span><span class="p">,</span> <span class="nx">item_name</span><span class="o">:</span> <span class="s1">&#39;商品&#39;</span><span class="p">,</span> <span class="nx">number</span><span class="o">:</span> <span class="s1">&#39;番号&#39;</span><span class="p">,</span> <span class="nx">amount</span><span class="o">:</span> <span class="s1">&#39;価格&#39;</span><span class="p">,</span> <span class="nx">quantity</span><span class="o">:</span> <span class="s1">&#39;数量&#39;</span> <span class="p">},</span></div><div class='line' id='LC45'>			<span class="nx">nl_NL</span><span class="o">:</span> <span class="p">{</span> <span class="nx">buynow</span><span class="o">:</span> <span class="s1">&#39;Nu kopen&#39;</span><span class="p">,</span> <span class="nx">cart</span><span class="o">:</span> <span class="s1">&#39;Aan winkelwagentje toevoegen&#39;</span><span class="p">,</span> <span class="nx">donate</span><span class="o">:</span> <span class="s1">&#39;Doneren&#39;</span><span class="p">,</span> <span class="nx">subscribe</span><span class="o">:</span> <span class="s1">&#39;Abonneren&#39;</span><span class="p">,</span> <span class="nx">item_name</span><span class="o">:</span> <span class="s1">&#39;Item&#39;</span><span class="p">,</span> <span class="nx">number</span><span class="o">:</span> <span class="s1">&#39;Nummer&#39;</span><span class="p">,</span> <span class="nx">amount</span><span class="o">:</span> <span class="s1">&#39;Bedrag&#39;</span><span class="p">,</span> <span class="nx">quantity</span><span class="o">:</span> <span class="s1">&#39;Hoeveelheid&#39;</span> <span class="p">},</span></div><div class='line' id='LC46'>			<span class="nx">no_NO</span><span class="o">:</span> <span class="p">{</span> <span class="nx">buynow</span><span class="o">:</span> <span class="s1">&#39;Kjøp nå&#39;</span><span class="p">,</span> <span class="nx">cart</span><span class="o">:</span> <span class="s1">&#39;Legg til i kurv&#39;</span><span class="p">,</span> <span class="nx">donate</span><span class="o">:</span> <span class="s1">&#39;Doner&#39;</span><span class="p">,</span> <span class="nx">subscribe</span><span class="o">:</span> <span class="s1">&#39;Abonner&#39;</span><span class="p">,</span> <span class="nx">item_name</span><span class="o">:</span> <span class="s1">&#39;Vare&#39;</span><span class="p">,</span> <span class="nx">number</span><span class="o">:</span> <span class="s1">&#39;Nummer&#39;</span><span class="p">,</span> <span class="nx">amount</span><span class="o">:</span> <span class="s1">&#39;Beløp&#39;</span><span class="p">,</span> <span class="nx">quantity</span><span class="o">:</span> <span class="s1">&#39;Antall&#39;</span> <span class="p">},</span></div><div class='line' id='LC47'>			<span class="nx">pl_PL</span><span class="o">:</span> <span class="p">{</span> <span class="nx">buynow</span><span class="o">:</span> <span class="s1">&#39;Kup teraz&#39;</span><span class="p">,</span> <span class="nx">cart</span><span class="o">:</span> <span class="s1">&#39;Dodaj do koszyka&#39;</span><span class="p">,</span> <span class="nx">donate</span><span class="o">:</span> <span class="s1">&#39;Przekaż darowiznę&#39;</span><span class="p">,</span> <span class="nx">subscribe</span><span class="o">:</span> <span class="s1">&#39;Subskrybuj&#39;</span><span class="p">,</span> <span class="nx">item_name</span><span class="o">:</span> <span class="s1">&#39;Przedmiot&#39;</span><span class="p">,</span> <span class="nx">number</span><span class="o">:</span> <span class="s1">&#39;Numer&#39;</span><span class="p">,</span> <span class="nx">amount</span><span class="o">:</span> <span class="s1">&#39;Kwota&#39;</span><span class="p">,</span> <span class="nx">quantity</span><span class="o">:</span> <span class="s1">&#39;Ilość&#39;</span> <span class="p">},</span></div><div class='line' id='LC48'>			<span class="nx">pt_BR</span><span class="o">:</span> <span class="p">{</span> <span class="nx">buynow</span><span class="o">:</span> <span class="s1">&#39;Comprar agora&#39;</span><span class="p">,</span> <span class="nx">cart</span><span class="o">:</span> <span class="s1">&#39;Adicionar ao carrinho&#39;</span><span class="p">,</span> <span class="nx">donate</span><span class="o">:</span> <span class="s1">&#39;Doar&#39;</span><span class="p">,</span> <span class="nx">subscribe</span><span class="o">:</span> <span class="s1">&#39;Assinar&#39;</span><span class="p">,</span> <span class="nx">item_name</span><span class="o">:</span> <span class="s1">&#39;Produto&#39;</span><span class="p">,</span> <span class="nx">number</span><span class="o">:</span> <span class="s1">&#39;Número&#39;</span><span class="p">,</span> <span class="nx">amount</span><span class="o">:</span> <span class="s1">&#39;Valor&#39;</span><span class="p">,</span> <span class="nx">quantity</span><span class="o">:</span> <span class="s1">&#39;Quantidade&#39;</span> <span class="p">},</span></div><div class='line' id='LC49'>			<span class="nx">ru_RU</span><span class="o">:</span> <span class="p">{</span> <span class="nx">buynow</span><span class="o">:</span> <span class="s1">&#39;Купить сейчас&#39;</span><span class="p">,</span> <span class="nx">cart</span><span class="o">:</span> <span class="s1">&#39;Добавить в корзину&#39;</span><span class="p">,</span> <span class="nx">donate</span><span class="o">:</span> <span class="s1">&#39;Пожертвовать&#39;</span><span class="p">,</span> <span class="nx">subscribe</span><span class="o">:</span> <span class="s1">&#39;Подписаться&#39;</span><span class="p">,</span> <span class="nx">item_name</span><span class="o">:</span> <span class="s1">&#39;Товар&#39;</span><span class="p">,</span> <span class="nx">number</span><span class="o">:</span> <span class="s1">&#39;Номер&#39;</span><span class="p">,</span> <span class="nx">amount</span><span class="o">:</span> <span class="s1">&#39;Сумма&#39;</span><span class="p">,</span> <span class="nx">quantity</span><span class="o">:</span> <span class="s1">&#39;Количество&#39;</span> <span class="p">},</span></div><div class='line' id='LC50'>			<span class="nx">sv_SE</span><span class="o">:</span> <span class="p">{</span> <span class="nx">buynow</span><span class="o">:</span> <span class="s1">&#39;Köp nu&#39;</span><span class="p">,</span> <span class="nx">cart</span><span class="o">:</span> <span class="s1">&#39;Lägg till i kundvagn&#39;</span><span class="p">,</span> <span class="nx">donate</span><span class="o">:</span> <span class="s1">&#39;Donera&#39;</span><span class="p">,</span> <span class="nx">subscribe</span><span class="o">:</span> <span class="s1">&#39;Abonnera&#39;</span><span class="p">,</span> <span class="nx">item_name</span><span class="o">:</span> <span class="s1">&#39;Objekt&#39;</span><span class="p">,</span> <span class="nx">number</span><span class="o">:</span> <span class="s1">&#39;Nummer&#39;</span><span class="p">,</span> <span class="nx">amount</span><span class="o">:</span> <span class="s1">&#39;Belopp&#39;</span><span class="p">,</span> <span class="nx">quantity</span><span class="o">:</span> <span class="s1">&#39;Antal&#39;</span> <span class="p">},</span></div><div class='line' id='LC51'>			<span class="nx">th_TH</span><span class="o">:</span> <span class="p">{</span> <span class="nx">buynow</span><span class="o">:</span> <span class="s1">&#39;ซื้อทันที&#39;</span><span class="p">,</span> <span class="nx">cart</span><span class="o">:</span> <span class="s1">&#39;เพิ่มลงตะกร้า&#39;</span><span class="p">,</span> <span class="nx">donate</span><span class="o">:</span> <span class="s1">&#39;บริจาค&#39;</span><span class="p">,</span> <span class="nx">subscribe</span><span class="o">:</span> <span class="s1">&#39;บอกรับสมาชิก&#39;</span><span class="p">,</span> <span class="nx">item_name</span><span class="o">:</span> <span class="s1">&#39;ชื่อสินค้า&#39;</span><span class="p">,</span> <span class="nx">number</span><span class="o">:</span> <span class="s1">&#39;รหัสสินค้า&#39;</span><span class="p">,</span> <span class="nx">amount</span><span class="o">:</span> <span class="s1">&#39;ราคา&#39;</span><span class="p">,</span> <span class="nx">quantity</span><span class="o">:</span> <span class="s1">&#39;จำนวน&#39;</span> <span class="p">},</span></div><div class='line' id='LC52'>			<span class="nx">tr_TR</span><span class="o">:</span> <span class="p">{</span> <span class="nx">buynow</span><span class="o">:</span> <span class="s1">&#39;Hemen Alın&#39;</span><span class="p">,</span> <span class="nx">cart</span><span class="o">:</span> <span class="s1">&#39;Sepete Ekleyin&#39;</span><span class="p">,</span> <span class="nx">donate</span><span class="o">:</span> <span class="s1">&#39;Bağış Yapın&#39;</span><span class="p">,</span> <span class="nx">subscribe</span><span class="o">:</span> <span class="s1">&#39;Abone Olun&#39;</span><span class="p">,</span> <span class="nx">item_name</span><span class="o">:</span> <span class="s1">&#39;Ürün&#39;</span><span class="p">,</span> <span class="nx">number</span><span class="o">:</span> <span class="s1">&#39;Numara&#39;</span><span class="p">,</span> <span class="nx">amount</span><span class="o">:</span> <span class="s1">&#39;Tutar&#39;</span><span class="p">,</span> <span class="nx">quantity</span><span class="o">:</span> <span class="s1">&#39;Miktar&#39;</span> <span class="p">},</span></div><div class='line' id='LC53'>			<span class="nx">zh_CN</span><span class="o">:</span> <span class="p">{</span> <span class="nx">buynow</span><span class="o">:</span> <span class="s1">&#39;立即购买&#39;</span><span class="p">,</span> <span class="nx">cart</span><span class="o">:</span> <span class="s1">&#39;添加到购物车&#39;</span><span class="p">,</span> <span class="nx">donate</span><span class="o">:</span> <span class="s1">&#39;捐赠&#39;</span><span class="p">,</span> <span class="nx">subscribe</span><span class="o">:</span> <span class="s1">&#39;租用&#39;</span><span class="p">,</span> <span class="nx">item_name</span><span class="o">:</span> <span class="s1">&#39;物品&#39;</span><span class="p">,</span> <span class="nx">number</span><span class="o">:</span> <span class="s1">&#39;编号&#39;</span><span class="p">,</span> <span class="nx">amount</span><span class="o">:</span> <span class="s1">&#39;金额&#39;</span><span class="p">,</span> <span class="nx">quantity</span><span class="o">:</span> <span class="s1">&#39;数量&#39;</span> <span class="p">},</span></div><div class='line' id='LC54'>			<span class="nx">zh_HK</span><span class="o">:</span> <span class="p">{</span> <span class="nx">buynow</span><span class="o">:</span> <span class="s1">&#39;立即買&#39;</span><span class="p">,</span> <span class="nx">cart</span><span class="o">:</span> <span class="s1">&#39;加入購物車&#39;</span><span class="p">,</span> <span class="nx">donate</span><span class="o">:</span> <span class="s1">&#39;捐款&#39;</span><span class="p">,</span> <span class="nx">subscribe</span><span class="o">:</span> <span class="s1">&#39;訂用&#39;</span><span class="p">,</span> <span class="nx">item_name</span><span class="o">:</span> <span class="s1">&#39;項目&#39;</span><span class="p">,</span> <span class="nx">number</span><span class="o">:</span> <span class="s1">&#39;號碼&#39;</span><span class="p">,</span> <span class="nx">amount</span><span class="o">:</span> <span class="s1">&#39;金額&#39;</span><span class="p">,</span> <span class="nx">quantity</span><span class="o">:</span> <span class="s1">&#39;數量&#39;</span> <span class="p">},</span></div><div class='line' id='LC55'>			<span class="nx">zh_TW</span><span class="o">:</span> <span class="p">{</span> <span class="nx">buynow</span><span class="o">:</span> <span class="s1">&#39;立即購&#39;</span><span class="p">,</span> <span class="nx">cart</span><span class="o">:</span> <span class="s1">&#39;加到購物車&#39;</span><span class="p">,</span> <span class="nx">donate</span><span class="o">:</span> <span class="s1">&#39;捐款&#39;</span><span class="p">,</span> <span class="nx">subscribe</span><span class="o">:</span> <span class="s1">&#39;訂閱&#39;</span><span class="p">,</span> <span class="nx">item_name</span><span class="o">:</span> <span class="s1">&#39;商品&#39;</span><span class="p">,</span> <span class="nx">number</span><span class="o">:</span> <span class="s1">&#39;商品編號&#39;</span><span class="p">,</span> <span class="nx">amount</span><span class="o">:</span> <span class="s1">&#39;單價&#39;</span><span class="p">,</span> <span class="nx">quantity</span><span class="o">:</span> <span class="s1">&#39;數量&#39;</span> <span class="p">},</span></div><div class='line' id='LC56'>			<span class="nx">zh_XC</span><span class="o">:</span> <span class="p">{</span> <span class="nx">buynow</span><span class="o">:</span> <span class="s1">&#39;立即购买&#39;</span><span class="p">,</span> <span class="nx">cart</span><span class="o">:</span> <span class="s1">&#39;添加到购物车&#39;</span><span class="p">,</span> <span class="nx">donate</span><span class="o">:</span> <span class="s1">&#39;捐赠&#39;</span><span class="p">,</span> <span class="nx">subscribe</span><span class="o">:</span> <span class="s1">&#39;租用&#39;</span><span class="p">,</span> <span class="nx">item_name</span><span class="o">:</span> <span class="s1">&#39;物品&#39;</span><span class="p">,</span> <span class="nx">number</span><span class="o">:</span> <span class="s1">&#39;编号&#39;</span><span class="p">,</span> <span class="nx">amount</span><span class="o">:</span> <span class="s1">&#39;金额&#39;</span><span class="p">,</span> <span class="nx">quantity</span><span class="o">:</span> <span class="s1">&#39;数量&#39;</span> <span class="p">}</span></div><div class='line' id='LC57'>		<span class="p">};</span></div><div class='line' id='LC58'><br/></div><div class='line' id='LC59'>	<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">PAYPAL</span><span class="p">.</span><span class="nx">apps</span><span class="p">.</span><span class="nx">ButtonFactory</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC60'><br/></div><div class='line' id='LC61'>		<span class="cm">/**</span></div><div class='line' id='LC62'><span class="cm">		 * Initial config for the app. These values can be overridden by the page.</span></div><div class='line' id='LC63'><span class="cm">		 */</span></div><div class='line' id='LC64'>		<span class="nx">app</span><span class="p">.</span><span class="nx">config</span> <span class="o">=</span> <span class="p">{</span></div><div class='line' id='LC65'>			<span class="nx">labels</span><span class="o">:</span> <span class="p">{}</span></div><div class='line' id='LC66'>		<span class="p">};</span></div><div class='line' id='LC67'><br/></div><div class='line' id='LC68'>		<span class="cm">/**</span></div><div class='line' id='LC69'><span class="cm">		 * A count of each type of button on the page</span></div><div class='line' id='LC70'><span class="cm">		 */</span></div><div class='line' id='LC71'>		<span class="nx">app</span><span class="p">.</span><span class="nx">buttons</span> <span class="o">=</span> <span class="p">{</span></div><div class='line' id='LC72'>			<span class="nx">buynow</span><span class="o">:</span> <span class="mi">0</span><span class="p">,</span></div><div class='line' id='LC73'>			<span class="nx">cart</span><span class="o">:</span> <span class="mi">0</span><span class="p">,</span></div><div class='line' id='LC74'>			<span class="nx">donate</span><span class="o">:</span> <span class="mi">0</span><span class="p">,</span></div><div class='line' id='LC75'>			<span class="nx">qr</span><span class="o">:</span> <span class="mi">0</span><span class="p">,</span></div><div class='line' id='LC76'>			<span class="nx">subscribe</span><span class="o">:</span> <span class="mi">0</span></div><div class='line' id='LC77'>		<span class="p">};</span></div><div class='line' id='LC78'><br/></div><div class='line' id='LC79'>		<span class="cm">/**</span></div><div class='line' id='LC80'><span class="cm">		 * Renders a button in place of the given element</span></div><div class='line' id='LC81'><span class="cm">		 *</span></div><div class='line' id='LC82'><span class="cm">		 * @param business {Object} The ID or email address of the merchant to create the button for</span></div><div class='line' id='LC83'><span class="cm">		 * @param raw {Object} An object of key/value data to set as button params</span></div><div class='line' id='LC84'><span class="cm">		 * @param type (String) The type of the button to render</span></div><div class='line' id='LC85'><span class="cm">		 * @param parent {HTMLElement} The element to add the button to (Optional)</span></div><div class='line' id='LC86'><span class="cm">		 * @return {HTMLElement}</span></div><div class='line' id='LC87'><span class="cm">		 */</span></div><div class='line' id='LC88'>		<span class="nx">app</span><span class="p">.</span><span class="nx">create</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">business</span><span class="p">,</span> <span class="nx">raw</span><span class="p">,</span> <span class="nx">type</span><span class="p">,</span> <span class="nx">parent</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC89'>			<span class="kd">var</span> <span class="nx">data</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">DataStore</span><span class="p">(),</span> <span class="nx">button</span><span class="p">,</span> <span class="nx">key</span><span class="p">,</span> <span class="nx">env</span><span class="p">;</span></div><div class='line' id='LC90'><br/></div><div class='line' id='LC91'>			<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">business</span><span class="p">)</span> <span class="p">{</span> <span class="k">return</span> <span class="kc">false</span><span class="p">;</span> <span class="p">}</span></div><div class='line' id='LC92'><br/></div><div class='line' id='LC93'>			<span class="c1">// Normalize the data&#39;s keys and add to a data store</span></div><div class='line' id='LC94'>			<span class="k">for</span> <span class="p">(</span><span class="nx">key</span> <span class="k">in</span> <span class="nx">raw</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC95'>				<span class="nx">data</span><span class="p">.</span><span class="nx">add</span><span class="p">(</span><span class="nx">prettyParams</span><span class="p">[</span><span class="nx">key</span><span class="p">]</span> <span class="o">||</span> <span class="nx">key</span><span class="p">,</span> <span class="nx">raw</span><span class="p">[</span><span class="nx">key</span><span class="p">].</span><span class="nx">value</span><span class="p">,</span> <span class="nx">raw</span><span class="p">[</span><span class="nx">key</span><span class="p">].</span><span class="nx">isEditable</span><span class="p">);</span></div><div class='line' id='LC96'>			<span class="p">}</span></div><div class='line' id='LC97'><br/></div><div class='line' id='LC98'>			<span class="c1">// Defaults</span></div><div class='line' id='LC99'>			<span class="nx">type</span> <span class="o">=</span> <span class="nx">type</span> <span class="o">||</span> <span class="s1">&#39;buynow&#39;</span><span class="p">;</span></div><div class='line' id='LC100'>			<span class="nx">env</span> <span class="o">=</span> <span class="s2">&quot;www&quot;</span><span class="p">;</span></div><div class='line' id='LC101'><br/></div><div class='line' id='LC102'>			<span class="k">if</span> <span class="p">(</span><span class="nx">data</span><span class="p">.</span><span class="nx">items</span><span class="p">.</span><span class="nx">env</span> <span class="o">&amp;&amp;</span> <span class="nx">data</span><span class="p">.</span><span class="nx">items</span><span class="p">.</span><span class="nx">env</span><span class="p">.</span><span class="nx">value</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC103'>				<span class="nx">env</span> <span class="o">+=</span> <span class="s2">&quot;.&quot;</span> <span class="o">+</span> <span class="nx">data</span><span class="p">.</span><span class="nx">items</span><span class="p">.</span><span class="nx">env</span><span class="p">.</span><span class="nx">value</span><span class="p">;</span></div><div class='line' id='LC104'>			<span class="p">}</span></div><div class='line' id='LC105'><br/></div><div class='line' id='LC106'>			<span class="c1">// Cart buttons</span></div><div class='line' id='LC107'>			<span class="k">if</span> <span class="p">(</span><span class="nx">type</span> <span class="o">===</span> <span class="s1">&#39;cart&#39;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC108'>				<span class="nx">data</span><span class="p">.</span><span class="nx">add</span><span class="p">(</span><span class="s1">&#39;cmd&#39;</span><span class="p">,</span> <span class="s1">&#39;_cart&#39;</span><span class="p">);</span></div><div class='line' id='LC109'>				<span class="nx">data</span><span class="p">.</span><span class="nx">add</span><span class="p">(</span><span class="s1">&#39;add&#39;</span><span class="p">,</span> <span class="kc">true</span><span class="p">);</span></div><div class='line' id='LC110'>			<span class="c1">// Donation buttons</span></div><div class='line' id='LC111'>			<span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="nx">type</span> <span class="o">===</span> <span class="s1">&#39;donate&#39;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC112'>				<span class="nx">data</span><span class="p">.</span><span class="nx">add</span><span class="p">(</span><span class="s1">&#39;cmd&#39;</span><span class="p">,</span> <span class="s1">&#39;_donations&#39;</span><span class="p">);</span></div><div class='line' id='LC113'>			<span class="c1">// Subscribe buttons</span></div><div class='line' id='LC114'>			<span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="nx">type</span> <span class="o">===</span> <span class="s1">&#39;subscribe&#39;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC115'>				<span class="nx">data</span><span class="p">.</span><span class="nx">add</span><span class="p">(</span><span class="s1">&#39;cmd&#39;</span><span class="p">,</span> <span class="s1">&#39;_xclick-subscriptions&#39;</span><span class="p">);</span></div><div class='line' id='LC116'><br/></div><div class='line' id='LC117'>				<span class="c1">// TODO: &quot;amount&quot; cannot be used in prettyParams since it&#39;s overloaded</span></div><div class='line' id='LC118'>				<span class="c1">// Find a better way to do this</span></div><div class='line' id='LC119'>				<span class="k">if</span> <span class="p">(</span><span class="nx">data</span><span class="p">.</span><span class="nx">items</span><span class="p">.</span><span class="nx">amount</span> <span class="o">&amp;&amp;</span> <span class="o">!</span><span class="nx">data</span><span class="p">.</span><span class="nx">items</span><span class="p">.</span><span class="nx">a3</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC120'>					<span class="nx">data</span><span class="p">.</span><span class="nx">add</span><span class="p">(</span><span class="s1">&#39;a3&#39;</span><span class="p">,</span> <span class="nx">data</span><span class="p">.</span><span class="nx">items</span><span class="p">.</span><span class="nx">amount</span><span class="p">.</span><span class="nx">value</span><span class="p">);</span></div><div class='line' id='LC121'>				<span class="p">}</span></div><div class='line' id='LC122'>			<span class="c1">// Buy Now buttons</span></div><div class='line' id='LC123'>			<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC124'>				<span class="nx">data</span><span class="p">.</span><span class="nx">add</span><span class="p">(</span><span class="s1">&#39;cmd&#39;</span><span class="p">,</span> <span class="s1">&#39;_xclick&#39;</span><span class="p">);</span></div><div class='line' id='LC125'>			<span class="p">}</span></div><div class='line' id='LC126'><br/></div><div class='line' id='LC127'>			<span class="c1">// Add common data</span></div><div class='line' id='LC128'>			<span class="nx">data</span><span class="p">.</span><span class="nx">add</span><span class="p">(</span><span class="s1">&#39;business&#39;</span><span class="p">,</span> <span class="nx">business</span><span class="p">);</span></div><div class='line' id='LC129'>			<span class="nx">data</span><span class="p">.</span><span class="nx">add</span><span class="p">(</span><span class="s1">&#39;bn&#39;</span><span class="p">,</span> <span class="nx">bnCode</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/\{type\}/</span><span class="p">,</span> <span class="nx">type</span><span class="p">));</span></div><div class='line' id='LC130'>			<span class="nx">data</span><span class="p">.</span><span class="nx">add</span><span class="p">(</span><span class="s1">&#39;env&#39;</span><span class="p">,</span>  <span class="nx">env</span><span class="p">);</span></div><div class='line' id='LC131'><br/></div><div class='line' id='LC132'>			<span class="c1">// Build the UI components</span></div><div class='line' id='LC133'>			<span class="k">if</span> <span class="p">(</span><span class="nx">type</span> <span class="o">===</span> <span class="s1">&#39;qr&#39;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC134'>				<span class="nx">button</span> <span class="o">=</span> <span class="nx">buildQR</span><span class="p">(</span><span class="nx">data</span><span class="p">,</span> <span class="nx">data</span><span class="p">.</span><span class="nx">items</span><span class="p">.</span><span class="nx">size</span><span class="p">);</span></div><div class='line' id='LC135'>				<span class="nx">data</span><span class="p">.</span><span class="nx">remove</span><span class="p">(</span><span class="s1">&#39;size&#39;</span><span class="p">);</span></div><div class='line' id='LC136'>			<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC137'>				<span class="nx">button</span> <span class="o">=</span> <span class="nx">buildForm</span><span class="p">(</span><span class="nx">data</span><span class="p">,</span> <span class="nx">type</span><span class="p">);</span></div><div class='line' id='LC138'>			<span class="p">}</span></div><div class='line' id='LC139'><br/></div><div class='line' id='LC140'>			<span class="c1">// Inject CSS</span></div><div class='line' id='LC141'>			<span class="nx">injectCSS</span><span class="p">();</span></div><div class='line' id='LC142'><br/></div><div class='line' id='LC143'>			<span class="c1">// Register it</span></div><div class='line' id='LC144'>			<span class="k">this</span><span class="p">.</span><span class="nx">buttons</span><span class="p">[</span><span class="nx">type</span><span class="p">]</span> <span class="o">+=</span> <span class="mi">1</span><span class="p">;</span></div><div class='line' id='LC145'><br/></div><div class='line' id='LC146'>			<span class="c1">// Add it to the DOM</span></div><div class='line' id='LC147'>			<span class="k">if</span> <span class="p">(</span><span class="nx">parent</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC148'>				<span class="nx">parent</span><span class="p">.</span><span class="nx">appendChild</span><span class="p">(</span><span class="nx">button</span><span class="p">);</span></div><div class='line' id='LC149'>			<span class="p">}</span></div><div class='line' id='LC150'><br/></div><div class='line' id='LC151'>			<span class="k">return</span> <span class="nx">button</span><span class="p">;</span></div><div class='line' id='LC152'>		<span class="p">};</span></div><div class='line' id='LC153'><br/></div><div class='line' id='LC154'><br/></div><div class='line' id='LC155'>		<span class="nx">PAYPAL</span><span class="p">.</span><span class="nx">apps</span><span class="p">.</span><span class="nx">ButtonFactory</span> <span class="o">=</span> <span class="nx">app</span><span class="p">;</span></div><div class='line' id='LC156'>	<span class="p">}</span></div><div class='line' id='LC157'><br/></div><div class='line' id='LC158'><br/></div><div class='line' id='LC159'>	<span class="cm">/**</span></div><div class='line' id='LC160'><span class="cm">	 * Injects button CSS in the &lt;head&gt;</span></div><div class='line' id='LC161'><span class="cm">	 *</span></div><div class='line' id='LC162'><span class="cm">	 * @return {void}</span></div><div class='line' id='LC163'><span class="cm">	 */</span></div><div class='line' id='LC164'>	<span class="kd">function</span> <span class="nx">injectCSS</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC165'>		<span class="kd">var</span> <span class="nx">css</span><span class="p">,</span> <span class="nx">styleEl</span><span class="p">,</span> <span class="nx">paypalButton</span><span class="p">,</span> <span class="nx">paypalInput</span><span class="p">;</span></div><div class='line' id='LC166'><br/></div><div class='line' id='LC167'>		<span class="k">if</span> <span class="p">(</span><span class="nb">document</span><span class="p">.</span><span class="nx">getElementById</span><span class="p">(</span><span class="s1">&#39;paypal-button&#39;</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC168'>			<span class="k">return</span><span class="p">;</span></div><div class='line' id='LC169'>		<span class="p">}</span></div><div class='line' id='LC170'><br/></div><div class='line' id='LC171'>		<span class="nx">css</span> <span class="o">=</span> <span class="s1">&#39;&#39;</span><span class="p">;</span></div><div class='line' id='LC172'>		<span class="nx">styleEl</span> <span class="o">=</span> <span class="nb">document</span><span class="p">.</span><span class="nx">createElement</span><span class="p">(</span><span class="s1">&#39;style&#39;</span><span class="p">);</span></div><div class='line' id='LC173'>		<span class="nx">paypalButton</span> <span class="o">=</span> <span class="s1">&#39;.paypal-button&#39;</span><span class="p">;</span></div><div class='line' id='LC174'>		<span class="nx">paypalInput</span> <span class="o">=</span> <span class="nx">paypalButton</span> <span class="o">+</span> <span class="s1">&#39; button&#39;</span><span class="p">;</span></div><div class='line' id='LC175'><br/></div><div class='line' id='LC176'>		<span class="nx">css</span> <span class="o">+=</span> <span class="nx">paypalButton</span> <span class="o">+</span> <span class="s1">&#39; { white-space: nowrap; }&#39;</span><span class="p">;</span></div><div class='line' id='LC177'>		<span class="nx">css</span> <span class="o">+=</span> <span class="nx">paypalInput</span> <span class="o">+</span> <span class="s1">&#39; { white-space: nowrap; overflow: hidden; border-radius: 13px; font-family: &quot;Arial&quot;, bold, italic; font-weight: bold; font-style: italic; border: 1px solid #ffa823; color: #0E3168; background: #ffa823; position: relative; text-shadow: 0 1px 0 rgba(255,255,255,.5); cursor: pointer; z-index: 0; }&#39;</span><span class="p">;</span></div><div class='line' id='LC178'>		<span class="nx">css</span> <span class="o">+=</span> <span class="nx">paypalInput</span> <span class="o">+</span> <span class="s1">&#39;:before { content: &quot; &quot;; position: absolute; width: 100%; height: 100%; border-radius: 11px; top: 0; left: 0; background: #ffa823; background: -webkit-linear-gradient(top, #FFAA00 0%,#FFAA00 80%,#FFF8FC 100%); background: -moz-linear-gradient(top, #FFAA00 0%,#FFAA00 80%,#FFF8FC 100%); background: -ms-linear-gradient(top, #FFAA00 0%,#FFAA00 80%,#FFF8FC 100%); background: linear-gradient(top, #FFAA00 0%,#FFAA00 80%,#FFF8FC 100%); z-index: -2; }&#39;</span><span class="p">;</span></div><div class='line' id='LC179'>		<span class="nx">css</span> <span class="o">+=</span> <span class="nx">paypalInput</span> <span class="o">+</span> <span class="s1">&#39;:after { content: &quot; &quot;; position: absolute; width: 98%; height: 60%; border-radius: 40px 40px 38px 38px; top: 0; left: 0; background: -webkit-linear-gradient(top, #fefefe 0%, #fed994 100%); background: -moz-linear-gradient(top, #fefefe 0%, #fed994 100%); background: -ms-linear-gradient(top, #fefefe 0%, #fed994 100%); background: linear-gradient(top, #fefefe 0%, #fed994 100%); z-index: -1; -webkit-transform: translateX(1%);-moz-transform: translateX(1%); -ms-transform: translateX(1%); transform: translateX(1%); }&#39;</span><span class="p">;</span></div><div class='line' id='LC180'>		<span class="nx">css</span> <span class="o">+=</span> <span class="nx">paypalInput</span> <span class="o">+</span> <span class="s1">&#39;.small { padding: 3px 15px; font-size: 12px; }&#39;</span><span class="p">;</span></div><div class='line' id='LC181'>		<span class="nx">css</span> <span class="o">+=</span> <span class="nx">paypalInput</span> <span class="o">+</span> <span class="s1">&#39;.large { padding: 4px 19px; font-size: 14px; }&#39;</span><span class="p">;</span></div><div class='line' id='LC182'><br/></div><div class='line' id='LC183'>		<span class="nx">styleEl</span><span class="p">.</span><span class="nx">type</span> <span class="o">=</span> <span class="s1">&#39;text/css&#39;</span><span class="p">;</span></div><div class='line' id='LC184'>		<span class="nx">styleEl</span><span class="p">.</span><span class="nx">id</span> <span class="o">=</span> <span class="s1">&#39;paypal-button&#39;</span><span class="p">;</span></div><div class='line' id='LC185'><br/></div><div class='line' id='LC186'>		<span class="k">if</span> <span class="p">(</span><span class="nx">styleEl</span><span class="p">.</span><span class="nx">styleSheet</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC187'>			<span class="nx">styleEl</span><span class="p">.</span><span class="nx">styleSheet</span><span class="p">.</span><span class="nx">cssText</span> <span class="o">=</span> <span class="nx">css</span><span class="p">;</span></div><div class='line' id='LC188'>		<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC189'>			<span class="nx">styleEl</span><span class="p">.</span><span class="nx">appendChild</span><span class="p">(</span><span class="nb">document</span><span class="p">.</span><span class="nx">createTextNode</span><span class="p">(</span><span class="nx">css</span><span class="p">));</span></div><div class='line' id='LC190'>		<span class="p">}</span></div><div class='line' id='LC191'><br/></div><div class='line' id='LC192'>		<span class="nb">document</span><span class="p">.</span><span class="nx">getElementsByTagName</span><span class="p">(</span><span class="s1">&#39;head&#39;</span><span class="p">)[</span><span class="mi">0</span><span class="p">].</span><span class="nx">appendChild</span><span class="p">(</span><span class="nx">styleEl</span><span class="p">);</span></div><div class='line' id='LC193'>	<span class="p">}</span></div><div class='line' id='LC194'><br/></div><div class='line' id='LC195'><br/></div><div class='line' id='LC196'>	<span class="cm">/**</span></div><div class='line' id='LC197'><span class="cm">	 * Builds the form DOM structure for a button</span></div><div class='line' id='LC198'><span class="cm">	 *</span></div><div class='line' id='LC199'><span class="cm">	 * @param data {Object} An object of key/value data to set as button params</span></div><div class='line' id='LC200'><span class="cm">	 * @param type (String) The type of the button to render</span></div><div class='line' id='LC201'><span class="cm">	 * @return {HTMLElement}</span></div><div class='line' id='LC202'><span class="cm">	 */</span></div><div class='line' id='LC203'>	<span class="kd">function</span> <span class="nx">buildForm</span><span class="p">(</span><span class="nx">data</span><span class="p">,</span> <span class="nx">type</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC204'>		<span class="kd">var</span> <span class="nx">form</span> <span class="o">=</span> <span class="nb">document</span><span class="p">.</span><span class="nx">createElement</span><span class="p">(</span><span class="s1">&#39;form&#39;</span><span class="p">),</span></div><div class='line' id='LC205'>			<span class="nx">btn</span> <span class="o">=</span> <span class="nb">document</span><span class="p">.</span><span class="nx">createElement</span><span class="p">(</span><span class="s1">&#39;button&#39;</span><span class="p">),</span></div><div class='line' id='LC206'>			<span class="nx">hidden</span> <span class="o">=</span> <span class="nb">document</span><span class="p">.</span><span class="nx">createElement</span><span class="p">(</span><span class="s1">&#39;input&#39;</span><span class="p">),</span></div><div class='line' id='LC207'>			<span class="nx">items</span> <span class="o">=</span> <span class="nx">data</span><span class="p">.</span><span class="nx">items</span><span class="p">,</span></div><div class='line' id='LC208'>			<span class="nx">item</span><span class="p">,</span> <span class="nx">child</span><span class="p">,</span> <span class="nx">label</span><span class="p">,</span> <span class="nx">input</span><span class="p">,</span> <span class="nx">key</span><span class="p">,</span> <span class="nx">size</span><span class="p">,</span> <span class="nx">locale</span><span class="p">,</span> <span class="nx">localeText</span><span class="p">,</span> <span class="nx">MiniCart</span><span class="p">;</span></div><div class='line' id='LC209'><br/></div><div class='line' id='LC210'>		<span class="nx">form</span><span class="p">.</span><span class="nx">method</span> <span class="o">=</span> <span class="s1">&#39;post&#39;</span><span class="p">;</span></div><div class='line' id='LC211'>		<span class="nx">form</span><span class="p">.</span><span class="nx">action</span> <span class="o">=</span> <span class="nx">paypalURL</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="s1">&#39;{env}&#39;</span><span class="p">,</span> <span class="nx">data</span><span class="p">.</span><span class="nx">items</span><span class="p">.</span><span class="nx">env</span><span class="p">.</span><span class="nx">value</span><span class="p">);</span></div><div class='line' id='LC212'>		<span class="nx">form</span><span class="p">.</span><span class="nx">className</span> <span class="o">=</span> <span class="s1">&#39;paypal-button&#39;</span><span class="p">;</span></div><div class='line' id='LC213'>		<span class="nx">form</span><span class="p">.</span><span class="nx">target</span> <span class="o">=</span> <span class="s1">&#39;_top&#39;</span><span class="p">;</span></div><div class='line' id='LC214'><br/></div><div class='line' id='LC215'>		<span class="nx">hidden</span><span class="p">.</span><span class="nx">type</span> <span class="o">=</span> <span class="s1">&#39;hidden&#39;</span><span class="p">;</span></div><div class='line' id='LC216'><br/></div><div class='line' id='LC217'>		<span class="nx">size</span> <span class="o">=</span> <span class="nx">items</span><span class="p">.</span><span class="nx">size</span> <span class="o">&amp;&amp;</span> <span class="nx">items</span><span class="p">.</span><span class="nx">size</span><span class="p">.</span><span class="nx">value</span> <span class="o">||</span> <span class="s1">&#39;large&#39;</span><span class="p">;</span></div><div class='line' id='LC218'>		<span class="nx">locale</span> <span class="o">=</span> <span class="nx">items</span><span class="p">.</span><span class="nx">lc</span> <span class="o">&amp;&amp;</span> <span class="nx">items</span><span class="p">.</span><span class="nx">lc</span><span class="p">.</span><span class="nx">value</span> <span class="o">||</span> <span class="s1">&#39;en_US&#39;</span><span class="p">;</span></div><div class='line' id='LC219'>		<span class="nx">localeText</span> <span class="o">=</span> <span class="nx">locales</span><span class="p">[</span><span class="nx">locale</span><span class="p">]</span> <span class="o">||</span> <span class="nx">locales</span><span class="p">.</span><span class="nx">en_US</span><span class="p">;</span></div><div class='line' id='LC220'><br/></div><div class='line' id='LC221'>		<span class="k">for</span> <span class="p">(</span><span class="nx">key</span> <span class="k">in</span> <span class="nx">items</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC222'>			<span class="nx">item</span> <span class="o">=</span> <span class="nx">items</span><span class="p">[</span><span class="nx">key</span><span class="p">];</span></div><div class='line' id='LC223'><br/></div><div class='line' id='LC224'>			<span class="k">if</span> <span class="p">(</span><span class="nx">item</span><span class="p">.</span><span class="nx">isEditable</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC225'>				<span class="nx">input</span> <span class="o">=</span> <span class="nb">document</span><span class="p">.</span><span class="nx">createElement</span><span class="p">(</span><span class="s1">&#39;input&#39;</span><span class="p">);</span></div><div class='line' id='LC226'>				<span class="nx">input</span><span class="p">.</span><span class="nx">type</span> <span class="o">=</span> <span class="s1">&#39;text&#39;</span><span class="p">;</span></div><div class='line' id='LC227'>				<span class="nx">input</span><span class="p">.</span><span class="nx">className</span> <span class="o">=</span> <span class="s1">&#39;paypal-input&#39;</span><span class="p">;</span></div><div class='line' id='LC228'>				<span class="nx">input</span><span class="p">.</span><span class="nx">name</span> <span class="o">=</span> <span class="nx">item</span><span class="p">.</span><span class="nx">key</span><span class="p">;</span></div><div class='line' id='LC229'>				<span class="nx">input</span><span class="p">.</span><span class="nx">value</span> <span class="o">=</span> <span class="nx">item</span><span class="p">.</span><span class="nx">value</span><span class="p">;</span></div><div class='line' id='LC230'><br/></div><div class='line' id='LC231'>				<span class="nx">label</span> <span class="o">=</span> <span class="nb">document</span><span class="p">.</span><span class="nx">createElement</span><span class="p">(</span><span class="s1">&#39;label&#39;</span><span class="p">);</span></div><div class='line' id='LC232'>				<span class="nx">label</span><span class="p">.</span><span class="nx">className</span> <span class="o">=</span> <span class="s1">&#39;paypal-label&#39;</span><span class="p">;</span></div><div class='line' id='LC233'>				<span class="nx">label</span><span class="p">.</span><span class="nx">appendChild</span><span class="p">(</span><span class="nb">document</span><span class="p">.</span><span class="nx">createTextNode</span><span class="p">(</span><span class="nx">app</span><span class="p">.</span><span class="nx">config</span><span class="p">.</span><span class="nx">labels</span><span class="p">[</span><span class="nx">item</span><span class="p">.</span><span class="nx">key</span><span class="p">]</span> <span class="o">||</span> <span class="nx">localeText</span><span class="p">[</span><span class="nx">item</span><span class="p">.</span><span class="nx">key</span><span class="p">]));</span></div><div class='line' id='LC234'>				<span class="nx">label</span><span class="p">.</span><span class="nx">appendChild</span><span class="p">(</span><span class="nx">input</span><span class="p">);</span></div><div class='line' id='LC235'><br/></div><div class='line' id='LC236'>				<span class="nx">child</span> <span class="o">=</span> <span class="nb">document</span><span class="p">.</span><span class="nx">createElement</span><span class="p">(</span><span class="s1">&#39;p&#39;</span><span class="p">);</span></div><div class='line' id='LC237'>				<span class="nx">child</span><span class="p">.</span><span class="nx">className</span> <span class="o">=</span> <span class="s1">&#39;paypal-group&#39;</span><span class="p">;</span></div><div class='line' id='LC238'>				<span class="nx">child</span><span class="p">.</span><span class="nx">appendChild</span><span class="p">(</span><span class="nx">label</span><span class="p">);</span></div><div class='line' id='LC239'>			<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC240'>				<span class="nx">input</span> <span class="o">=</span> <span class="nx">child</span> <span class="o">=</span> <span class="nx">hidden</span><span class="p">.</span><span class="nx">cloneNode</span><span class="p">(</span><span class="kc">true</span><span class="p">);</span></div><div class='line' id='LC241'>				<span class="nx">input</span><span class="p">.</span><span class="nx">name</span> <span class="o">=</span> <span class="nx">item</span><span class="p">.</span><span class="nx">key</span><span class="p">;</span></div><div class='line' id='LC242'>				<span class="nx">input</span><span class="p">.</span><span class="nx">value</span> <span class="o">=</span> <span class="nx">item</span><span class="p">.</span><span class="nx">value</span><span class="p">;</span></div><div class='line' id='LC243'>			<span class="p">}</span></div><div class='line' id='LC244'><br/></div><div class='line' id='LC245'>			<span class="nx">form</span><span class="p">.</span><span class="nx">appendChild</span><span class="p">(</span><span class="nx">child</span><span class="p">);</span></div><div class='line' id='LC246'>		<span class="p">}</span></div><div class='line' id='LC247'><br/></div><div class='line' id='LC248'>		<span class="c1">// Safari won&#39;t let you set read-only attributes on buttons.</span></div><div class='line' id='LC249'>		<span class="k">try</span> <span class="p">{</span></div><div class='line' id='LC250'>			<span class="nx">btn</span><span class="p">.</span><span class="nx">type</span> <span class="o">=</span> <span class="s1">&#39;submit&#39;</span><span class="p">;</span></div><div class='line' id='LC251'>		<span class="p">}</span> <span class="k">catch</span> <span class="p">(</span><span class="nx">e</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC252'>			<span class="nx">btn</span><span class="p">.</span><span class="nx">setAttribute</span><span class="p">(</span><span class="s1">&#39;type&#39;</span><span class="p">,</span> <span class="s1">&#39;submit&#39;</span><span class="p">);</span></div><div class='line' id='LC253'>		<span class="p">}</span></div><div class='line' id='LC254'>		<span class="nx">btn</span><span class="p">.</span><span class="nx">className</span> <span class="o">=</span> <span class="s1">&#39;paypal-button &#39;</span> <span class="o">+</span> <span class="nx">size</span><span class="p">;</span></div><div class='line' id='LC255'>		<span class="nx">btn</span><span class="p">.</span><span class="nx">appendChild</span><span class="p">(</span><span class="nb">document</span><span class="p">.</span><span class="nx">createTextNode</span><span class="p">(</span><span class="nx">localeText</span><span class="p">[</span><span class="nx">type</span><span class="p">]));</span></div><div class='line' id='LC256'><br/></div><div class='line' id='LC257'>		<span class="nx">form</span><span class="p">.</span><span class="nx">appendChild</span><span class="p">(</span><span class="nx">btn</span><span class="p">);</span></div><div class='line' id='LC258'><br/></div><div class='line' id='LC259'>		<span class="c1">// If the Mini Cart is present then register the form</span></div><div class='line' id='LC260'>		<span class="k">if</span> <span class="p">((</span><span class="nx">MiniCart</span> <span class="o">=</span> <span class="nx">PAYPAL</span><span class="p">.</span><span class="nx">apps</span><span class="p">.</span><span class="nx">MiniCart</span><span class="p">)</span> <span class="o">&amp;&amp;</span> <span class="nx">data</span><span class="p">.</span><span class="nx">items</span><span class="p">.</span><span class="nx">cmd</span><span class="p">.</span><span class="nx">value</span> <span class="o">===</span> <span class="s1">&#39;_cart&#39;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC261'><br/></div><div class='line' id='LC262'>			<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">MiniCart</span><span class="p">.</span><span class="nx">UI</span><span class="p">.</span><span class="nx">itemList</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC263'>				<span class="nx">MiniCart</span><span class="p">.</span><span class="nx">render</span><span class="p">();</span></div><div class='line' id='LC264'>			<span class="p">}</span></div><div class='line' id='LC265'><br/></div><div class='line' id='LC266'>			<span class="nx">MiniCart</span><span class="p">.</span><span class="nx">bindForm</span><span class="p">(</span><span class="nx">form</span><span class="p">);</span></div><div class='line' id='LC267'>		<span class="p">}</span></div><div class='line' id='LC268'><br/></div><div class='line' id='LC269'>		<span class="k">return</span> <span class="nx">form</span><span class="p">;</span></div><div class='line' id='LC270'>	<span class="p">}</span></div><div class='line' id='LC271'><br/></div><div class='line' id='LC272'><br/></div><div class='line' id='LC273'>	<span class="cm">/**</span></div><div class='line' id='LC274'><span class="cm">	 * Builds the image for a QR code</span></div><div class='line' id='LC275'><span class="cm">	 *</span></div><div class='line' id='LC276'><span class="cm">	 * @param data {Object} An object of key/value data to set as button params</span></div><div class='line' id='LC277'><span class="cm">	 * @param size {String} The size of QR code&#39;s longest side</span></div><div class='line' id='LC278'><span class="cm">	 * @return {HTMLElement}</span></div><div class='line' id='LC279'><span class="cm">	 */</span></div><div class='line' id='LC280'>	<span class="kd">function</span> <span class="nx">buildQR</span><span class="p">(</span><span class="nx">data</span><span class="p">,</span> <span class="nx">size</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC281'>		<span class="kd">var</span> <span class="nx">baseUrl</span> <span class="o">=</span> <span class="nx">paypalURL</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="s1">&#39;{env}&#39;</span><span class="p">,</span> <span class="nx">data</span><span class="p">.</span><span class="nx">items</span><span class="p">.</span><span class="nx">env</span><span class="p">.</span><span class="nx">value</span><span class="p">),</span></div><div class='line' id='LC282'>			<span class="nx">img</span> <span class="o">=</span> <span class="nb">document</span><span class="p">.</span><span class="nx">createElement</span><span class="p">(</span><span class="s1">&#39;img&#39;</span><span class="p">),</span></div><div class='line' id='LC283'>			<span class="nx">url</span> <span class="o">=</span> <span class="nx">baseUrl</span> <span class="o">+</span> <span class="s1">&#39;?&#39;</span><span class="p">,</span></div><div class='line' id='LC284'>			<span class="nx">pattern</span> <span class="o">=</span> <span class="mi">13</span><span class="p">,</span></div><div class='line' id='LC285'>			<span class="nx">items</span> <span class="o">=</span> <span class="nx">data</span><span class="p">.</span><span class="nx">items</span><span class="p">,</span></div><div class='line' id='LC286'>			<span class="nx">item</span><span class="p">,</span> <span class="nx">key</span><span class="p">;</span></div><div class='line' id='LC287'><br/></div><div class='line' id='LC288'>		<span class="c1">// QR defaults</span></div><div class='line' id='LC289'>		<span class="nx">size</span> <span class="o">=</span> <span class="nx">size</span> <span class="o">&amp;&amp;</span> <span class="nx">size</span><span class="p">.</span><span class="nx">value</span> <span class="o">||</span> <span class="mi">250</span><span class="p">;</span></div><div class='line' id='LC290'><br/></div><div class='line' id='LC291'>		<span class="k">for</span> <span class="p">(</span><span class="nx">key</span> <span class="k">in</span> <span class="nx">items</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC292'>			<span class="nx">item</span> <span class="o">=</span> <span class="nx">items</span><span class="p">[</span><span class="nx">key</span><span class="p">];</span></div><div class='line' id='LC293'>			<span class="nx">url</span> <span class="o">+=</span> <span class="nx">item</span><span class="p">.</span><span class="nx">key</span> <span class="o">+</span> <span class="s1">&#39;=&#39;</span> <span class="o">+</span> <span class="nb">encodeURIComponent</span><span class="p">(</span><span class="nx">item</span><span class="p">.</span><span class="nx">value</span><span class="p">)</span> <span class="o">+</span> <span class="s1">&#39;&amp;&#39;</span><span class="p">;</span></div><div class='line' id='LC294'>		<span class="p">}</span></div><div class='line' id='LC295'><br/></div><div class='line' id='LC296'>		<span class="nx">url</span> <span class="o">=</span> <span class="nb">encodeURIComponent</span><span class="p">(</span><span class="nx">url</span><span class="p">);</span></div><div class='line' id='LC297'><br/></div><div class='line' id='LC298'>		<span class="nx">img</span><span class="p">.</span><span class="nx">src</span> <span class="o">=</span> <span class="nx">qrCodeURL</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="s1">&#39;{env}&#39;</span><span class="p">,</span> <span class="nx">data</span><span class="p">.</span><span class="nx">items</span><span class="p">.</span><span class="nx">env</span><span class="p">.</span><span class="nx">value</span><span class="p">).</span><span class="nx">replace</span><span class="p">(</span><span class="s1">&#39;{url}&#39;</span><span class="p">,</span> <span class="nx">url</span><span class="p">).</span><span class="nx">replace</span><span class="p">(</span><span class="s1">&#39;{pattern}&#39;</span><span class="p">,</span> <span class="nx">pattern</span><span class="p">).</span><span class="nx">replace</span><span class="p">(</span><span class="s1">&#39;{size}&#39;</span><span class="p">,</span> <span class="nx">size</span><span class="p">);</span></div><div class='line' id='LC299'><br/></div><div class='line' id='LC300'>		<span class="k">return</span> <span class="nx">img</span><span class="p">;</span></div><div class='line' id='LC301'>	<span class="p">}</span></div><div class='line' id='LC302'><br/></div><div class='line' id='LC303'><br/></div><div class='line' id='LC304'>	<span class="cm">/**</span></div><div class='line' id='LC305'><span class="cm">	 * Utility function to polyfill dataset functionality with a bit of a spin</span></div><div class='line' id='LC306'><span class="cm">	 *</span></div><div class='line' id='LC307'><span class="cm">	 * @param el {HTMLElement} The element to check</span></div><div class='line' id='LC308'><span class="cm">	 * @return {Object}</span></div><div class='line' id='LC309'><span class="cm">	 */</span></div><div class='line' id='LC310'>	<span class="kd">function</span> <span class="nx">getDataSet</span><span class="p">(</span><span class="nx">el</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC311'>		<span class="kd">var</span> <span class="nx">dataset</span> <span class="o">=</span> <span class="p">{},</span> <span class="nx">attrs</span><span class="p">,</span> <span class="nx">attr</span><span class="p">,</span> <span class="nx">matches</span><span class="p">,</span> <span class="nx">len</span><span class="p">,</span> <span class="nx">i</span><span class="p">;</span></div><div class='line' id='LC312'><br/></div><div class='line' id='LC313'>		<span class="k">if</span> <span class="p">((</span><span class="nx">attrs</span> <span class="o">=</span> <span class="nx">el</span><span class="p">.</span><span class="nx">attributes</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC314'>			<span class="k">for</span> <span class="p">(</span><span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">,</span> <span class="nx">len</span> <span class="o">=</span> <span class="nx">attrs</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">len</span><span class="p">;</span> <span class="nx">i</span><span class="o">++</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC315'>				<span class="nx">attr</span> <span class="o">=</span> <span class="nx">attrs</span><span class="p">[</span><span class="nx">i</span><span class="p">];</span></div><div class='line' id='LC316'><br/></div><div class='line' id='LC317'>				<span class="k">if</span> <span class="p">((</span><span class="nx">matches</span> <span class="o">=</span> <span class="nx">attr</span><span class="p">.</span><span class="nx">name</span><span class="p">.</span><span class="nx">match</span><span class="p">(</span><span class="sr">/^data-([a-z0-9_]+)(-editable)?/i</span><span class="p">)))</span> <span class="p">{</span></div><div class='line' id='LC318'>					<span class="nx">dataset</span><span class="p">[</span><span class="nx">matches</span><span class="p">[</span><span class="mi">1</span><span class="p">]]</span> <span class="o">=</span> <span class="p">{</span></div><div class='line' id='LC319'>						<span class="nx">value</span><span class="o">:</span> <span class="nx">attr</span><span class="p">.</span><span class="nx">value</span><span class="p">,</span></div><div class='line' id='LC320'>						<span class="nx">isEditable</span><span class="o">:</span> <span class="o">!!</span><span class="nx">matches</span><span class="p">[</span><span class="mi">2</span><span class="p">]</span></div><div class='line' id='LC321'>					<span class="p">};</span></div><div class='line' id='LC322'>				<span class="p">}</span></div><div class='line' id='LC323'>			<span class="p">}</span></div><div class='line' id='LC324'>		<span class="p">}</span></div><div class='line' id='LC325'><br/></div><div class='line' id='LC326'>		<span class="k">return</span> <span class="nx">dataset</span><span class="p">;</span></div><div class='line' id='LC327'>	<span class="p">}</span></div><div class='line' id='LC328'><br/></div><div class='line' id='LC329'><br/></div><div class='line' id='LC330'>	<span class="cm">/**</span></div><div class='line' id='LC331'><span class="cm">	 * A storage object to create structured methods around a button&#39;s data</span></div><div class='line' id='LC332'><span class="cm">	 */</span></div><div class='line' id='LC333'>	<span class="kd">function</span> <span class="nx">DataStore</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC334'>		<span class="k">this</span><span class="p">.</span><span class="nx">items</span> <span class="o">=</span> <span class="p">{};</span></div><div class='line' id='LC335'><br/></div><div class='line' id='LC336'>		<span class="k">this</span><span class="p">.</span><span class="nx">add</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">key</span><span class="p">,</span> <span class="nx">value</span><span class="p">,</span> <span class="nx">isEditable</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC337'>			<span class="k">this</span><span class="p">.</span><span class="nx">items</span><span class="p">[</span><span class="nx">key</span><span class="p">]</span> <span class="o">=</span> <span class="p">{</span></div><div class='line' id='LC338'>				<span class="nx">key</span><span class="o">:</span> <span class="nx">key</span><span class="p">,</span></div><div class='line' id='LC339'>				<span class="nx">value</span><span class="o">:</span> <span class="nx">value</span><span class="p">,</span></div><div class='line' id='LC340'>				<span class="nx">isEditable</span><span class="o">:</span> <span class="nx">isEditable</span></div><div class='line' id='LC341'>			<span class="p">};</span></div><div class='line' id='LC342'>		<span class="p">};</span></div><div class='line' id='LC343'><br/></div><div class='line' id='LC344'>		<span class="k">this</span><span class="p">.</span><span class="nx">remove</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">key</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC345'>			<span class="k">delete</span> <span class="k">this</span><span class="p">.</span><span class="nx">items</span><span class="p">[</span><span class="nx">key</span><span class="p">];</span></div><div class='line' id='LC346'>		<span class="p">};</span></div><div class='line' id='LC347'>	<span class="p">}</span></div><div class='line' id='LC348'><br/></div><div class='line' id='LC349'><br/></div><div class='line' id='LC350'>	<span class="c1">// Init the buttons</span></div><div class='line' id='LC351'>	<span class="k">if</span> <span class="p">(</span><span class="k">typeof</span> <span class="nb">document</span> <span class="o">!==</span> <span class="s1">&#39;undefined&#39;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC352'>		<span class="kd">var</span> <span class="nx">ButtonFactory</span> <span class="o">=</span> <span class="nx">PAYPAL</span><span class="p">.</span><span class="nx">apps</span><span class="p">.</span><span class="nx">ButtonFactory</span><span class="p">,</span></div><div class='line' id='LC353'>			<span class="nx">nodes</span> <span class="o">=</span> <span class="nb">document</span><span class="p">.</span><span class="nx">getElementsByTagName</span><span class="p">(</span><span class="s1">&#39;script&#39;</span><span class="p">),</span></div><div class='line' id='LC354'>			<span class="nx">node</span><span class="p">,</span> <span class="nx">data</span><span class="p">,</span> <span class="nx">type</span><span class="p">,</span> <span class="nx">business</span><span class="p">,</span> <span class="nx">i</span><span class="p">,</span> <span class="nx">len</span><span class="p">;</span></div><div class='line' id='LC355'><br/></div><div class='line' id='LC356'>		<span class="k">for</span> <span class="p">(</span><span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">,</span> <span class="nx">len</span> <span class="o">=</span> <span class="nx">nodes</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">len</span><span class="p">;</span> <span class="nx">i</span><span class="o">++</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC357'>			<span class="nx">node</span> <span class="o">=</span> <span class="nx">nodes</span><span class="p">[</span><span class="nx">i</span><span class="p">];</span></div><div class='line' id='LC358'><br/></div><div class='line' id='LC359'>			<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">node</span> <span class="o">||</span> <span class="o">!</span><span class="nx">node</span><span class="p">.</span><span class="nx">src</span><span class="p">)</span> <span class="p">{</span> <span class="k">continue</span><span class="p">;</span> <span class="p">}</span></div><div class='line' id='LC360'><br/></div><div class='line' id='LC361'>			<span class="nx">data</span> <span class="o">=</span> <span class="nx">node</span> <span class="o">&amp;&amp;</span> <span class="nx">getDataSet</span><span class="p">(</span><span class="nx">node</span><span class="p">);</span></div><div class='line' id='LC362'>			<span class="nx">type</span> <span class="o">=</span> <span class="nx">data</span> <span class="o">&amp;&amp;</span> <span class="nx">data</span><span class="p">.</span><span class="nx">button</span> <span class="o">&amp;&amp;</span> <span class="nx">data</span><span class="p">.</span><span class="nx">button</span><span class="p">.</span><span class="nx">value</span><span class="p">;</span></div><div class='line' id='LC363'>			<span class="nx">business</span> <span class="o">=</span> <span class="nx">node</span><span class="p">.</span><span class="nx">src</span><span class="p">.</span><span class="nx">split</span><span class="p">(</span><span class="s1">&#39;?merchant=&#39;</span><span class="p">)[</span><span class="mi">1</span><span class="p">];</span></div><div class='line' id='LC364'><br/></div><div class='line' id='LC365'>			<span class="k">if</span> <span class="p">(</span><span class="nx">business</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC366'>				<span class="nx">ButtonFactory</span><span class="p">.</span><span class="nx">create</span><span class="p">(</span><span class="nx">business</span><span class="p">,</span> <span class="nx">data</span><span class="p">,</span> <span class="nx">type</span><span class="p">,</span> <span class="nx">node</span><span class="p">.</span><span class="nx">parentNode</span><span class="p">);</span></div><div class='line' id='LC367'><br/></div><div class='line' id='LC368'>				<span class="c1">// Clean up</span></div><div class='line' id='LC369'>				<span class="nx">node</span><span class="p">.</span><span class="nx">parentNode</span><span class="p">.</span><span class="nx">removeChild</span><span class="p">(</span><span class="nx">node</span><span class="p">);</span></div><div class='line' id='LC370'>			<span class="p">}</span></div><div class='line' id='LC371'>		<span class="p">}</span></div><div class='line' id='LC372'>	<span class="p">}</span></div><div class='line' id='LC373'><br/></div><div class='line' id='LC374'><br/></div><div class='line' id='LC375'><span class="p">}(</span><span class="nb">document</span><span class="p">));</span></div><div class='line' id='LC376'><br/></div><div class='line' id='LC377'><br/></div><div class='line' id='LC378'><span class="c1">// Export for CommonJS environments</span></div><div class='line' id='LC379'><span class="k">if</span> <span class="p">(</span><span class="k">typeof</span> <span class="nx">module</span> <span class="o">===</span> <span class="s1">&#39;object&#39;</span> <span class="o">&amp;&amp;</span> <span class="k">typeof</span> <span class="nx">module</span><span class="p">.</span><span class="nx">exports</span> <span class="o">===</span> <span class="s1">&#39;object&#39;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC380'>	<span class="nx">module</span><span class="p">.</span><span class="nx">exports</span> <span class="o">=</span> <span class="nx">PAYPAL</span><span class="p">;</span></div><div class='line' id='LC381'><span class="p">}</span></div></pre></div>
            </td>
          </tr>
        </table>
  </div>

  </div>
</div>

<a href="#jump-to-line" rel="facebox[.linejump]" data-hotkey="l" class="js-jump-to-line" style="display:none">Jump to Line</a>
<div id="jump-to-line" style="display:none">
  <form accept-charset="UTF-8" class="js-jump-to-line-form">
    <input class="linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" autofocus>
    <button type="submit" class="button">Go</button>
  </form>
</div>

        </div>

      </div><!-- /.repo-container -->
      <div class="modal-backdrop"></div>
    </div><!-- /.container -->
  </div><!-- /.site -->


    </div><!-- /.wrapper -->

      <div class="container">
  <div class="site-footer">
    <ul class="site-footer-links right">
      <li><a href="https://status.github.com/">Status</a></li>
      <li><a href="http://developer.github.com">API</a></li>
      <li><a href="http://training.github.com">Training</a></li>
      <li><a href="http://shop.github.com">Shop</a></li>
      <li><a href="/blog">Blog</a></li>
      <li><a href="/about">About</a></li>

    </ul>

    <a href="/">
      <span class="mega-octicon octicon-mark-github"></span>
    </a>

    <ul class="site-footer-links">
      <li>&copy; 2013 <span title="0.07423s from github-fe122-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="/site/terms">Terms</a></li>
        <li><a href="/site/privacy">Privacy</a></li>
        <li><a href="/security">Security</a></li>
        <li><a href="/contact">Contact</a></li>
    </ul>
  </div><!-- /.site-footer -->
</div><!-- /.container -->


    <div class="fullscreen-overlay js-fullscreen-overlay" id="fullscreen_overlay">
  <div class="fullscreen-container js-fullscreen-container">
    <div class="textarea-wrap">
      <textarea name="fullscreen-contents" id="fullscreen-contents" class="js-fullscreen-contents" placeholder="" data-suggester="fullscreen_suggester"></textarea>
          <div class="suggester-container">
              <div class="suggester fullscreen-suggester js-navigation-container" id="fullscreen_suggester"
                 data-url="/paypal/JavaScriptButtons/suggestions/commit">
              </div>
          </div>
    </div>
  </div>
  <div class="fullscreen-sidebar">
    <a href="#" class="exit-fullscreen js-exit-fullscreen tooltipped leftwards" title="Exit Zen Mode">
      <span class="mega-octicon octicon-screen-normal"></span>
    </a>
    <a href="#" class="theme-switcher js-theme-switcher tooltipped leftwards"
      title="Switch themes">
      <span class="octicon octicon-color-mode"></span>
    </a>
  </div>
</div>



    <div id="ajax-error-message" class="flash flash-error">
      <span class="octicon octicon-alert"></span>
      <a href="#" class="octicon octicon-remove-close close ajax-error-dismiss"></a>
      Something went wrong with that request. Please try again.
    </div>

  </body>
</html>

