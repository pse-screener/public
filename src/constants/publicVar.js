const endpoint = {
	restTokenUrlPath: '/oauth/token',
	client_id: '1',
	client_secret: 'GgAUZzLYJ5nrdY9Q1R4SGnbvFSlbJk5HzdMEiXBb',

	sitekey: '6LfmBQcUAAAAAC8CQopKjGeRqlexZbrbtNfPU_5i', // Recaptcha

	getEndpoint: function() {
		return API_URL;
	},
	getRestTokenUrlPath: function() {
		return API_URL.concat(this.restTokenUrlPath);
	},
	gotoLoginPage: function() {
		return API_URL.concat('/public/#/login');
	}
}

export default endpoint;