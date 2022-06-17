import express from 'express';
const router = express.Router();

import { AuthGuard } from '../Util';

import { DisplayMoviesList } from '../Controllers/movie-list';

router.get('/movie-list', AuthGuard, DisplayMoviesList);

export default router;
