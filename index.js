var data = [
    {destination: "Singapore", explore: ["Trekking","Restaurants","Monuments"],places: 120,image: "assets/singapore.jpeg", price: 45000, description: "Singapore is more than its tourist attractions. It's constantly evolving, reinventing, and reimagining itself, with people who are passionate about creating new possibilities. It's not just about what you can do here, it's about what you can be. @@@ The story of Singapore is one of trials, tribulations and triumphs. In a short span of just over 50 years, we have evolved from a colony to a city-state with our own unique identity, forged by a spirit of never settling. And it's this spirit that's imbued into the architectural wonders, lush parks, proud heritage, world-class attractions and amazing food of the cosmopolitan metropolis you see today."},
    {destination: "Dubai", explore: ["Trekking","Surfing","Desert Riding","World Wonders"],places: 50,image: "assets/dubai.jpeg", price: 70000, description: "Dubai city has thrills for every traveller from beautiful beaches to spectacular spas. Discover upcoming events in Dubai & view Dubai's events calendar to plan your trip. World famous attractions. Underwater zoo. Waterparks. Adventure & sports. Family fun. @@@ Beaches, sunshine, entertainment Dubai has it all. It's no wonder we've been named Tripadvisor's top destination in the world for 2022. Come see the magic."},
    {destination: "India", explore: ["World Wonders","Monuments","Culture","Nature"],places: 533,image: "assets/india.jpeg", price: 25000, description: "One of the oldest civilisations in the world, India is a mosaic of multicultural experiences. With a rich heritage and myriad attractions, the country is among the most popular tourist destinations in the world. It covers an area of 32, 87,263 sq. km, extending from the snow-covered Himalayan heights to the tropical rain forests of the south. As the 7th largest country in the world, India stands apart from the rest of Asia, marked off as it is by mountains and the sea, which give the country a distinct geographical entity."},
    {destination: "Switzerland", explore: ["Chocolate","Banks","Cheese"],places: 53,image: "assets/switzerland.jpeg", price: 90000, description: "Switzerland tourism is thriving now more than ever thanks to its temperate climate, stunning locales, good food and progressive economy. Switzerland Tourism includes must-see spots like the Alps and Rhone, delicious cheeses and chocolates and so much more."},
    {destination: "Rome", explore: ["Ethinic Cities","Monuments","History"],places: 42,image: "assets/rome.jpeg", price: 140000, description: "Rome's two most popular tourist destinations are the Vatican Museums (with over 4.2 million tourists per year, making them the world's 37th most visited destination) and the Colosseum(with around 4 million tourists a year, making it the world's 39th most popular tourist destination)."},
    {destination: "Maui", explore: ["Surfing","Hiking","Nature"],places: 29,image: "assets/maui.jpeg", price: 85000, description: "Stark volcanic landscapes, emerald valleys, and black-sand beaches—Maui really brings the drama. Sure, there are plenty of resorts and hotels here, but Maui never loses itself to tourism. Instead, it remains grounded in lush nature, Hawaiian culture, and aloha spirit."},
    {destination: "New Zealand", explore: ["Nature","Weather"],places: 21,image: "assets/newzealand.jpeg", price: 50000, description: "Across New Zealand, you can find everything from untamed wilderness to rich culture. From towering mountains and mist-cloaked fjords, you can find serenity in golden beaches curled around quiet bays. Make new friends in small towns with big doses of laid-back charm."},
    {destination: "London", explore: ["Monuments","Restaurants","History"],places: 26,image: "assets/london.jpeg", price: 65000, description: "London hosts all kinds of attractions that suit all sorts of preferences, and there's always something interesting going on in the city. London hosts a grand number of attractions, museums, cultural exhibits and adventures, and there's no reason to get bored, irrespective of how long you plan to live here."}
]
var favourites = [];


var dest_wrapper = document.getElementById('destination-wrapper');
dest_wrapper.innerHTML = "";
for(var i in data){
    var item = data[i];
    var explore_x = "", d_item="";
    for(var j in item["explore"]){
        explore_x += "<p class='explore-item'>"+item["explore"][j]+"</p>";
    }
    d_item = "<div class='item dest-item' data-dest='"+item["destination"]+"'> <img class='destination' src='"+item["image"]+"'/> <div class='header'> <div class='fav-dest item-fav-btn'> <svg data-destination='"+item["destination"]+"' xmlns='http://www.w3.org/2000/svg' height='32px' viewBox='0 0 24 24' width='32px' fill='#2c2c2c'><path d='M0 0h24v24H0z' fill='none'/><path d='M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z'/></svg> </div></div><div class='content'> <p class='title'>"+item["destination"]+"</p><div class='explore'> "+explore_x+" </div><p class='desc'>"+item["places"]+"+ PLACES</p></div></div>";
    dest_wrapper.innerHTML += d_item;
}

var destination_tiles = document.getElementsByClassName('dest-item');
for (var i = 0 ; i < destination_tiles.length; i++) {
    destination_tiles[i].addEventListener("click", handleTile, false);
}

