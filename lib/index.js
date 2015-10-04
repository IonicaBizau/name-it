// Dependencies
var UnvowelLast = require("unvowel-last")
  , DoubleLast = require("double-last")
  , LastChar = require("last-char")
  , RemoveLastChar = require("remove-last-char")
  ;

// Constants
const LETTERS_TO_DOUBLE = [
    "g"
  , "l"
  , "t"
  , "z"
];

/**
 * NameIt
 * Generates names for input keywords.
 *
 * @name NameIt
 * @function
 * @param {String} input The keyword to generate names for.
 * @return {Object} An object containing the name results:
 *
 *  - `_` (Array): An array of strings containing all the name results.
 *
 *  It also contains fields generated from method names (e.g. `y`, `er`, `ify` etc).
 */
function NameIt(input) {
    var res = {
            _: []
      , }
      , foos = Object.keys(NameIt)
      , i = 0
      ;

    for (; i < foos.length; ++i) {
        res._.push(res[foos[i]] = NameIt[foos[i]](input));
    }

    return res;
}

/**
 * y
 * Adds the `y` suffix.
 *
 * @name y
 * @function
 * @param {String} input The input keyword.
 * @return {String} The generated name.
 */
NameIt.y = function (input) {
    input = UnvowelLast(input);
    if (LastChar(input) === "y") {
        return input;
    }
    input = DoubleLast(input, LETTERS_TO_DOUBLE);
    return input + "y";
};

/**
 * er
 * Adds the `er` suffix.
 *
 * @name er
 * @function
 * @param {String} input The input keyword.
 * @return {String} The generated name.
 */
NameIt.er = function (input) {
    input = UnvowelLast(input);

    if (LastChar(input) === "y") {
        input = RemoveLastChar(input) + "i";
    }

    input = DoubleLast(input, LETTERS_TO_DOUBLE);
    return input + "er";
};

/**
 * two
 * Adds the `two` suffix.
 *
 * @name two
 * @function
 * @param {String} input The input keyword.
 * @return {String} The generated name.
 */
NameIt.two = function (input) {
    return input + "2";
};

/**
 * ify
 * Adds the `ify` suffix.
 *
 * @name ify
 * @function
 * @param {String} input The input keyword.
 * @return {String} The generated name.
 */
NameIt.ify = function (input) {
    input = UnvowelLast(input);

    if (LastChar(input) === "y") {
        input = RemoveLastChar(input) + "i";
    }

    input = DoubleLast(input, LETTERS_TO_DOUBLE);
    return input + "ify";
};

/**
 * it
 * Adds the `it` suffix.
 *
 * @name it
 * @function
 * @param {String} input The input keyword.
 * @return {String} The generated name.
 */
NameIt.it = function (input) {
    return input + "-it";
};

/**
 * js
 * Adds the `js` suffix.
 *
 * @name js
 * @function
 * @param {String} input The input keyword.
 * @return {String} The generated name.
 */
NameIt.js = function (input) {
    return input + ".js";
};

/**
 * ous
 * Adds the `ous` suffix.
 *
 * @name ous
 * @function
 * @param {String} input The input keyword.
 * @return {String} The generated name.
 */
NameIt.ous = function (input) {
    return UnvowelLast(input) + "ous";
};

/**
 * ly
 * Adds the `ly` suffix.
 *
 * @name ly
 * @function
 * @param {String} input The input keyword.
 * @return {String} The generated name.
 */
NameIt.ly = function (input) {
    return UnvowelLast(input) + "ly";
};

/**
 * ance
 * Adds the `ance` suffix.
 *
 * @name ance
 * @function
 * @param {String} input The input keyword.
 * @return {String} The generated name.
 */
NameIt.ance = function (input) {
    return UnvowelLast(input) + "ance";
};

/**
 * oid
 * Adds the `oid` suffix.
 *
 * @name oid
 * @function
 * @param {String} input The input keyword.
 * @return {String} The generated name.
 */
NameIt.oid = function (input) {
    return UnvowelLast(input) + "oid";
};

/**
 * ient
 * Adds the `ient` suffix.
 *
 * @name ient
 * @function
 * @param {String} input The input keyword.
 * @return {String} The generated name.
 */
NameIt.ient = function (input) {
    return UnvowelLast(input) + "ient";
};

/**
 * ent
 * Adds the `ent` suffix.
 *
 * @name ent
 * @function
 * @param {String} input The input keyword.
 * @return {String} The generated name.
 */
NameIt.ent = function (input) {
    return UnvowelLast(input) + "ent";
};

/**
 * onin
 * Adds the `onin` suffix.
 *
 * @name onin
 * @function
 * @param {String} input The input keyword.
 * @return {String} The generated name.
 */
NameIt.onin = function (input) {
    return UnvowelLast(input) + "onin";
};

/**
 * oxin
 * Adds the `oxin` suffix.
 *
 * @name oxin
 * @function
 * @param {String} input The input keyword.
 * @return {String} The generated name.
 */
NameIt.oxin = function (input) {
    return UnvowelLast(input) + "oxin";
};

/**
 * o
 * Adds the `o` suffix.
 *
 * @name o
 * @function
 * @param {String} input The input keyword.
 * @return {String} The generated name.
 */
NameIt.o = function (input) {
    return UnvowelLast(input) + "o";
};

module.exports = NameIt;
