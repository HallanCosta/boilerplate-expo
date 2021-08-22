import React from 'react';
import { SvgProps } from 'react-native-svg';

import { DesignTitle } from '../../atoms/DesignTitle';

import { AtomHeaderContainer } from './styles';

type Props = {
  icon: React.FC<SvgProps>;
  title: string;
}

export function AtomHeader({ icon: Icon, title }: Props) {
  return (
    <AtomHeaderContainer>
      <Icon />
      <DesignTitle value={title} />
    </AtomHeaderContainer>
  );
}