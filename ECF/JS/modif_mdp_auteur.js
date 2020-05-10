

var Mdp = document.getElementById('Mdp');
var NewMdp = document.getElementById('NewMdp');
var NewMdp2 = document.getElementById('NewMdp2');
var modif_mdp = document.getElementById('modif_mdp');


modif_mdp.addEventListener("submit", function(e){
	if(NewMdp.value != NewMdp2.value) {
		alert('Veuillez entrer deux mdp identiques');
		e.preventDefault();
	}
	else{
		if(NewMdp.value == NewMdp2.value){
			alert('Modification réussie!')
			window.location.replace("espace_auteur.html");
			e.preventDefault();
		}
		
	}
});



	



