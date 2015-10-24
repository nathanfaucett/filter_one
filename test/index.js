var tape = require("tape"),
    filterOne = require("..");


tape("filterOne(object, callback[, thisArg]) returns value that passes the test implemented by the provided function", function(assert) {
    assert.deepEquals(
        filterOne({
            a: "a",
            b: "b",
            c: "c"
        }, function(value) {
            return value === "b";
        }), "b"
    );
    assert.deepEquals(
        filterOne([0, 1, 2, 3, 4], function(value) {
            return value + 1 === 3;
        }), 2
    );
    assert.end();
});
