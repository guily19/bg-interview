'use strict';

const chai = require('chai');
const expect = require('chai').expect;

chai.use(require('chai-http'));

const app = require('../index.js'); // Our app

describe('API endpoint /', function() {
  this.timeout(5000); // How long to wait for a response (ms)

  // GET - redirect to the land-page
  it('should redirect to the land-page', function() {
    return chai.request(app)
      .get('/')
      .end((err, res) => {
        res.should.redirectTo('https://keen-noether-d8b69f.netlify.com');
        done();
    });
  });
});

describe('API endpoint /search', function() {
  this.timeout(5000); // How long to wait for a response (ms)

  // GET - return a URL of the search
  it('should return a URL', function() {
    return chai.request(app)
      .get('/search?q=boatsgroup')
      .then(function(res) {
        expect(res).to.have.status(200);
        expect(res).to.be.string;
        expect(res.body).to.be.an('object');
      });
  });

  // GET - error ther is no parameter
  it('should return Not Found', function() {
    return chai.request(app)
      .get('/search')
      .then(function(res) {
        expect(res).to.have.status(500);
      })
  });

});