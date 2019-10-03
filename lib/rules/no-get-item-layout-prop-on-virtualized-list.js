'use strict';

// ------------------------------------------------------------------------------
// Rule Definition
// ------------------------------------------------------------------------------

module.exports = {
  create(context) {
    return {
      JSXAttribute(node) {
        let componentName;

        if (node.parent.name.type === 'JSXIdentifier') {
          componentName = node.parent.name.name;
        } else if (node.parent.name.type === 'JSXMemberExpression') {
          componentName = `${node.parent.name.object.name}.${node.parent.name.property.name}`;
        }

        if (
          !(
            componentName === 'FlatList' ||
            componentName === 'VirtualizedList' ||
            componentName === 'SectionList' ||
            componentName === 'Animated.FlatList' ||
            componentName === 'Animated.SectionList'
          )
        ) {
          return;
        }

        if (node.name.name !== 'getItemLayout') {
          return;
        }

        context.report({
          node,
          message: 'Do not use the getItemLayout prop on VirtualizedList, FlatList, or SectionList since it can prevent items from being rendered github.com/facebook/react-native/issues/15990'
        });
      }
    };
  }
};
