import React from 'react';

import { Title } from './styles';

type Props = {
  value: string;
}

export function DesignTitle({ value }: Props) {
  return (
    <Title>
      {value}
    </Title>
  );
}