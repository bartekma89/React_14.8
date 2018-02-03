var GIPHY_LOADING_URL = 'https://mir-s3-cdn-cf.behance.net/project_modules/disp/afb8cb36197347.5713616457ee5.gif';

Gif = React.createClass({
	
	getURL: function () {
			return this.props.sourceUrl || GIPHY_LOADING_URL
		},

	render: function() {
		var url = this.props.loading? GIPHY_LOADING_URL : this.props.url;

		return (
				<div>
					<a href={this.getURL} alt='view this on githy' target='new'>
						<img 
							id='gif' 
							src={url}
							style={{maxWidth:'350px', width:'100%'}}
						/>
					</a>
				</div>
			)
	}	
})