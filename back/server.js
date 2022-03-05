const cors = require('cors');
const path = require('path');

const app = require('./setup-express');
const routes = require('./routes');
const { PORT = 7070 } = require('./config');

app.use(cors());
app.use('/api', routes);
app.use('*', (_, res) => {
	res.sendFile(path.join(__dirname, './public/', 'index.html'));
});

app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));

module.exports = {
	app
};
