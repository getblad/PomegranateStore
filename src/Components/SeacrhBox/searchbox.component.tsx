import React from 'react';
import './searchbox.component.css';

interface Props {
	placeholder?: string;
	onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchBox: React.FC<Props> = ({ placeholder, onChange }) => {
	return (
		<div className="frame1-search-suggest-outline-l-statement1active">
			<div className="frame1-container2">
				<input
					type="text"
					placeholder={placeholder || 'Search'}
					onChange={onChange}
					className="frame1-search-input"
				/>
			</div>
			<img
				src="/playground_assets/searchi320-xd9n.svg"
				alt="searchI320"
				className="frame1-search"
			/>
		</div>
	);
};

export default SearchBox;