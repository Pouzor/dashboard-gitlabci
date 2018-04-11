'use strict'
const merge = require('webpack-merge')
const devEnv = require('./dev.env')

module.exports = merge(devEnv, {
    NODE_ENV: '"testing"',
    GITLAB_TOKEN: `"${process.env.GITLAB_TOKEN}"`,
    GITLAB_URL: `"${process.env.GITLAB_URL}"`
})
