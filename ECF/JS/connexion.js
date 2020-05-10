 document.forms["connexion_public"].addEventListener('submit', function(e){
	var erreur;
 	var inputs=this;


if(inputs['mdp'].value =='mdpauteur1' && inputs['user'].value =='Auteur1'){
 	window.location.replace("modif_mdp_auteur.html")
 	e.preventDefault();
 }

 if(inputs['mdp'].value =='mdpjury1' && inputs['user'].value =='Jury1'){
 		window.location.replace("modif_mdp_jury.html")
	e.preventDefault();
 	}


 if (inputs['user'].value !='Jury1' || inputs['user'].value !='Auteur1'){
 	erreur="Identifiant incorrect";
 	e.preventDefault();
 }
 if(inputs['mdp'].value !='mdpjury1' || inputs['mdp'].value !='mdpauteur1'){
 	erreur="Mot de passe incorrect";
 	e.preventDefault();
 } 

 if(erreur){
	e.preventDefault();
 	document.getElementById("erreur").innerHTML = erreur;
 	return false;
	}

 	
});