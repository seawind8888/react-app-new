import React from 'react';
import { Button, InputNumber } from 'cloud-react';

const blank = '\u00A0';

export default class FormBasicDemo extends React.Component {
    render() {
		return (
			<React.Fragment>
				<div>
					<Button type="primary">primary</Button>
					{blank}
					<Button type="normal">normal</Button>
					{blank}
					<Button type="dashed">dashed</Button>
					{blank}
					<Button type="link">link</Button>
				</div>
			</React.Fragment>
		);
	}
}