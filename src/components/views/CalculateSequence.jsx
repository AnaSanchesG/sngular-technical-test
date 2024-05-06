import { useState } from "react";

import PropTypes from "prop-types";

import { getSequenceResult } from "../../helpers/getSequenceResult";
import { validateForm } from "../../helpers/validateForm";

import './../styles/calculateSequence.css';

export const CalculateSequence = ({ onCalculateSequence }) => {
  const [value, setValue] = useState("");

  const onChangeValue = (event) => {
    setValue(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();

    const { isError, typeError } = validateForm(value);

    let responseState = {
      value,
      sequenceResult: 0,
      isError: false,
      typeError: " ",
    };

    if (!isError) {
      const result = getSequenceResult(parseFloat(value));

      responseState = { ...responseState, sequenceResult: result };
    } else {
      responseState = { ...responseState, isError, typeError };
    }

    onCalculateSequence(responseState);
    setValue("");
  };

  return (
    <div className="d-flex justify-content-center mb-2 mt-3">
      <form action="">
        <input
          type="text"
          placeholder="Valor"
          className="form-control w-75 d-inline mt-2"
          value={value}
          onChange={onChangeValue}
        />
        <button
          type="submit"
          className="custom-btn d-inline"
          onClick={onSubmit}
        >
          =
        </button>
      </form>
    </div>
  );
};

CalculateSequence.prototypes = {
  onCalculateSequence: PropTypes.func.isRequired
};
