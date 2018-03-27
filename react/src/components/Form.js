import React from 'react';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import Input, { InputLabel, InputAdornment } from 'material-ui/Input';
import { FormControl } from 'material-ui/Form';

const styles = {
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    formControl: {
        margin: '0 10px 0 10px',
    },
};

class Form extends React.Component {
    state = {
        name: '',
        quantity: 0,
        price: 0
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const article = { name: this.state.name, quantity: this.state.quantity, price: this.state.price };
        this.props.addArticle(article);
        this.setState({ name: '', quantity: 0, price: 0 });
    }

    render() {
        return (
            <div classeName={styles.container}>
                <h3>
                    {this.props.formTitle}
                </h3>
                <br />
                <br />
                <form onSubmit={this.handleSubmit}>
                    <FormControl classes={{
                            root: this.props.classes.formControl,
                        }}>
                        <InputLabel htmlFor="quantity">Quantity</InputLabel>
                        <Input id="quantity"
                               type="number"
                               value={this.state.quantity}
                               onChange={(event) => this.setState({ quantity: event.target.value })}
                        />
                    </FormControl>
                    <FormControl className={styles.formControl}>
                        <InputLabel htmlFor="price">Price</InputLabel>
                        <Input
                            id="price"
                            value={this.state.price}
                            onChange={(event) => this.setState({ price: event.target.value })}
                            startAdornment={<InputAdornment position="start">$</InputAdornment>}
                        />
                    </FormControl>
                    <br />
                    <FormControl classes={{
                            root: this.props.classes.formControl,
                        }}>
                        <InputLabel htmlFor="product">Your Product</InputLabel>
                        <Input
                            id="product"
                            value={this.state.name}
                            onChange={(event) => this.setState({ name: event.target.value })}
                        />
                    </FormControl>


                    <Button type="submit" raised color="primary">Add to cart</Button>
                </form>
            </div>
        );
    }
};

export default withStyles(styles)(Form);