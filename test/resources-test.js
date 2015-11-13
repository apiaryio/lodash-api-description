var expect = require('chai').expect;
var lodash = require('lodash');
var apiDescription = require('../lib/index');
apiDescription(lodash);

describe('Resources Function', function() {
  context('when content exists', function() {
    var refract = {
      element: 'category',
      content: [
        {
          element: 'resource',
          content: []
        },
        {
          element: 'category',
          content: []
        },
        {
          element: 'resource',
          content: []
        },
      ]
    };

    var expected = [refract.content[0], refract.content[2]];

    it('returns the resource elements found in the content', function() {
      expect(lodash.resources(refract)).to.deep.equal(expected);
    });
  });
});
