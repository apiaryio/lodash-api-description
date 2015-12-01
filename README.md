# API Description Utilities

API Description mixins for Lodash based on the [Refract API Description namespace](https://github.com/refractproject/refract-spec/blob/master/namespaces/api-description-namespace.md)

## Usage

This library takes a `lodash` instance and adds API Description mixins, which are the functions described below. These functions are usable and chainable just like any other Lodash function. Additionally, all Lodash functions are available here.

It is recommended to use these functions and other Lodash functions when interacting with Refract because you get some safety when chaining and looking for data.

### content

Takes a Refract element and returns its content, which MAY be of any JavaScript type.

```js
// Returns an array with the resource element
_.content({
  element: 'category',
  content: [
    {
      element: 'resource',
      content: []
    }
  ]
});
```

### dataStructures

Takes a Refract element and returns an array of all `dataStructure` elements found in the content.

```js
// Returns array including the one dataStructure element in content
_.dataStructures({
  element: 'category',
  content: [
    {
      element: 'dataStructure',
      content: []
    }
  ]
});
```

### resources

Takes a Refract element and returns an array of all `resource` elements found in the content.

```js
// Returns array including the one resource element in content
_.resources({
  element: 'category',
  content: [
    {
      element: 'resource',
      content: []
    }
  ]
});
```

### transitions

Takes a Refract element and returns an array of all `transition` elements found in the content.

```js
// Returns array including the one transition element in content
_.transitions({
  element: 'resource',
  content: [
    {
      element: 'transition',
      content: []
    }
  ]
});
```

### copy

Takes a Refract element and returns an array of all `copy` elements found in the content.

```js
// Returns array including the one copy element in content
_.copy({
  element: 'category',
  content: [
    {
      element: 'copy',
      content: 'Copy text here'
    }
  ]
});
```

### httpTransactions

Takes a Refract element and returns an array of all `httpTransaction` elements found in the content.

```js
// Returns array including the one httpTransaction element in content
_.httpTransaction({
  element: 'transition',
  content: [
    {
      element: 'httpTransaction',
      content: []
    }
  ]
});
```

### httpRequests

Takes a Refract element and returns an array of all `httpRequest` elements found in the content.

```js
// Returns array including the one httpRequest element in content
_.httpRequests({
  element: 'transaction',
  content: [
    {
      element: 'httpRequest',
      content: []
    }
  ]
});
```

### httpResponses

Takes a Refract element and returns an array of all `httpResponse` elements found in the content.

```js
// Returns array including the one httpResponse element in content
_.httpResponses({
  element: 'transaction',
  content: [
    {
      element: 'httpResponse',
      content: []
    }
  ]
});
```

### messageBodies

Takes a Refract element and returns an array of all `messageBody` elements found in the content.

```js
// Returns array including the one messageBody element in content
_.messageBodies({
  element: 'httpRequest',
  content: [
    {
      element: 'asset',
      meta: {
        classes: ['messageBody']
      }
      content: 'Body here'
    }
  ]
});
```

### messageBodySchemas

Takes a Refract element and returns an array of all `messageBodySchema` elements found in the content.

```js
// Returns array including the one messageBodySchema element in content
_.messageBodySchemas({
  element: 'httpRequest',
  content: [
    {
      element: 'asset',
      meta: {
        classes: ['messageBodySchema']
      }
      content: 'Body Schema here'
    }
  ]
});
```

### filterContent

Takes a Refract element and filter condition, gets its content, and filters it.

```js
// Returns array including the one messageBodySchema element in content
_.filterContent({
  element: 'httpRequest',
  content: [
    {
      element: 'asset',
      meta: {
        classes: ['messageBodySchema']
      }
      content: 'Body Schema here'
    },
    {
      element: 'copy',
      content: 'Copy text here.'
    }
  ]
}, {element: 'asset'});
```

## Installation

```shell
npm install lodash-api-description --save
```

## Using the library

If you are using this library in a project of yours, we recommend loading Lodash in its own module, using `runInContext`, and adding mixins. Your module would look like:

```js
// utils.js
var lodash = require('lodash').runInContext(); // creates a copy of lodash
var apiDescriptionMixins = require('lodash-api-description');
apiDescriptionMixins(lodash); // adds API Description mixins

module.exports = lodash;
```

Then when using this functionality in your project, you can do the following:

```js
// Requiring custom lodash from another file
var lodash = require('./utils.js');
```

This prevents you from adding mixins to Lodash for entire project.

## Development

```shell
$ npm install
$ npm test
```

## License

MIT (see `LICENSE` file)

Apiary Inc. <support@apiary.io>
