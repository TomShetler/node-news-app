const yargs = require('yargs');
const news = require('./news');

const argv = yargs
    .options({
        c: {
            demand: true,
            alias: 'category',
            description: 'choose what category to view news for',
            string: true
        },
        n: {
            demand: true,
            alias: 'number',
            description: 'how many articles to output',
            number: true
        }
    })
    .help()
    .alias('help', 'h')
    .argv;

    news.getNews(argv.category, argv.number, (errorMessage, results) => {
        if (errorMessage) {
     console.log(errorMessage);
        } else {
            console.log(results);
        }
    });

    
