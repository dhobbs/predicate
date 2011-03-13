var vows = require('vows'),
    assert = require('assert');

var predicate = require('predicate');

vows.describe('predicate').addBatch({
    'the is predicate': {
        topic: function() {return predicate.is("thing")},

        'is thing' : function(isA) {
            assert.isTrue(isA("thing"));
        },
        'is not otherThing' : function(isA) {
            assert.isFalse(isA("otherThing"));
        }
    }
}).export(module);
