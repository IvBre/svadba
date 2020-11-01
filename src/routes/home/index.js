import style from './style.css';
import SearchInvitationForm from '../../components/invitation/index';

const Home = () => (
	<div class={style.home}>
		<h1>Home</h1>
		<p>This is the Home component.</p>
		<SearchInvitationForm />
	</div>
);

export default Home;
