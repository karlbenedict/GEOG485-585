<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" 
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
	<head>
		<meta http-equiv="Content-Type" content="text/html;charset=utf-8" />
		<title>This is a simple web page with Javascript</title>
		<script type="text/javascript">
			function genericAlert() {
				alert("You just did something ...")
				document.getElementById("clickMe").style.color = "red"
			}
		</script>
	</head>
	<body>
		<h1>They don't get any simpler than this!</h1>
		<p>OK, not much simpler than this.</p>
		<p>Hello World?</p>
		<p id="clickMe" onclick="genericAlert();">What happens when you click me?</p>
	</body>
</html>
