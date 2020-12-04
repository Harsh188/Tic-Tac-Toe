const express = require('express');
const logger = require('morgan');

// Middleware
const app = express();



// Middleware
app.use(logger('dev'))

// Routes


// catch 404
app.use((req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
})

// error handler
app.use((err, req, res, next) => {
    const error = app.get('env') === 'development' ? err : {};
    const status = err.status || 500;

    res.status(status).json({
        err: {
            message: error.message
        }
    });

    console.error(err);
});

// server
const port = app.get('port') || 3000;
app.listen(port, () => console.log('Server is listening on port 3000'))