import * as express from "express";
import { Request, Response } from "express";
import  PostsController from '../controllers/posts.controllers';
import UsersController from '../controllers/users.controllers';

const router = express.Router();
router.get('/', (req: Request, res: Response) => {
    res.status(200).send({
      message: 'Hello World!'
    })
  });

 var ctrlPosts= new PostsController();
 var ctrlUsers = new UsersController();

router.route('/posts').get(ctrlPosts.PostsGetAll);
router.route('/posts/:postId').get(ctrlPosts.PostsGetOne);
router.route('/posts/newpost').post(ctrlPosts.postsAddOne);
router.route('/login').post(ctrlUsers.UserLogin);

export default router;