
function search_item() {
    let input = document.getElementById('search').value
    input = input.toLowerCase();

    let x = document.getElementsByClassName('searchItem');
    let y = document.getElementById("list");
          
    for (i = 0; i < x.length; i++) { 
        if(input.length > 1){
            if (!x[i].innerHTML.toLowerCase().includes(input)) {
                x[i].style.display="none";
                x[i].style.visibility = "hidden";
                y.style.visibility = "visible";
                
            }
            else {
                x[i].style.display="list-item";       
                x[i].style.visibility = "visible";
                y.style.visibility = "visible";
            }
        }else{
            x[i].style.display="none";
            x[i].style.visibility = "hidden";
            y.style.visibility = "hidden";
        }
    }
}
