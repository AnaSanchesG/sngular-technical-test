import PropTypes from "prop-types";

import "./../styles/resultSequence.css";

export const ResultSequence = ({ result }) => {

  const { value, sequenceResult, isError, typeError } = result;

  return (
    <>
      <div className="card-content">
        <h1 className="title-content">Prueba Sngular</h1>
        <p className="text-content"> Resultado</p>
        <span> {sequenceResult}</span>
        <p className="d-flex justify-content-center">
          para el valor <span>{value}</span>
        </p>
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
