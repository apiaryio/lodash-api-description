var expect = require('chai').expect;
var lodash = require('lodash');
var apiDescription = require('../lib/index');
apiDescription(lodash);

describe('Content Function', function() {
  context('when content exists as refract element', function() {
    var refract = {
      "element": "category",
      "meta": {
        "classes": [
          "api"
        ],
        "title": {
          "element": "string",
          "meta": {},
          "attributes": {
            "sourceMap": [
              {
                "element": "sourceMap",
                "meta": {},
                "attributes": {},
                "content": [
                  [
                    40,
                    23
                  ]
                ]
              }
            ]
          },
          "content": "Swagger Petstore"
        }
      }
    }

    it('returns the content of the element', function() {
      expect(lodash.chain(refract).get('meta.title', '').content().value()).to.deep.equal('Swagger Petstore');
    });
  });

  context('when content exists as primitive value', function() {
    var refract = {
      "element": "category",
      "meta": {
        "classes": [
          "api"
        ],
        "title": "Swagger Petstore"
      }
    };

    it('returns the content of the element', function() {
      expect(lodash.chain(refract).get('meta.title', '').content().value()).to.deep.equal('Swagger Petstore');
    });
  });
});
