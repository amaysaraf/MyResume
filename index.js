var popup=document.querySelectorAll("#popup")

Array.from(popup).forEach((e)=>{
    e.addEventListener("click",function(){
        document.getElementById("hidden").setAttribute("id","visible")
        var blur=document.getElementById("content")
        var content;
        if(e.innerHTML=="Education"){
            content=document.getElementById("popup_edu");
        }
        else if(e.innerHTML=="Skills"){
            content=document.getElementById("popup_skills");
        }
        else if(e.innerHTML=="Projects"){
            content=document.getElementById("popup_projects");
        }
        content.style.height="max-content"
        content.style.visibility="visible"
        blur.style.filter="blur(10px)"
        blur.style.transition= "0.5s ease-in";
    })
})


var button = document.getElementById("btn_close")

button.addEventListener("click",function(){
    document.getElementById("visible").setAttribute("id","hidden");
    
    var ps=document.getElementById("popup_skills")
    ps.style.visibility="hidden";
    ps.style.height=0;
    
    var pe=document.getElementById("popup_edu")
    pe.style.visibility="hidden";
    pe.style.height=0;

    var pj=document.getElementById("popup_projects")
    pj.style.visibility="hidden";
    pj.style.height=0;

    document.getElementById("content").style.filter="blur(0px)"
})