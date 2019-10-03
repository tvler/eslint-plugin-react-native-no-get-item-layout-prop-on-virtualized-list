Checks that the `getItemLayout` prop isn't being used on `VirtualizedList`, `FlatList`, or `SectionList` since it can prevent items from being rendered. 

Can ignore after [github.com/facebook/react-native/issues/15990](https://github.com/facebook/react-native/issues/15990) is resolved.

```
"plugins": [
  "react-native-no-get-item-layout-on-virtualized-list"
],
"rules": {
  "react-native-no-get-item-layout-on-virtualized-list/no-get-item-layout-prop-on-virtualized-list": "error"
}
```
