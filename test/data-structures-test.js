var expect = require('chai').expect;
var lodash = require('lodash');
var apiDescription = require('../lib/index');
apiDescription(lodash);

describe('Data Structures Function', function() {
  context('when content exists', function() {
    var refract = {
      element: 'resource',
      content: [
        {
          element: 'dataStructure',
          content: []
        },
        {
          element: 'resource',
          content: []
        },
        {
          element: 'dataStructure',
          content: []
        },
      ]
    };

    var expected = [refract.content[0], refract.content[2]];

    it('returns data structure elements found in content', function() {
      expect(lodash.dataStructures(refract)).to.deep.equal(expected);
    });
  });
});
