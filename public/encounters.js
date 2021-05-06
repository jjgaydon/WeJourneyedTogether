// Citation https://www.w3schools.com/jsref/met_table_insertrow.asp
// Citation https://stackoverflow.com/questions/28114916/how-to-access-a-button-in-a-table-via-the-cell-index/28115091


var tempButton = document.getElementById("btnSignIn");
tempButton.onclick = signIn;
tempButton = document.getElementById("btnSignOut");
tempButton.onclick = signOut;
tempButton = document.getElementById("btnLoadModule");
tempButton.onclick = btnLoadModule_Click;
tempButton = document.getElementById("btnExitModule");
tempButton.onclick = btnExitModule_Click;
tempButton = document.getElementById("btnAddEncounter");
tempButton.onclick = btnAddEncounter_Click;
tempButton = document.getElementById("btnExitCreate");
tempButton.onclick = btnExitCreate_Click;
tempButton = document.getElementById("btnNewEncounterSubmit");
tempButton.onclick = btnNewEncounterSubmit_Click;
tempButton = document.getElementById("btnNewEncounterCancel");
tempButton.onclick = btnNewEncounterCancel_Click;


var provider = new firebase.auth.GoogleAuthProvider();
var globalUsername = "none";
var globalModuleName = "none";
var globalModuleObject = null;

function signIn()
{
  if (firebase.auth().currentUser != null)
  {
    firebase.auth().signOut().then((result) => {
      signIn();
    });
  }
  else
  {
    firebase.auth()
    .signInWithPopup(provider)
    .then((result) => {
      /** @type {firebase.auth.OAuthCredential} */
      var credential = result.credential;
    

      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = credential.accessToken;
      // The signed-in user info.
      //var user = result.user;
      //var email = result.user.email;
      var emailTokens = result.user.email.split("@");
      var userName = emailTokens[0];
      globalUsername = userName;

      var user = firebase.auth().currentUser;
      var email = user.getIdToken();
      //console.log(result.user.uid);
      var mainMenuDiv = document.getElementById("divMainMenu");

      mainMenuDiv.style = "";
      document.getElementById("divStartMenu").style = "display:none";

      //validateUser(userName);

      //loadGames();

      //loadGameList();
      // ...
      }).catch((error) => {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });
  }

  
}

function signOut()
{
  firebase.auth().signOut().then((result) => {
    var mainMenuDiv = document.getElementById("divMainMenu");
    mainMenuDiv.style = "display:none";
    document.getElementById("divStartMenu").style = "display:block";
  });
}

function btnLoadModule_Click()
{
  firebase.database().ref("modules/" + document.getElementById("taMainMenuModuleName").value).on("value", (snapshot) => {
    if (snapshot.val() == null)
    {
      return;
    }
    globalModuleObject = snapshot.val();
    LoadEncounters();
  });
  globalModuleName = document.getElementById("taMainMenuModuleName").value;
  document.getElementById("divMainMenu").style = "display:none";
  document.getElementById("divModuleMenu").style = "";
}

function btnExitModule_Click()
{
  globalModuleName = "none";
  globalModuleObject = null;
  document.getElementById("divMainMenu").style = "";
  document.getElementById("divModuleMenu").style = "display:none";
  firebase.database().ref("modules/" + document.getElementById("taMainMenuModuleName").value).off();
}


function editEncounterItem(event)
{
  var d = event.target.attributes.value.nodeValue;
  var pNode = event.parentNode;
  console.log(pNode);
}

function addEncounterToTable(table, object, biome, theme, id)
{
  var row = table.insertRow(1);
  try
  {
    //var cellEdit = row.insertCell(0); cellEdit.innerHTML = "<input type=\"button\" class=\"btn btn-info\" value=\"Edit\" />";
    //cellEdit.firstChild.addEventListener('click', editEncounterItem);
    var cellDesc = row.insertCell(0); cellDesc.innerHTML = object.desc;
    var cellReward = row.insertCell(0); cellReward.innerHTML = object.reward;
    var cellRewardIA = row.insertCell(0); cellRewardIA.innerHTML = object.rewardIA;
    var cellRewardAC = row.insertCell(0); cellRewardAC.innerHTML = object.rewardAC;
    var cellRewardPD = row.insertCell(0); cellRewardPD.innerHTML = object.rewardPD;
    var cellChallengeIA = row.insertCell(0); cellChallengeIA.innerHTML = object.challengeLevelIA;
    var cellChallengeAC = row.insertCell(0); cellChallengeAC.innerHTML = object.challengeLevelAC;
    var cellChallengePD = row.insertCell(0); cellChallengePD.innerHTML = object.challengeLevelPD;
    var cellSuccessCount = row.insertCell(0); cellSuccessCount.innerHTML = object.successCount;
    var cellName = row.insertCell(0); cellName.innerHTML = object.name;
    var cellTheme = row.insertCell(0); cellTheme.innerHTML = "theme" + String(theme);
    var cellBiome = row.insertCell(0); cellBiome.innerHTML = "biome" + String(biome);
    var cellID = row.insertCell(0); cellID.innerHTML = String(id);
  }
  catch
  {
    table.deleteRow(1);
  }
  
}

