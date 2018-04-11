'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
    NODE_ENV: '"development"',
    GITLAB_TOKEN: `"${process.env.GITLAB_TOKEN}"`,
    GITLAB_URL: `"${process.env.GITLAB_URL}"`
})
