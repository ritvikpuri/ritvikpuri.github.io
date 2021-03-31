import React, {Component} from "react";
import Container from '@material-ui/core/Container';

class Home extends Component {
	constructor(props) {
		super(props);

		let ageDifMs = Date.now() - new Date("2000-03-08");
		let ageDate = new Date(ageDifMs);
		this.state = {
			age: Math.abs(ageDate.getUTCFullYear() - 1970)
		};
	}

	shouldComponentUpdate(nextProps, nextState) {
		return false;
	}
	
	render() {
		//let resumeURI = staticContentURI + "/files/resume.pdf";
		return (
                // <React.Component>
                //     {this.state.age} hello
                // </React.Component>
                <React.Fragment>
                    <Container>
                        <p>this is the projects page</p>
                    </Container>
                </React.Fragment>
        )
	}
}

export default Home;