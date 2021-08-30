import React from "react";
import styles from "../styles/name.module.css";

const Name = ({name}) => {
	return (
		<div className={styles.name}>
			Name {name}
		</div>
	);
};

export default Name;
