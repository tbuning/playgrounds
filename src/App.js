import React from 'react';
import './App.css';
import Map from './components/map';
import IntegrationDownshift from './components/autocomplete';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import SimpleBottomNavigation from "./components/bottom-navigation";
import Grid from "@material-ui/core/Grid/Grid";
import * as PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import Button from "@material-ui/core/Button/Button";
import SearchIcon from '@material-ui/icons/Search';

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    button: {
        margin: theme.spacing.unit,
        position: 'fixed',
        top: 0,
        right: 0,
        zIndex:1,
    },
    extendedIcon: {
        marginRight: theme.spacing.unit,
    },
});


function FullWidthGrid(props) {
    const { classes } = props;

    return (
        <div className={classes.root}>
            <Button variant="extendedFab" aria-label="Delete" className={classes.button}>
                <IntegrationDownshift />
                <SearchIcon className={classes.extendedIcon} />
            </Button>
            <Provider store={store}>
                <Grid container spacing={24}>
                    <Map />
                </Grid>
            </Provider>
            <SimpleBottomNavigation/>
        </div>
    );
}

FullWidthGrid.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FullWidthGrid);
