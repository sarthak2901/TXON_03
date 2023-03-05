
var input = document.getElementById("input");
var addButton = document.getElementById("addButton");
var list = document.getElementById("list");


function addTask() {
	var task = input.value;


	if (task.trim() !== "") {

		var li = document.createElement("li");
		li.innerHTML = "<span class='task'>" + task + "</span><button>Delete</button>";
		list.appendChild(li);


		input.value = "";
	}

	input.focus();
}

addButton.addEventListener("click", addTask);


input.addEventListener("keyup", function(event) {
	if (event.keyCode === 13) {
		addTask();
	}
});

function deleteTask(event) {
	event.target.parentNode.remove();
}
list.addEventListener("click", function(event) {
	if (event.target.tagName === "BUTTON") {
		deleteTask(event);
	}
});
