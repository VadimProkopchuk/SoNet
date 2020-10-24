import React from "react";
import classes from "./CircleAvatar.module.css";

const CircleAvatar = ({ src, size }) => {
    const styles = {
        width: size,
        height: size,
        backgroundImage: `url(${src})`
    }
    return (
        <div className="p-p-2">
            <div style={styles} className={classes.CircleAvatar} />
        </div>
    );
}

export default CircleAvatar;
