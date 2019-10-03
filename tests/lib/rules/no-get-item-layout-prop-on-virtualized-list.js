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

const JSX_ERROR = 'Do not use the getItemLayout prop on VirtualizedList, FlatList, or SectionList since it can prevent items from being rendered github.com/facebook/react-native/issues/15990';

// -----------------------------------------------------------------------------
// Tests
// -----------------------------------------------------------------------------

const ruleTester = new RuleTester({parserOptions});
ruleTester.run('no-children-prop', rule, {
  valid: [
    {
      code: '<FlatList />;'
    },
    {
      code: '<FlatList renderItem={() => {}} />;'
    },
    {
      code: '<VirtualizedList />;'
    },
    {
      code: '<VirtualizedList renderItem={() => {}} />;'
    },
    {
      code: '<SectionList />;'
    },
    {
      code: '<SectionList renderItem={() => {}} />;'
    },
    {
      code: '<OtherComponent getItemLayout={() => {}} />;'
    }
  ],
  invalid: [
    {
      code: '<FlatList getItemLayout={() => {}} />;',
      errors: [{message: JSX_ERROR}]
    },
    {
      code: '<VirtualizedList getItemLayout={() => {}} />;',
      errors: [{message: JSX_ERROR}]
    },
    {
      code: '<SectionList getItemLayout={() => {}} />;',
      errors: [{message: JSX_ERROR}]
    }
  ]
});
