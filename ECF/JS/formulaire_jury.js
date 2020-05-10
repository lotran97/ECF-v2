document.getElementById('confirmation_email').addEventListener('input', function(){
	if(this.value != document.getElementById('email').value){
		document.getElementById('erreur_mail').innerHTML="Veuillez saisir deux adresses identiques";
	}
	else {
		document.getElementById('erreur_mail').innerHTML="";
	}
});


document.getElementById('inscription_jury').addEventListener("submit", function(e){

var erreur;
var inputs=document.getElementsByTagName("input");

for (var i=0; i<inputs.length; i++){
	if (!inputs[i].value){
		erreur="Veuillez remplir les champs obligatoires";
		break;

	}
}

 	
if(erreur) {

 		e.preventDefault();
 		document.getElementById("erreur").innerHTML = erreur;
 		return false;
 	} 
 	else {
 	 alert('Formulaire accepté ! Votre login sera Jury1 et votre mot de passe "mdpjury1"') //envoi le formulaire sur la page d'administration pour confirmation
 	}
 });