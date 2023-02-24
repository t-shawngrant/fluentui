export {
  CopyConfig,
  CopyInstruction,
  Logger,
  TsCheckerOptions,
  TsLoaderOptions,
  addResolvePath,
  argv,
  basicWebpackConfig,
  basicWebpackServeConfig,
  chain,
  // eslint-disable-next-line deprecation/deprecation
  cleanTask,
  clearCache,
  condition,
  copyInstructions,
  copyInstructionsTask,
  // eslint-disable-next-line deprecation/deprecation
  copyTask,
  createStylesOverlay,
  createTarTask,
  defaultCleanPaths,
  displayBailoutOverlay,
  esbuildTask,
  eslintTask,
  extractTarTask,
  fileOverlay,
  fixApiFileNewlines,
  htmlOverlay,
  jestTask,
  logger,
  mark,
  nodeExecTask,
  option,
  parallel,
  prettierCheckTask,
  prettierTask,
  resetResolvePaths,
  // eslint-disable-next-line deprecation/deprecation
  resolve,
  // eslint-disable-next-line deprecation/deprecation
  resolveCwd,
  // eslint-disable-next-line deprecation/deprecation
  sassTask,
  series,
  spawn,
  stylesOverlay,
  task,
  taskPresets,
  tsOverlay,
  tscTask,
  tscWatchTask,
  tslintTask,
  undertaker,
  watch,
  webpackCliInitTask,
  webpackCliTask,
  webpackConfig,
  webpackDevServerTask,
  webpackMerge,
  webpackOverlays,
  webpackServeConfig,
  webpackTask,
} from 'just-scripts';
export type {
  ApiExtractorOptions,
  CleanTaskOptions,
  CopyTaskOptions,
  CreateOptions,
  EntryHeader,
  EsLintTaskOptions,
  EsbuildBuildOptions,
  EsbuildTransformOptions,
  ExtractOptions,
  JestTaskOptions,
  NodeExecTaskOptions,
  SassTaskOptions,
  Task,
  TaskContext,
  TaskFunction,
  TsLintTaskOptions,
  TscTaskOptions,
  WebpackCliTaskOptions,
  WebpackDevServerTaskOptions,
  WebpackTaskOptions,
} from 'just-scripts';
export { preset } from './presets';
export { expandSourcePath } from './copy';
export { postprocessTask } from './postprocess';
