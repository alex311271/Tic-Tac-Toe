import { Component } from 'react';
import PropTypes from 'prop-types';
import { Field } from './Field';
import { Information } from './Information';

export class AppLayout extends Component {
	render() {
		const { handleRestart, handleCellClick } = this.props;
		return (
			<div className="flex flex-col items-center justify-around h-full p-14">
				<Information />
				<Field handleCellClick={handleCellClick} />
				<button
					className="w-40 h-10 bg-teal-200 cursor-pointer text-lg font-semibold m-5 border-solid border-black border-2"
					data-id={'reset'}
					onClick={handleRestart}
				>
					Начать заново
				</button>
			</div>
		);
	}
}

AppLayout.propTypes = {
	handleRestart: PropTypes.func,
	handleCellClick: PropTypes.func,
};
