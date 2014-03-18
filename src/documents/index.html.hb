---
layout: "default"
scripts: ["scripts/bundle.js"]
---
<div class="ui index page grid">
  <header>
    <img src="images/logo.jpg" />
    <h1>{{ site.title }}</h1>
  </header>
  <nav class="ui large menu">
    <div class="item">
      <div class="ui teal signup button">Sign up</div>
    </div>
    <div class="item">
      <div class="ui green login button">Log-in</div>
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
<div class="ui large signup modal">
  <i class="close icon"></i>
  <div class="header">
    Sign up
  </div>
  <div class="content">
    <div class="ui form">
      <div class="field">
        <label>Email</label>
        <div class="ui left labeled icon input">
          <input type="email" placeholder="Email" />
          <i class="mail icon"></i>
          <div class="ui corner label">
            <i class="icon asterisk"></i>
          </div>
        </div>
      </div>
      <div class="two fields">
        <div class="field">
          <label>Password</label>
          <div class="ui left labeled icon input">
            <input type="password" placeholder="Password">
            <i class="lock icon"></i>
            <div class="ui corner label">
              <i class="icon asterisk"></i>
            </div>
          </div>
        </div>
        <div class="field">
          <label>Repeat Password</label>
          <div class="ui left labeled icon input">
            <input type="password" placeholder="Password x2">
            <i class="lock icon"></i>
            <div class="ui corner label">
              <i class="icon asterisk"></i>
            </div>
          </div>
        </div>
      </div>
      <div class="ui grid">
        <div class="twelve wide column field">
          <label>Credit Card Number</label>
          <div class="ui left labeled icon input">
            <input type="text" placeholder="XXXX-XXXX-XXXX-XXXX">
            <i class="payment icon"></i>
            <div class="ui corner label">
              <i class="icon asterisk"></i>
            </div>
          </div>
        </div>
        <div class="four wide column field">
          <label>Expiration Date</label>
          <div class="ui labeled input">
            <input type="text" placeholder="MM/YY">
            <div class="ui corner label">
              <i class="icon asterisk"></i>
            </div>
          </div>
        </div>
      </div>
      <div class="ui grid">
        <div class="twelve wide column field">
          <label>Name On Credit Card</label>
          <div class="ui labeled input">
            <input type="text">
            <div class="ui corner label">
              <i class="icon asterisk"></i>
            </div>
          </div>
        </div>
        <div class="four wide column field">
          <label>Card Code</label>
          <div class="ui labeled input">
            <input type="text" placeholder="CVC">
            <div class="ui corner label">
              <i class="icon asterisk"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="actions">
    <div class="ui red cancel button">Cancel</div>
    <div class="ui blue submit button">OK!</div>
  </div>
</div>
<div class="ui large login modal">
  <i class="close icon"></i>
  <div class="header">
    Log-in
  </div>
  <div class="content">
    <div class="ui form">
      <div class="field">
        <label>Email</label>
        <div class="ui left labeled icon input">
          <input type="email" placeholder="Email" />
          <i class="mail icon"></i>
          <div class="ui corner label">
            <i class="icon asterisk"></i>
          </div>
        </div>
      </div>
      <div class="field">
        <label>Password</label>
        <div class="ui left labeled icon input">
          <input type="password" placeholder="Password">
          <i class="lock icon"></i>
          <div class="ui corner label">
            <i class="icon asterisk"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="actions">
    <div class="ui red cancel button">Cancel</div>
    <div class="ui blue submit button">OK!</div>
  </div>
</div>