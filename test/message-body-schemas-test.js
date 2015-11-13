var expect = require('chai').expect;
var lodash = require('lodash');
var apiDescription = require('../lib/index');
apiDescription(lodash);

describe('Message Body Schema Function', function() {
  context('when content exists', function() {
    var refract = {
      element: 'httpResponse',
      content: [
        {
          element: 'asset',
          meta: {
            classes: ['messageBodySchema']
          },
          content: 'Body Schema 1'
        },
        {
          element: 'copy',
          content: []
        },
        {
          element: 'asset',
          meta: {
            classes: ['messageBodySchema']
          },
          content: 'Body Schema 2'
        },
      ]
    };

    var expected = [refract.content[0], refract.content[2]];

    it('returns message body schema asset elements found in content', function() {
      expect(lodash.messageBodySchemas(refract)).to.deep.equal(expected);
    });
  });
});
