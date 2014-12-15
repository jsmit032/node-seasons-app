var cluster = require('cluster'),
    numCPUs = require('os').cpus().length;

if (cluster.isMaster) {

  console.log('I am the master');

  for(var i=0; i<numCPUs; i++) {
    cluster.fork();
  }
  
  cluster.on('exit', function() {
    cluster.fork();
  });
}
else {
  require('./server.js')
}