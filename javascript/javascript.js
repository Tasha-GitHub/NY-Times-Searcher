

var article =  "hamburger";
var startYear = "19500101";
var articleNumber= "5";
var endYear = "20160101";
var key = "3283107effc84af7965500f03014c457";
var url;


$("#submitButton").on("click", function(event){
	event.preventDefault();
	
	startYear  = $("#startYearInput").val();

		if(startYear.length == 0 || endYear == 0){
			console.log("blank");
			article  = $("#searchInput").val();
			startYear = "19500101";
			articleNumber= "5";
	 		endYear = "20160101";

			url = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + article +"&begin_date="+ startYear +"&end_date="+endYear+"&fq="+ articleNumber + "&api-key=" + key;
			console.log(startYear.length)

		} else{
			console.log("not blank")
			article  = $("#searchInput").val();
			startYear  = $("#startYearInput").val();
			articleNumber= "5";
			endYear  = $("#endYearInput").val();
			console.log(article);

			url = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + article +"&begin_date="+ startYear +"&end_date="+endYear+"&fq="+ articleNumber + "&api-key=" + key;
			console.log(startYear.length)
		}
		    $.ajax({
			  url: url,
			  method: 'GET',
			}).done(function(result) {
				console.log(result);
			  for(var i = 0 ; i <= articleNumber; i++){
			  	$("#topArticles").append("<div>"+result.response.docs[i].headline.main+ "<p>" + "URL: "+ result.response.docs[i].web_url+"</p>" + "</div>");
		  		}
			});
})