var request = require('supertest');

var app = require('../app');


describe('GET /', function(){
  it('respond with html', function(done){
    request(app)
      .get('/')
      .set('Accept', 'text/html')
      .expect('Content-Type', /html/)
      .expect(200, done);
  })
})



describe('POST /api', function(){
  it('respond with json', function(done){
    request(app)
      .post('/api')
      .send({username: "Josh Diaz", email: "iAreAwesome@gmail.com"})
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect({username: "Josh Diaz", email: "iAreAwesome@gmail.com"})
      .expect(200, done);
  })
})
