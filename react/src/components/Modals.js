import React from 'react';
import axios from 'axios';
import Typography from 'material-ui/Typography';
import Modal from 'material-ui/Modal';
import Button from 'material-ui/Button';

function rand() {
    return Math.floor(Math.random() * 20) - 10;
}

function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();

    return {
        position: 'absolute',
        width: 8 * 50,
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
        border: '1px solid #e5e5e5',
        backgroundColor: '#fff',
        boxShadow: '0 5px 15px rgba(0, 0, 0, .5)',
        padding: 8 * 4,
    };
}

class SimpleModal extends React.Component {

    constructor (props) {

        super (props);

        this.state = {
            open: false,
            modalResponse: "",
        };

        this.handleAxios = this.handleAxios.bind(this);
        this.handleOpen = this.handleOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    handleOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    handleAxios = () => {

        let handleSuccess = function (response) {
            console.log(response.data);
            this.setState({ modalResponse: response.data });
            this.handleOpen();
        };
        handleSuccess = handleSuccess.bind(this);

        axios.get('http://jira-cdd-master.hipay-pos-platform.com:8041/MyFile.php', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        })
            .then(handleSuccess)
            .catch(function (error) {
                console.log(error);

            });
    };
    
    render() {
        return (
            <div>
                <Button raised color="primary" onClick={this.handleAxios}>Place order</Button>
                <Modal
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                    open={this.state.open}
                    onClose={this.handleClose}
                >
                    <div style={getModalStyle()}>
                        <Typography type="title" id="modal-title">
                            {this.props.textTitle}
                        </Typography>
                        <Typography type="subheading" id="simple-modal-description">
                            {this.state.modalResponse}
                        </Typography>
                    </div>
                </Modal>
            </div>
        );
    }
}

export default SimpleModal;