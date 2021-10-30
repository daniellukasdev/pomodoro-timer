import React from "react";
import StopBtn from "./StopBtn"
import PlayPauseBtn from "./PlayPauseBtn";

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