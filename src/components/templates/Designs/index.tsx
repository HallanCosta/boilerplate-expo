import React from 'react';
import { FlatList } from 'react-native';

import { Design, DesignProps } from '@organisms/Design';

type Props = {
  data: DesignProps[];
}

export function Designs({ data }: Props) {
  return (
    <FlatList 
      data={data}
      keyExtractor={item => item.id}
      renderItem={({ item }) => (
        <Design data={item} />
      )}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        paddingBottom: 50
      }}
    />   
  );
}