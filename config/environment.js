
const port = process.env.PORT || 4000;
const dbUri = process.env.MONGODB_URI ||
'mongodb://localhost/Pieces-of-History';

module.exports = { port, dbUri };
