import React, {useEffect} from "react";
import Grid from "@material-ui/core/Grid";
import Contact from "../../components/Contact/Contact";
import { connect } from "react-redux";
import {fetchAllContacts} from "../../store/actions/userActions";

const Contacts = (props) => {
    useEffect(() => {
        props.fetchContacts()
    });

    const contacts = props.contacts.map(user => (
        <Grid item xs={2} key={user.id}>
            <Contact user={user} />
        </Grid>
    ));

    return (
        <Grid container spacing={1}>{contacts}</Grid>
    )
}

const mapStateToProps = state => ({
    contacts: state.user.contacts
});

const mapDispatchToProps = dispatch => ({
    fetchContacts: () => dispatch(fetchAllContacts())
});

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);
