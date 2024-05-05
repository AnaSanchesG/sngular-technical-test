import PropTypes from 'prop-types';
import { getSequenceResult } from '../../helpers/getSequenceResult';

export const CalculateSeries = ({onCalculateSeries}) => {

  const testNumber = 0;
  console.log(`Número prueba: ${testNumber}`)
  console.log(`Resultado: ${getSequenceResult(testNumber)}`);
  return (
    <div className='d-flex justify-content-center'>CalculateSeries</div>
  )
}

CalculateSeries.prototypes = {
    onCalculateSeries: PropTypes.func.isRequireds
}
  