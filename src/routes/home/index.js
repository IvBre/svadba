import { h } from 'preact';
import style from './style.css';
import ViewInvitationForm from '../../components/invitation/index';

const Home = () => (
	<div class={style.home}>
		<h1>Home</h1>
		<p>This is the Home component.</p>
		<ViewInvitationForm />
	</div>
);

export default Home;
