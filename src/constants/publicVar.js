const endpoint = {
	securedScheme: 'https://',
	unSecuredScheme: 'http://',
	domain: '192.168.254.5',
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