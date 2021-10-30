import React from "react";
import PropTypes from "prop-types"

export default function StopBtn({ session, handleStop }){
  // TODO: Implement stopping the current focus or break session. and disable the stop button when there is no active session
  // TODO: Disable the stop button when there is no active session 
    return (
        <>
            <button
              type="button"
              className="btn btn-secondary"
              data-testid="stop"
              title="Stop the session"
              disabled={!session}
              onClick={handleStop}
            >
              <span className="oi oi-media-stop" />
            </button>
        </>
    )
}

StopBtn.propTypes = {
  session: PropTypes.object,
  handleStop: PropTypes.func.isRequired,
}