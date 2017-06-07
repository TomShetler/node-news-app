# News App

This is a simple node based app to get current news from the NYT's API. It makes use of the **yargs** and **request** modules.

To run this program:
------
1. Clone/download the source files
2. Run `npm install` to download dependencies
3. Go to https://developer.nytimes.com/ and sign up for a developer key
4. Replace "YOUR API KEY HERE" in `news.js`
5. Run `node app.js -c world -n 2`
6. The example will show 2 articles from the "World" category


TO-DOS
***
1. Create GUI for cleaner user interaction
2. Create express-based server to host on Heroku
3. Consider using promise-based requests
4. Add more error checking (callbacks)
