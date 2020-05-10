document.getElementById('soumission_oeuvre').addEventListener("submit", function(e){

var erreur;
var inputs=document.getElementsByTagName("input");

for (var i=0; i<inputs.length; i++){
	if (!inputs[i].value){
		erreur="Veuillez remplir tout les champs";
		break;

	}
}

 	
if(erreur) {

 		e.preventDefault();
 		document.getElementById("erreur").innerHTML = erreur;
 		return false;
 	} 
 	else {
 	 alert('Oeuvre envoyée!') 
 	}
 });