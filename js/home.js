let requestURL = "data/home.json";
let request = new XMLHttpRequest();
//getting content Element to append grants information
let maincontentContainer = document.getElementsByClassName('main-content')[0];
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function(){
    let content = '';
    const webelementsjson = request.response;
    //condition for checking if browser is Internet Explorer
    let webelements =  ((false || !!document.documentMode))? JSON.parse(webelementsjson): webelementsjson;
    let logostart = true;
    for(let i = 0; i < webelements.length; i++)
    {
        let element = webelements[i]; 
        if(element.type == 'p')
        {
            content += '<p>' + element.content + '</p>';
        }
        else if(element.type == 'a' && element.logo != '')
        {
            if(logostart == true)
            {
                content +='<div class = "display-flex">';
                logostart = false;
            }
            content +='<div class = "col-xl-4 col-lg-6 col-md-12">'+
                        '<a target = "_blank" href = "'+ element.source +'">'+
                            '<div class = "home-logo-container">' +
                                '<img class = "home-logo" src = "assets/logos/home/' + element.logo+ '">'+
                                '<p>'+element.content+'</p>' +
                            '</div>'+
                        '</a>'+
                    '</div>';
            if(i+1 ==  webelements.length){
                content += '</div>';
            }
        }
    }

    let contentElement = document.createElement('div');
    contentElement.classList.add('content');
    contentElement.innerHTML = content.trim();
    maincontentContainer.appendChild(contentElement);
}