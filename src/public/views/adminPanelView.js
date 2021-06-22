/**
 * Method takes the username and password provided by the user
 * and checks the validity by requesting the API
 * */
function sendCredentials(form){
    let imdb_title_id = form.imdb_title_id.value;
    let title = form.title.value;
    let original_title = form.original_title.value;
    let year = form.year.value;
    let date_published = form.date_published.value;
    let genre = form.genre.value;
    let duration = form.duration.value;
    let country = form.country.value;
    let language = form.language.value;
    let director = form.director.value;
    let writer = form.writer.value;
    let production_company = form.production_company.value;
    let actors = form.actors.value;
    let description = form.description.value;
    let avg_vote = form.avg_vote.value;
    let votes = form.votes.value;
    let budget = form.budget.value;
    let usa_gross_income = form.usa_gross_income.value;
    let worlwide_gross_income = form.worlwide_gross_income.value;
    let metascore = form.metascore.value;
    let reviews_from_users = form.reviews_from_users.value;
    let reviews_from_critics = form.reviews_from_critics.value;



    console.log(imdb_title_id,title, original_title, year, date_published, genre, duration,country,language,director,writer, production_company,actors, description, avg_vote, votes, budget, usa_gross_income, worlwide_gross_income, metascore, reviews_from_users, reviews_from_critics);
    let object = {
        "imdb_title_id" : imdb_title_id,
        "title" : title,
        "original_title": original_title,
        "year" : year,
        "date_published" : date_published,
        "genre" : genre,
        "duration" : duration,
        "country" : country,
        "language" : language,
        "director" : director,
        "writer" : writer,
        "production_company" : production_company,
        "actors" : actors,
        "description": description,
        "avg_vote" : avg_vote,
        "votes" : votes,
        "budget" : budget,
        "usa_gross_income" : usa_gross_income,
        "worlwide_gross_income": worlwide_gross_income,
        "metascore" : metascore,
        "reviews_from_users" : reviews_from_users,
        "reviews_from_critics" : reviews_from_critics
    };

    let request = new XMLHttpRequest();
    let url = "http://127.0.0.1:3000/api/create";
    request.open("POST",url,true);
    request.setRequestHeader("Content-Type","application/json");
    request.onreadystatechange = function(){
        if(request.readyState === 4 && request.status ===200){
            alert(request.response);
            if(request.response === "Logged in successfully!") {
                //redirect
                window.location.replace("http://127.0.0.1:3000/api/adminPanel");
            }else{
            }
        }
    };
    request.send(JSON.stringify(object));
}

