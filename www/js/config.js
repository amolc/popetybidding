if (document.location.hostname == "localhost") {
	var base = window.location.origin;
	var baseURL = base + "/api/";
	var uploadUrl = base + "/uploads/";

} else {

	var baseURL = "http://node.fountaintechies.com:9000/api/";
	var uploadUrl = "http://node.fountaintechies.com:9000/uploads/";
}
