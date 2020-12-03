import { EnvsMain, EnvsAspect } from '@teambit/envs';
import { ReactAspect, ReactMain } from '@teambit/react';
import { BabelAspect, BabelMain } from '@teambit/babel';

const babelConfig = require('./babel/babel.config.json');

/**
 * React-Babel extension for Bit
 */
export class HarmonyReactBabelExtension {
  constructor(private react: ReactMain) {}

  static dependencies: any = [EnvsAspect, ReactAspect, BabelAspect];

  static async provider([envs, react, babel]: [
    EnvsMain,
    ReactMain,
    BabelMain
  ]) {
    // create a new Babel compiler
    const babelCompiler = babel.createCompiler({
      babelTransformOptions: babelConfig,
    });

    const harmonyReactEnv = react.compose([
      react.overrideCompiler(babelCompiler),
      react.overrideCompilerTasks([babelCompiler.createTask()]),
      react.overrideJestConfig(require.resolve('./jest/jest.config')),
      //react.overrideDevServerConfig(require('./webpack/webpack.config')),
    ]);

    // register the new environment to the workspace
    envs.registerEnv(harmonyReactEnv);
    return new HarmonyReactBabelExtension(react);
  }
}
