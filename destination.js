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

var lc = window.location.href;
var param = lc.split("/")[lc.split("/").length-1].split("?");
var p = param[param.length-1].split("=")[1];

initData(p);

function initData(dest){
    isDestAvailable = false;
    for(var i=0;i<data.length;i++){
        var item = data[i];
        if(item["destination"].toLowerCase()==dest.toLowerCase()){
            isDestAvailable = true;
            var titleView = document.getElementById('dest-title');
            titleView.innerHTML = item["destination"].toLocaleUpperCase();

            var descView = document.getElementById('desc-itm');
            var desc = item["description"];
            desc = desc.replace("@@@","<br><br>");
            descView.innerHTML = desc;

            var exploreView = document.getElementById('explore-itm');
            exploreView.innerHTML = "";
            var explore_x = "";
            for(var j in item["explore"]){
                explore_x += "<p class='explore-item'>"+item["explore"][j]+"</p>";
            }
            exploreView.innerHTML = explore_x;

            var priceView = document.getElementById('price-ft');
            var price = item['price'].toLocaleString('en-US', {style: 'currency',currency: 'INR',})+"<sup>*</sup>"; 
            priceView.innerHTML = price;

            var dest_img = document.getElementById('dest-view-img');
            dest_img.src = item['image'];
            
        }
    }

    if(!isDestAvailable){
        document.getElementById('ctnt').innerHTML = "";
    }
}