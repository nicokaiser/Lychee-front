import loadingBar from './main/loadingBar.js';
import csrf from './csrf_protection.js';
import $ from 'jquery';

/**
 * @description This module communicates with Lychee's API
 */

/**
 * @callback APISuccessCB
 * @param {Object} data the decoded JSON response
 * @returns {void}
 */

/**
 * @callback APIErrorCB
 * @param {XMLHttpRequest} jqXHR the jQuery XMLHttpRequest object, see {@link https://api.jquery.com/jQuery.ajax/#jqXHR}.
 * @param {Object} params the original JSON parameters of the request
 * @param {?LycheeException} lycheeException the Lychee exception
 * @returns {boolean} `true`, if the callback has already handled the error
 *                     and does not want the API layer to handle the error any
 *                     further (i.e. show an error flash);
 *                     `false`, if the API layer should handle the error, too.
 */

/**
 * @callback APIProgressCB
 * @param {ProgressEvent} event the progress event
 * @returns {void}
 */

/**
 * The main API object
 */
let api = {
	/**
	 * Global, default error handler
	 *
	 * @type {?APIErrorCB}
	 */
	onError: null,
};

/**
 * Checks whether the returned error is probably due to an expired HTTP session.
 *
 * There seem to be two variants how an expired session may be reported:
 *
 *  1. The web-application has already been loaded, is fully initialized
 *     and a user tries to navigate to another part of the gallery.
 *     In this case, the AJAX request sends the previous, expired CSRF token
 *     and the backend responds with a 419 status code.
 *  2. The user completely reloads the website (e.g. typically be hitting
 *     F5 in most browsers).
 *     In this case, the CSRF token is re-generated by the backend, so no
 *     CSRF mismatch occurs, but the user is no longer authenticated. and the
 *     backend responds with a 401 status code.
 *
 * Note, case 2 also happens if a user directly navigates to a link
 * of the form `#/album-id/` or `#/album-id/photo-id` unless the album is
 * public, but password protected.
 * In that case, the backend also sends a 401 status code, but with a
 * special "Password Required" exception which is handled specially in
 * `album.js`.
 *
 * @param {XMLHttpRequest} jqXHR the jQuery XMLHttpRequest object, see {@link https://api.jquery.com/jQuery.ajax/#jqXHR}.
 * @param {?LycheeException} lycheeException the Lychee exception
 *
 * @returns {boolean}
 */
api.hasSessionExpired = function (jqXHR, lycheeException) {
	return (
		(jqXHR.status === 419 && !!lycheeException && lycheeException.exception.endsWith("SessionExpiredException")) ||
		(jqXHR.status === 401 && !!lycheeException && lycheeException.exception.endsWith("UnauthenticatedException"))
	);
};

/**
 *
 * @param {string} fn
 * @param {Object} params
 * @param {?APISuccessCB} successCallback
 * @param {?APIProgressCB} responseProgressCB
 * @param {?APIErrorCB} errorCallback         called if the request fails;
 *                                            the callback should return `true`,
 *                                            if the callback has already
 *                                            handled the error and does not
 *                                            want the API layer to handle the
 *                                            error any further
 *                                            (i.e. show an error flash),
 *                                            the callback should return `false`,
 *                                            if the API layer should handle
 *                                            the error, too.
 * @returns {void}
 */
api.post = function (fn, params, successCallback = null, responseProgressCB = null, errorCallback = null) {
	loadingBar.show();

	/**
	 * The success handler
	 * @param {Object} data the decoded JSON object of the response
	 */
	const successHandler = (data) => {
		setTimeout(loadingBar.hide, 100);
		if (successCallback) successCallback(data);
	};

	/**
	 * The error handler
	 * @param {XMLHttpRequest} jqXHR the jQuery XMLHttpRequest object, see {@link https://api.jquery.com/jQuery.ajax/#jqXHR}.
	 */
	const errorHandler = (jqXHR) => {
		/**
		 * @type {?LycheeException}
		 */
		const lycheeException = jqXHR.responseJSON;

		if (errorCallback) {
			let isHandled = errorCallback(jqXHR, params, lycheeException);
			if (isHandled) {
				setTimeout(loadingBar.hide, 100);
				return;
			}
		}
		// Call global error handler for unhandled errors
		api.onError(jqXHR, params, lycheeException);
	};

	let ajaxParams = {
		type: "POST",
		url: "api/" + fn,
		contentType: "application/json",
		data: JSON.stringify(params),
		dataType: "json",
		headers: {
			"X-XSRF-TOKEN": csrf.getCSRFCookieValue(),
		},
		success: successHandler,
		error: errorHandler,
	};

	if (responseProgressCB !== null) {
		ajaxParams.xhrFields = {
			onprogress: responseProgressCB,
		};
	}

	$.ajax(ajaxParams);
};

/**
 * Given a URL return the text raw content of the file.
 *
 * @param {string} url
 * @param {APISuccessCB} callback
 * @returns {void}
 */
api.getRawContent = function (url, callback) {
	loadingBar.show();

	/**
	 * The success handler
	 * @param {Object} data the decoded JSON object of the response
	 */
	const successHandler = (data) => {
		setTimeout(loadingBar.hide, 100);

		callback(data);
	};

	/**
	 * The error handler
	 * @param {XMLHttpRequest} jqXHR the jQuery XMLHttpRequest object, see {@link https://api.jquery.com/jQuery.ajax/#jqXHR}.
	 */
	const errorHandler = (jqXHR) => {
		api.onError(jqXHR, {}, null);
	};

	$.ajax({
		type: "GET",
		url: url,
		data: {},
		dataType: "text",
		headers: {
			"X-XSRF-TOKEN": csrf.getCSRFCookieValue(),
		},
		success: successHandler,
		error: errorHandler,
	});
};

export default api;
