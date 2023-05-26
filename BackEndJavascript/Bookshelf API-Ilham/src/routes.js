const {
  addbookHandler,
  getAllbooksHandler,
  getbookByIdHandler,
  editbookByIdHandler,
  deletebookByIdHandler,
} = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/books',
    handler: addbookHandler,
  },
  {
    method: 'GET',
    path: '/books',
    handler: getAllbooksHandler,
  },
  {
    method: 'GET',
    path: '/books/{bookId}',
    handler: getbookByIdHandler,
  },
  {
    method: 'PUT',
    path: '/books/{bookId}',
    handler: editbookByIdHandler,
  },
  {
    method: 'DELETE',
    path: '/books/{bookId}',
    handler: deletebookByIdHandler,
  },
];

module.exports = routes;

