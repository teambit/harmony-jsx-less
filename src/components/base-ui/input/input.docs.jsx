import React from 'react';
import { Section } from '@teambit/documenter.ui.section';
import { ThemeContext } from '@teambit/documenter.theme.theme-context';
import { H3 } from '@teambit/documenter.ui.heading';
import { Paragraph } from '@teambit/documenter.ui.paragraph';
import { Separator } from '@teambit/documenter.ui.separator';
import styled from 'styled-components';
import { Input } from './input';

export default function Overview() {
  return (
    <ThemeContext>
      <>
        <Section>
          <H3>Overview</H3>
          <Paragraph>A basic Input using styled-components.</Paragraph>
        </Section>
        <Separator />
      </>
    </ThemeContext>
  );
}

Overview.abstract = 'A basic input component.';

Overview.labels = ['react', 'babel', 'input', 'styled-components'];

Overview.examples = [
  {
    scope: {
      styled,
      Input,
    },
    title: 'Simple Input',
    description: 'Using the basic component',
    code: `
    () => {
      return <Input />;
    }
    `,
  },
];
