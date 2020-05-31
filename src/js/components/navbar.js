const $btn = document.querySelector('.nav__toggle');
const $nav = document.querySelector('#primary-nav');

const open = ($nav, $btn) => {
	$nav.style.height = document.body.clientHeight + 'px';
	$nav.classList.add('slide-in');
	$nav.querySelector('a').focus();
	$btn.setAttribute('aria-expanded', 'true');

	document.onkeydown = (e) => {
		e = e || window.event;
		if (e.keyCode === 27) {
			close($nav, $btn);
			reset($nav);
		}
	};

	$nav.addEventListener('click', (e) => {
		close($nav, $btn);
		reset($nav);
	});
};

const close = ($nav, $btn) => {
	$nav.classList.add('slide-out');
	$btn.setAttribute('aria-expanded', 'false');
};

const reset = ($nav) => {
	setTimeout(() => {
		$nav.classList.remove('slide-in');
		$nav.classList.remove('slide-out');
	}, 500);
}

$btn.addEventListener('click', (e) => {

	if ($nav.classList.contains('slide-in') || $nav.classList.contains('slide-out')) {

		if ($nav.classList.contains('slide-in')) {
			close($nav, $btn);
		} else {
			open($nav, $btn);
		}

		reset($nav);

	} else {
		open($nav, $btn);
	}
});
