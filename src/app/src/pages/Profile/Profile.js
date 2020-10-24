import React, {useEffect, useState} from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import {Card} from "primereact/card";
import {Button} from "primereact/button";
import {fetchUserProfile} from "../../store/actions/profileActions";
import {ProgressSpinner} from "primereact/progressspinner";

const Profile = (props) => {
    const { id } = useParams();

    useEffect(() => {
        if (id) {
            props.getUserProfileById(id);
        }
    }, [id])

    let profile;
    if (id) {
        profile = props.userProfile;
    } else {
        profile = props.user;
    }

    if (!profile) {
        return null;
    }

    return (
        <div className="p-grid">
            <div className="p-col-3">
                {
                    props.isLoading
                        ? <ProgressSpinner />
                        : <Card header={<img alt={profile.full_name} src={profile.avatarUrl} className="p-col-12"/>}>
                            <div className="p-fluid">
                                <Button label="Message" className="p-button-raised p-button-primary" />
                            </div>
                          </Card>
                }

            </div>
            <div className="p-col-9">
                {
                    props.isLoading
                        ? <ProgressSpinner />
                        : <Card title={profile.full_name}>
                    <pre>
                        {JSON.stringify(profile, null, 2) }
                    </pre>
                        </Card>
                }


            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        user: state.user.current,
        isLoading: state.profile.isLoading,
        userProfile: state.profile.userProfile
    };
}

const mapDispatchToProps = dispatch => {
    return {
        getUserProfileById: id => dispatch(fetchUserProfile(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
