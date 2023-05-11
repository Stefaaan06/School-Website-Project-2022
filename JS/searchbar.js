/*
Item suche
@author Stefan Crasninec
@version 11.05.2023
 */
function search_item() {
    let input = document.getElementById('search').value     //nimmt sich den Input hinaus
    input = input.toLowerCase();    //macht den input zu lower case

    //holt sich die Itemliste & die einzelnen Items
    let x = document.getElementsByClassName('searchItem');
    let y = document.getElementById("list");

    //wiederholt sich für jedes Item
    for (i = 0; i < x.length; i++) {
        //falls der Input größer als 1 ist
        if(input.length > 1){
            if (!x[i].innerHTML.toLowerCase().includes(input)) {    //falls kein Item gefunden wurde
                //versteckt element
                x[i].style.display="none";
                x[i].style.visibility = "hidden";
                y.style.visibility = "visible";
                y.style.display="initial"

            }
            else {  //falls ein Item gefunden wurde
                //zeigt element
                x[i].style.display="list-item";
                x[i].style.visibility = "visible";
                y.style.visibility = "visible";
            }
        }else{  //falls kein oder nicht genug charaktere eingegeben wurde
            //versteckt elemente
            x[i].style.display="none";
            x[i].style.visibility = "hidden";
            y.style.visibility = "hidden";
        }
    }
}
