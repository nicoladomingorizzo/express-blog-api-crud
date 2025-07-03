function handleServerError(err, req, res, next) {
    status(500)
    res.status(500).json({
        error: err.message,
    });
};

module.exports = handleServerError;