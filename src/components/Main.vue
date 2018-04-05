<template>
    <div id="app">

        <h1>GitLab CI</h1>
        <h2>Projects</h2>

        <project
                v-for="project in projects"
                :key="project.id"
                :project="project"
                :status="status">
        </project>

    </div>
</template>

<script>
    import axios from 'axios';
    import Project from './Project';

    export default {
        mounted() {
            this.getProject()
        },
        components: {
            Project,
        },
        data() {
            return {
                msg: 'Dashboard Gitlab CI',
                projects: [],
                status: []
            }
        },
        methods: {
            getProject() {
             //   var vue = this;
                axios
                    .get('https://gitlab.ftven.net/api/v4/projects?private_token=qP2zs3SNzsD_mTENXxXe&simple=true&order_by=last_activity_at&sort=desc&membership=true').then(response => {
                    this.projects = response.data;

                    response.data.forEach(function(project) {
                        console.log('id '+project.id +' name '+project.name);
                  //      vue.getPipeline(project.id);
                    })

                })
                    .catch(e => {
                        console.log(e)
                    })
            },
            // getPipeline(id) {
            //     axios
            //         .get('https://gitlab.ftven.net/api/v4/projects/' + id + '/pipelines?private_token=qP2zs3SNzsD_mTENXxXe').then(response => {
            //             if (response.data.length === 0) {
            //                 this.status[id] = "fail";
            //             } else {
            //                 console.log(response.data[0].status);
            //                 this.status[id] = response.data[0].status;
            //             }
            //     })
            //         .catch(e => {
            //             console.log(e)
            //         })
            // }

        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h1, h2 {
        font-weight: normal;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }

    .md-card {
        width: 320px;
        margin: 4px;
        display: inline-block;
        vertical-align: top;
    }

</style>
