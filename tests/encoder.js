var phplikeMod = require('./include.js');
var assert = require("assert");

//mocha lib/ --grep mthod_get
describe('base64', function() {
    var text = "text";
    var encodeText = "dGV4dA==";
    it('encode', function() {
        var res = phplikeMod.base64_encode(text);
        assert.equal(encodeText, res);
    });

    it('decode', function() {
        var res = phplikeMod.base64_decode(encodeText);
        assert.equal(text, res);
    });

});


describe('urlencode', function() {
    var text = "a+";
    var encodeText = "a%2B";
    it('encode', function() {
        var res = phplikeMod.urlencode(text);
        assert.equal(encodeText, res);
    });

    it('decode', function() {
        var res = phplikeMod.urldecode(encodeText);
        assert.equal(text, res);
    });

});


describe('json_encode and decode', function() {
    var text = "a+";
    var encodeText = "a%2B";
    it('encode object', function() {
        var text = {"a": "b"};
        var res = phplikeMod.json_encode(text);
        assert.equal('{"a":"b"}', res);
    });

    it('encode array', function() {
        var text = ["a", "b"];
        var res = phplikeMod.json_encode(text);
        assert.equal('["a","b"]', res);
    });

    it('encode complicate object', function() {
        var text = {"user": {"name": "json"}};
        var res = phplikeMod.json_encode(text);
        assert.equal('{"user":{"name":"json"}}', res);
    });

    it('encode missing index', function() {
        var text = [];
        text[0] = 5;
        text[2] = [];
        var res = phplikeMod.json_encode(text);
        assert.equal('[5,null,[]]', res);
    });


    it('decode', function() {
        var text = '["a", "b"]';
        var res = phplikeMod.json_decode(text);
        assert.equal("a", res[0]);
        assert.equal("b", res[1]);

    });

});

describe('json_decode unicode', function() {

    it('decode', function () {
        var text = '{"value": "\u9078\u64c7"}';
        var res = phplikeMod.json_decode(text, 'JSON_UNESCAPED_UNICODE');
        assert.equal("選擇", res.value);
    });

});

describe('md5', function() {

    it('encode "test"', function () {
        var text = 'test';
        var res = phplikeMod.md5(text);
        assert.equal("098f6bcd4621d373cade4e832627b4f6", res);
    });

    it('encode empty', function () {
        var text = '';
        var res = phplikeMod.md5(text);
        assert.equal("d41d8cd98f00b204e9800998ecf8427e", res);
    });

    it('encode integet', function () {
        var text = 12;
        var res = phplikeMod.md5(text);
        assert.equal("c20ad4d76fe97759aa27a0c99bff6710", res);
    });



});

