document.querySelector("#cp_container-1").addEventListener("submit", functionsub);


var prodData = JSON.parse(localStorage.getItem("userDetails")) || [];

function functionsub() {
    event.preventDefault();

    var objData = {
        quote:document.querySelector("#cp_first").value,
        mobile:document.querySelector("#cp_quan-23").value,
        name1:document.querySelector("#name").value,
        quantity:document.querySelector("#cp_quan-12").value,
        require:document.querySelector("#cp_last").value,
    }
    // console.log(objData);
    prodData.push(objData);
    console.log(prodData);
    localStorage.setItem("ProdData", JSON.stringify(prodData));
}