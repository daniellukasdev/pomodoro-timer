import React from "react";
import PropTypes from "prop-types"
import { minutesToDuration, secondsToDuration } from "../utils/duration"

export default function Session({ session, currentDuration, isPaused }) {
    if (!session) return null;
    // calculates what percent of currentDuration in seconds that the time remaining is
    // then is subtracted from 100 to get the difference
    const valueNow =(100 - ((session?.timeRemaining / (currentDuration *60)) * 100))
        
    return (
        <div>
        {/* TODO: This area should show only when there is an active focus or break - i.e. the session is running or is paused */}
        <div className="row mb-2">
          <div className="col">
            {/* TODO: Update message below to include current session (Focusing or On Break) total duration */}
            <h2 data-testid="session-title">
              {session?.label} for {minutesToDuration(currentDuration)} minutes
            </h2>
            {/* TODO: Update message below correctly format the time remaining in the current session */}
            <p className="lead" data-testid="session-sub-title">
            {secondsToDuration(session?.timeRemaining)} remaining
            </p>
            {/* Renders when paused */}
            <h3>
              {isPaused ? "PAUSED" : ""}
              </h3>
          </div>
        </div>
        <div className="row mb-2">
          <div className="col">
            <div className="progress" style={{ height: "20px" }}>
              <div
                className="progress-bar"
                role="progressbar"
                aria-valuemin="0"
                aria-valuemax="100"
                aria-valuenow={valueNow} // TODO: Increase aria-valuenow as elapsed time increases
                style={{ width: `${valueNow}%` }} // TODO: Increase width % as elapsed time increases
              />
            </div>
          </div>
        </div>
      </div>
    )
}

Session.propTypes = {
  session: PropTypes.object, 
  currentDuration: PropTypes.number.isRequired, 
  isPaused: PropTypes.bool,
}