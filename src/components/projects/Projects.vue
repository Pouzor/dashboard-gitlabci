<template>
    <div>

        <project
                v-for="project in projects"
                :key="project.id"
                :project="project"
        >
        </project>

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