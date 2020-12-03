import React from 'react';
import { Section } from '@teambit/documenter.ui.section';
import { ThemeContext } from '@teambit/documenter.theme.theme-context';
import { H3 } from '@teambit/documenter.ui.heading';
import { Paragraph } from '@teambit/documenter.ui.paragraph';
import { Separator } from '@teambit/documenter.ui.separator';
import { SearchBox } from './search-box';
export default function Overview() {
  return (
    <ThemeContext>
      <>
        <Section>
          <H3>Overview</H3>
          <Paragraph>
            The search-box component use the Input and the Button components
            from base-ui to create a search form.
          </Paragraph>
        </Section>
        <Separator />
      </>
    </ThemeContext>
  );
}

Overview.abstract = 'A search box component.';

Overview.labels = ['react', 'babel', 'search', 'form'];

Overview.examples = [
  {
    scope: {
      SearchBox,
    },
    title: 'Search box example',
    description: 'A complete search form',
    jsx: <SearchBox />,
  },
];
