/**
 * @fileoverview Tests for no-children-prop
 * @author Benjamin Stepp
 */

'use strict';

// -----------------------------------------------------------------------------
// Requirements
// -----------------------------------------------------------------------------

const RuleTester = require('eslint').RuleTester;
const rule = require('../../../lib/rules/no-get-item-layout-prop-on-virtualized-list');

const parserOptions = {
  ecmaVersion: 2018,
  sourceType: 'module',
  ecmaFeatures: {
    jsx: true
  }
};

const JSX_ERROR = 'Do not pass getItemLayout as props. Instead, nest children between the opening and closing tags.';

// -----------------------------------------------------------------------------
// Tests
// -----------------------------------------------------------------------------

const ruleTester = new RuleTester({parserOptions});
ruleTester.run('no-children-prop', rule, {
  valid: [
    {
      code: '<Flatlist />;'
    },
    {
      code: '<Flatlist renderItem={() => {}} />;'
    }
  ],
  invalid: [
    {
      code: '<Flatlist getItemLayout />;',
      errors: [{message: JSX_ERROR}]
    },
    {
      code: '<Flatlist getItemLayout={() => {}} />;',
      errors: [{message: JSX_ERROR}]
    }
  ]
});
