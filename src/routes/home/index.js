import { h } from 'preact';
import style from './style.css';

const Home = () => (
	<div class={style.home}>
		<h1>Home</h1>
		<p>This is the Home component.</p>
		<form>
			<input type="text" name="code" placeholder="Enter your invitation code here..."/>
			<input type="submit" name="go" valu="GO" />
		</form>
	</div>
);

export default Home;
