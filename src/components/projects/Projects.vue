<template>
    <div>
        <b-container fluid>
            <b-row class="text-center">
        <project
                v-for="project in projects"
                :key="project.id"
                :project="project"
        >
        </project>
            </b-row>
        </b-container>

    </div>
</template>
<script>

    import Project from './Project';
    import storeGitLab from './../../store/gitLab';

    export default {
        name: 'projects',
        data() {
            return {
                projects: []
            }
        },
        components: {
            Project,
        },
        created() {
            storeGitLab.getProjects()
                .then(projects => {
                    this.projects = projects;
                })
                .catch(error => {
                    console.log(error.message);
                });
        }
    };
</script>