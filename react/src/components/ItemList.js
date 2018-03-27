import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import Article from './Article';

const styles = theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto',
    },
    table: {
        minWidth: 700,
    },
});

const ItemList = (props) => {
    const { classes } = props;
    return (
        <Paper className={classes.root}>
            <h3>{props.itemTitle}</h3>
            <Table className={classes.table}>
                <TableHead>
                    <TableRow>
                        <TableCell>Actions </TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell numeric>Unit Price</TableCell>
                        <TableCell numeric>Quantity</TableCell>
                        <TableCell numeric>Total</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        props.articles.map(article => <Article key={article.id} article={article}
                                                               removeArticle={props.removeArticle} editArticle={props.editArticle}  />)
                    }
                </TableBody>
            </Table>
        </Paper>
    );
};

ItemList.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ItemList);
