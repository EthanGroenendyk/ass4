$(document).ready(() => {
    //Left Button
    $("#left").on('click', function(){
        if($("#message").val() != ""){
            let newMsg = findLink($("#message").val());
            $(".messages").append("<div class='col-4 offset-4 bg-warning'><p>"+newMsg+"</p></div>");
            $("#message").val("");
        }
    });

    $("#right").on('click', function(){
        if($("#message").val() != ""){
            let newMsg = findLink($("#message").val());
            $(".messages").append("<div class='col-4 offset-4 bg-success'><p>"+newMsg+"</p></div>");
            $("#message").val("");
        }
    });
});

function findLink(boi){
    const youtubeRegex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com|youtu\.be)\/(?:watch\?v=)?(.+)/g;
    if(boi.match(youtubeRegex)){
        let linky = boi.match(youtubeRegex);
        for(let i=0; i<linky.length;i++){
            let vID = linky[i].split("=")[1];
            let frameMan = '<iframe width="100%" height="315" src="https://www.youtube.com/embed/'+vID+'" title="https://www.youtube.com/watch?v=dQw4w9WgXcQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>';
            boi = boi.replace(linky[i],linky[i]+frameMan);
        }
    }
    return boi;
}

//<iframe width="660" height="371" src="https://www.youtube.com/embed/_K2VWwM2iw8" title="Persona 5 Arena Ultimax Battle Loading Screen?" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>