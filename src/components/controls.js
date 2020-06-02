import PropTypes from "prop-types"
import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/fontawesome-free-solid'

const Controls = ({ handleChange, handleClick, search }) => (
	<div className="form-container">
		<form>
			<div className="form-group">
				<input
					className="form-control"
					type="text"
					name="search"
					placeholder="Search"
					value={search}
					onChange={handleChange}
				/>
			</div>
			<div className="btn-group w-100">
				<button className="btn btn-outline-dark" value="name" onClick={handleClick}>
					<span className="sortBtn">Name <FontAwesomeIcon className="icon" icon={faCaretDown} /></span>
				</button>
				<button className="btn btn-outline-dark" value="location" onClick={handleClick}>
					<span className="sortBtn">Location <FontAwesomeIcon className="icon" icon={faCaretDown} /></span>
				</button>
				<button className="btn btn-outline-dark" value="date" onClick={handleClick}>
					<span className="sortBtn">Date <FontAwesomeIcon className="icon" icon={faCaretDown} /></span>
				</button>
			</div>
		</form>
	</div>
)

Controls.propTypes = {
  siteTitle: PropTypes.string,
}

Controls.defaultProps = {
  search: ""
}

export default Controls
