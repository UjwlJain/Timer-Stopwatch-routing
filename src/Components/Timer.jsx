import React, { useState, useRef, useEffect } from "react";
import './Timer.css';

const Timer = () => {
	const Ref = useRef(null);

	const [hoursInput, setHoursInput] = useState(0);
	const [minutesInput, setMinutesInput] = useState(0);
	const [secondsInput, setSecondsInput] = useState(0);
	const [timer, setTimer] = useState("00:00:00");

	const getTimeRemaining = (e) => {
		const total =
			Date.parse(e) - Date.parse(new Date());
		const seconds = Math.floor((total / 1000) % 60);
		const minutes = Math.floor(
			(total / 1000 / 60) % 60
		);
		const hours = Math.floor(
			(total / 1000 / 60 / 60) % 24
		);
		return {
			total,
			hours,
			minutes,
			seconds,
		};
	};

	const startTimer = (e) => {
		let { total, hours, minutes, seconds } =
			getTimeRemaining(e);
		if (total >= 0) {
			setTimer(
				(hours > 9 ? hours : "0" + hours) +
				":" +
				(minutes > 9
					? minutes
					: "0" + minutes) +
				":" +
				(seconds > 9 ? seconds : "0" + seconds)
			);
		}
	};

	const clearTimer = (e) => {
		const deadline = new Date();
		deadline.setHours(
			deadline.getHours() + hoursInput
		);
		deadline.setMinutes(
			deadline.getMinutes() + minutesInput
		);
		deadline.setSeconds(
			deadline.getSeconds() + secondsInput
		);

		setTimer(
			(hoursInput > 9 ? hoursInput : "0" + hoursInput) +
			":" +
			(minutesInput > 9
				? minutesInput
				: "0" + minutesInput) +
			":" +
			(secondsInput > 9
				? secondsInput
				: "0" + secondsInput)
		);

		if (Ref.current) clearInterval(Ref.current);
		const id = setInterval(() => {
			startTimer(deadline);
		}, 1000);
		Ref.current = id;
	};

	const onClickReset = () => {
		clearTimer(new Date());
	};

	return (
		<div style={{ textAlign: "center", margin: "auto" }}>
			<h3>Countdown Timer</h3>
			<div>
				<label>
					Hours:
					<input
						type="number"
						value={hoursInput}
						onChange={(e) =>
							setHoursInput(
								Math.max(0, parseInt(e.target.value, 10))
							)
						}
					/>
				</label>
				<label>
					Minutes:
					<input
						type="number"
						value={minutesInput}
						onChange={(e) =>
							setMinutesInput(
								Math.max(0, parseInt(e.target.value, 10))
							)
						}
					/>
				</label>
				<label>
					Seconds:
					<input
						type="number"
						value={secondsInput}
						onChange={(e) =>
							setSecondsInput(
								Math.max(0, parseInt(e.target.value, 10))
							)
						}
					/>
				</label>
			</div>
			<h2>{timer}</h2>
			<button onClick={onClickReset}>Reset</button>
		</div>
	);
};

export default Timer;
