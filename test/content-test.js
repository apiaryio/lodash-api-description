var expect = require('chai').expect;
var lodash = require('lodash');
var apiDescription = require('../lib/index');
apiDescription(lodash);

describe('Content Function', function() {
  context('when content exists', function() {
    var refract = {
      element: 'category',
      content: [
        {
          element: 'resource',
          content: []
        }
      ]
    };

    it('returns the content of the element', function() {
      expect(lodash.content(refract)).to.deep.equal(refract.content);
    });
  });
});
