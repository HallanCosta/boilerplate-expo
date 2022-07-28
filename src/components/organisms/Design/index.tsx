import React from 'react';

import Atom from '../../../assets/images/atom.svg';
import Molecule from '../../../assets/images/molecule.svg';

import { DesignSubtitle } from '../../atoms/DesignSubtitle';

import { AtomHeader } from '../../molecules/AtomHeader';

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