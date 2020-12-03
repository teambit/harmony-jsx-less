import React from 'react';
import { Section } from '@teambit/documenter.ui.section';
import { ThemeContext } from '@teambit/documenter.theme.theme-context';
import { H3 } from '@teambit/documenter.ui.heading';
import { Paragraph } from '@teambit/documenter.ui.paragraph';
import { Separator } from '@teambit/documenter.ui.separator';
import { MoviesSearch } from './movies-search';

export default function Overview() {
  return (
    <ThemeContext>
      <>
        <Section>
          <H3>Overview</H3>
          <Paragraph>
            The movies-search component allow you to search for movies and
            displays a list with their title and the poster of the movie.
          </Paragraph>
        </Section>
        <Separator />
      </>
    </ThemeContext>
  );
}

Overview.abstract = 'A movies search component.';

Overview.labels = ['react', 'babel', 'movies', 'search'];

Overview.examples = [
  {
    scope: {
      MoviesSearch,
    },
    title: 'Movies search example',
    description: 'A complete movies search example',
    jsx: <MoviesSearch />,
  },
];
