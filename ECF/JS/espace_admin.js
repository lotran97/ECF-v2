 document.forms["connexion_admin"].addEventListener('submit', function(e){
	var erreur;
 	var inputs=this;


 if (inputs['id'].value !='Admin1'){
 	erreur="Identifiant incorrect";
 	e.preventDefault();
 }
 if(inputs['mdp'].value !='password1'){
 	erreur="Mot de passe incorrect";
 	e.preventDefault();
 } 

 if(erreur){
	e.preventDefault();
 	document.getElementById("erreur").innerHTML = erreur;
 	return false;
	}

 else
 	if(inputs['mdp'].value =='password1'){
 		window.location.replace("page_admin.html")
	e.preventDefault();
 	}
});

 
	
