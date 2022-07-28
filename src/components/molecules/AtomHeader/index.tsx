import React from 'react';
import { SvgProps } from 'react-native-svg';

import { Container } from './styles';
import { DesignTitle } from '@atoms/DesignTitle';

type Props = {
  icon: React.FC<SvgProps>;
  title: string;
}

export function AtomHeader({ icon: Icon, title }: Props) {
  return (
    <Container>
      <Icon />
      <DesignTitle value={title} />
    </Container>
  );
}