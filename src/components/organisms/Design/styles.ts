import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

const STATUSBAR_HEIGHT = getStatusBarHeight() + 52;

export const styles = StyleSheet.create({
  molecule: {
    width: 200,
    height: 200,
    marginTop: 8
  },
  atom: {
    width: 35,
    height: 35,
    marginRight: 5
  }
});

export const DesignContainer = styled.View`
  margin-top: ${`${STATUSBAR_HEIGHT}px`};
  justify-content: center;
  align-items: center;
`;