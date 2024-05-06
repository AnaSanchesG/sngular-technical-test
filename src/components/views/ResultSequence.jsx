import PropTypes from "prop-types";

import "./../styles/resultSequence.css";

export const ResultSequence = ({ result }) => {
  const { value, sequenceResult, isError, typeError } = result;

  return (
    <>
      <div className="card-content">
        <div className="d-flex justify-content-center">
          <p className="title-content border-title">Prueba Sngular</p>
        </div>
        <p className="text-content mb-0 pt-3"> Resultado</p>
        <span className="text-result"> {sequenceResult ? sequenceResult : '---'}</span>
        <p className="text-content">para el valor ingresado:</p>
        <span className="text-value">{ value ? value : '---'}</span>
        {isError && <p className="error-message">{typeError}</p>}
      </div>
    </>
  );
};

ResultSequence.prototypes = {
  result: PropTypes.shape({
    value: PropTypes.number.isRequired,
    sequenceResult: PropTypes.number.isRequired,
    isError: PropTypes.bool.isRequired,
    typeError: PropTypes.string.isRequired,
  }),
};
