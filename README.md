# dashboard-gitlabci

[WIP] - Dashboard for GITLAB (vue.js)

This dashboard will allow you to consult and manage CI (gitlab runner) and Merge Request from gitlab.

In one look, you will be able to see the last pipeline and status, last open MR with infos (up/down votes, comments...)


## Build Setup

``` bash

# create .env
cp .env.dist .env

# configure gitlab url and token
nano .env

# install dependencies
make install

# serve with hot reload at localhost:8080
make start

# run all tests
make test
```
