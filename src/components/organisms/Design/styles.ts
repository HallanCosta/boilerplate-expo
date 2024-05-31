import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';

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

export const Container = styled.View`
  margin-top: 52px;
  justify-content: center;
  align-items: center;
`;