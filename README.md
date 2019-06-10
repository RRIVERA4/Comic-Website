This is is the index so far.
<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Comic Website</title>
	<link href='https://fonts.googleapis.com/css?family=Varela+Round' rel='stylesheet' type='text/css'>
	<link href="css/reset.css" rel="stylesheet" type="text/css">
	<link rel="stylesheet" href="page.css">
	<link rel="stylesheet" href="styles.css">
</head>
	<body>
		<header>
			<h1>Comic Website</h1>
		</header>
	
            <h2>Welcome!</h2>
						<p>This is my page!</p>
		<nav>
			<ul class="container">
				<li><a href="#Home">Home</a></li>
				<li><a href="#Art Gallery">Art</a></li>
				<li><a href="#Read some comics!">Comics</a></li>
				<li><a href="#Contact Information">Contact</a></li>
				<li><a href="#Links">Resources</a></li>
			</ul>
		</nav>

		<footer>
			<p>&copy;2019 Roberto Rivera Creative.</p>
		</footer>
			</div>
			</body>
</html>			

/* This is the CSS */

body {
    line-height: 1.6;
	background: rgb(253, 184, 58);
	margin: 0;
	padding: 0;
	font-family: 'Varela Round', sans-serif;
}
	
	h2 {
		color: #ffffff;
	}

	nav {
		background-color: darkslategrey;
		text-align: center;
		padding: 1rem 0;
	}

	nav ul {
		list-style-type: none;
		margin: 0;
		padding: 0;
	  }

	  nav ul li {
		  margin: .5rem 0;
	  }

	  nav ul li a {
		  text-decoration: none;
		  color: bisque;
		  padding: .75rem;
	  }

	  nav ul li a:hover {
		  color: pink;
		  transition: color 500ms ease-in-out;
	  }

		
.container {
	width: 80%;
	margin: 0 auto;
}

a { 
	color: #3a3a3a;
}

@media only screen and (min-width: 900px) {
	nav ul li {
		display: inline;
	}
}
