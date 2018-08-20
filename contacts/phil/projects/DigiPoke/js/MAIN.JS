
var mons=[];
mons[0]= {pic:"mons/Viximon.png", name:"Viximon", type:"digimon"};
mons[1]= {pic:"mons/1.png", name:"Bulbasaur", type:"pokemon"};
mons[2]= {pic:"mons/2.png", name:"Ivyasaur", type:"pokemon"};
mons[3]= {pic:"mons/3.png", name:"Venusaur", type:"pokemon"};
mons[4]= {pic:"mons/4.png", name:"Charmander", type:"pokemon"};
mons[5]= {pic:"mons/5.png", name:"Charmeleon", type:"pokemon"};
mons[6]= {pic:"mons/6.png", name:"Charizard", type:"pokemon"};
mons[7]= {pic:"mons/7.png", name:"Squirtle", type:"pokemon"};
mons[8]= {pic:"mons/8.png", name:"Wartortle", type:"pokemon"};
mons[9]= {pic:"mons/9.png", name:"Blastoise", type:"pokemon"};
mons[10]= {pic:"mons/10.png", name:"Caterpie", type:"pokemon"};
mons[11]= {pic:"mons/11.png", name:"Metapod", type:"pokemon"};
mons[12]= {pic:"mons/12.png", name:"Butterfree", type:"pokemon"};
mons[13]= {pic:"mons/13.png", name:"Weedle", type:"pokemon"};
mons[14]= {pic:"mons/14.png", name:"Kakuna", type:"pokemon"};
mons[15]= {pic:"mons/15.png", name:"Beedrill", type:"pokemon"};
mons[16]= {pic:"mons/16.png", name:"Pidgey", type:"pokemon"};
mons[17]= {pic:"mons/17.png", name:"Pidgeotto", type:"pokemon"};
mons[18]= {pic:"mons/18.png", name:"Pidgeot", type:"pokemon"};
mons[19]= {pic:"mons/19.png", name:"Rattata", type:"pokemon"};
mons[20]= {pic:"mons/20.png", name:"Raticate", type:"pokemon"};
mons[21]= {pic:"mons/21.png", name:"Spearow", type:"pokemon"};
mons[22]= {pic:"mons/22.png", name:"Fearow", type:"pokemon"};
mons[23]= {pic:"mons/23.png", name:"Ekans", type:"pokemon"};
mons[24]= {pic:"mons/24.png", name:"Arbok", type:"pokemon"};
mons[25]= {pic:"mons/25.png", name:"Pikachu", type:"pokemon"};
mons[26]= {pic:"mons/26.png", name:"Raichu", type:"pokemon"};
mons[27]= {pic:"mons/27.png", name:"Sandshrew", type:"pokemon"};
mons[28]= {pic:"mons/28.png", name:"Sandslash", type:"pokemon"};
mons[29]= {pic:"mons/29.png", name:"Nidoran♀", type:"pokemon"};
mons[30]= {pic:"mons/30.png", name:"Nidorina", type:"pokemon"};
mons[31]= {pic:"mons/31.png", name:"Nidoqueen", type:"pokemon"};
mons[32]= {pic:"mons/32.png", name:"Nidoran♂", type:"pokemon"};
mons[33]= {pic:"mons/33.png", name:"Nidorino", type:"pokemon"};
mons[34]= {pic:"mons/34.png", name:"Nidoking", type:"pokemon"};
mons[35]= {pic:"mons/35.png", name:"Clefairy", type:"pokemon"};
mons[36]= {pic:"mons/36.png", name:"Clefable", type:"pokemon"};
mons[37]= {pic:"mons/37.png", name:"Vulpix", type:"pokemon"};
mons[38]= {pic:"mons/38.png", name:"Ninetales", type:"pokemon"};
mons[39]= {pic:"mons/39.png", name:"Jigglypuff", type:"pokemon"};
mons[40]= {pic:"mons/40.png", name:"Wigglytuff", type:"pokemon"};
mons[41]= {pic:"mons/41.png", name:"Zubat", type:"pokemon"};
mons[42]= {pic:"mons/42.png", name:"Golbat", type:"pokemon"};
mons[43]= {pic:"mons/43.png", name:"Oddish", type:"pokemon"};
mons[44]= {pic:"mons/44.png", name:"Gloom", type:"pokemon"};
mons[45]= {pic:"mons/45.png", name:"Vileplume", type:"pokemon"};
mons[746]= {pic:"mons/Wishiwashi.png", name:"Wishiwashi", type:"pokemon"};
mons[774]= {pic:"mons/Minior.png", name:"Minior", type:"pokemon"};
mons[1000]= {pic:"mons/Augumon.png", name:"Augumon", type:"digimon"};
mons[1001]= {pic:"mons/Biyomon.png", name:"Biyomon", type:"digimon"};
mons[1002]= {pic:"mons/Gomamon.png", name:"Gomamon", type:"digimon"};
mons[1003]= {pic:"mons/Gabumon.png", name:"Gabumon", type:"digimon"};
mons[1004]= {pic:"mons/Renamon.png", name:"Renamon", type:"digimon"};
mons[1005]= {pic:"mons/Terriermon.png", name:"Terriermon", type:"digimon"};
mons[1006]= {pic:"mons/Lopmon.png", name:"Lopmon", type:"digimon"};
mons[1007]= {pic:"mons/Guardromon.png", name:"Guardromon", type:"digimon"};



function getMon(){
    i=Math.floor(Math.random() * mons.length);
	if(mons[i]==undefined){
    getMon();
	} else{
	console.log(mons[i].name);
	console.log(mons[i].type);
		document.write("<img id=\"mon\" src=\"" + mons[i].pic + "\">");
	};
};

function isDigimon(){
	if (mons[i].type=="digimon"){
		alert("Correct! That's " + mons[i].name);
	}
	else{
		alert("Sorry, that's the " + mons[i].type + " named " + mons[i].name);
	}
};

function isPokemon(){
	if (mons[i].type=="pokemon"){
		alert("Correct! That's " + mons[i].name);
	}
	else{
		alert("Sorry, that's the " + mons[i].type + " named " + mons[i].name);
	}
};

