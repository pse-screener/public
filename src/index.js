import router from './router';
import ReactDOM from 'react-dom';

router.run(function (Handler) {
	ReactDOM.render(<Handler/>, document.getElementById('main'));
});