
const app = require('./app');

const PORT = process.env.PORT || 4000;


async function main () {
    await app.listen(PORT);
    console.log(`App running on port ${PORT}!`);
}

main();
