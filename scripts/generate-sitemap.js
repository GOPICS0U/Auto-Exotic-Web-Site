const { SitemapStream, streamToPromise } = require('sitemap');
const { createWriteStream } = require('fs');

const sitemap = new SitemapStream({ hostname: 'https://autoexotic-website.netlify.app/' });
[
  '', 'nos_services.html', 'equipe.html', 'recrutement.html', 'galerie.html', 'contact.html'
].forEach(page => sitemap.write({ url: '/' + page }));

sitemap.end();
streamToPromise(sitemap).then(sm =>
  createWriteStream('sitemap.xml').end(sm)
);
