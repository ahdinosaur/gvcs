---
layout: "default"
scripts: ["/scripts/bundle.js"]
---
<nav>
  <ul>
  </ul>
</nav>
<div class="ui index page grid">
  <header>
    <h1>{{ site.title }}</h1>
    <p>{{ site.description }}</p>
  </header>
  <main>
    <div class="ui accordion">
      <div class="title">
        <i class="dropdown icon"></i>
        What is Global Value Compass?
      </div>
      <div class="content">
        {{partial "what.html.md"}}
      </div>
      <div class="title">
        <i class="dropdown icon"></i>
        Why use the Global Value Compass?
      </div>
      <div class="content">
       {{partial "why.html.md"}}
      </div>
      <div class="title">
        <i class="dropdown icon"></i>
        How does one use the Global Value Compass?
      </div>
      <div class="content">
        {{partial "how.html.md"}}
      </div>
    </div>
  </main>
</div>