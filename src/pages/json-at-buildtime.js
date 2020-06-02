import React from "react"
import JSONData from "../../content/remember.json"

function GetSortOrder(prop) {

	return function(a, b) {
		if(prop === "date")
			return new Date(b.date) - new Date(a.date);
		else if(prop === "location") {
			var aLocation = a[prop].split(', ').pop();
			var bLocation = b[prop].split(', ').pop();
			if(aLocation > bLocation)
				return 1
			else if (aLocation < bLocation)
				return -1;
			return 0;
		}
		else
			if(a[prop] > b[prop])
				return 1
			else if (a[prop] < b[prop])
				return -1;
			return 0;
	}
}

const JSONbuildtime = ({ normalized, sortOrder }) => (
  <div className="container-fluid no-padding">
    <ul>
      {

      	JSONData.remember
      		.sort(GetSortOrder(sortOrder))
      		.filter(remember => remember["name"].includes(normalized) || remember["location"].includes(normalized))
      		.map((data, index) => {
        return <li className="container-fluid d-inline-block" key={`content_item_${index}`}>
        	<a
				href={data.story}
				target="_blank"
				rel="noopener noreferrer"
				alt="{data.name} News Story">
	        	<div className="row">
		        	<div className="col">
			        	<div className="font-weight-bold name">{data.name}</div>
			        </div>
			        <div className="col">
				        <div>{data.location}</div>
				    </div>
				    <div className="col">
				        <div>{data.date}</div>
				    </div>
		        </div>
		    </a>
        </li>
      })}
    </ul>
  </div>
)
export default JSONbuildtime