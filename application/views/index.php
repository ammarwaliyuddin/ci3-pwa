<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="manifest" href="manifest.json">
	<meta name="apple-mobile-web-app-status-bar" content="#aa7700">
	<meta name="theme-color" content="black">

	<title>Document</title>
</head>

<body>
	online bos

</body>
<script src="assets/js/jquery.min.js"></script>
<script>
	if ('serviceWorker' in navigator) {
		window.addEventListener('load', function() {
			navigator.serviceWorker.register('serviceworker.js').then(function(registration) {
				// Registration was successful
				console.log('ServiceWorker registration successful with scope: ', registration.scope);
			}, function(err) {
				// registration failed :(
				console.log('ServiceWorker registration failed: ', err);
			});
		});
	}

	// function checkconnection() {
	// 	var status = navigator.onLine;
	// 	if (!status) {
	// 		$(location).attr('href', 'assets/');
	// 	}
	// }
	// checkconnection()
</script>

</html>