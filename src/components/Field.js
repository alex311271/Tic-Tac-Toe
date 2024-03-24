import PropTypes from 'prop-types';
import { Component } from 'react';
import { connect } from 'react-redux';
import { FieldLayout } from './FieldLayout';
import { selectField } from '../selectors/index';
import { PLAYER } from '../constants';

export class FieldContainer extends Component {
	render() {
		return <FieldLayout onClick={this.props.handleCellClick} field={this.props.field} />;
	}
}

const mapStateToProps = (state) => ({
	field: selectField(state),
});

export const Field = connect(mapStateToProps)(FieldContainer);

FieldContainer.propTypes = {
	field: PropTypes.arrayOf(PropTypes.oneOf(Object.values(PLAYER))).isRequired,
};
