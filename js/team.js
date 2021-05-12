
document.getElementById('tableTeachers_1').addEventListener('click', teacherchange1);
document.getElementById('tableTeachers_2').addEventListener('click', teacherchange2);
document.getElementById('tableTeachers_3').addEventListener('click', teacherchange3);
document.getElementById('tableTeachers_4').addEventListener('click', teacherchange4);



function teacherchange1(){
	
       document.getElementById('descriptionImg').src ="pictures/Rectangle33.png";
       document.getElementById('descriptionText').innerHTML = "Певица. 6 лет была солисткой Харьковской филармонии,5 лет – солисткой ХНАТОБ. С 2014 года – артистка хора ХНАТОБ.";
	
}

function teacherchange2(){
	
       document.getElementById('descriptionImg').src = "pictures/Polygon7.png";
       document.getElementById('descriptionText').innerHTML = "Музыкант. 10 лет играет на саксофоне. Опыт преподавания – 5 лет. Лауреат международных конкурсов. ";
	
}

function teacherchange3(){
	
       document.getElementById('descriptionImg').src = "pictures/Ellipse9.png";
       document.getElementById('descriptionText').innerHTML = "Основатель школы.<br> Для нее успех учеников школы – это ее успех. А развитие и совершенствование школы ее основная цель в жизни.";
	
}

function teacherchange4(){
	
       document.getElementById('descriptionImg').src = "pictures/Intersect.png";
       document.getElementById('descriptionText').innerHTML = "Преподаватель электронной музыки Музыкант. Главный звукорежиссер парка им. Горького. Регулярно получает заказы на аранжировки. ";
	
}



