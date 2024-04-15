import React from 'react';

import { DesignSubtitle } from '@root/components/atoms/DesignSubtitle';
import { AtomHeader } from '@root/components/molecules/AtomHeader';

import Atom from '@assets/images/atom.svg';
import Molecule from '@assets/images/molecule.svg';

import { styles, Container } from './styles';

export type DesignProps = {
  id: string;
  title: string;
  subtitle: string;
}

type Props = {
  data: DesignProps;
}

export function Design({ data }: Props) {
  return (
    <Container>
      <AtomHeader 
        icon={() => <Atom style={styles.atom} />} 
        title={data.title}
      />

      <DesignSubtitle value={data.subtitle} />
      <Molecule style={styles.molecule} />
    </Container>
  );
}