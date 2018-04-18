import Vue from 'vue';
import Router from 'vue-router';
import Homepage from '@/components/Homepage';
import ContinuousIntegration from '@/components/pipeline/PipelineIndex';
import MergeRequest from '@/components/mr/MRIndex';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Homepage',
      component: Homepage,
    },
    {
      path: '/continuous-integration',
      name: 'ContinuousIntegration',
      component: ContinuousIntegration,
    },
    {
      path: '/merge-request',
      name: 'MergeRequest',
      component: MergeRequest,
    },
  ],
});
