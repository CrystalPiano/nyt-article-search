// This is our API key
    var APIKey = "23189787633a40b4953ee0c982f3bf9e";

    // Here we are building the URL we need to query the database
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + APIKey;

    // Running our AJAX call to the New York Times Article Search API
    $.ajax({
        url: queryURL,
        method: "GET"
      }).done(function(response) {
      	console.log(response)

      // Log the queryURL
        console.log(queryURL);

        // Transfer content to HTML
        $("#result").html(response.response.meta.hits);
        // Log the data in the console as well
        //console.log("Wind Speed: " + response.wind.speed);
      });


