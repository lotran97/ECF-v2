document.forms["envoyer_mail"].addEventListener("submit", function(e){

	var erreur;
	var inputs=this;


for (var i=0; i<inputs.length; i++){
	if (!inputs[i].value){
		erreur="Veuillez remplir tout les champs"
	}
}

 	
if(erreur) {

 		e.preventDefault();
 		document.getElementById("erreur").innerHTML = erreur;
 		return false;
 	} 
 	else {
 	 alert('Mail envoyé !') //envoi le mail sur l'espace administration
 	}
 });