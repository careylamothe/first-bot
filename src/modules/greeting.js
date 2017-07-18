//get user data throuch Slack users.info APi

const https = require('https');

const options = {
  host   : 'http://localhost:3978/api/messages',
  method : 'GET',
  path   : 'https://slack.com/api/users.info'
};

const req = https.request(options, (res)=> {
  console.log('headers', res.headers);
})
https.get(options, function(res) {
  console.log('statusCode:', res.statusCode);
  console.log('headers', res.headers);

  res.on('data', function(d) {
    process.stdout.write(d) {
    });
    
  }).on('error', function(e) {
    console.error(e);
  });
});
