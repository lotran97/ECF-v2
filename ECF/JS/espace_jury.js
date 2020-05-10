(function choix_catégories(){
	var confirmer=document.getElementById('confirmer');

	confirmer.addEventListener('click', function(){
		if(confirm("Etes-vous sûr? Ce choix est définitif")){
			confirmer.disabled="disabled"
			alert('Choix confirmé');
		}
	
    })
}());





var tableau1=document.getElementById('tableau1');
var tableau2=document.getElementById('tableau2');
var tableau3=document.getElementById('tableau3');
var tableau4=document.getElementById('tableau4');



function toggle1(){
	
  if(getComputedStyle(tableau1).display != "none"){
    tableau1.style.display = "none";
  } else {
    tableau1.style.display = "block";
  }
};
tableau_roman1.onclick = toggle1;


function toggle2(){
	
if(getComputedStyle(tableau2).display != "none"){
    tableau2.style.display = "none";
  } else {
    tableau2.style.display = "block";
  }
};
tableau_roman2.onclick = toggle2;


function toggle3(){
if(getComputedStyle(tableau3).display != "none"){
    tableau3.style.display = "none";
  } else {
    tableau3.style.display = "block";
  }
};
tableau_docu.onclick = toggle3;


function toggle4(){
if(getComputedStyle(tableau4).display != "none"){
    tableau4.style.display = "none";
  } else {
    tableau4.style.display = "block";
  }
};
tableau_bio.onclick = toggle4;