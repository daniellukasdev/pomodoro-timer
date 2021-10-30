import React from "react";
import IncreaseDecreaseBtn from "./IncreaseDecreaseBtn";
import { minutesToDuration } from "../utils/duration"

export default function Duration({ session, focusDuration, breakDuration, handleDecreaseFocus, handleDecreaseBreak, handleIncreaseFocus, handleIncreaseBreak }) {
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