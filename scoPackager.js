var scopackager = require('simple-scorm-packager');
var path = require('path');

  const config = {
    version: '1.2',
    organization: 'AMAR',
    title: 'Generalidades - Parte 1',
    language: 'en-ES',
    masteryScore: 100,
    startingPage: 'index.html',
    source: path.join(__dirname, 'build'),
    package: {
      version: process.env.npm_package_version,
      zip: false,
      author: 'IUSH',
      outputFolder: path.join(__dirname, 'scorm_packages'),
      description: 'Generalidades - Parte 1',
      keywords: ['scorm', 'test', 'course'],
      typicalDuration: 'PT0H5M0S',
      rights: `©${new Date().getFullYear()} AMAR`,
      vcard: {
        author: 'AMAR',
        org: 'AMAR',
        tel: '(000) 000-0000',
        address: 'my address',
        mail: 'my@email.com',
        url: 'https://mydomain.com'
      }
    }
  };

  scopackager(config, function(msg){
    console.log(msg);
    process.exit(0);
  });
