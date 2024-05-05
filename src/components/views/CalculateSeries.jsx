import PropTypes from 'prop-types';

export const CalculateSeries = ({onCalculateSeries}) => {
  return (
    <div className='d-flex justify-content-center'>CalculateSeries</div>
  )
}

CalculateSeries.prototypes = {
    onCalculateSeries: PropTypes.func.isRequireds
}
  