import sgMail from '@sendgrid/mail';
import config from '../../config';

sgMail.setApiKey(config.sendgrid_key);

export default ({ name, email, products }) => {
	const purchashe = [];
	Object.values(products).forEach((product) => {
		purchashe.push(
			`${product.name} - R$ ${product.value} x ${product.quantity}`
		);
	});
	const msg = {
		to: { email },
		from: 'mechagamescorporation@gmail.com', // Use the email address or domain you verified above
		subject: 'Confirmed order on Mecha Games Store',
		text: 'Thank you for your purchase',
		html: `<p>Hello <strong>${name}</strong>, thank you for your purchase on Mecha Games Store!</p>
                <p>You have purchased the following items:</p>
                <ul>
                    ${purchashe.map((item) => `<li>${item}</li>`).join('')}
                </ul>
        <p>This is a automatic email. For more informations, contact: +99 99999-9999</p>`,
	};

	sgMail.send(msg).then(
		() => {},
		(error) => {
			console.error(error);

			if (error.response) {
				console.error(error.response.body);
			}
		}
	);
};
