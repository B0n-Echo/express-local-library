const express = require('express');
var router = express.Router();

// Require controller modules.

var author_controller = require('../controllers/authorController');
var book_controller = require('../controllers/bookController');
var book_instance_controller = require('../controllers/bookinstanceController');
var genre_controller = require('../controllers/genreController');

/// BOOK ROUTES ///

// GET catalog home page.
router.get('/', book_controller.index);

// GET request for creating a Book. NOTE This must come before routes that display Book (uses id).
router.get('/book/create', book_controller.book_create_get);

// POST request for creating Book.
router.post('/book/create', book_controller.book_create_post);

// GET request to delete Book.
router.get('/book/:id/delete', book_controller.book_delete_get);

router.post('/book/:id/delete', book_controller.book_delete_post);

// Request to update Book.
router.get('/book/:id/update', book_controller.book_update_get);

router.post('/book/:id/update', book_controller.book_update_post);

// Request for one Book
router.get('/book/:id', book_controller.book_detail);

router.get('/books', book_controller.book_list);


/// AUTHOR ROUTES ///
router.get('/author/create', author_controller.author_create_get);

router.post('/author/create', author_controller.author_create_post);

// request to delete Author.
router.get('/author/:id/delete', author_controller.author_delete_get);

router.post('/author/:id/delete', author_controller.author_delete_post);

// request to update Author.
router.get('/author/:id/update', author_controller.author_update_get);

router.post('/author/:id/update', author_controller.author_update_post);

// request for one Author.
router.get('/author/:id', author_controller.author_detail);

// GET request for list of all Authors.
router.get('/authors', author_controller.author_list);


/// GENRE ROUTES ///

// NOTE This must come before route that displays Genre (uses id).
router.get('/genre/create', genre_controller.genre_create_get);

router.post('/genre/create', genre_controller.genre_create_post);

// request to delete Genre.
router.get('/genre/:id/delete', genre_controller.genre_delete_get);

router.post('/genre/:id/delete', genre_controller.genre_delete_post);

// request to update Genre.
router.get('/genre/:id/update', genre_controller.genre_update_get);

router.post('/genre/:id/update', genre_controller.genre_update_post);

// GET request for one Genre.
router.get('/genre/:id', genre_controller.genre_detail);

// GET request for list of all Genre.
router.get('/genres', genre_controller.genre_list);

/// BOOKINSTANCE ROUTES ///

// Request for creating a BookInstance.
router.get('/bookinstance/create', book_instance_controller.bookinstance_create_get);
 
router.post('/bookinstance/create', book_instance_controller.bookinstance_create_post);

// Request to delete BookInstance.
router.get('/bookinstance/:id/delete', book_instance_controller.bookinstance_delete_get);

router.post('/bookinstance/:id/delete', book_instance_controller.bookinstance_delete_post);

// Request to update BookInstance.
router.get('/bookinstance/:id/update', book_instance_controller.bookinstance_update_get);

router.post('/bookinstance/:id/update', book_instance_controller.bookinstance_update_post);

// GET request for one BookInstance.
router.get('/bookinstance/:id', book_instance_controller.bookinstance_detail);

// GET request for list of all BookInstance.
router.get('/bookinstances', book_instance_controller.bookinstance_list);

module.exports = router;