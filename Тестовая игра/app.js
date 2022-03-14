var user_name = ""
vkBridge.send("VKWebAppInit", {});
vkBridge.send('VKWebAppGetUserInfo').then(data => {
    // Обработка полученных данных
    console.log(data.id);
    console.log(data.first_name);
    console.log(data.last_name);
    console.log(data.photo_100);
  })
  .catch(error => {
    // Обработка ошибки
	console.log("error not info user");
});


// VK.init(function() {
    // init();
// }, function() {
	// alert("error init api vk");
// }, '5.131');

// function init(){
	// VK.api("users.get", {"fields": "photo_50,first_name,last_name", "v":"5.73"}, function (data) {
		// user_name = data.response[0].first_name + " " + data.response[0].last_name;
		// user_icon = data.response[0].photo_50;
		
		// var user_data = documentcreateElement("div");
		// user_data.className = "user_data";
		// user_data.innerHTML = `
			// <img src='` + user_icon + `'>
			// <span>` + user_name + `</span>
		// `;
		// document.body.appendChild(user_data);
	// });
// };

function publich(code, value){
	alert("my data " + code + " and " + value);
}
