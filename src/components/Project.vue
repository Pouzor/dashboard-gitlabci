<template>
    <md-card >
        <md-card-header>
            <div class="md-title">{{ project.name }}</div>
        </md-card-header>

        <md-card-content>
            Status : {{ status }}
        </md-card-content>

        <md-card-actions>
            <md-button>Action</md-button>
            <md-button>Action</md-button>
        </md-card-actions>
    </md-card>
</template>


<script>
    import axios from 'axios';

    export default {
        name: 'project',
        props: {
            project: Object
        },
        created() {
            this.fetchData();
        },
        data() {
            return {
                status: ""
            }
        },
        methods: {
            fetchData() {

                axios
                    .get('https://gitlab.ftven.net/api/v4/projects/' + this.project.id + '/pipelines?private_token=qP2zs3SNzsD_mTENXxXe').then(response => {
                    if (response.data.length === 0) {
                        this.status = "fail";
                    } else {
                        console.log(response.data[0].status);
                        this.status = response.data[0].status;
                    }
                })
                    .catch(e => {
                        console.log(e)
                    })
            }

        }
    };
</script>