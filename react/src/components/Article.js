import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import ModeEditIcon from 'material-ui-icons/ModeEdit';
import DeleteIcon from 'material-ui-icons/Delete';
import Input, { InputLabel } from 'material-ui/Input';
import { FormControl } from 'material-ui/Form';
import { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';

const styles = {
    formControl: {
        margin: '0 10px 0 10px',
    },
};

class Article extends React.Component {
    state = { isInEditMode: false }

    handleRemove = (articleId) => {
        //if( confirm('Voulez-vous vous supprimer ?') ) {
            this.props.removeArticle(articleId);
        //}
    }

    editArticle = (article) => {
        this.setState({ isInEditMode: !this.state.isInEditMode });
    }

    handleQuantityEdit = (event, article) => {
        event.preventDefault();
        article.quantity = event.target.value;
        this.props.editArticle(article);
    }

    handleNameEdit = (event, article) => {
        event.preventDefault();
        article.name = event.target.value;
        this.props.editArticle(article)
    }

    handlePriceEdit = (event, article) => {
        event.preventDefault();
        article.price = event.target.value;
        this.props.editArticle(article)
    }

    render() {
        const { article } = this.props;
        const { classes } = this.props;
        return (
            <TableRow key={article.id}>
                <TableCell>
                    <Button fab mini color="accent" aria-label="edit" className={classes.button}
                            onClick={() => this.editArticle(article.article)}>
                        <ModeEditIcon />
                    </Button>
                    <Button fab mini aria-label="delete" className={classes.button}
                            onClick={() => this.handleRemove(article.id)}>
                        <DeleteIcon />
                    </Button>
                </TableCell>

                {
                    this.state.isInEditMode ?
                        <TableCell>
                            <Input
                                id="product"
                                value={article.name}
                                onChange={(event) => this.handleNameEdit(event, article)}
                            />
                        </TableCell>
                        :
                        <TableCell>{article.name}</TableCell>
                }
                {
                    this.state.isInEditMode ?
                        <TableCell numeric>
                            <Input
                                id="price"
                                value={article.price}
                                onChange={(event) => this.handlePriceEdit(event, article)}
                            />
                        </TableCell>
                        :
                        <TableCell numeric>{article.price}</TableCell>
                }
                {
                    this.state.isInEditMode ?
                        <TableCell numeric>
                            <Input
                                id="quantity"
                                type="number"
                                value={article.quantity}
                                onChange={(event) => this.handleQuantityEdit(event,article)}
                            />
                        </TableCell>
                        :
                        <TableCell numeric>{article.quantity}</TableCell>
                }
                <TableCell numeric>-</TableCell>
            </TableRow>
        )
    }
}

Article.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Article);