/*
  Please add all Javascript code to this file.
  GA-SF-8 John Conlon
*/
let apiKey = ;
	
  $(window).on('load', function() {
  	$('#main').html('');
  	$('#popUp').removeClass('hidden');
    $.get("https://accesscontrolalloworiginall.herokuapp.com/http://thedailywtf.com/api/articles/recent/15", function(results) {
    results.forEach(function(element,index) {
    	let newArticle = `
	      <article id="article-${index}" class="article">
	        <section class="featuredImage">
	          <img src="${element.Author.ImageUrl}" alt="" />
	        </section>
	        <section class="articleContent">
	            <a href="#"><h3>${element.RssTitle}</h3></a>
	            <h6>${element.Series.Title}</h6>
	        </section>
	        <section class="impressions">
	        	${element.CachedCommentCount}
	        </section>
	        <div class="clearfix"></div>
	      </article>
	    `;

    	let newPopArticle = `
            <h1>${element.Title}</h1>
            <p>
              ${element.SummaryHtml}
            </p>
            <a href="${element.Url}" class="popUpAction" target="_blank">Read more from source</a>
    	`;
    	$('#main').append(newArticle);
    	$('#popUp').addClass('hidden');
    	$(`#article-${index}`).on('click', function(){
    		$('#popUp .container').html('');
				$('#popUp').removeClass('loader hidden');
				$('#popUp .container').append(newPopArticle);
				});
    });
		});
  });

$('#source1').on('click', function() {
	$('#main').html('');
	$('#popUp').removeClass('hidden');
  $.get("https://accesscontrolalloworiginall.herokuapp.com/http://thedailywtf.com/api/articles/recent/15", function(results) {
  results.forEach(function(element,index) {
  	let newArticle = `
      <article id="article-${index}" class="article">
        <section class="featuredImage">
          <img src="${element.Author.ImageUrl}" alt="" />
        </section>
        <section class="articleContent">
            <a href="#"><h3>${element.RssTitle}</h3></a>
            <h6>${element.Series.Title}</h6>
        </section>
        <section class="impressions">
        	${element.CachedCommentCount}
        </section>
        <div class="clearfix"></div>
      </article>
    `;

    	let newPopArticle = `
            <h1>${element.Title}</h1>
            <p>
              ${element.SummaryHtml}
            </p>
            <a href="${element.Url}" class="popUpAction" target="_blank">Read more from source</a>
    	`;

    	$('#main').append(newArticle);
    	$('#popUp').addClass('hidden');
    	$(`#article-${index}`).on('click', function(){
    		$('#popUp .container').html('');
				$('#popUp').removeClass('loader hidden');
				$('#popUp .container').append(newPopArticle);
				});
    });
		});
  });

$('#source2').on('click', function(){
	$('#main').html('');
	$('#popUp').removeClass('hidden');
	$.get("https://newsapi.org/v1/articles?source=national-geographic&sortBy=top&apiKey=`${apiKey}`", function(results) {
		results.articles.forEach(function(element,index) {
    	console.log(element);
    	let newArticle = `
	      <article id="article-${index}" class="article">
	        <section class="featuredImage">
	          <img src="${element.urlToImage}" alt="" />
	        </section>
	        <section class="articleContent">
	            <a href="#"><h3>${element.title}</h3></a>
	            <h6>${element.publishedAt}</h6>
	        </section>
	        <section class="impressions">
	        	${element.CachedCommentCount}
	        </section>
	        <div class="clearfix"></div>
	      </article>
	    `;
    	let newPopArticle = `
            <h1>${element.title}</h1>
            <p>
              ${element.description}
            </p>
            <a href="${element.url}" class="popUpAction" target="_blank">Read more from source</a>
    	`;
    	
    	$('#main').append(newArticle);
    	$('#popUp').addClass('hidden');
    	$(`#article-${index}`).on('click', function(){
    		$('#popUp .container').html('');
				$('#popUp').removeClass('loader hidden');
				$('#popUp .container').append(newPopArticle);
			});
   });
	});
 });

$('#source3').on('click', function(){
	$('#main').html('');
	$('#popUp').removeClass('hidden');
	$.get("https://newsapi.org/v1/articles?source=techcrunch&sortBy=top&apiKey=`${apiKey}`", function(results) {
		results.articles.forEach(function(element,index) {
    	console.log(element);
    	let newArticle = `
	      <article id="article-${index}" class="article">
	        <section class="featuredImage">
	          <img src="${element.urlToImage}" alt="" />
	        </section>
	        <section class="articleContent">
	            <a href="#"><h3>${element.title}</h3></a>
	            <h6>${element.publishedAt}</h6>
	        </section>
	        <section class="impressions">
	        	${element.CachedCommentCount}
	        </section>
	        <div class="clearfix"></div>
	      </article>
	    `;
    	let newPopArticle = `
            <h1>${element.title}</h1>
            <p>
              ${element.description}
            </p>
            <a href="${element.url}" class="popUpAction" target="_blank">Read more from source</a>
    	`;
    	
    	$('#main').append(newArticle);
    	$('#popUp').addClass('hidden');
    	$(`#article-${index}`).on('click', function(){
    		$('#popUp .container').html('');
				$('#popUp').removeClass('loader hidden');
				$('#popUp .container').append(newPopArticle);
			});
   });
	});
 });

$('#popUp .closePopUp').on('click', function(){
	$('#popUp .container').html('');
	$('#popUp').addClass('hidden')
})

$('#search img').on('click', function(){
	$('#search').toggleClass('active');
})

$('#search').keypress(function (e) {
 let key = e.which;
 if(key == 13) 
  {
    $('#search').toggleClass('active');
  }
}); 


$('#logo').on('click', function() {
    location.reload();
});