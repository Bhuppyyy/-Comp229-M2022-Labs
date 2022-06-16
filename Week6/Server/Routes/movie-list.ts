import express from 'express';
const router = express.Router();

import { DisplayMoviesList } from '../Controllers/movie-list';

router.get('/movie-list', DisplayMoviesList);

export default router;