function addBiome1EncountersToTable(table)
{
  try {addEncounterToTable(table, globalModuleObject.encounters.biome1.theme0.id1,1,0,1);} catch {}
  try {addEncounterToTable(table, globalModuleObject.encounters.biome1.theme0.id2,1,0,2);} catch {}
  try {addEncounterToTable(table, globalModuleObject.encounters.biome1.theme0.id3,1,0,3);} catch {}
  try {addEncounterToTable(table, globalModuleObject.encounters.biome1.theme0.id4,1,0,4);} catch {}

  try {addEncounterToTable(table, globalModuleObject.encounters.biome1.theme1.id1,1,1,1);} catch {}
  try {addEncounterToTable(table, globalModuleObject.encounters.biome1.theme1.id2,1,1,2);} catch {}

  try {addEncounterToTable(table, globalModuleObject.encounters.biome1.theme2.id1,1,2,1);} catch {}
  try {addEncounterToTable(table, globalModuleObject.encounters.biome1.theme2.id2,1,2,2);} catch {}

  try {addEncounterToTable(table, globalModuleObject.encounters.biome1.theme3.id1,1,3,1);} catch {}
  try {addEncounterToTable(table, globalModuleObject.encounters.biome1.theme3.id2,1,3,2);} catch {}

  try {addEncounterToTable(table, globalModuleObject.encounters.biome1.theme4.id1,1,4,1);} catch {}
  try {addEncounterToTable(table, globalModuleObject.encounters.biome1.theme4.id2,1,4,2);} catch {}

  try {addEncounterToTable(table, globalModuleObject.encounters.biome1.theme5.id1,1,5,1);} catch {}
  try {addEncounterToTable(table, globalModuleObject.encounters.biome1.theme5.id2,1,5,2);} catch {}
}

function addBiome2EncountersToTable(table)
{
  try {addEncounterToTable(table, globalModuleObject.encounters.biome2.theme0.id1,2,0,1);} catch {}
  try {addEncounterToTable(table, globalModuleObject.encounters.biome2.theme0.id2,2,0,2);} catch {}
  try {addEncounterToTable(table, globalModuleObject.encounters.biome2.theme0.id3,2,0,3);} catch {}
  try {addEncounterToTable(table, globalModuleObject.encounters.biome2.theme0.id4,2,0,4);} catch {}

  try {addEncounterToTable(table, globalModuleObject.encounters.biome2.theme1.id1,2,1,1);} catch {}
  try {addEncounterToTable(table, globalModuleObject.encounters.biome2.theme1.id2,2,1,2);} catch {}

  try {addEncounterToTable(table, globalModuleObject.encounters.biome2.theme2.id1,2,2,1);} catch {}
  try {addEncounterToTable(table, globalModuleObject.encounters.biome2.theme2.id2,2,2,2);} catch {}

  try {addEncounterToTable(table, globalModuleObject.encounters.biome2.theme3.id1,2,3,1);} catch {}
  try {addEncounterToTable(table, globalModuleObject.encounters.biome2.theme3.id2,2,3,2);} catch {}

  try {addEncounterToTable(table, globalModuleObject.encounters.biome2.theme4.id1,2,4,1);} catch {}
  try {addEncounterToTable(table, globalModuleObject.encounters.biome2.theme4.id2,2,4,2);} catch {}

  try {addEncounterToTable(table, globalModuleObject.encounters.biome2.theme5.id1,2,5,1);} catch {}
  try {addEncounterToTable(table, globalModuleObject.encounters.biome2.theme5.id2,2,5,2);} catch {}
}

