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
		//{this.state.age}
		return (
                <React.Fragment>
                    <Container>
                        <p></p>
						<img src="https://media1.tenor.com/images/a569cd29a902d5f57ab4ddb92d0adab5/tenor.gif?itemid=17296473" alt="this works"/>
                    </Container>
                </React.Fragment>
        )
	}
}

export default Home;