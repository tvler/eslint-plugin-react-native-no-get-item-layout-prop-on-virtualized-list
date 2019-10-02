/**
 * @fileoverview Prevent passing of children as props
 * @author Benjamin Stepp
 */

'use strict';

// ------------------------------------------------------------------------------
// Rule Definition
// ------------------------------------------------------------------------------

module.exports = {
  meta: {
    schema: []
  },
  create(context) {
    return {
      JSXAttribute(node) {
        const componentName = node.parent.name.name;
        if (
          !(
            componentName === 'Flatlist' ||
            componentName === 'VirtualizedList' ||
            componentName === 'SectionList'
          )
        ) {
          return;
        }

        if (node.name.name !== 'getItemLayout') {
          return;
        }

        context.report({
          node,
          message: 'Do not use the getItemLayout prop on VirtualizedList, Flatlist, or SectionList since it can prevent items from being rendered github.com/facebook/react-native/issues/15990'
        });
      }
    };
  }
};
