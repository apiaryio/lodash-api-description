var expect = require('chai').expect;
var lodash = require('lodash');
var apiDescription = require('../lib/index');
apiDescription(lodash);

describe('Copy Function', function() {
  context('when content exists', function() {
    var refract = {
      element: 'resource',
      content: [
        {
          element: 'transition',
          content: []
        },
        {
          element: 'copy',
          content: 'Copy 1'
        },
        {
          element: 'transition',
          content: []
        },
        {
          element: 'copy',
          content: 'Copy 2'
        }
      ]
    };

    var expected = [refract.content[1], refract.content[3]];

    it('returns the copy elements found in the content', function() {
      expect(lodash.copy(refract)).to.deep.equal(expected);
    });
  });
});
