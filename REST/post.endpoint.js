'use strict';
import business from '../business/business.container';

const postEndpoint = (router) => {
  router.get('/api/posts', async (request, response, next) => {
    try {
      let result = await
        business(request).getPostManager().query();
      response.status(200).send(result);
    } catch (error) {
      console.log(error);
    }
  });

  router.post('/api/posts', async (request, response, next) => {
    try {
      let result = await business(request).getPostManager().createNewOrUpdate(request.body);
      response.status(200).send(result);
    } catch (error) {
      console.log(error);
    }
  });
};
export default postEndpoint;