var favourite_btn = document.getElementsByClassName('item-fav-btn');
for (var i = 0 ; i < favourite_btn.length; i++) {
    favourite_btn[i].addEventListener("click", handleFavourites, false);
}

var fav_wrapper = document.getElementById('fav-wrapper');
fav_wrapper.innerHTML = "";
function handleFavourites(e){
    var favourite = e.target.parentNode.getAttribute("data-destination");
    var isPresent = favourites.includes(favourite);
    if(isPresent){
        e.target.parentNode.classList.remove('heart-filled');
        favourites.splice(favourites.indexOf(favourite),1);
    }
    else{
        e.target.parentNode.classList.add('heart-filled');
        favourites.push(favourite);
    }

    if(favourites.length==0){
        var element = document.getElementById("fav-"+favourite); 
        element.parentNode.removeChild(element);

        var fav = document.getElementsByClassName('favourites')[0];
        fav.style.display = "none";
        var conWrap = document.getElementsByClassName('content-wrapper')[0];
        conWrap.classList.add("cw-align");
    }
    else{
        if(!isPresent && favourites.length){
            var fav = document.getElementsByClassName('favourites')[0];
            fav.style.display = "flex";
            var conWrap = document.getElementsByClassName('content-wrapper')[0];
            conWrap.classList.remove("cw-align");
        }

        if(isPresent){
            var element = document.getElementById("fav-"+favourite); 
            element.parentNode.removeChild(element);
        }
        else{
            for(var i in data){
                var item = data[i];
                if(favourite==item["destination"]){
                    var explore_x = "", d_item="";
                    for(var j in item["explore"]){
                        explore_x += "<p class='explore-item'>"+item["explore"][j]+"</p>";
                    }
                    d_item = "<div id='fav-"+favourite+"' class='fav-item'> <img class='dest-img' src='"+item["image"]+"'/> <div class='content'> <p class='title'>"+item["destination"]+"</p><div class='explore'> "+explore_x+" </div><div class='header'> <div class='fav-btn'> <svg xmlns='http://www.w3.org/2000/svg' height='32px' viewBox='0 0 24 24' width='32px' fill='#ff004c'><path d='M0 0h24v24H0V0z' fill='none'/><path d='M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v10zM9 9h6c.55 0 1 .45 1 1v8c0 .55-.45 1-1 1H9c-.55 0-1-.45-1-1v-8c0-.55.45-1 1-1zm6.5-5l-.71-.71c-.18-.18-.44-.29-.7-.29H9.91c-.26 0-.52.11-.7.29L8.5 4H6c-.55 0-1 .45-1 1s.45 1 1 1h12c.55 0 1-.45 1-1s-.45-1-1-1h-2.5z'/></svg> </div></div></div></div>";
                    fav_wrapper.innerHTML += d_item;
                    break;
                }
            }
        }
    }
}

function favouriteView(){
    fav_wrapper.innerHTML = "";
    if(favourites.length>0){
        var fav = document.getElementsByClassName('favourites')[0];
        fav.style.display = "flex";
        var conWrap = document.getElementsByClassName('content-wrapper')[0];
        conWrap.classList.remove("cw-align");

        for(var j in favourites){
            for(var i in data){
                var item = data[i];
                if(favourites[j]==item["destination"]){
                    var explore_x = "", d_item="";
                    for(var j in item["explore"]){
                        explore_x += "<p class='explore-item'>"+item["explore"][j]+"</p>";
                    }
                    d_item = "<div class='fav-item'> <img class='dest-img' src='"+item["image"]+"'/> <div class='content'> <p class='title'>"+item["destination"]+"</p><div class='explore'> "+explore_x+" </div><div class='header'> <div class='fav-btn'> <svg xmlns='http://www.w3.org/2000/svg' height='32px' viewBox='0 0 24 24' width='32px' fill='#ff004c'><path d='M0 0h24v24H0V0z' fill='none'/><path d='M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v10zM9 9h6c.55 0 1 .45 1 1v8c0 .55-.45 1-1 1H9c-.55 0-1-.45-1-1v-8c0-.55.45-1 1-1zm6.5-5l-.71-.71c-.18-.18-.44-.29-.7-.29H9.91c-.26 0-.52.11-.7.29L8.5 4H6c-.55 0-1 .45-1 1s.45 1 1 1h12c.55 0 1-.45 1-1s-.45-1-1-1h-2.5z'/></svg> </div></div></div></div>";
                    fav_wrapper.innerHTML += d_item;
                    break;
                }
            }
        }

    }
    else{
        var fav = document.getElementsByClassName('favourites')[0];
        fav.style.display = "none";
        var conWrap = document.getElementsByClassName('content-wrapper')[0];
        conWrap.classList.add("cw-align");
    }
}

function handleTile(e){
    var dest_item = e.target.closest('.dest-item');
    var destination = dest_item.getAttribute('data-dest');
    if(e.target.parentNode.parentNode != e.target.closest('.item-fav-btn')){
        route(destination);
    }
}