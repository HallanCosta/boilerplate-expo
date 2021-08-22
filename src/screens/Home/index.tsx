import React from 'react';

import { Designs } from '../../components/templates/Designs';

import {
  styles,
  Container
} from './styles';

export function Home() {

  function handleToReplicateData() {
    const createAtom = (_: unknown, id: number) => {
      return {
        id: String(Number(id) + 1),
        title: `I'm Atom`,
        subtitle: `Atom is the basis for the \nformation of any substance.`
      }
    }

    return Array.from({ length: 3 }, createAtom);
  }

  const data = handleToReplicateData();

  return (
    <Container>
      <Designs data={data} />
    </Container>
  );
}