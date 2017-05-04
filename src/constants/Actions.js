import keyMirror from 'keymirror';

export default keyMirror({
	CHANGE_EVENT: null,

	// registration actions
	GET_PROVINCES: null,
	GET_CITIES: null,

	// login actions
	LOGIN: null,
	STORE_ACCESS_TOKEN: null,
	LOGIN_ERROR: null,

	// forgot password
	FORGOT_PASSWORD_ERROR: null,
	FORGOT_PASSWORD_RESET_DONE: null,
	FORGOT_PASSWORD_RESET_DONE_ERROR: null,

	// Generic error message
	ERROR_NO: null,

	SUCCESS_REGISTRATION: null,
});