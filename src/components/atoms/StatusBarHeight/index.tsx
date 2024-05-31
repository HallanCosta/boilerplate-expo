import { ReactNode } from 'react';
import { View } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

type Props = {
  children: ReactNode;
};

export default function StatusBarHeight({ children }: Props) {
  return (
    <View style={{ 
      flex: 1, 
      paddingTop: getStatusBarHeight() + 10 
      }}
    >
      {children}
    </View>
  );
}
