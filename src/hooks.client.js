import * as Sentry from '@sentry/sveltekit';
import * as Spotlight from '@spotlightjs/spotlight';

Sentry.init({
	dsn: '___DSN___',
	tracesSampleRate: 1.0
	// ...your Sentry options
});

export const handleError = Sentry.handleErrorWithSentry();

if (import.meta.env.DEV) {
	Spotlight.init({
		injectImmediately: true
	});
}
