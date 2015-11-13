var expect = require('chai').expect;
var lodash = require('lodash');
var apiDescription = require('../lib/index');
apiDescription(lodash);

describe('HTTP Transactions Function', function() {
  context('when content exists', function() {
    var refract = {
      element: 'transition',
      content: [
        {
          element: 'httpTransaction',
          content: []
        },
        {
          element: 'copy',
          content: []
        },
        {
          element: 'httpTransaction',
          content: []
        },
      ]
    };

    var expected = [refract.content[0], refract.content[2]];

    it('returns httpTransaction elements found in content', function() {
      expect(lodash.httpTransactions(refract)).to.deep.equal(expected);
    });
  });
});
