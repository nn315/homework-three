
import { changePage } from "../model/model.js";

function initListeners() {

  
}
  //this function is use to grab the hash tag and load the correct page.
function route(){
    let hashTag=window.location.hash;
    let pageID = hashTag.replace("#", "");
    console.log("route",pageID);
changePage(pageID);

}

//This functoin adds the url listener to the window 
function initSite(){

    $(window).on("hashchange",route);
route();
}

$(document).ready(function () {
  changePage("home");
initSite();


}); 