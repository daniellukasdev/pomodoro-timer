import React from "react";
import PropTypes from "prop-types"


export default function IncreaseDecreaseBtn({ handleIncreaseDecrease, dataTestID, disabled, className }) {
  /* TODO: Implement decreasing focus duration and disable during a focus or break session */
  return (
    <>
      <button
        type="button"
        className="btn btn-secondary"
        data-testid={`${dataTestID}`}
        onClick={handleIncreaseDecrease}
        disabled={disabled}
      >
        <span className={`${className}`} />
      </button>
    </>
  );
}

IncreaseDecreaseBtn.propTypes = {
  handleIncreaseDecrease: PropTypes.func.isRequired,
  dataTestID: PropTypes.string.isRequired,
  disabled: PropTypes.object,
  className: PropTypes.string,
}