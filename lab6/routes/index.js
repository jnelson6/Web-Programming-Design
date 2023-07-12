//  SHOULD BE  DONE ???


const bookRoutes = require('./books');
const reviewsRoutes = require('./reviews');

const constructorMethod = (app) => {
    app.use('/books', booksRoutes);
    app.use('/reviews', reviewsRoutes);

    app.use('*', (request, response) => {
        response.status(404).json({ error: 'Not found' });
    });
};

module.exports = constructorMethod;