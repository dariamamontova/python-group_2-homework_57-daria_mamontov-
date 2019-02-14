import React, {Component} from 'react';
import './App.css';
import Modal from "./components/UI/Modal/Modal"
import Alert from "./components/UI/Alert/Alert"



class App extends Component {
    constructor(props) {
        super(props);

        this.state = {};
        this.state.show = false;
        this.state.showAlert = false;
    }

    modalShow = () => {
        this.setState({show: true});
    };

    modalClose = () => {
        this.setState({show: false});
    };

    alertShow = () => {
        this.setState({showAlert: true});
    };

    alertClose = () => {
        this.setState({showAlert: false});
    };


    render() {
        return (
            <div className="App">
                <button
                    className="btn btn-dark mx-3"
                    onClick={this.modalShow}
                >Modal
                </button>
                <button
                    className="btn btn-dark"
                    onClick={this.alertShow}
                >Alert</button>

                <Alert
                    show={this.state.showAlert}
                    type={"alert-danger"}
                    dismissed={this.alertClose}
                ><p>This is alert</p>
                </Alert>

                <Alert
                    show={this.state.showAlert}
                    type={"alert-primary"}
                ><p>This is alert</p>
                </Alert>

                <Modal
                    show={this.state.show}
                    closed={this.modalClose}
                    title={"Modal title"}
                    modalCancelled={this.modalClose}
                >
                    <p>This is modal content</p>
                </Modal>

            </div>
        );
    }
}

export default App;
