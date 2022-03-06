const path = require('path');

// Setup express App
const app = require('./setup-express');
const routes = require('./routes');
const { PORT = 7070 } = require('./config');

// Setup api routes
app.use('/api', routes);

// Setup static files
app.use('*', (_, res) => {
	res.sendFile(path.join(__dirname, './public/', 'index.html'));
});

app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));

module.exports = {
	app
};
