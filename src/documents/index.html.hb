---
layout: "default"
scripts: ["scripts/bundle.js"]
---
<div class="ui index page grid">
  <header>
    <img src="images/logo.jpg" />
    <h1>{{ site.title }}</h1>
  </header>
  <nav class="ui menu">
    <div class="item">
      <div class="ui teal button">Sign up</div>
    </div>
    <div class="item">
      <div class="ui green button">Log-in</div>
    </div>
  </nav>
  <main>
    <div class="ui accordion">
      <div class="title">
        <i class="dropdown icon"></i>
        What?
      </div>
      <div class="content">
        {{partial "what.html.md"}}
      </div>
      <div class="title">
        <i class="dropdown icon"></i>
        Why?
      </div>
      <div class="content">
       {{partial "why.html.md"}}
      </div>
      <div class="title">
        <i class="dropdown icon"></i>
        How?
      </div>
      <div class="content">
        {{partial "how.html.md"}}
      </div>
    </div>
  </main>
</div>