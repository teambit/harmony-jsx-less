import React from 'react';
import { Section } from '@teambit/documenter.ui.section';
import { ThemeContext } from '@teambit/documenter.theme.theme-context';
import { H3 } from '@teambit/documenter.ui.heading';
import { Paragraph } from '@teambit/documenter.ui.paragraph';
import { Separator } from '@teambit/documenter.ui.separator';
import { Loader } from './loader';

export default function Overview() {
  return (
    <ThemeContext>
      <>
        <Section>
          <H3>Overview</H3>
          <Paragraph>A Loader component using less style.</Paragraph>
        </Section>
        <Separator />
      </>
    </ThemeContext>
  );
}

Overview.abstract = 'A loader component.';

Overview.labels = ['react', 'babel', 'loader', 'less'];

Overview.examples = [
  {
    scope: {
      Loader,
    },
    title: 'Simple Loader',
    description: 'Using the loader',
    jsx: <Loader />,
  },
];
