const endpoint = {
	securedScheme: 'https://',
	unSecuredScheme: 'http://',
	domain: 'www.pse-screener.com',
	domainWithIndex: 'www.pse-screener.com/index.php',

	restTokenUrl: 'www.pse-screener.com',
	restTokenUrlPath: '/oauth/token',
	client_id: '1',
	client_secret: 'GgAUZzLYJ5nrdY9Q1R4SGnbvFSlbJk5HzdMEiXBb',

	// adminDomainAndPath: 'http://127.0.0.1:8000/#/app',
	adminDomainAndPath: 'http://www.pse-screener.com/admin',

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