import React from "react";
import Precipitation from "src/types/PrecipitationData";
import PrecipitationConverter from "./PrecipitationHelper";

interface PrecipitationInfoProps {
	data: Precipitation;
}

interface PrecipitationInfoState {}

class PrecipitationInfo extends React.Component<
	PrecipitationInfoProps,
	PrecipitationInfoState
> {
	// state = { :  }
	render() {
		const [amount, type] = PrecipitationConverter(this.props.data);
		return <div className="precipitation-info">
			<div className="precipitation-type">{type}</div>
			<div className="precipitation-amount">{amount}</div>
		</div>;
	}
}

export default PrecipitationInfo;
