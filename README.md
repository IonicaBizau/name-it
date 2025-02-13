<!-- Please do not edit this file. Edit the `blah` field in the `package.json` instead. If in doubt, open an issue. -->








[![name-it](http://i.imgur.com/VhsfveB.png)](#)











# `$ name-it`

 [![Support me on Patreon][badge_patreon]][patreon] [![Buy me a book][badge_amazon]][amazon] [![PayPal][badge_paypal_donate]][paypal-donations] [![Ask me anything](https://img.shields.io/badge/ask%20me-anything-1abc9c.svg)](https://github.com/IonicaBizau/ama) [![Version](https://img.shields.io/npm/v/name-it.svg)](https://www.npmjs.com/package/name-it) [![Downloads](https://img.shields.io/npm/dt/name-it.svg)](https://www.npmjs.com/package/name-it) [![Get help on Codementor](https://cdn.codementor.io/badges/get_help_github.svg)](https://www.codementor.io/@johnnyb?utm_source=github&utm_medium=button&utm_term=johnnyb&utm_campaign=github)

<a href="https://www.buymeacoffee.com/H96WwChMy" target="_blank"><img src="https://www.buymeacoffee.com/assets/img/custom_images/yellow_img.png" alt="Buy Me A Coffee"></a>







> Generate project names from given keywords.

















## :cloud: Installation

You can install the package globally and use it as command line tool:


```sh
# Using npm
npm install --global name-it

# Using yarn
yarn global add name-it
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



Here is an example how to use this package as library. To install it locally, as library, you can use `npm install name-it` (or `yarn add name-it`):



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












## :question: Get Help

There are few ways to get help:



 1. Please [post questions on Stack Overflow](https://stackoverflow.com/questions/ask). You can open issues with questions, as long you add a link to your Stack Overflow question.
 2. For bug reports and feature requests, open issues. :bug:
 3. For direct and quick help, you can [use Codementor](https://www.codementor.io/johnnyb). :rocket:







## :memo: Documentation

For full API reference, see the [DOCUMENTATION.md][docs] file.












## :yum: How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].


## :sparkling_heart: Support my projects
I open-source almost everything I can, and I try to reply to everyone needing help using these projects. Obviously,
this takes time. You can integrate and use these projects in your applications *for free*! You can even change the source code and redistribute (even resell it).

However, if you get some profit from this or just want to encourage me to continue creating stuff, there are few ways you can do it:


 - Starring and sharing the projects you like :rocket:
 - [![Buy me a book][badge_amazon]][amazon]—I love books! I will remember you after years if you buy me one. :grin: :book:
 - [![PayPal][badge_paypal]][paypal-donations]—You can make one-time donations via PayPal. I'll probably buy a ~~coffee~~ tea. :tea:
 - [![Support me on Patreon][badge_patreon]][patreon]—Set up a recurring monthly donation and you will get interesting news about what I'm doing (things that I don't share with everyone).
 - **Bitcoin**—You can send me bitcoins at this address (or scanning the code below): `1P9BRsmazNQcuyTxEqveUsnf5CERdq35V6`

    ![](https://i.imgur.com/z6OQI95.png)


Thanks! :heart:
















## :dizzy: Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:

 - `namly`











## :scroll: License

[MIT][license] © [Ionică Bizău][website]






[license]: /LICENSE
[website]: https://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md
[badge_patreon]: https://ionicabizau.github.io/badges/patreon.svg
[badge_amazon]: https://ionicabizau.github.io/badges/amazon.svg
[badge_paypal]: https://ionicabizau.github.io/badges/paypal.svg
[badge_paypal_donate]: https://ionicabizau.github.io/badges/paypal_donate.svg
[patreon]: https://www.patreon.com/ionicabizau
[amazon]: http://amzn.eu/hRo9sIZ
[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
