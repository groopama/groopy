import { connect } from 'react-redux';
import Glycemie from '../components/Glycemie';
import { toggleMealModal, toggleMeasureModal, closeMealModal, closeMeasureModal } from '../actions/appActions';

const mapStateToProps = (state, ownProps) => ({
    showMeasureModal: state.appReducer.showMeasureModal,
    showMealModal: state.appReducer.showMealModal
});

const mapDispatchToProps = (dispatch) => ({
    toggleMeasureModal: () => dispatch(toggleMeasureModal()),
    toggleMealModal: () => dispatch(toggleMealModal()),
    closeMeasureModal: () => dispatch(closeMeasureModal()),
    closeMealModal: () => dispatch(closeMealModal())
});

const GlycemieContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Glycemie);

export default GlycemieContainer;