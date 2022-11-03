import React from "react";
import "./WindInfo.css";

interface WindInfoProps {
	windspeed: number;
	windspeed_units: string;
	windgust: number;
	windgust_units: string;
	winddirection: number;
}

interface WindInfoState {}

class WindInfo extends React.Component<WindInfoProps, WindInfoState> {
	// state = { :  }
	render() {
		const rotation : React.CSSProperties  = {
			transform: `rotate(${this.props.winddirection}deg)`,
			userSelect: "none",
		};
		return (
			<div className="wind-info">
				<div>
					Speed: {this.props.windspeed} {this.props.windspeed_units}
				</div>
				<div>
					Gusts: {this.props.windgust} {this.props.windgust_units}
				</div>
				<div className="wind-direction" style={rotation}>
					🡹
				</div>
			</div>
		);
	}
}

export default WindInfo;
