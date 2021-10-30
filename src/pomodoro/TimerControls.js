import React from "react";
import StopBtn from "./StopBtn"
import PlayPauseBtn from "./PlayPauseBtn";
import PropTypes from "prop-types"

export default function TimerControls({ playPause, session, isTimerRunning, handleStop }) {
    return (
        <div className="row">
        <div className="col">
          <div
            className="btn-group btn-group-lg mb-2"
            role="group"
            aria-label="Timer controls"
          >
            <PlayPauseBtn playPause={playPause} isTimerRunning={isTimerRunning} />
            <StopBtn session={session} handleStop={handleStop} />
          </div>
        </div>
      </div>
    );
}

TimerControls.propTypes = {
  playPause: PropTypes.func,
  session: PropTypes.object,
  isTimerRunning: PropTypes.bool.isRequired,
  handleStop: PropTypes.func.isRequired,
}