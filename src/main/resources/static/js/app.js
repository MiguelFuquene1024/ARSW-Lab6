/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
const app = (function(){
    let author;
    let bluePrint;
    
    function getName(){
        $("#nombreAutor").text(author+"'s "+"bluprints:");
    }
    function getBluePrint(){
        $("nombreBluePrint").text("Current blueprint: " + blueprint);
    }
    
    function getAuthorBlueprints(){
        author = $("#author").val();
        if(author === ""){
            alert("Debe ingresar un nombre !");
        }else{
            apimock.getBlueprintsByAuthor(author, (req, resp)=>{
                
            });
        }
    }
    
    function parceroData(data){
        $("#blueprintsTable tbody").empty();
        
        if(data === undefined){
            alert("No existe el autor!");
            $("#nombreAutor").empty();
            $("#userPoints").empty();
        }else{
            getName();
            const datanew = data.map((elemento)=>{
                return{
                    name:elemento.name,
                    puntos:elemento.points.length
                }
            });
            datanew.map((elementos)=>{
                $("#blueprintsTable > tbody:last").append($("<tr><td>" +elementos.name + "</td><td>" + elementos.puntos.toString() + "</td><td>" + "<button id=" + elementos.name + " onclick=app.getBlueprintByAuthorAndName(this)>open</button>" + "</td>"));
            });
            
            const puntosTotales = datanew.reduce((suma,{puntos})=> suma + puntos,0);
            
            $("#userPoints").text(puntostotales);
        }
    }
    function getBlueprintByAuthorAndName(data) {
        author = $("#author").val();
        blueprintName = data.id;
        apimock.getBlueprintsByNameAndAuthor(blueprintName, author, (req, resp) => {
            pintaparcero(resp);
        });
    }

    function pintaparcero(data) {
        getBluePrintName();
        const puntos = data.points;
        var c = document.getElementById("myCanvas");
        var c2d= c.getContext("2d");
        c2d.clearRect(0, 0, c.width, c.height);
        c2d.restore();
        c2d.beginPath();
        for (let i = 1; i < puntos.length; i++) {
            c2d.moveTo(puntos[i - 1].x, puntos[i - 1].y);
            c2d.lineTo(puntos[i].x, puntos[i].y);
            if (i === puntos.length - 1) {
                c2d.moveTo(puntos[i].x, puntos[i].y);
                c2d.lineTo(puntos[0].x, puntos[0].y);
            }
        }
        c2d.stroke();
    }


    return {

        getAuthorBlueprints: getAuthorBlueprints,
        getBlueprintByAuthorAndName: getBlueprintByAuthorAndName

    }

})();


