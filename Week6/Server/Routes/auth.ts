import express from 'express';
const router = express.Router();

//import the controller module
import {DisplayLoginPage, DisplayRegisterPage, ProcessLogoutPage, ProcessLoginPage, ProcessRegistrationPage } from "../Controllers/auth";

/* Display login page. */
router.get('/login', DisplayLoginPage);

/* Display register page. */
router.get('/register', DisplayRegisterPage);



/* Process Login page. */
router.post('/login', ProcessLoginPage);

/* Process Register page. */
router.post('/register', ProcessRegistrationPage);

/* Process Logout page. */
router.get('/logout', ProcessLogoutPage); 


export default router;
