import PropTypes from 'prop-types';

export const Resultseries = ({result}) => {

  const {value, isError, typeError} = result;

  return (
    <>
    <div className='d-flex justify-content-center'>Valor{value}</div>
    {isError && <div className='error-message'>{typeError}</div>}
    </>
  )
};

Resultseries.prototypes = {
  result: PropTypes.shape({
    value: PropTypes.number.isRequired,
    isError: PropTypes.bool.isRequired
  })
}
