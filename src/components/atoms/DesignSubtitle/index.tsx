import React from 'react';

import { Subtitle } from './styles';

type Props = {
  value: string;
}

export function DesignSubtitle({ value }: Props) {
  return (
    <Subtitle>
      {value}
    </Subtitle>
  );
}