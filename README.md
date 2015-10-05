<!---------------------------------------------------------------------------->
<!-- STOP, LOOK & LISTEN!                                                   -->
<!-- ====================                                                   -->
<!-- Do NOT edit this file directly since it's generated from a template    -->
<!-- file, using https://github.com/IonicaBizau/node-blah                   -->
<!--                                                                        -->
<!-- If you found a typo in documentation, fix it in the source files       -->
<!-- (`lib/*.js`) and make a pull request.                                  -->
<!--                                                                        -->
<!-- If you have any other ideas, open an issue.                            -->
<!--                                                                        -->
<!-- Please consider reading the contribution steps (CONTRIBUTING.md).      -->
<!-- * * * Thanks! * * *                                                    -->
<!---------------------------------------------------------------------------->

# `$ name-it` [![Donate now][donate-now]][paypal-donations]

A project name generator from given keywords.

## Installation

```sh
$ npm i name-it
```

### CLI Usage
You can install the package globally and use it as command line tool:

```sh
$ npm i -g name-it
```

Then, run `name-it --help` and see what the cli tool can do.

## Example

Here is an example how to use this package as library.

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

## Press Highlights
None yet. If you wrote or found an article about this project, [add it][contributing] in this section.  :memo:

## Documentation

For full API reference, see the [DOCUMENTATION.md][docs] file.

## How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].

## License
[KINDLY][license] © [Ionică Bizău][website]–The [LICENSE](/LICENSE) file contains
a copy of the license.

[license]: http://ionicabizau.github.io/kindly-license/?author=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica@gmail.com%3E&year=2015
[contributing]: /CONTRIBUTING.md
[website]: http://ionicabizau.net
[docs]: /DOCUMENTATION.md
[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=MG98D7NPFZ3MG
[donate-now]: http://i.imgur.com/6cMbHOC.png