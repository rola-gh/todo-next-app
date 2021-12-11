import Followers from "../../components/Followers/Followers";
import axios from "axios";

export default function index({ followers }) {

	return (
		<div>
			<Followers followers={followers} />
		</div>
	);
}


export async function getServerSideProps() {
	const res = await axios.get("https://randomuser.me/api/?results=5")
	// const data = await res.results;
	const data = await res.results.json()

	console.log(data,'rss')
	if (!res) {
		return {
			notFound: true,
		}
	}

	return {
		props:{...res} // will be passed to the page component as props
	}
}