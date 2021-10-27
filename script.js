const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

// Show input error message
function showError(input, message) {
	const formControl = input.parentElement;
	formControl.className = 'form-control error';

	const small = formControl.querySelector('small');
	small.innerText = message;
}

//show success outline
function showSuccess(input, message) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}

// Check email is valid
function checkEmail(emailInput) {
	const re =
		/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	console.log(email);
	if (re.test(emailInput.value.trim())) {
		showSuccess(emailInput);
	} else {
		showError(emailInput, 'Email is not valid');
	}
}

// Check required fields
function checkRequired(inputArr) {
	inputArr.forEach(function (input) {
		if (input.value.trim() === '') {
			showError(input, `${getFieldName(input)} is required`);
		} else {
			showSuccess(input);
		}
	});
}

function checkLength(input, min, max) {
	if (input.value.length < min) {
		console.log(input.value.length);
		showError(
			input,
			` ${getFieldName(input)} must be at least ${min} character`
		);
	} else if (input.value.length > max) {
		showError(
			input,
			`${getFieldName(input)} must be at less than  ${max} character`
		);
	} else {
		showSuccess(input);
	}
}

// Get field name
function getFieldName(input) {
	return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

function checkPasswordMatch(input1, input2) {
	if (input1.value !== input2.value) {
		showError(input2, `password are not the same`);
		console.log(input2.value.length);
		console.log(input2.value);
	}
}

// Event listeners
form.addEventListener('submit', function (e) {
	e.preventDefault();

	checkRequired([username, email, password, password2]);

	checkLength(username, 3, 15);
	checkPasswordMatch(password, password2);
	checkLength(password, 6, 25);
	checkEmail(email);

	// old Code
	// if (username.value === '') {
	// 	console.log(username.value);
	// 	showError(username, 'username is required');
	// } else {
	// 	showSuccess(username);
	// }

	// if (email.value === '') {
	// 	showError(email, 'Email is required');
	// } else if (!isValidEmail(email.value)) {
	// 	showError(email, 'Email is not valid');
	// } else {
	// 	showSuccess(email);
	// }

	// if (password.value === '') {
	// 	showError(password, 'Password is required');
	// } else {
	// 	showSuccess(password);
	// }

	// if (password.value === '') {
	// 	showError(password, 'Password is required');
	// } else {
	// 	showSuccess(password);
	// }
});
