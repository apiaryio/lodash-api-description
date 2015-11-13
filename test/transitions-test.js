var expect = require('chai').expect;
var lodash = require('lodash');
var apiDescription = require('../lib/index');
apiDescription(lodash);

describe('Transition Function', function() {
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
          content: []
        },
        {
          element: 'transition',
          content: []
        },
      ]
    };

    var expected = [refract.content[0], refract.content[2]];

    it('returns transition elements found in content', function() {
      expect(lodash.transitions(refract)).to.deep.equal(expected);
    });
  });
});
