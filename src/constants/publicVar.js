const endpoint = {
	securedScheme: 'https://',
	unSecuredScheme: 'http://',
	// domain: '170.168.21.54',
	domain: 'www.pse-screener.com',
	restTokenUrlPath: '/oauth/token',
	client_id: '1',
	client_secret: 'GgAUZzLYJ5nrdY9Q1R4SGnbvFSlbJk5HzdMEiXBb',

	getUnsecuredEndpointWithIndex: function() {
		return this.unSecuredScheme.concat(this.domain);
	},
	getUnsecuredEndpointWithoutIndex: function() {
		return this.unSecuredScheme.concat(this.domain);
	},
	getUnsecuredRESTWithoutIndex: function() {
		return this.unSecuredScheme.concat(this.domain, this.restTokenUrlPath);
	},
	getUnsecuredAdminDomainAndPath: function() {
		return 'http://' + this.domain + '/admin';
	},
	gotoUnsecuredLogin: function() {
		return this.unSecuredScheme.concat(this.domain, '/public/#/login');
	}
}

export default endpoint;