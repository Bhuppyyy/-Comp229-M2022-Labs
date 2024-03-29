import express from 'express';

import Movie from '../Models/movies';

import { UserDisplayName } from '../Util';

export function DisplayMoviesList(req: express.Request, res: express.Response, next: express.NextFunction)
{
   Movie.find(function(err, moviesCollection)
   {
       if(err)
       {
           console.error(err);
           res.end(err);
       }
       res.render('index', {title: 'Movie List', page: 'movie-list', movies: moviesCollection, displayName: UserDisplayName(req) });
    });
}