import React from 'react';
import { SvgProps } from 'react-native-svg';

import { DesignTitle } from '@root/components/atoms/DesignTitle';

import { Container } from './styles';

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