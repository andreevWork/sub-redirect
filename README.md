# sub-redirect

It's simple express module, for redirect from subdomains.

## Usage
* **Installation**: <br />
  `npm i --save sub-redirect`

* **Require**: <br />
  `var subRedirect = require('sub-redirect');`

* **And finally**: <br />
  `app.use(subRedirect());`

## Options

The module takes one parameter - an object with options: <br />
<pre>
app.use(subRedirect({
  code : 301,
  subdomain : "www."
}));
</pre>

* **code (int)**:
  It\`s just code response from server. <br />
  Default: `301`

* **subdomain (string)**:
  Subdomain from which will be redirected. For example: <br />
<pre>
  app.use(subRedirect({
      subdomain : "mirror."
  }));
</pre>
  And, if you go on address `mirror.example.com` you will be redirected on `example.com`.<br />
  Default: `www.`
  
