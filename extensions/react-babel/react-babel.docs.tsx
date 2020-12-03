import React from 'react';
import { Section } from '@teambit/documenter.ui.section';
import { ThemeContext } from '@teambit/documenter.theme.theme-context';
import { H3 } from '@teambit/documenter.ui.heading';
import { Paragraph } from '@teambit/documenter.ui.paragraph';
export default function Overview() {
  return (
    <ThemeContext>
      <>
        <Section>
          <H3>Overview</H3>
          <Paragraph>A React extension with Babel support for Bit.</Paragraph>
        </Section>
        <Section>
          <H3>Usage instructions</H3>
          <Paragraph>
            Create a <b>variant</b> in project's workspace.json file.
            <br />
            Set this extension as the variant's extension.
          </Paragraph>
        </Section>
      </>
    </ThemeContext>
  );
}
Overview.abstract = 'A React Babel extension.';
Overview.labels = ['react', 'babel', 'extension', 'compiler'];
