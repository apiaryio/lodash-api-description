var expect = require('chai').expect;
var lodash = require('lodash');
var apiDescription = require('../lib/index');
apiDescription(lodash);

describe('Message Bodies Function', function() {
  context('when content exists', function() {
    var refract = {
      element: 'httpResponse',
      content: [
        {
          element: 'asset',
          meta: {
            classes: ['messageBody']
          },
          content: 'Body 1'
        },
        {
          element: 'copy',
          content: []
        },
        {
          element: 'asset',
          meta: {
            classes: ['messageBody']
          },
          content: 'Body 2'
        },
      ]
    };

    var expected = [refract.content[0], refract.content[2]];

    it('returns message body asset elements found in content', function() {
      expect(lodash.messageBodies(refract)).to.deep.equal(expected);
    });
  });
});
