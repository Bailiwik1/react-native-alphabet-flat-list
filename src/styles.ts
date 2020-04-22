/**
 * Created by JetBrains WebStorm.
 * Author: yoon
 * Date: 19-9-3
 * Time: 下午6:48
 * Desc:
 */

import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1
  },
  sectionHeaderContainer: {
    justifyContent: 'center',
    backgroundColor: 'transparent',
    paddingLeft: 15
  },
  sectionHeaderTitle: {
    color: '#FFFFFF',
    fontSize: 12
  },
  sectionListItemContainer: {
    width: 30,
    justifyContent: 'center',
    alignItems: 'center'
  },
  sectionListItemWrapper: {
    width: 18,
    height: 18,
    borderRadius: 9,
    justifyContent: 'center',
    alignItems: 'center'
  },
  sectionListItemText: {
    fontSize: 10,
    textAlign: 'center',
    fontFamily: 'gt-america-regular'
  }
})
