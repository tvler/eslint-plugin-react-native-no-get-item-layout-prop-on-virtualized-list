/**
 * @fileoverview Prevent passing of children as props
 * @author Benjamin Stepp
 */

'use strict';

// ------------------------------------------------------------------------------
// Rule Definition
// ------------------------------------------------------------------------------

module.exports = {
  create(context) {
    return {
      JSXAttribute(node) {
        if (node.name.name !== 'getItemLayout') {
          return;
        }

        context.report({
          node,
          message: 'Do not pass getItemLayout as props. Instead, nest children between the opening and closing tags.'
        });
      }
    };
  }
};
