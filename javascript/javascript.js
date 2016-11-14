

var article =  "hamburger";
var startYear = "19500101";
var articleNumber= "5";
var endYear = "20160101";
var key = "3283107effc84af7965500f03014c457";


$("#submitButton").on("click", function(event){
	event.preventDefault();
	article  = $("#searchInput").val();
	//startYear  = $("#startYear").val();
	//endYear  = $("#endYear").val();
	console.log(article);

	var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + article +"&begin_date="+ startYear +"&end_date="+endYear+"&fq="+ articleNumber + "&api-key=" + key;
	console.log(articleNumber.length)

	$.ajax({
	  url: url,
	  method: 'GET',
	}).done(function(result) {
		console.log(result);
	  for(var i = 0 ; i <= articleNumber; i++){
	  	$("#topArticles").append("<div>"+result.response.docs[i].abstract+"</div>");
  		}
	}).fail(function(){
		console.log("this has failed");

		// startYear = "19500101";
		// articleNumber= "5";
		// endYear = "20160101";
		
		// var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + article +"&begin_date="+ startYear +"&end_date="+ endYear+"&fq="+ articleNumber + "&api-key=" + key;
		
		// $.ajax({
		//   	url: queryURL,
		//   	method: 'GET',
		// }).done(function(result) {
		// console.log(result);
	 //  for(var i = 0 ; i <= articleNumber; i++){
	 //  	$(".whereArticlesLive").append("<div>"+result.response.docs[i].abstract+"</div>");
  // 		}
  	// });

	});

})