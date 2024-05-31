import React from 'react';

import { Designs } from '@root/components/templates/Designs';

import * as Style from './style';

export function Home() {
  function createAtoms() {
    const atom = (_: unknown, id: number) => {
      return {
        id: String(Number(id) + 1),
        title: `I'm Atom`,
        subtitle: `Atom is the basis for the \nformation of any substance.`
      }
    }

    return Array.from({ length: 3 }, atom);
  }

  const atoms = createAtoms();

  return (
    <Style.Container>
      <Style.Title>Welcome</Style.Title>
      <Designs data={atoms} />
    </Style.Container>
  );
}