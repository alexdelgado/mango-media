import jQuery  from 'jquery';

jQuery(document).ready(function($) {
	var submitting = false;

	$('form').on('submit', function(e) {
		e.preventDefault();

		if (document.contact.password.value || submitting) {
			return;
		}

		submitting = true;

		console.log('submitting', document.contact);

		$.post(
			'https://docs.google.com/forms/u/0/d/e/1FAIpQLSccjVorMfixs0ySypsy6Hc9N8YR9x0Cd6whDlRWNc-PhSVyFw/formResponse',
			{
				'emailAddress': document.contact.email.value,
				'entry.533500932': document.contact.name.value,
				'entry.1465951199': document.contact.message.value
			}
		)
			.done(function( data ) {
				alert( "Data Loaded: " + data );
			});
	});
});
