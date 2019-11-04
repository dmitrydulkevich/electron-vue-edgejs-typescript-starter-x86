module.exports = {
    pluginOptions: {
        electronBuilder: {
            externals: ['electron-edge-js'],
            builderOptions: {
                // options placed here will be merged with default configuration and passed to electron-builder
                asarUnpack: [
                    '**/node_modules/edge-cs/*',
                    '**/node_modules/electron-edge-js/*'
                ],
                extraResources: ['*/dotnet/*/*']
            }
        }
    }
}
