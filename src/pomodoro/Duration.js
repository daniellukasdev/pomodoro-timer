import React from "react";
import IncreaseDecreaseBtn from "./IncreaseDecreaseBtn";
import { minutesToDuration } from "../utils/duration"

export default function Duration({ session, focusDuration, setFocusDuration, breakDuration, setBreakDuration }) {
     // click handler for decreasing focus duration
  function handleDecreaseFocus() {
    if (focusDuration === 5) return;
    setFocusDuration(state => state - 5);
  }

  // click handler for increasing focus duration
  function handleIncreaseFocus() {
    if (focusDuration === 60) return;
    setFocusDuration(state => state + 5);
  }

  // click handler for decreasing break duration
  function handleDecreaseBreak() {
    if (breakDuration === 1) return;
    setBreakDuration(state => state - 1)
  }

  // click handler for increasing break duration
  function handleIncreaseBreak() {
    if (breakDuration === 15) return;
    setBreakDuration(state => state + 1)
  }
    return (
        <div className="row">
            <div className="col">
            <div className="input-group input-group-lg mb-2">
                <span className="input-group-text" data-testid="duration-focus">
                {/* TODO: Update this text to display the current focus session duration */}
                Focus Duration: {minutesToDuration(focusDuration)}
                </span>
                <div className="input-group-append">
                <IncreaseDecreaseBtn dataTestID={"decrease-focus"} handleIncreaseDecrease={handleDecreaseFocus} disabled={session} className={"oi oi-minus"} />
                {/* TODO: Implement increasing focus duration  and disable during a focus or break session */}
                <IncreaseDecreaseBtn dataTestID={"increase-focus"} handleIncreaseDecrease={handleIncreaseFocus} disabled={session} className={"oi oi-plus"} />
                </div>
            </div>
            </div>
            <div className="col">
            <div className="float-right">
                <div className="input-group input-group-lg mb-2">
                <span className="input-group-text" data-testid="duration-break">
                    {/* TODO: Update this text to display the current break session duration */}
                    Break Duration: {minutesToDuration(breakDuration)}
                </span>
                <div className="input-group-append">
                    {/* TODO: Implement decreasing break duration and disable during a focus or break session*/}
                    <IncreaseDecreaseBtn dataTestID={"decrease-break"} handleIncreaseDecrease={handleDecreaseBreak} className={"oi oi-minus"} />
                    {/* TODO: Implement increasing break duration and disable during a focus or break session*/}
                    <IncreaseDecreaseBtn dataTestID={"increase-break"} handleIncreaseDecrease={handleIncreaseBreak} className={"oi oi-plus"} />
                </div>
                </div>
            </div>
            </div>
      </div>
    )
}