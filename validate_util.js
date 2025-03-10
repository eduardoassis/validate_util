class ValidateUtil {
    constructor() {        
        this._regexValidateEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    }

    emailIsValid(value) {
        return this._regexValidateEmail.test(value);
    }

    cpfIsValid(value) {
		const cpf = value.replace(/[^\d]+/g, '');
        if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) {
            return false;
        }
        let sum = 0;
        for (let i = 0; i < 9; i++) {
            sum += parseInt(cpf.charAt(i)) * (10 - i);
        }
        let remainder = 11 - (sum % 11);
        remainder = remainder === 10 || remainder === 11 ? 0 : remainder;
        if (remainder !== parseInt(cpf.charAt(9))) {
            return false;
        }
        sum = 0;
        for (let i = 0; i < 10; i++) {
            sum += parseInt(cpf.charAt(i)) * (11 - i);
        }
        remainder = 11 - (sum % 11);
        remainder = remainder === 10 || remainder === 11 ? 0 : remainder;
        return remainder === parseInt(cpf.charAt(10));
    }
}

module.exports = ValidateUtil;