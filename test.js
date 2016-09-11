var assert = require('assert');
var validate_util = require('./validate_util');

/**
 *  This test suite is meant to be run through gulp (use the `npm run watch`)
 *  script. It will provide you useful feedback
 */
describe('Validate Util', function() {
  var succeeded = 0;

  describe('First name', function() {

    it('has a valid first name', function() {
      var name = "João";
      assert.equal(new validate_util().firstNameIsValid(name), true);

    });

    describe('has an invalid fisrt name', function() {

      it('because it contains two or more names', function() {
        var name = "Eduardo Assis";
        assert.equal(new validate_util().firstNameIsValid(name), false);
      });
      
      it('because it contains number', function() {
        var name = "3duardo";
        assert.equal(new validate_util().firstNameIsValid(name), false);
      });

      it('because it contains invalid caracter', function() {
        var name = "Edu@rdo";
        assert.equal(new validate_util().firstNameIsValid(name), false);
      });

    });


  });

  describe('Last name', function() {
    
    it('has a valid last name', function() {
      
      var lastName = "Silva";
      assert.equal(new validate_util().lastNameIsValid(lastName), true);

    });

    describe('has an invalid last name', function() {
      
      it('because it contains two or more names', function() {
        
        var lastName = "Assis da Silva";
        assert.equal(new validate_util().lastNameIsValid(lastName), false);

      });

      it('because it contains number', function() {

        var lastName = "S1lva";
        assert.equal(new validate_util().lastNameIsValid(lastName), false);

      });

      it('because it contains invalid caracter', function() {
        var lastName = "S!lv@";
        assert.equal(new validate_util().lastNameIsValid(lastName), false);
      });



    });


  });

  describe('Email', function(){

    describe('has a valid email', function() {
    
      it('With underscore', function() {

        var email = "email_test@test.br";
        assert.equal(new validate_util().emailIsValid(email), true);

      });

      it('Without underscore', function() {

        var email = "email@test.br";
        assert.equal(new validate_util().emailIsValid(email), true);

      });

    });

    describe('has an invalid e-mail', function() {

      it('because it has a capital letter', function() {
        var email = "Email@test.br";
        assert.equal(new validate_util().emailIsValid(email), false);
      });

      it('because it is in the wrong format', function() {
        var email = "email@test.";
        assert.equal(new validate_util().emailIsValid(email), false);
      });

      it('because it is in the wrong format', function() {
        var email = "email.test";
        assert.equal(new validate_util().emailIsValid(email), false);
      });

    });

  });

  describe('CPF', function() {
  	
  	it('has a valid CPF', function() {
  		
  		var cpf = '205.784.436-60';
  		assert.equal(new validate_util().cpfIsValid(cpf), true);

  	});

  	it('has an invalid CPF', function() {

  		var cpf = '205.784.436-61';
  		assert.equal(new validate_util().cpfIsValid(cpf), true);

  	});

  });

  describe('Age', function() {
  	
  	it('has a valid age', function() {
  		
  		var age = 11;
  		assert.equal(new validate_util().ageIsValid(age), true);

  	});

  	it('has an invalid age', function() {
  		
  		var age = "a";
  		assert.equal(new validate_util().ageIsValid(age), false);

  	});

  });

});