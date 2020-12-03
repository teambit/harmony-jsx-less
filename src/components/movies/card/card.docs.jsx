import React from 'react';
import { Section } from '@teambit/documenter.ui.section';
import { ThemeContext } from '@teambit/documenter.theme.theme-context';
import { H3 } from '@teambit/documenter.ui.heading';
import { Paragraph } from '@teambit/documenter.ui.paragraph';
import { Separator } from '@teambit/documenter.ui.separator';
import { Card } from './card';

export default function Overview() {
  return (
    <ThemeContext>
      <>
        <Section>
          <H3>Overview</H3>
          <Paragraph>
            The card component shows the poster and title of a movie.
          </Paragraph>
        </Section>
        <Separator />
      </>
    </ThemeContext>
  );
}

Overview.abstract = 'A movie card component.';

Overview.labels = ['react', 'babel', 'movie', 'card'];

Overview.examples = [
  {
    scope: {
      Card,
    },
    title: 'Movie card example',
    description: 'A complete movie card',
    jsx: (
      <Card
        title="The Wolf of Wall Street"
        imdbID="tt0993846"
        poster="https://m.media-amazon.com/images/M/MV5BMjIxMjgxNTk0MF5BMl5BanBnXkFtZTgwNjIyOTg2MDE@._V1_SX300.jpg"
      />
    ),
  },
];
