import React from 'react';
import { Section } from '@teambit/documenter.ui.section';
import { ThemeContext } from '@teambit/documenter.theme.theme-context';
import { H3 } from '@teambit/documenter.ui.heading';
import { Paragraph } from '@teambit/documenter.ui.paragraph';
import { Separator } from '@teambit/documenter.ui.separator';
import styled from 'styled-components';
import { Button } from './button';

export default function Overview() {
  return (
    <ThemeContext>
      <>
        <Section>
          <H3>Overview</H3>
          <Paragraph>A basic Button using styled-components.</Paragraph>
        </Section>
        <Separator />
      </>
    </ThemeContext>
  );
}

Overview.abstract = 'A basic button component.';

Overview.labels = ['react', 'babel', 'button', 'styled-components'];

Overview.examples = [
  {
    scope: {
      Button,
      styled,
    },
    title: 'Simple Button',
    description: 'Using the basic component',
    code: `
    () => {
      return <Button onClick={() => console.log('on click')}>Click</Button>;
    }
    `,
  },
];
