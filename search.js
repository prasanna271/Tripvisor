var filters = ["Place", "Explore", "Price Range"];
var filterCategory = document.getElementsByClassName('filter-category')[0];
filterCategory.innerHTML = "";
for(var i=0;i<filters.length;i++){
    var filter_item = "<p class='item filter-cat-btn'>"+filters[i]+"</p>";
    filterCategory.innerHTML+=filter_item;
}

var filterCat = document.getElementsByClassName('filter-cat-btn');
for (var i = 0 ; i < filterCat.length; i++) {
    filterCat[i].addEventListener("click", handleFilterCategory, false);
}

isFilterCategoryVisible = false;
function handleFilter(e){
    if(filterCategory.style.display == "none"){
        filterCategory.style.display = "block"; 
        isFilterCategoryVisible = true;
    }
    else{
        filterCategory.style.display = "none"; 
        isFilterCategoryVisible = false;
    }
}

var selectedfilter = "Place";
function handleFilterCategory(e){
    selectedfilter = e.target.innerHTML;
    var category = document.getElementById("filter").firstElementChild;
    category.innerHTML = selectedfilter;
    filterCategory.style.display = "none"; 
    isFilterCategoryVisible = false;
}

var prevInput = "";
function inputTextListener(){
    if(prevInput!=document.querySelector("#search-bar").value && document.querySelector("#search-bar").value != ""){
        prevInput = document.querySelector("#search-bar").value;
        
        let MatchRegex = /[0-9,]+/;
        let rexp = MatchRegex.test(prevInput); 

        if(rexp){
            selectedfilter = "Price Range";
            var category = document.getElementById("filter").firstElementChild;
            category.innerHTML = selectedfilter;
            data.sort(sortByKey("price"));

            final_data = []
            for(var i=0;i<data.length;i++){
                if(parseInt(prevInput.replace(",","")) >= data[i]["price"]){
                    final_data.push(data[i]);
                }
            }

            if(final_data.length>0){
                showSearchResult(final_data,true);
            }
            else{
                showSearchResult(data,true);
            }
        }
        else{
            if(selectedfilter == "Price Range"){
                selectedfilter = "Place";
                var category = document.getElementById("filter").firstElementChild;
                category.innerHTML = selectedfilter;
            }

            if(selectedfilter=="Place"){
                final_data = []
                for(var i=0;i<data.length;i++){
                    let expl = data[i]["destination"].toLowerCase().toString();
                    if(expl.includes(prevInput.toLowerCase())){
                        final_data.push(data[i])
                    }
                }

                if(final_data.length>0){
                    showSearchResult(final_data,false);
                }
                else{
                    showSearchResult(data,false);
                }
            }
            else if(selectedfilter=="Explore"){

                final_data = []
                for(var i=0;i<data.length;i++){
                    var expl = data[i]["explore"].join(" ").toLowerCase().toString();
                    if(expl.includes(prevInput.toLowerCase())){
                        final_data.push(data[i])
                    }
                }
                
                if(final_data.length>0){
                    showSearchResult(final_data,false);
                }
                else{
                    showSearchResult(data,false);
                }
            }
        }
    }
    else if(document.querySelector("#search-bar").value == ""){
        console.log("val "+document.querySelector("#search-bar"));
        closeSearchResult();
    }
}

var isSearchResultVisible = false;
function showSearchResult(data, isprice){
    isSearchResultVisible = true;
    var modal = document.querySelector("#search-results");
    modal.innerHTML = "";
    for(var i=0;i<data.length;i++){
        var item = data[i];
        var desc = "";
        if(isprice){
            desc = item['price'].toLocaleString('en-US', {style: 'currency',currency: 'INR',});
        }
        else{
            desc = item["explore"].join(", ");
        }
        var sitem = "<div class='res-item search-res-btn' data-dest='"+item["destination"]+"'><p class='title'>"+item["destination"]+"</p><p class='desc'>"+desc+"</p></div>";
        modal.innerHTML+=sitem;
    }
    modal.style.display = "flex";

    var search_tiles = document.getElementsByClassName('search-res-btn');
    for (var i = 0 ; i < search_tiles.length; i++) {
        search_tiles[i].addEventListener("click", handleSearch, false);
    }
}

document.addEventListener("click",
    function(event) {
      if (!event.target.closest("#search-results") && isSearchResultVisible) {
        closeSearchResult();
      }
    },false);

function closeSearchResult() {
    console.log("called");
    isSearchResultVisible = false;
    document.querySelector("#search-results").style.display = "none";
}

function sortByKey(key){  
    return function(a,b){  
       if(a[key] > b[key])  
          return 1;  
       else if(a[key] < b[key])  
          return -1;
       return 0;  
    }  
 }

 function handleSearch(e){
    var dest_item = e.target.closest('.search-res-btn');
    var destination = dest_item.getAttribute('data-dest');
    route(destination);
}

function route(destination){
    window.location.href="destination.html?p="+destination;
}