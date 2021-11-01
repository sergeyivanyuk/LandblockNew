<?php
if(isset($_POST['name']) && isset($_POST['tel'])) {
	$name = $_POST['name'];
	$tel = $_POST['tel'];
	if(mail('sergeyivanyuk89@gmail.com',
			'Заявка на звонок',
			'Имя:'.$name."\n".
			'Телефон:'.$tel
			)
		) {
		echo('Успешно отправлено, в ближайшее время мы вам перезвоним');
		header("Location: https://landblock.ru/");
	}	else {
		echo('Что-то пошло не так');
		header("Location: https://landblock.ru/");
	}
}
?>