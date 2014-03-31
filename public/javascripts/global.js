var userListData = [];

$(document).ready(function(){
  populateTable();
	$('#userList').on('click', 'a.linkshowuser', showUserInfo);
});

function populateTable(){
  var tableContent = '';

	$.getJSON('/userlist', function(data){
	  userListData = data;
	  $.each(data, function(){
		  tableContent += '<tr>';
		  tableContent += '<td><a href="#" class="linkshowuser" rel="' +
			                 this.username + '" title="Show details">' +
											 this.username + '</td>';
		  tableContent += '<td>' + this.email + '</td>';
		  tableContent += '<td><a href="#" class="linkdeleteuser" rel="' +
			                 this._id + '">delete</a></td>';
		  tableContent += '</tr>';
	  });
		$('#userList table tbody').html(tableContent);
	});
}

function showUserInfo(event){
  event.preventDefault();
	var thisUser = $(this).attr('rel');
	var arrayPos = userListData.map(function(arrayItem){
	  return arrayItem.username;
	}).indexOf(thisUser);
	var thisUserObj = userListData[arrayPos];

	$('#userInfoName').text(thisUserObj.fullName);
	$('#userInfoAge').text(thisUserObj.age);
	$('#userInfoGender').text(thisUserObj.gender);
	$('#userInfoLocation').text(thisUserObj.location);
}
