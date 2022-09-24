const markasRead = document.querySelector('#markasRead');

const notifications = Array.from(document.querySelectorAll('.notification'));

const notificationsNum = document.querySelector('#notificationsNum');


markasRead.addEventListener('click', ()=>{
	notifications.forEach(notification=>{
		if (notification.classList.contains('unread')) {
			notification.classList.remove('unread');

			const circularDot = notification.querySelector('.circular-dot');

			circularDot.classList.add('blur');

			notificationsNum.textContent = 0;
		}
	})
})

notifications.forEach((notification, index)=>{
	notification.addEventListener('click', ()=>{
		if (notifications[index].classList.contains('active')) {
			notifications[index].classList.remove('active');
		}else {
			notifications[index].classList.add('active');
		}
	})
})
