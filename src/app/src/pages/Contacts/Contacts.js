import React, {useEffect} from "react";
import Contact from "../../components/Contact/Contact";
import { connect } from "react-redux";
import {fetchAllContacts} from "../../store/actions/userActions";

const Contacts = (props) => {
    useEffect(() => {
        props.fetchContacts()
    });

    return (
        <div className="p-grid">
            {
                props.contacts.map(contact => (
                    <div className="p-col-2" key={contact.id}>
                        <Contact user={contact} />
                    </div>
                ))
            }
        </div>
    );
}

const mapStateToProps = state => ({
    contacts: state.user.contacts
});

const mapDispatchToProps = dispatch => ({
    fetchContacts: () => dispatch(fetchAllContacts())
});

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);
