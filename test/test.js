var assert = require("assert"),
    filterOne = require("../src/index");


describe("filterOne(object, callback, thisArg)", function() {
    it(
        "should return first result in object/array that passes callback",
        function() {
            var array = [{
                    age: 42,
                    name: "Bob"
                }, {
                    age: 23,
                    name: "Frank"
                }],
                object = {
                    0: {
                        age: 42,
                        name: "Bob"
                    },
                    1: {
                        age: 23,
                        name: "Frank"
                    }
                },
                arrayFrank = array[1],
                objectFrank = object[1];

            assert.deepEqual(
                filterOne(array, function(value) {
                    return value.name === "Frank";
                }), arrayFrank
            );

            assert.deepEqual(
                filterOne(object, function(value) {
                    return value.name === "Frank";
                }), objectFrank
            );
        }
    );
});
