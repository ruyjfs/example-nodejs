import Index from '../controllers/index'
import Users from '../controllers/users'

var router = require('express').Router();

router.get('/users', Users().index);
router.get('/users/:id', Users().show);
router.post('/users', Users().create);
router.put('/users', Users().update);
router.delete('/user', Users().remove);

export default router;