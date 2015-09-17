<html>
<head>
	<title>Featured Images</title>
</head>
<body>
	<h1>Featured Images</h1>
	<ul>
	{% for image in images %}
		<li>
			<img src="{{ image.sizes.thumb_small.img }}" alt="{{image.description}}" /><br />
			{{ image.description }}<br />
			by {{ image.submitter }}<br />
		</li>
	{% endfor %}
	</ul>
</body>
</html>