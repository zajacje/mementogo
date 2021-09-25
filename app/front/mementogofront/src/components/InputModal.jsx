import React, { useEffect, useState } from "react";
import GoogleMapReact from "google-map-react";

export const InputModal = (show) => {
	const [response, updateResponse] = useState("");
	const [toggle, updateToggle] = useState(show);

	return (
		<div>
			<div className="modal" tabindex="-1" role="dialog">
				<div className="modal-dialog" role="document">
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title">Modal title</h5>
							<button
								type="button"
								className="close"
								data-dismiss="modal"
								aria-label="Close"
							>
								<span aria-hidden="true">&times;</span>
							</button>
						</div>
						<div className="modal-body">
							<p>Enter words here!</p>
						</div>
						<input onChange={(e) => updateResponse(e.target.value)}> </input>
						<div className="modal-footer">
							<button type="button" className="btn btn-primary">
								Submit
							</button>
							<button
								type="button"
								className="btn btn-secondary"
								data-dismiss="modal"
							>
								Close
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default InputModal;
