import React from "react";
import classNames from "../utils/class-names";
import PropTypes from "prop-types"

export default function PlayPauseBtn({ playPause, isTimerRunning }) {
    return (
        <>
        <button
              type="button"
              className="btn btn-primary"
              data-testid="play-pause"
              title="Start or pause timer"
              onClick={playPause}
            >
              <span
                className={classNames({
                  oi: true,
                  "oi-media-play": !isTimerRunning,
                  "oi-media-pause": isTimerRunning,
                })}
              />
            </button>
        </>
    )
}

PlayPauseBtn.propTypes = {
  playPause: PropTypes.func.isRequired,
  isTimerRunning: PropTypes.bool.isRequired,
}