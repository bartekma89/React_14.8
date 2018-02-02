var App = React.createClass({
	render: function() {

		var url = 'https://giphy.com';

		var styles = {
			margin: '0 auto',
			textAlign: 'center',
			width: '90%'
		};

		return (
				<div>
					<h1>Wyszukiwarka GIFów!</h1>
					<p>Znajdź gify na <a href={url}>giphy</a>. Naciśnij enter, aby pobrac kolejne gify</p>
					<Search />
					<Gif />
				</div>
			)
	}
})