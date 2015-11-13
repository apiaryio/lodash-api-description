var expect = require('chai').expect;
var lodash = require('lodash');
var apiDescription = require('../lib/index');
apiDescription(lodash);

describe('HTTP Responses Function', function() {
  context('when content exists', function() {
    var refract = {
      element: 'httpTransaction',
      content: [
        {
          element: 'httpResponse',
          content: []
        },
        {
          element: 'httpRequest',
          content: []
        },
        {
          element: 'httpResponse',
          content: []
        },
      ]
    };

    var expected = [refract.content[0], refract.content[2]];

    it('returns httpResponse elements found in content', function() {
      expect(lodash.httpResponses(refract)).to.deep.equal(expected);
    });
  });
});
