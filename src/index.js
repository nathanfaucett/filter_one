var isArrayLike = require("is_array_like"),
    isNullOrUndefined = require("is_null_or_undefined"),
    fastBindThis = require("fast_bind_this"),
    arrayFilterOne = require("array-filter_one"),
    objectFilterOne = require("object-filter_one");


module.exports = filterOne;


function filterOne(value, callback, thisArg) {
    callback = isNullOrUndefined(thisArg) ? callback : fastBindThis(callback, thisArg, 3);
    return isArrayLike(value) ?
        arrayFilterOne(value, callback) :
        objectFilterOne(value, callback);
}
