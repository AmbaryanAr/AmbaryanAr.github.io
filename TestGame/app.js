var user_name = ""
var user_icon = ""
var _data

VK.init(function() {
    init();
}, function() {
	alert("error init api vk");
}, '5.131');

function init(){
	VK.api("users.get", {"fields": "photo_50,first_name,last_name", "v":"5.73"}, function (data) {
		console.log(data.response);
		//user_name = data.response.first_name + " " + data.response.last_name;
		//user_icon = data.response.photo_50;
		//_data = data
		//var user_data = documentcreateElement("div");
		//user_data.className = "user_data";
		//user_data.innerHTML = `
		//	<img src='` + user_icon + `'>
		//	<span>` + user_name + `</span>
		//`;
		//document.body.appendChild(user_data);
	});
};

function publich(code, value){
	alert("my data " + code + " and " + value);
}
