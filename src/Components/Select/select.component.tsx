import Select from "react-select";
import React, { useState } from "react";
import "./select.component.css"; // Import the CSS file with the custom select styles

function SelectComponent() {
	const options = [
		{label: "Option 1", value: "option1"},
		{label: "Option 2", value: "option2"},
		{label: "Option 3", value: "option3"},
	];
	return (
		<Select
			options={options}
			className="custom-select-container"
			classNamePrefix="custom-select"
			placeholder="Select an option"
			onChange={(selectedOption) => {
				console.log(selectedOption);
			}}
		/>
	);
}

export default SelectComponent;