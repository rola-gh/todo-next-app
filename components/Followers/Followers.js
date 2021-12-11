import React from "react";
import Header from "./../Header";
import FollowersList from "./FollowersList";
import styles from "../../styles/FollowersStyle/Followers.module.css";

export default function Followers({ followers }) {
	return (
		<div className={styles.followers}>
			<Header title="Followers" />
			<FollowersList followers={followers} />
		</div>
	);
}