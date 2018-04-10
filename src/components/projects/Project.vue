<template>

    <div :class="pipeline.status == 'success' ? 'card bg-success' : pipeline.status == 'failed' ? 'card bg-danger' : 'card'" style="width: 200px;float:left; margin-left: 10px; margin-bottom: 10px; height: 200px">
        <div class="card-header" style="font-size:14px"><b>{{project.name}}</b></div>
        <div class="card-body">
            <h6 class="card-title"><img :src="pipeline.user.avatar_url" style="width:30px"/> {{pipeline.user.username}}</h6>
            <p class="card-text">Coverage : {{pipeline.coverage}}%</p>

        </div>
        <span class="badge badge-secondary">{{pipeline.ref}}</span>
    </div>

</template>


<script>
    import storeGitLab from './../../store/gitLab';

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
                pipeline: {
                    user: {username: ""},
                    ref: "",
                    status: ""
                }
            }
        },
        methods: {
            fetchData() {

                storeGitLab.getPipeline(this.project.id)
                    .then(pipeline => {
                        if (pipeline) {
                            this.pipeline = pipeline;
                        } else {
                            this.pipeline.status = "No Tests";
                        }
                    })
                    .catch(error => {
                        console.log(error.message);
                    });
            }

        }
    };
</script>

<style>
    .project_ci {
        height: 100px;
        border: 1px solid #eee;
        margin-top: 10px;
    }
</style>