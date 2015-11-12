[![name-it](http://i.imgur.com/VhsfveB.png)](#)

# `$ name-it` [![Support this project][donate-now]][paypal-donations]

Generate project names from given keywords.

## Installation

You can install the package globally and use it as command line tool:

```sh
$ npm i -g name-it
```

Then, run `name-it --help` and see what the CLI tool can do.

```sh
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

## Example

Here is an example how to use this package as library. To install it locally, as library, you can do that using `npm`:

```sh
$ npm i name-it
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

## Documentation

For full API reference, see the [DOCUMENTATION.md][docs] file.

## How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].

## Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:

## License

[KINDLY][license] © [Ionică Bizău][website]

[license]: http://ionicabizau.github.io/kindly-license/?author=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica@gmail.com%3E&year=2015

[website]: http://ionicabizau.net
[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md