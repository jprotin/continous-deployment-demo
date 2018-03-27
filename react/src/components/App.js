import React from 'react';
import {connect} from 'react-redux';

import Form from './Form';
import Itemlist from './ItemList';
import Modals from './Modals';

import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';

const styles = {
    root: {
        width: '100%',
    },
    flex: {
        flex: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
};

class App extends React.Component {

    render() {
        return (
            <div className={styles.root}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton className={styles.menuButton} color="contrast" aria-label="Menu">
                            <MenuIcon />
                        </IconButton>
                        <Typography type="title" color="inherit" className={styles.flex}>
                            Demo HiPay - Continuous deployment
                        </Typography>
                    </Toolbar>
                </AppBar>
                <br />
                <div>
                    < Form formTitle="Add your product to the cart" addArticle={this.props.addArticle} />
                    <br />
                    <hr />
                    < Itemlist itemTitle="Your cart" articles={this.props.articles}
                               removeArticle={this.props.removeArticle}
                               editArticle={this.props.editArticle}
                    />
                    <br />
                    <hr />
                </div>
                <div>
                    < Modals textTitle="HiPay Payment - Response!" />
                </div>
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        articles: state.articles
    };
};


const addArticleActionCreator = (article) => {
    return {
        type: 'ADD_ARTICLE',
        payload: article
    }
}

const removeArticleActionCreator = (articleId) => {
    return {
        type: 'REMOVE_ARTICLE',
        payload: articleId
    }
}

const editArticleActionCreator = (article) => {
    return {
        type: 'EDIT_ARTICLE',
        payload: article
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addArticle: (article) => {
            dispatch(addArticleActionCreator(article));
        },
        removeArticle: (articleId) => {
            dispatch(removeArticleActionCreator(articleId));
        },
        editArticle: (article) => {
            dispatch(editArticleActionCreator(article));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