function addBiome3EncountersToTable(table)
{
  try {addEncounterToTable(table, globalModuleObject.encounters.biome3.theme0.id1,3,0,1);} catch {}
  try {addEncounterToTable(table, globalModuleObject.encounters.biome3.theme0.id2,3,0,2);} catch {}
  try {addEncounterToTable(table, globalModuleObject.encounters.biome3.theme0.id3,3,0,3);} catch {}
  try {addEncounterToTable(table, globalModuleObject.encounters.biome3.theme0.id4,3,0,4);} catch {}

  try {addEncounterToTable(table, globalModuleObject.encounters.biome3.theme1.id1,3,1,1);} catch {}
  try {addEncounterToTable(table, globalModuleObject.encounters.biome3.theme1.id2,3,1,2);} catch {}

  try {addEncounterToTable(table, globalModuleObject.encounters.biome3.theme2.id1,3,2,1);} catch {}
  try {addEncounterToTable(table, globalModuleObject.encounters.biome3.theme2.id2,3,2,2);} catch {}

  try {addEncounterToTable(table, globalModuleObject.encounters.biome3.theme3.id1,3,3,1);} catch {}
  try {addEncounterToTable(table, globalModuleObject.encounters.biome3.theme3.id2,3,3,2);} catch {}

  try {addEncounterToTable(table, globalModuleObject.encounters.biome3.theme4.id1,3,4,1);} catch {}
  try {addEncounterToTable(table, globalModuleObject.encounters.biome3.theme4.id2,3,4,2);} catch {}

  try {addEncounterToTable(table, globalModuleObject.encounters.biome3.theme5.id1,3,5,1);} catch {}
  try {addEncounterToTable(table, globalModuleObject.encounters.biome3.theme5.id2,3,5,2);} catch {}
}

function addBiome4EncountersToTable(table)
{
  try {addEncounterToTable(table, globalModuleObject.encounters.biome4.theme0.id1,4,0,1);} catch {}
  try {addEncounterToTable(table, globalModuleObject.encounters.biome4.theme0.id2,4,0,2);} catch {}
  try {addEncounterToTable(table, globalModuleObject.encounters.biome4.theme0.id3,4,0,3);} catch {}
  try {addEncounterToTable(table, globalModuleObject.encounters.biome4.theme0.id4,4,0,4);} catch {}

  try {addEncounterToTable(table, globalModuleObject.encounters.biome4.theme1.id1,4,1,1);} catch {}
  try {addEncounterToTable(table, globalModuleObject.encounters.biome4.theme1.id2,4,1,2);} catch {}

  try {addEncounterToTable(table, globalModuleObject.encounters.biome4.theme2.id1,4,2,1);} catch {}
  try {addEncounterToTable(table, globalModuleObject.encounters.biome4.theme2.id2,4,2,2);} catch {}

  try {addEncounterToTable(table, globalModuleObject.encounters.biome4.theme3.id1,4,3,1);} catch {}
  try {addEncounterToTable(table, globalModuleObject.encounters.biome4.theme3.id2,4,3,2);} catch {}

  try {addEncounterToTable(table, globalModuleObject.encounters.biome4.theme4.id1,4,4,1);} catch {}
  try {addEncounterToTable(table, globalModuleObject.encounters.biome4.theme4.id2,4,4,2);} catch {}

  try {addEncounterToTable(table, globalModuleObject.encounters.biome4.theme5.id1,4,5,1);} catch {}
  try {addEncounterToTable(table, globalModuleObject.encounters.biome4.theme5.id2,4,5,2);} catch {}
}

function addBiome5EncountersToTable(table)
{
  try {addEncounterToTable(table, globalModuleObject.encounters.biome5.theme0.id1,5,0,1);} catch {}
  try {addEncounterToTable(table, globalModuleObject.encounters.biome5.theme0.id2,5,0,2);} catch {}
  try {addEncounterToTable(table, globalModuleObject.encounters.biome5.theme0.id3,5,0,3);} catch {}
  try {addEncounterToTable(table, globalModuleObject.encounters.biome5.theme0.id4,5,0,4);} catch {}

  try {addEncounterToTable(table, globalModuleObject.encounters.biome5.theme1.id1,5,1,1);} catch {}
  try {addEncounterToTable(table, globalModuleObject.encounters.biome5.theme1.id2,5,1,2);} catch {}

  try {addEncounterToTable(table, globalModuleObject.encounters.biome5.theme2.id1,5,2,1);} catch {}
  try {addEncounterToTable(table, globalModuleObject.encounters.biome5.theme2.id2,5,2,2);} catch {}

  try {addEncounterToTable(table, globalModuleObject.encounters.biome5.theme3.id1,5,3,1);} catch {}
  try {addEncounterToTable(table, globalModuleObject.encounters.biome5.theme3.id2,5,3,2);} catch {}

  try {addEncounterToTable(table, globalModuleObject.encounters.biome5.theme4.id1,5,4,1);} catch {}
  try {addEncounterToTable(table, globalModuleObject.encounters.biome5.theme4.id2,5,4,2);} catch {}

  try {addEncounterToTable(table, globalModuleObject.encounters.biome5.theme5.id1,5,5,1);} catch {}
  try {addEncounterToTable(table, globalModuleObject.encounters.biome5.theme5.id2,5,5,2);} catch {}
}

