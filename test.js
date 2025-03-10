var assert = require('assert');
var ValidateUtil = require('./validate_util');

/**
 *  This test suite is meant to be run through gulp (use the `npm run watch`)
 *  script. It will provide you useful feedback
 */
describe('ValidateUtil(', function() {
  var succeeded = 0;
  describe('Email', function(){

    describe('has a valid email', function() {
      it('because it has a capital letter', function() {
        const email = "Email@test.br";
        assert.equal(new ValidateUtil().emailIsValid(email), true);
      });

      it('because it has an underscore', function() {

        var email = "email_test@test.br";
        assert.equal(new ValidateUtil().emailIsValid(email), true);

      });

      it('because it does not have an underscore', function() {

        var email = "email@test.br";
        assert.equal(new ValidateUtil().emailIsValid(email), true);

      });

    });

    describe('has an invalid e-mail', function() {

      it('because it is in the wrong format', function() {
        var email = "email@test.";
        assert.equal(new ValidateUtil().emailIsValid(email), false);
      });

      it('because it is in the wrong format', function() {
        var email = "email.test";
        assert.equal(new ValidateUtil().emailIsValid(email), false);
      });

    });

  });

  describe('CPF', function() {
  	
    describe('cpfIsValid()', ()=> {
      
      it('has a valid CPF', function() {
        const cpf = '205.784.436-60';
        assert.equal(new ValidateUtil().cpfIsValid(cpf), true);
      });

      it('has an invalid CPF', function() {
        const cpf = '205.784.436-61';
        assert.equal(new ValidateUtil().cpfIsValid(cpf), false);
      });

      it('has a valid CPF without punctuation', function() {
          const cpf = '20578443660';
          assert.equal(new ValidateUtil().cpfIsValid(cpf), true);
      });

      it('has an invalid CPF with repeated digits', function() {
          const cpf = '111.111.111-11';
          assert.equal(new ValidateUtil().cpfIsValid(cpf), false);
      });

      it('has an invalid CPF with incorrect length', function() {
          const cpf = '205.784.436';
          assert.equal(new ValidateUtil().cpfIsValid(cpf), false);
      });
  
    });


  });
});