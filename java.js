const form = document.getElementById('contact-form');

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
	event.preventDefault();
	const name = document.getElementById('name').value;
	const email = document.getElementById('email').value;
	const phone = document.getElementById('phone').value;
	const subject = document.getElementById('subject').value;
	const department = document.getElementById('department').value;
	const message = document.getElementById('message').value;
	console.log(`Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nSubject: ${subject}\nDepartment: ${department}\nMessage: ${message}`);
	form.reset();
}
