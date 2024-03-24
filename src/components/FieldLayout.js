import { Component } from 'react';
import PropTypes from 'prop-types';

import { PLAYER } from '../constants';

export class FieldLayout extends Component {
	render() {
		const { field, onClick } = this.props;
		return (
			<>
				<div className="flex flex-wrap justify-center items-center bg-black my-0 mx-auto w-64 h-64">
					{field.map((item, index) => (
						<button
							key={index}
							className="w-20 h-20 m-0.5 border-black cursor-pointer bg-sky-200 text-black text-6xl"
							onClick={() => onClick(index)}
						>
							{item}
						</button>
					))}
				</div>
			</>
		);
	}
}

FieldLayout.propTypes = {
	onClick: PropTypes.func,
	field: PropTypes.arrayOf(PropTypes.oneOf(Object.values(PLAYER))).isRequired,
};
