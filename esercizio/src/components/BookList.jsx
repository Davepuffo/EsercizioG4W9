import { Component } from "react";
import SingleBook from "./SingleBook";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row"

class Booklist extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <input type="text" />
                    <button>Search</button>
                    {this.props.libri.map((book) => {
                        return (
                            <SingleBook libro={book} />
                        )
                    })}
                </Row>
            </Container>
        )
    }
}

export default Booklist