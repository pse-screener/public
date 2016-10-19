const endpoint = {
	securedScheme: 'https://',
	unSecuredScheme: 'http://',
	domain: '10.52.7.90',
	domainWithIndex: '10.52.7.90/index.php',

	restTokenUrl: '10.52.7.90',
	restTokenUrlPath: '/oauth/token',
	client_id: '1',
	client_secret: 'GgAUZzLYJ5nrdY9Q1R4SGnbvFSlbJk5HzdMEiXBb',

	// adminDomainAndPath: 'http://127.0.0.1:8000/#/app',
	adminDomainAndPath: 'http://10.52.7.90/admin',

	getUnsecuredEndpointWithIndex: function() {
		return this.unSecuredScheme.concat(this.domain);
	},
	getUnsecuredEndpointWithoutIndex: function() {
		return this.unSecuredScheme.concat(this.domain);
	},
	getUnsecuredRESTWithoutIndex: function() {
		return this.unSecuredScheme.concat(this.restTokenUrl, this.restTokenUrlPath);
	},
	getUnsecuredAdminDomainAndPath: function() {
		return this.adminDomainAndPath;
	},
	gotoUnsecuredLogin: function() {
		return this.unSecuredScheme.concat(this.domain, '/public/#/login');
	}
}

export default endpoint;