function LoadEncounters()
{
  var table = document.getElementById("tblEncounterList");
  table.innerHTML = "<tr> <td> <label>ID</label> </td> <td> <label>Biome</label> </td> <td> <label>Theme</label> </td> <td> <label>Name</label> </td> <td> <label>SuccessCount</label> </td> <td> <label>ChallengePD</label> </td> <td> <label>ChallengeAC</label> </td> <td> <label>ChallengeIA</label> </td> <td> <label>RewardPD</label> </td> <td> <label>RewardAC</label> </td> <td> <label>RewardIA</label> </td> <td> <label>Reward</label> </td> <td> <label>Desc</label> </td> </tr>";
  
  addBiome1EncountersToTable(table);
  addBiome2EncountersToTable(table);
  addBiome3EncountersToTable(table);
  addBiome4EncountersToTable(table);
  addBiome5EncountersToTable(table);
}

function btnAddEncounter_Click()
{
  document.getElementById("divCreateEncounterMenu").style = "";
  document.getElementById("divModuleMenu").style = "display:none";

}

function btnExitCreate_Click()
{
  document.getElementById("divCreateEncounterMenu").style = "display:none";
  document.getElementById("divModuleMenu").style = "";
}

function btnNewEncounterSubmit_Click()
{
  var biome = document.getElementById("taNewEncounterBiome").value;
  var biomeNum = 0;
  if (globalModuleObject.biomes.biome1 == biome)
  {
    biomeNum = 1;
  }
  else if (globalModuleObject.biomes.biome2 == biome)
  {
    biomeNum = 2;
  }
  else if (globalModuleObject.biomes.biome3 == biome)
  {
    biomeNum = 3;
  }
  else if (globalModuleObject.biomes.biome4 == biome)
  {
    biomeNum = 4;
  }
  else if (globalModuleObject.biomes.biome5 == biome)
  {
    biomeNum = 5;
  }
  else
  {
    alert("Not a valid biome!");
    return;
  }

  var theme = document.getElementById("taNewEncounterTheme").value;
  var themeNum = 0;

  if (theme == "none")
  {
    
  }
  else if (globalModuleObject.themes.theme1 == theme)
  {
    themeNum = 1;
  }
  else if (globalModuleObject.themes.theme2 == theme)
  {
    themeNum = 2;
  }
  else if (globalModuleObject.themes.theme3 == theme)
  {
    themeNum = 3;
  }
  else if (globalModuleObject.themes.theme4 == theme)
  {
    themeNum = 4;
  }
  else if (globalModuleObject.themes.theme5 == theme)
  {
    themeNum = 5;
  }
  else
  {
    alert("Not a valid theme!");
    return;
  }

  var id = document.getElementById("nbxNewEncounterID").value;

  var locString = "modules/" + globalModuleName + "/encounters/biome" + String(biomeNum) + "/theme" + String(themeNum) + "/id" + String(id) + "/";
  var updates = {};
  updates[locString + "name"] = document.getElementById("taNewEncounterName").value;
  updates[locString + "desc"] = document.getElementById("taNewEncounterDesc").value;
  updates[locString + "reward"] = document.getElementById("nbxNewEncounterReward").value;
  updates[locString + "rewardPD"] = document.getElementById("nbxNewEncounterRewardPD").value;
  updates[locString + "rewardAC"] = document.getElementById("nbxNewEncounterRewardAC").value;
  updates[locString + "rewardIA"] = document.getElementById("nbxNewEncounterRewardIA").value;
  updates[locString + "successCount"] = document.getElementById("nbxNewEncounterSuccessCount").value;
  updates[locString + "challengeLevelPD"] = document.getElementById("nbxNewEncounterCLPD").value;
  updates[locString + "challengeLevelAC"] = document.getElementById("nbxNewEncounterCLAC").value;
  updates[locString + "challengeLevelIA"] = document.getElementById("nbxNewEncounterCLIA").value;
  firebase.database().ref().update(updates).then((snapshot) => {
    btnNewEncounterCancel_Click();
  });

}

function btnNewEncounterCancel_Click()
{
  document.getElementById("nbxNewEncounterID").value = "";
  document.getElementById("taNewEncounterBiome").value = "";
  document.getElementById("taNewEncounterTheme").value = "none";
  document.getElementById("taNewEncounterName").value = "";
  document.getElementById("nbxNewEncounterSuccessCount").value = "2";
  document.getElementById("nbxNewEncounterCLPD").value = "2";
  document.getElementById("nbxNewEncounterCLAC").value = "2";
  document.getElementById("nbxNewEncounterCLIA").value = "2";
  document.getElementById("nbxNewEncounterRewardPD").value = "0";
  document.getElementById("nbxNewEncounterRewardAC").value = "0";
  document.getElementById("nbxNewEncounterRewardIA").value = "0";
  document.getElementById("nbxNewEncounterReward").value = "1";
  document.getElementById("taNewEncounterDesc").value = "";

  document.getElementById("divCreateEncounterMenu").style = "display:none";
  document.getElementById("divModuleMenu").style = "";
}