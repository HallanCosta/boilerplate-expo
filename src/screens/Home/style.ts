import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';

export const styles = StyleSheet.create({
  container: {

  }
});

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
`;

export const Title = styled.Text`
  font-size: 32px;
  color: ${props => props.theme.colors.base.primary};
`;