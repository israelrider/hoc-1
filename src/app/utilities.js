export const validateIsDefined = value => {
	return typeof value !== 'undefined';
};

export const validateBoolean = booleanValue => {
	return typeof booleanValue === 'boolean';
};

export const validateString = (stringValue, isEmptyCheck = true) => {
	let result = typeof stringValue === 'string';

	if (isEmptyCheck) {
		return (result && !!stringValue.length);
	}

	return result;
};

export const validateInteger = integerValue => {
	return Number.isInteger(integerValue);
};

export const validateObject = objectValue => {
	return typeof objectValue === 'object' && objectValue !== null;
};

export const validateArray = (arrayValue, isEmptyCheck = true) => {
	let result = validateObject(arrayValue) && Array.isArray(arrayValue);

	if (isEmptyCheck) {
		return (result && !!arrayValue.length);
	}

	return result;
};

export const validateFunction = checkedFunction => {
	if (typeof checkedFunction === 'function') {
		return true;
	}

	console.debug('Error. The function did not pass validation. The function is ' + (checkedFunction ? checkedFunction.toString() : 'null'));

	return false;
};

export const validatePhone = phoneValue => {
	const regExpObject = RegExp('^[\\d\\s\\-]+$');
	return _validateByRegExp(phoneValue, regExpObject);
};

export const validateMachineId = phoneMachineId => {
	const regExpObject = RegExp('^[\\w]+$');
	return _validateByRegExp(phoneMachineId, regExpObject);
};

export const validateHumanName = name => {
	const regExpObject = RegExp('^[a-z]{3,}$', 'i');
	return _validateByRegExp(name, regExpObject);
};

export const validateEmail = email => {
	const regExpObject = RegExp('^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$');
	return _validateByRegExp(email, regExpObject);
};

const _validateByRegExp = (stringValue, regExpObject) => {
	if (!validateIsDefined(stringValue)) {
		return false;
	}

	stringValue = stringValue.toString();

	if (!stringValue.length) {
		return true;
	}

	if (!validateString(stringValue, false)) {
		return false;
	}

	return regExpObject.test(stringValue);
};
