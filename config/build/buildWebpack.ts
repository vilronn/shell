import webpack from 'webpack';
import { buildPlugins } from './buildPlugins';
import { buildDevServer } from './buildDevServer';
import { buildLoaders } from './buildLoaders';
import { buildResolvers } from './buildResolvers';
import { BuildOptions } from './types/types';

export function buildWebpack(options: BuildOptions): webpack.Configuration {
    const { mode, paths} = options;
    const isDev = mode === 'development';

    return {
        mode: mode ?? 'development',
    
        entry: paths.entry,
        devtool: isDev && 'inline-source-map',
        plugins: buildPlugins(options),
        module: {
        rules:  buildLoaders(options),
        },
        resolve: buildResolvers(options),
        devServer: isDev ? buildDevServer(options) : undefined,
        output: {
            path: paths.output,
            filename: '[name].[contenthash].js',
            clean: true,
        },   
    }
}