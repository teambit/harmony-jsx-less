import React from 'react';
import { Section } from '@teambit/documenter.ui.section';
import { ThemeContext } from '@teambit/documenter.theme.theme-context';
import { Separator } from '@teambit/documenter.ui.separator';
import { MovieDetails } from './movie-details';

export default function Overview() {
  return (
    <ThemeContext>
      <>
        <Section>
          The movies-details component shows you all the details of a specific
          movie.
        </Section>
        <Separator />
      </>
    </ThemeContext>
  );
}

Overview.abstract = 'A movies details screen component.';

Overview.labels = ['react', 'babel', 'movie', 'details'];

Overview.examples = [
  {
    scope: {
      MovieDetails,
    },
    title: 'Movie details example',
    description: 'A complete movie details',
    jsx: <MovieDetails imdbID="tt0993846" />,
  },
];
