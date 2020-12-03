import React from 'react';
import { Section } from '@teambit/documenter.ui.section';
import { ThemeContext } from '@teambit/documenter.theme.theme-context';
import { H3 } from '@teambit/documenter.ui.heading';
import { Paragraph } from '@teambit/documenter.ui.paragraph';
import { Separator } from '@teambit/documenter.ui.separator';
import { CardList } from './card-list';

export default function Overview() {
  return (
    <ThemeContext>
      <>
        <Section>
          <H3>Overview</H3>
          <Paragraph>
            The card-list component receives a list of movies to shows.
          </Paragraph>
        </Section>
        <Separator />
      </>
    </ThemeContext>
  );
}

Overview.abstract = 'A movie card list component.';

Overview.labels = ['react', 'babel', 'movie', 'card', 'list'];

Overview.examples = [
  {
    scope: {
      CardList,
    },
    title: 'Movie card list example',
    description: 'A complete movies list',
    code: `
    () => {
      const movies = [
        {
          title: 'The Wolf of Wall Street',
          imdbID: 'tt0993846',
          poster:
            'https://m.media-amazon.com/images/M/MV5BMjIxMjgxNTk0MF5BMl5BanBnXkFtZTgwNjIyOTg2MDE@._V1_SX300.jpg',
        },
        {
          title: 'WALL·E',
          imdbID: 'tt0993846',
          poster:
            'https://m.media-amazon.com/images/M/MV5BMjExMTg5OTU0NF5BMl5BanBnXkFtZTcwMjMxMzMzMw@@._V1_SX300.jpg',
        },
      ];

      return (
        <div
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <CardList list={movies} />
        </div>
      )
    }
    `,
  },
];
