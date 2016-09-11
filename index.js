var validate_util = {};

validate_util = function() {
	this._regexValidateName = /^(?:(?:[A-ZÁÉÍÓÚÀÂÊÔÃÕÜÇ]{1}[a-záéíóúàâêôãõüç]+))$/;
	this._regexValidateLastName = /^(?:(?:[A-ZÁÉÍÓÚÀÂÊÔÃÕÜÇ]{1}[a-záéíóúàâêôãõüç]+))$/;
    this._regexValidateAge = /^\d+$/;
	this._regexValidateEmail = /^(?:[a-z._]+)@(?:(?:[a-z]+)(?:|\.|))+(?:[a-z]+)$/;
	this._regexValidateCpf = /^(?:\d{3})(?:|\.|)(?:\d{3})(?:|\.|)(?:\d{3})(?:|-|)(?:\d{2})$/;
};

validate_util.prototype.firstNameIsValid = function(value) {
	return this._regexValidateName.exec(value) === null ? false : true;
};

validate_util.prototype.lastNameIsValid = function(value) {
	return this._regexValidateLastName.exec(value) === null ? false : true;
};

validate_util.prototype.ageIsValid = function(value) {
   return this._regexValidateAge.exec(value) === null ? false : true;
};

validate_util.prototype.emailIsValid = function(value) {
   return this._regexValidateEmail.exec(value) === null ? false : true;
};

validate_util.prototype.cpfIsValid = function(value) {
   return this._regexValidateCpf.exec(value) === null ? false : true;
};

module.exports = validate_util;