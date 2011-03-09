var predicate = require('predicate');

describe('predicate', function() {

    it('has is predicate', function() {
        expect(predicate.is("is")("is")).toBeTruthy();
    })

});

