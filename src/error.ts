
export class WebError extends Error {

	constructor(public message: string,
				public code?: string,
				public statusCode?: number,
				public errors?: any) {
		super(code);
		this.name = this.constructor.name;
	}

	static badRequest (message: string, code?: string, stack?: any) {
		return new WebError('Bad request', code || 'bad_request', 400, stack);
	}

	static unauthorized (message: string, code?: string) {
		return new WebError('Bad request', code || 'unauthorized', 401);
	}

	static notFound (message: string, code?: string) {
		return new WebError('Not found', code || 'not_found', 404);
	}

	static forbidden (message: string, code?: string) {
		return new WebError('Forbidden', code || 'forbidden', 403);
	}

	static internalServerError() {
		return new WebError('We messed up.', 'internal_server_error', 500);
	}

	static createValidationError (stack) {
		return this.badRequest('Validation failed', 'validation_error', stack)
	}
}
