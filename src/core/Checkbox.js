import React, { useState, useEffect } from "react";

const Checkbox = ({ categories, handleFilters }) => {
	const [checked, setChecked] = useState([])


	const handleToggle = c => () => {
		// return the first index or -1

		const currentCategoryId = checked.indexOf(c) 
		const newCheckedCatogoryId = [...checked]
		// uf currently checked was not already in checked state > push 
		// else pull/take off
		if(currentCategoryId === -1) {
			newCheckedCatogoryId.push(c)

		} else {
			newCheckedCatogoryId.splice(currentCategoryId, 1)
		}
		//console.log(newCheckedCatogoryId);
		setChecked(newCheckedCatogoryId);
		handleFilters(newCheckedCatogoryId);
	}

	return categories.map((c, i) => (
		<li key={i} className="list-unstyled">
			<input onChange={handleToggle(c._id)} value={checked.indexOf(c._id === -1)} type="checkbox" className="form-check-input" />
			<label className="form-check-label">{c.name}</label>
		</li>
	));
};

export default Checkbox;
