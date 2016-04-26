
[![name-it](http://i.imgur.com/VhsfveB.png)](#)

# `$ name-it` [![PayPal](https://img.shields.io/badge/%24-paypal-f39c12.svg)][paypal-donations] [![Version](https://img.shields.io/npm/v/name-it.svg)](https://www.npmjs.com/package/name-it) [![Downloads](https://img.shields.io/npm/dt/name-it.svg)](https://www.npmjs.com/package/name-it) [![Get help on Codementor](https://cdn.codementor.io/badges/get_help_github.svg)](https://www.codementor.io/johnnyb?utm_source=github&utm_medium=button&utm_term=johnnyb&utm_campaign=github)

> Generate project names from given keywords.

## :cloud: Installation

You can install the package globally and use it as command line tool:


```sh
$ npm i -g name-it
```


Then, run `name-it --help` and see what the CLI tool can do.


```
$ name-it --help
Usage: name-it [options]

Options:
  -i, --input <keyword.>  The input keyword.
  -f, --full-dump         Dump the full object (by default only the list
                          with the generated names is displayed).
  -h, --help              Displays this help.
  -v, --version           Displays version information.

Examples:
  name-it -i git

Documentation can be found at https://github.com/IonicaBizau/name-it#readme
```

## :clipboard: Example


Here is an example how to use this package as library. To install it locally, as library, you can do that using `npm`:

```sh
$ npm i --save name-it
```



```js
// Dependencies
var NameIt = require("name-it");

// Get a name for "name"
console.log(NameIt("name"));
// =>
// { _:
//    [ 'namy'
//    , 'namer'
//    , 'name2'
//    , 'namify'
//    , 'name-it'
//    , 'name.js'
//    , 'namous'
//    , 'namly'
//    , 'namance'
//    , 'namoid'
//    , 'namient'
//    , 'nament'
//    , 'namonin'
//    , 'namoxin'
//    , 'namo ]
// , y: 'namy'
// , er: 'namer'
// , two: 'name2'
// , ify: 'namify'
// , it: 'name-it'
// , js: 'name.js'
// , ous: 'namous'
// , ly: 'namly'
// , ance: 'namance'
// , oid: 'namoid'
// , ient: 'namient'
// , ent: 'nament'
// , onin: 'namonin'
// , oxin: 'namoxin'
// , o: 'namo' }
```

## :memo: Documentation

For full API reference, see the [DOCUMENTATION.md][docs] file.

## :yum: How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].

## :dizzy: Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:


 - [`namly`](https://github.com/IonicaBizau/namly#readme)—A tool for helping you to choose npm package names.

## :scroll: License

[MIT][license] © [Ionică Bizău][website]

[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(http%3A%2F%2Fionicabizau.net)&year=2015#license-mit
[website]: http://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md
