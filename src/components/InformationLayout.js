import { Component } from 'react';
import PropTypes from 'prop-types';

export class InformationLayout extends Component {
	render() {
		return (
			<>
				<p className="text-2xl font-semibold m-5 text-sky-400 ">
					{this.props.textInformation}
				</p>
			</>
		);
	}
}

InformationLayout.propTypes = {
	textInformation: PropTypes.string,
};