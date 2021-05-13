// Citation https://www.w3schools.com/js/js_arrays.asp
// Citation https://stackoverflow.com/questions/4488714/change-label-text-using-javascript
// Citation https://firebase.google.com/docs
// Citaiton https://www.w3schools.com/jsref/jsref_random.asp
// Citation https://stackoverflow.com/questions/596467/how-do-i-convert-a-float-number-to-a-whole-number-in-javascript
// Citation https://stackoverflow.com/questions/7271490/delete-all-rows-in-an-html-table
// Citation https://www.w3schools.com/jsref/jsref_length_string.asp
// Citation https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
// Citation https://www.geeksforgeeks.org/how-to-remove-an-html-element-using-javascript/#:~:text=Given%20an%20HTML%20element%20and,element%20from%20the%20HTML%20document.
// Citation https://www.w3schools.com/html/html_images.asp
// Citation https://www.w3schools.com/cssref/pr_class_display.asp
// Citation https://www.w3schools.com/js/js_type_conversion.asp

/*
------FINITE STATE MACHINE------

State 0: Selecting encounter
State 1: Encounter
State 2: Scene (?)
State 3: Final battle

*/

var tempButton = document.getElementById("btnCreateGame");
tempButton.onclick = btnCreateGame_Click;
tempButton = document.getElementById("btnCreateGame1Next");
tempButton.onclick = btnCreateGame1Next_Click;
tempButton = document.getElementById("btnCreateGameCancel");
tempButton.onclick = btnCreateGameCancel_Click;
tempButton = document.getElementById("btnCreateGameSubmit");
tempButton.onclick = btnCreateGameSubmit_Click;
tempButton = document.getElementById("btnDeleteHostedGame");
tempButton.onclick = btnDeleteHostedGame_Click;
tempButton = document.getElementById("btnCancelDeleteGame");
tempButton.onclick = btnCancelDeleteGame_Click;
tempButton = document.getElementById("btnConfirmDeleteGame");
tempButton.onclick = btnConfirmDeleteGame_Click;
tempButton = document.getElementById("btnJoinGamesJoinGame");
tempButton.onclick = btnJoinGamesJoinGame_Click;
tempButton = document.getElementById("btnGameMenuCreateCharConfirm");
tempButton.onclick = btnGameMenuCreateCharConfirm_Click;
tempButton = document.getElementById("btnGameMenuCreateCharCancel");
tempButton.onclick = btnGameMenuCreateCharCancel_Click;
tempButton = document.getElementById("btnJoinHostedGame");
tempButton.onclick = btnJoinHostedGame_Click;
tempButton = document.getElementById("btnGameMenuMyCharSave");
tempButton.onclick = btnGameMenuMyCharSave_Click;
tempButton = document.getElementById("btnSignIn");
tempButton.onclick = signIn;
tempButton = document.getElementById("btnMainMenuSignOut");
tempButton.onclick = btnMainMenuSignOut_Click;
tempButton = document.getElementById("btnGameMenuExitGame");
tempButton.onclick = btnGameMenuExitGame_Click;
tempButton = document.getElementById("btnGameMenuDiceRollManual");
tempButton.onclick = btnGameMenuDiceRollManual_Click;
tempButton = document.getElementById("btnGameMenuDiceRoll");
tempButton.onclick = btnGameMenuDiceRoll_Click;
tempButton = document.getElementById("btnGameMenuActionHandRoll");
tempButton.onclick = btnGameMenuActionHandRoll_Click;
tempButton = document.getElementById("btnGameMenuClearDice");
tempButton.onclick = btnGameMenuClearDice_Click;
tempButton = document.getElementById("btnGameMenuShowTier1");
tempButton.onclick = btnGameMenuShowTier1_Click;
tempButton = document.getElementById("btnGameMenuShowTier2");
tempButton.onclick = btnGameMenuShowTier2_Click;
tempButton = document.getElementById("btnGameMenuShowTier3");
tempButton.onclick = btnGameMenuShowTier3_Click;
tempButton = document.getElementById("btnGameMenuHideTier");
tempButton.onclick = btnGameMenuHideTier_Click;
tempButton = document.getElementById("btnGameMenuShowFinalConfrontation");
tempButton.onclick = btnGameMenuShowFinalConfrontation_Click;
tempButton = document.getElementById("btnGameMenuNemesisHealthDec");
tempButton.onclick = btnGameMenuNemesisHealthDec_Click;
tempButton = document.getElementById("btnGameMenuNemesisHealthInc");
tempButton.onclick = btnGameMenuNemesisHealthInc_Click;
tempButton = document.getElementById("btnGameMenuEncounterSheetIncSuccess");
tempButton.onclick = btnGameMenuEncounterSheetIncSuccess_Click;
tempButton = document.getElementById("btnGameMenuEncounterSheetDecSuccess");
tempButton.onclick = btnGameMenuEncounterSheetDecSuccess_Click;
tempButton = document.getElementById("btnGameMenuEncounterSheetSuccess");
tempButton.onclick = btnGameMenuEncounterSheetSuccess_Click;
tempButton = document.getElementById("btnGameMenuEncounterSheetFailure");
tempButton.onclick = btnGameMenuEncounterSheetFailure_Click;
tempButton = document.getElementById("btnGameMenuScenePageContinue");
tempButton.onclick = btnGameMenuScenePageContinue_Click;
tempButton = document.getElementById("btnGameMenuStatusIncMistakes");
tempButton.onclick = btnGameMenuStatusIncMistakes_Click;
tempButton = document.getElementById("btnGameMenuStatusDecMistakes");
tempButton.onclick = btnGameMenuStatusDecMistakes_Click;
tempButton = document.getElementById("btnMainMenuRulebook");
tempButton.onclick = btnMainMenuRulebook_Click;
tempButton = document.getElementById("btnMainMenuRulebook2");
tempButton.onclick = btnMainMenuRulebook_Click;

tempButton = document.getElementById("btnT1L1O1");
tempButton.onclick = btnT1L1O1_Click;
tempButton = document.getElementById("btnT1L1O2");
tempButton.onclick = btnT1L1O2_Click;
tempButton = document.getElementById("btnT1L2O1");
tempButton.onclick = btnT1L2O1_Click;
tempButton = document.getElementById("btnT1L2O2");
tempButton.onclick = btnT1L2O2_Click;
tempButton = document.getElementById("btnT1L3O1");
tempButton.onclick = btnT1L3O1_Click;
tempButton = document.getElementById("btnT1L3O2");
tempButton.onclick = btnT1L3O2_Click;
tempButton = document.getElementById("btnT1L4O1");
tempButton.onclick = btnT1L4O1_Click;
tempButton = document.getElementById("btnT1L4O2");
tempButton.onclick = btnT1L4O2_Click;
tempButton = document.getElementById("btnT1L5O1");
tempButton.onclick = btnT1L5O1_Click;
tempButton = document.getElementById("btnT1L5O2");
tempButton.onclick = btnT1L5O2_Click;

tempButton = document.getElementById("btnT2L1O1");
tempButton.onclick = btnT2L1O1_Click;
tempButton = document.getElementById("btnT2L1O2");
tempButton.onclick = btnT2L1O2_Click;
tempButton = document.getElementById("btnT2L2O1");
tempButton.onclick = btnT2L2O1_Click;
tempButton = document.getElementById("btnT2L2O2");
tempButton.onclick = btnT2L2O2_Click;
tempButton = document.getElementById("btnT2L3O1");
tempButton.onclick = btnT2L3O1_Click;
tempButton = document.getElementById("btnT2L3O2");
tempButton.onclick = btnT2L3O2_Click;
tempButton = document.getElementById("btnT2L4O1");
tempButton.onclick = btnT2L4O1_Click;
tempButton = document.getElementById("btnT2L4O2");
tempButton.onclick = btnT2L4O2_Click;
tempButton = document.getElementById("btnT2L5O1");
tempButton.onclick = btnT2L5O1_Click;
tempButton = document.getElementById("btnT2L5O2");
tempButton.onclick = btnT2L5O2_Click;

tempButton = document.getElementById("btnT3L1O1");
tempButton.onclick = btnT3L1O1_Click;
tempButton = document.getElementById("btnT3L1O2");
tempButton.onclick = btnT3L1O2_Click;
tempButton = document.getElementById("btnT3L2O1");
tempButton.onclick = btnT3L2O1_Click;
tempButton = document.getElementById("btnT3L2O2");
tempButton.onclick = btnT3L2O2_Click;
tempButton = document.getElementById("btnT3L3O1");
tempButton.onclick = btnT3L3O1_Click;
tempButton = document.getElementById("btnT3L3O2");
tempButton.onclick = btnT3L3O2_Click;
tempButton = document.getElementById("btnT3L4O1");
tempButton.onclick = btnT3L4O1_Click;
tempButton = document.getElementById("btnT3L4O2");
tempButton.onclick = btnT3L4O2_Click;
tempButton = document.getElementById("btnT3L5O1");
tempButton.onclick = btnT3L5O1_Click;
tempButton = document.getElementById("btnT3L5O2");
tempButton.onclick = btnT3L5O2_Click;

tempButton = document.getElementById("btnTest");
tempButton.addEventListener('click', btnTest_Click);

function btnTest_Click(event)
{
  console.log('fda');
  var d = event.target.attributes.value.nodeValue;
  console.log(d);
}


var globalUsername = "none";
var globalDeleteGameName = "none";
var globalPlayingGame = "none";
var globalPlayerNum = 0;
var globalPlayingModule = "none";
var globalPlayerNumOptions = ["2", "3", "4", "5"];
var globalPlayerAbilAspects = ["none","none","none","none","none","none","none","none"];
var globalJourneyMapObject = null;
var globalPlayerUsernames = [];
var globalPlayingGameObject = null;

var provider = new firebase.auth.GoogleAuthProvider();

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

      var userNameControl = document.getElementById("taUsername");
      userNameControl.textContent = userName;
      var user = firebase.auth().currentUser;
      var email = user.getIdToken();
      //console.log(result.user.uid);
      var mainMenuDiv = document.getElementById("divMainMenu");

      mainMenuDiv.style = "display:block";
      document.getElementById("divStartMenu").style = "display:none";

      validateUser(userName);

      loadGames();

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

function validateUser(userName)
{
  var user = firebase.auth().currentUser;
  if (user) 
  {
    var userProfileRef = firebase.database().ref('users/' + user.uid);

    userProfileRef.once('value').then((snapshot) => {
      
      for (var i = 1; i <= 8; i++)
      {
        if (!snapshot.hasChild('game' + String(i)))
        {
          firebase.database().ref('users/' + user.uid + '/' + 'game' + String(i)).set('none');
        }
      }
      
    });
  }
  else
  {
    return;
  }
  
}

function loadGames()
{
  var userNameControl = document.getElementById("taUsername");
  var user = firebase.auth().currentUser;
  if (!user)
  {
    return;
  }

  var game1Ref = firebase.database().ref('users/' + user.uid);
    //console.log('users/' + userNameControl.textContent + '/1');
    game1Ref.once('value').then((snapshot) => {
      var slGame = document.getElementById('slGameList');
      slGame.innerHTML = "";
      //console.log(snapshot.val());
      for (var i = 1; i <= 8; i++)
      {
        if (snapshot.hasChild('game' + String(i)))
        {
          var gameName = snapshot.child('game' + String(i)).val();
      
          if (gameName != 'none')
          {
            
            var option = document.createElement('option');
            option.text = gameName;
            slGame.options.add(option);
          }
        }
        
      }
      
    });
  
}

function loadMyCharacter()
{
  for (var j = 0; j < 8; j++)
  {
    globalPlayerAbilAspects[j] = "none";
  }
  //RETURN TODO: FILL OUT CHILDHOOD AND CAREER PROFICIENCIES
  /*firebase.database().ref("modules/" + globalPlayingModule).once('value').then((snapshot) => {
    var myCharBiomeProf = document.getElementById("slGameMenuMyCharChildProfType");
    var myCharThemeProf = document.getElementById("slGameMenuMyCharCarProfType");
    for (var i = 0; i < 5; i++)
    {
      var themeOption = document.createElement("option");
      themeOption.value = snapshot.child("Themes").child("theme" + String(i+1)).val();
      themeOption.text = themeOption.value;
      var biomeOption = document.createElement("option");
      biomeOption.value = snapshot.child("Biomes").child("biome" + String(i+1)).val();
      biomeOption.text = biomeOption.value;

      myCharBiomeProf.options.add(biomeOption);
      myCharThemeProf.options.add(themeOption);
    }*/

  firebase.database().ref("games/" + globalPlayingGame + "/player" + String(globalPlayerNum) + "char").once('value').then((snapshot) => {
    var character = snapshot.val();
    document.getElementById("taGameMenuMyCharName").value = character.name;
    document.getElementById("nbxGameMenuMyCharExperience").value = character.experience;
    document.getElementById("lblGameMenuMyCharChildProfVal").textContent = character.childProfType;
    document.getElementById("lblGameMenuMyCharCarProfVal").textContent = character.carProfType;
    if (character.exhausted != false)
    {
      document.getElementById("cbxGameMenuMyCharExhausted").checked = true;
    }
    document.getElementById("slGameMenuMyCharChildProfType").value = character.childProfType;
    document.getElementById("nbxGameMenuMyCharChildProfVal").value = character.childProf;
    document.getElementById("slGameMenuMyCharCarProfType").value = character.carProfType;
    document.getElementById("nbxGameMenuMyCharCarProfVal").value = character.carProf;
    document.getElementById("slGameMenuMyCharAbil1Aspect").value = character.abil1;
    document.getElementById("slGameMenuMyCharAbil2Aspect").value = character.abil2;
    document.getElementById("slGameMenuMyCharAbil3Aspect").value = character.abil3;
    document.getElementById("slGameMenuMyCharAbil4Aspect").value = character.abil4;
    document.getElementById("slGameMenuMyCharAbil5Aspect").value = character.abil5;
    document.getElementById("slGameMenuMyCharAbil6Aspect").value = character.abil6;
    document.getElementById("slGameMenuMyCharAbil7Aspect").value = character.abil7;
    document.getElementById("slGameMenuMyCharAbil8Aspect").value = character.abil8;
    document.getElementById("nbxGameMenuMyCharMaturityPD").value = character.maturityPD;
    document.getElementById("nbxGameMenuMyCharMaturityAC").value = character.maturityAC;
    document.getElementById("nbxGameMenuMyCharMaturityIA").value = character.maturityIA;
    document.getElementById("taGameMenuMyCharWoundPD1").value = character.woundPD1Desc;
    document.getElementById("nbxGameMenuMyCharWoundPD1").value = character.woundPD1;
    document.getElementById("taGameMenuMyCharWoundPD2").value = character.woundPD2Desc;
    document.getElementById("nbxGameMenuMyCharWoundPD2").value = character.woundPD2;
    document.getElementById("taGameMenuMyCharWoundPD3").value = character.woundPD3Desc;
    document.getElementById("nbxGameMenuMyCharWoundPD3").value = character.woundPD3;
    document.getElementById("taGameMenuMyCharWoundAC1").value = character.woundAC1Desc;
    document.getElementById("nbxGameMenuMyCharWoundAC1").value = character.woundAC1;
    document.getElementById("taGameMenuMyCharWoundAC2").value = character.woundAC2Desc;
    document.getElementById("nbxGameMenuMyCharWoundAC2").value = character.woundAC2;
    document.getElementById("taGameMenuMyCharWoundAC3").value = character.woundAC3Desc;
    document.getElementById("nbxGameMenuMyCharWoundAC3").value = character.woundAC3;
    document.getElementById("taGameMenuMyCharWoundIA1").value = character.woundIA1Desc;
    document.getElementById("nbxGameMenuMyCharWoundIA1").value = character.woundIA1;
    document.getElementById("taGameMenuMyCharWoundIA2").value = character.woundIA2Desc;
    document.getElementById("nbxGameMenuMyCharWoundIA2").value = character.woundIA2;
    document.getElementById("taGameMenuMyCharWoundIA3").value = character.woundIA3Desc;
    document.getElementById("nbxGameMenuMyCharWoundIA3").value = character.woundIA3;
    document.getElementById("taGameMenuMyCharDeepSecret").value = character.deepSecret;
    globalPlayerAbilAspects[0] = character.abil1;
    document.getElementById("lblGameMenuMyCharAbil1Aspect").innerHTML = character.abil1;
    globalPlayerAbilAspects[1] = character.abil2;
    document.getElementById("lblGameMenuMyCharAbil2Aspect").innerHTML = character.abil2;
    globalPlayerAbilAspects[2] = character.abil3;
    document.getElementById("lblGameMenuMyCharAbil3Aspect").innerHTML = character.abil3;
    globalPlayerAbilAspects[3] = character.abil4;
    document.getElementById("lblGameMenuMyCharAbil4Aspect").innerHTML = character.abil4;
    globalPlayerAbilAspects[4] = character.abil5;
    document.getElementById("lblGameMenuMyCharAbil5Aspect").innerHTML = character.abil5;
    globalPlayerAbilAspects[5] = character.abil6;
    document.getElementById("lblGameMenuMyCharAbil6Aspect").innerHTML = character.abil6;
    globalPlayerAbilAspects[6] = character.abil7;
    document.getElementById("lblGameMenuMyCharAbil7Aspect").innerHTML = character.abil7;
    globalPlayerAbilAspects[7] = character.abil8;
    document.getElementById("lblGameMenuMyCharAbil8Aspect").innerHTML = character.abil8;
  });
  //});
  
}

function loadMyCharacterFromObject()
{
  /*for (var j = 0; j < 8; j++)
  {
    globalPlayerAbilAspects[j] = "none";
  }*/
  //RETURN TODO: FILL OUT CHILDHOOD AND CAREER PROFICIENCIES

  
  /*var myCharBiomeProf = document.getElementById("slGameMenuMyCharChildProfType");
  var myCharThemeProf = document.getElementById("slGameMenuMyCharCarProfType");
  for (var i = 0; i < 5; i++)
  {
    var themeOption = document.createElement("option");
    themeOption.value = snapshot.child("Themes").child("theme" + String(i+1)).val();
    themeOption.text = themeOption.value;
    var biomeOption = document.createElement("option");
    biomeOption.value = snapshot.child("Biomes").child("biome" + String(i+1)).val();
    biomeOption.text = biomeOption.value;

    myCharBiomeProf.options.add(biomeOption);
    myCharThemeProf.options.add(themeOption);
  }*/
  var player = null;
  if (globalPlayerNum == 1)
  {
    player = globalPlayingGameObject.player1char;
  }
  else if (globalPlayerNum == 2)
  {
    player = globalPlayingGameObject.player2char;
  }
  else if (globalPlayerNum == 3)
  {
    player = globalPlayingGameObject.player3char;
  }
  else if (globalPlayerNum == 4)
  {
    player = globalPlayingGameObject.player4char;
  }
  else if (globalPlayerNum == 5)
  {
    player = globalPlayingGameObject.player5char;
  }
  
  if (player == null)
  {
    return;
  }

  document.getElementById("taGameMenuMyCharName").value = player.name;
  document.getElementById("nbxGameMenuMyCharExperience").value = player.experience;
  if (player.exhausted != false)
  {
    document.getElementById("cbxGameMenuMyCharExhausted").checked = true;
  }
  document.getElementById("lblGameMenuMyCharChildProfVal").textContent = player.childProfType;
  document.getElementById("nbxGameMenuMyCharChildProfVal").value = player.childProf;
  document.getElementById("lblGameMenuMyCharCarProfVal").value = player.carProfType;
  document.getElementById("nbxGameMenuMyCharCarProfVal").value = player.carProf;
  document.getElementById("slGameMenuMyCharAbil1Aspect").value = player.abil1;
  document.getElementById("slGameMenuMyCharAbil2Aspect").value = player.abil2;
  document.getElementById("slGameMenuMyCharAbil3Aspect").value = player.abil3;
  document.getElementById("slGameMenuMyCharAbil4Aspect").value = player.abil4;
  document.getElementById("slGameMenuMyCharAbil5Aspect").value = player.abil5;
  document.getElementById("slGameMenuMyCharAbil6Aspect").value = player.abil6;
  document.getElementById("slGameMenuMyCharAbil7Aspect").value = player.abil7;
  document.getElementById("slGameMenuMyCharAbil8Aspect").value = player.abil8;
  document.getElementById("nbxGameMenuMyCharMaturityPD").value = player.maturityPD;
  document.getElementById("nbxGameMenuMyCharMaturityAC").value = player.maturityAC;
  document.getElementById("nbxGameMenuMyCharMaturityIA").value = player.maturityIA;
  document.getElementById("taGameMenuMyCharWoundPD1").value = player.woundPD1Desc;
  document.getElementById("nbxGameMenuMyCharWoundPD1").value = player.woundPD1;
  document.getElementById("taGameMenuMyCharWoundPD2").value = player.woundPD2Desc;
  document.getElementById("nbxGameMenuMyCharWoundPD2").value = player.woundPD2;
  document.getElementById("taGameMenuMyCharWoundPD3").value = player.woundPD3Desc;
  document.getElementById("nbxGameMenuMyCharWoundPD3").value = player.woundPD3;
  document.getElementById("taGameMenuMyCharWoundAC1").value = player.woundAC1Desc;
  document.getElementById("nbxGameMenuMyCharWoundAC1").value = player.woundAC1;
  document.getElementById("taGameMenuMyCharWoundAC2").value = player.woundAC2Desc;
  document.getElementById("nbxGameMenuMyCharWoundAC2").value = player.woundAC2;
  document.getElementById("taGameMenuMyCharWoundAC3").value = player.woundAC3Desc;
  document.getElementById("nbxGameMenuMyCharWoundAC3").value = player.woundAC3;
  document.getElementById("taGameMenuMyCharWoundIA1").value = player.woundIA1Desc;
  document.getElementById("nbxGameMenuMyCharWoundIA1").value = player.woundIA1;
  document.getElementById("taGameMenuMyCharWoundIA2").value = player.woundIA2Desc;
  document.getElementById("nbxGameMenuMyCharWoundIA2").value = player.woundIA2;
  document.getElementById("taGameMenuMyCharWoundIA3").value = player.woundIA3Desc;
  document.getElementById("nbxGameMenuMyCharWoundIA3").value = player.woundIA3;
  document.getElementById("taGameMenuMyCharDeepSecret").value = player.deepSecret;
  globalPlayerAbilAspects[0] = player.abil1;
  document.getElementById("lblGameMenuMyCharAbil1Aspect").innerHTML = player.abil1;
  globalPlayerAbilAspects[1] = player.abil2;
  document.getElementById("lblGameMenuMyCharAbil2Aspect").innerHTML = player.abil2;
  globalPlayerAbilAspects[2] = player.abil3;
  document.getElementById("lblGameMenuMyCharAbil3Aspect").innerHTML = player.abil3;
  globalPlayerAbilAspects[3] = player.abil4;
  document.getElementById("lblGameMenuMyCharAbil4Aspect").innerHTML = player.abil4;
  globalPlayerAbilAspects[4] = player.abil5;
  document.getElementById("lblGameMenuMyCharAbil5Aspect").innerHTML = player.abil5;
  globalPlayerAbilAspects[5] = player.abil6;
  document.getElementById("lblGameMenuMyCharAbil6Aspect").innerHTML = player.abil6;
  globalPlayerAbilAspects[6] = player.abil7;
  document.getElementById("lblGameMenuMyCharAbil7Aspect").innerHTML = player.abil7;
  globalPlayerAbilAspects[7] = player.abil8;
  document.getElementById("lblGameMenuMyCharAbil8Aspect").innerHTML = player.abil8;
  
}

function btnCreateGame_Click()
{
  var label = document.getElementById("lblCreateGamePlayer1");
  label.textContent = firebase.auth().currentUser.email;//globalUsername;

  var mainMenuDiv = document.getElementById("divMainMenu");

  mainMenuDiv.style = "display:none";

  var createGameMenuDiv = document.getElementById("divCreateGameMenu");

  createGameMenuDiv.style = "style:block";

  var moduleList = document.getElementById("slCreateGameModules");

  var moduleReference = firebase.database().ref('modules');
  moduleReference.once('value').then((snapshot) => {
    snapshot.forEach((childSnapshot) => {
      var key = childSnapshot.key;
      var childData = childSnapshot.val();
      var option = document.createElement('option');
      option.text = key;
      option.value = key;
      moduleList.options.add(option);
    });
  });
}

function btnCreateGame1Next_Click()
{
  var panel = document.getElementById("pnlCreateGame1");
  panel.style = "display:none";
  panel = document.getElementById("pnlCreateGame2");
  panel.style = "display:block";

  var numPlayerList = document.getElementById("slNewGameNumPlayers");
  var numPlayerIndex = numPlayerList.selectedIndex;
  if (numPlayerIndex > 3) {
    numPlayerIndex = 3;

  }
  var numPlayers = globalPlayerNumOptions[numPlayerIndex];

  if (numPlayers == "3")
  {
    var table = document.getElementById("tblCreateGamePlayer3");
    table.style = "display:block";
  }
  else if (numPlayers == "4")
  {
    var table = document.getElementById("tblCreateGamePlayer3");
    table.style = "display:block";
    table = document.getElementById("tblCreateGamePlayer4");
    table.style = "display:block";
  }
  else if (numPlayers == "5")
  {
    var table = document.getElementById("tblCreateGamePlayer3");
    table.style = "display:block";
    table = document.getElementById("tblCreateGamePlayer4");
    table.style = "display:block";
    table = document.getElementById("tblCreateGamePlayer5");
    table.style = "display:block";
  }

  var moduleList = document.getElementById("slCreateGameModules");
  var selectedModule = moduleList.value;
  /*var nemesisList = document.getElementById("slCreateGameNemesis");
  
  var selectedModuleReference = firebase.database().ref('modules/' + selectedModule);
  selectedModuleReference.once('value').then((snapshot) => {
    snapshot.forEach((childSnapshot) => {
      var key = childSnapshot.key;
      var childData = childSnapshot.val();

      var option = document.createElement("option");
      option.value = key;
      option.text = childData.name;
      nemesisList.options.add(option);
    });
  });*/
}

function btnCreateGameCancel_Click()
{
  var textArea = document.getElementById("taNewGameName");
  textArea.textContent = "";
  //var selectBox = document.getElementById("slNewGameNumPlayers");
  //selectBox.options.empty();
  var selectBox = document.getElementById("slCreateGameModules");
  selectBox.innerHTML = "";
  //selectBox = document.getElementById("slCreateGameNemesis");
  //selectBox.innerHTML = "";

  var panel = document.getElementById("pnlCreateGame1");
  panel.style = "display:block";
  panel = document.getElementById("pnlCreateGame2");
  panel.style = "display:none";

  var mainDiv = document.getElementById("divCreateGameMenu");
  mainDiv.style = "display:none";

  mainDiv = document.getElementById("divMainMenu");
  mainDiv.style = "display:block";

  var table = document.getElementById("tblCreateGamePlayer3");
  table.style = "display:none";
  table = document.getElementById("tblCreateGamePlayer4");
  table.style = "display:none";
  table = document.getElementById("tblCreateGamePlayer5");
  table.style = "display:none";

  var label =document.getElementById("lblCreateGamePlayer1");
  label.textContent = "";

  textArea = document.getElementById("taCreateGamePlayer2");
  textArea.value = "";
  textArea = document.getElementById("taCreateGamePlayer3");
  textArea.value = "";
  textArea = document.getElementById("taCreateGamePlayer4");
  textArea.value = "";
  textArea = document.getElementById("taCreateGamePlayer5");
  textArea.value = "";
  textArea = document.getElementById("taNewGameName");
  textArea.value = "";

  textArea = document.getElementById("taCreateGameNemesisName");
  textArea.value = "";
  textArea = document.getElementById("taCreateGameNemesisDesc");
  textArea.value = "";
}

function btnCreateGameSubmit_Click()
{
  var user = firebase.auth().currentUser;
  if (!user)
  {
    return;
  }
  firebase.database().ref("modules").once('value').then((snapshot) => {
    if (!snapshot.hasChild(document.getElementById("slCreateGameModules").value)) {
      alert('That is not a valid module!');
      btnCreateGameCancel_Click();
      return
    } 
    else
    {
      var gameName = document.getElementById("taNewGameName").value;
      if (!validateGameString(gameName))
      {
        alert('GAME NAME NOT VALID');
        return;
      }

      var playerName1 = user.email;//globalUsername;
      if (!validatePlayerString(playerName1))
      {
        alert('PLAYER 1 NOT VALID');
        return;
      }
      var playerName2 = document.getElementById("taCreateGamePlayer2").value;
      if (!validatePlayerString(playerName2))
      {
        alert('PLAYER 2 NOT VALID');
        return;
      }
      var playerName3 = document.getElementById("taCreateGamePlayer3").value;
      if (!validatePlayerString(playerName3))
      {
        alert('PLAYER 3 NOT VALID');
        return;
      }
      var playerName4 = document.getElementById("taCreateGamePlayer4").value;
      if (!validatePlayerString(playerName4))
      {
        alert('PLAYER 4 NOT VALID');
        return;
      }
      var playerName5 = document.getElementById("taCreateGamePlayer5").value;
      if (!validatePlayerString(playerName5))
      {
        alert('PLAYER 5 NOT VALID');
        return;
      }

      //var numPlayers = document.getElementById("slNewGameNumPlayers").value;
      var numPlayerList = document.getElementById("slNewGameNumPlayers");
      var numPlayerIndex = numPlayerList.selectedIndex;
      if (numPlayerIndex > 3) {
        numPlayerIndex = 3;

      }
      var numPlayers = globalPlayerNumOptions[numPlayerIndex];
      if (playerName1 == "")
      {
        alert('PLAYER 1 NOT VALID');
        return;
      }


      var moduleName = document.getElementById("slCreateGameModules").value;

      //var nemesisKey = document.getElementById("slCreateGameNemesis").value;
      var nemesisNameVal = document.getElementById("taCreateGameNemesisName").value;
      var nemesisDescVal = document.getElementById("taCreateGameNemesisDesc").value;


      firebase.database().ref("users/" + user.uid).once('value').then((snapshot) => {
        var snapVal = snapshot.val();
        //console.log(snapVal[0]);
        var selectedSlot = 'none';
        if (snapVal.game1 == 'none')
        {
          console.log('chose 1');
          selectedSlot = 'game1';
        }
        else if (snapVal.game2 == 'none')
        {
          console.log('chose 2');
          selectedSlot = 'game2';
        }
        else if (snapVal.game3 == 'none')
        {
          console.log('chose 3');
          selectedSlot = 'game3';
        }
        else if (snapVal.game4 == 'none')
        {
          console.log('chose 4');
          selectedSlot = 'game4';
        }
        else if (snapVal.game5 == 'none')
        {
          console.log('chose 5');
          selectedSlot = 'game5';
        }
        else if (snapVal.game6 == 'none')
        {
          console.log('chose 6');
          selectedSlot = 'game6';
        }
        else if (snapVal.game7 == 'none')
        {
          console.log('chose 7');
          selectedSlot = 'game7';
        }
        else if (snapVal.game8 == 'none')
        {
          console.log('chose 8');
          selectedSlot = 'game8';
        }
        if (selectedSlot != 'none')
        {
          
          firebase.database().ref("games/" + gameName + "/unused").once('value').then((snapshot) => {
            if (snapshot.val() == false)
            {
              alert('GAME NAME TAKEN');
              return;
            }
            else
            {
              firebase.database().ref("games/" + gameName).set({
                name: gameName,
                module: moduleName,
                numPlayers: numPlayers,
                nemesisName: nemesisNameVal,
                nemesisDesc: nemesisDescVal,
                player1: playerName1,
                player2: playerName2,
                player3: playerName3,
                player4: playerName4,
                player5: playerName5,
                state: 0,
                mistakePoints: 0,
                unused: false

              }).then((snapshot) => {
                createJourneyMap(moduleName, numPlayers, gameName);
                firebase.database().ref("users/" + user.uid + "/" + selectedSlot).set(gameName).then((snapshot) => {
                  loadGames();
                  btnCreateGameCancel_Click();
                });
              });
            }
          });
        }
        else
        {
          alert('No slots available!');
        }
      });
      

    }
  });
  
}

function validatePlayerString(userName)
{
  for (var i = 0; i < userName.length; i++)
  {
    //console.log(userName[i]);
    if (/[a-z0-9.\-_'@]/.test(userName[i]) == false)
    {
      return false;
    }

  }
  return true;
}

function validateGameString(userName)
{
  for (var i = 0; i < userName.length; i++)
  {
    //console.log(userName[i]);
    if (/[A-Za-z0-9.\-_']/.test(userName[i]) == false)
    {
      return false;
    }

  }
  return true;
}

function btnDeleteHostedGame_Click()
{
  var deleteDisplay = document.getElementById("lblGameToDeleteDisplay");
  

  var selectGame = document.getElementById("slGameList");

  deleteDisplay.innerText = selectGame.value;
  globalDeleteGameName =  selectGame.value;

  var panelToHide = document.getElementById("pnlHostedGames");
  var panelToShow = document.getElementById("pnlConfirmDeleteHostedGame");

  panelToHide.style = "display:none";
  panelToShow.style = "display:block";

}

function btnCancelDeleteGame_Click()
{
  var panelToHide = document.getElementById("pnlConfirmDeleteHostedGame");
  var panelToShow = document.getElementById("pnlHostedGames");

  panelToHide.style = "display:none";
  panelToShow.style = "display:block";

  var deleteDisplay = document.getElementById("lblGameToDeleteDisplay");
  deleteDisplay.innerText = "";
  globalDeleteGameName = "";
}

function btnConfirmDeleteGame_Click()
{
  if (!firebase.auth().currentUser)
  {
    return;
  }
  var user = firebase.auth().currentUser;
  firebase.database().ref('users/' + user.uid).once('value').then((snapshot) => {
    var snapVal = snapshot.val();
    var deleteSlot = 'none';
    //console.log(snapVal.game1);
    console.log(globalDeleteGameName);
    if (snapVal.game1 == globalDeleteGameName)
    {
      deleteSlot = 'game1';
    }
    else if (snapVal.game2 == globalDeleteGameName)
    {
      deleteSlot = 'game2';
    }
    else if (snapVal.game3 == globalDeleteGameName)
    {
      deleteSlot = 'game3';
    }
    else if (snapVal.game4 == globalDeleteGameName)
    {
      deleteSlot = 'game4';
    }
    else if (snapVal.game5 == globalDeleteGameName)
    {
      deleteSlot = 'game5';
    }
    else if (snapVal.game6 == globalDeleteGameName)
    {
      deleteSlot = 'game6';
    }
    else if (snapVal.game7 == globalDeleteGameName)
    {
      deleteSlot = 'game7';
    }
    else if (snapVal.game8 == globalDeleteGameName)
    {
      deleteSlot = 'game8';
    }

    if (deleteSlot != 'none')
    {
      // console.log(deleteSlot);
      // var panelToHide = document.getElementById("pnlConfirmDeleteHostedGame");
      // var panelToShow = document.getElementById("pnlHostedGames");

      // panelToHide.style = "display:none";
      // panelToShow.style = "display:block";

      // var deleteDisplay = document.getElementById("lblGameToDeleteDisplay");
      // deleteDisplay.innerText = "";
      // globalDeleteGameName = "";
      firebase.database().ref('games/' + globalDeleteGameName).once('value').then((snapshot) => {
        if (snapshot.val().player1 == user.email)
        {
          var updates = {};
          updates["games/" + globalDeleteGameName] = null;
          // updates["games/" + globalDeleteGameName + "/player1"] = null;
          // updates["games/" + globalDeleteGameName + "/player2"] = null;
          // updates["games/" + globalDeleteGameName + "/player3"] = null;
          // updates["games/" + globalDeleteGameName + "/player4"] = null;
          // updates["games/" + globalDeleteGameName + "/player5"] = null;
          // updates["games/" + globalDeleteGameName + "/player1char"] = null;
          // updates["games/" + globalDeleteGameName + "/player2char"] = null;
          // updates["games/" + globalDeleteGameName + "/player3char"] = null;
          // updates["games/" + globalDeleteGameName + "/player4char"] = null;
          // updates["games/" + globalDeleteGameName + "/player5char"] = null;
          // updates["games/" + globalDeleteGameName + "/module"] = null;
          // updates["games/" + globalDeleteGameName + "/nemesisName"] = null;
          // updates["games/" + globalDeleteGameName + "/nemesisDesc"] = null;
          // updates["games/" + globalDeleteGameName + "/name"] = null;
          // updates["games/" + globalDeleteGameName + "/numPlayers"] = null;
          // updates["games/" + globalDeleteGameName + "/journeyMap"] = null;
          // updates["games/" + globalDeleteGameName + "/unused"] = true;
          firebase.database().ref().update(updates).then((snapshot) => {
            
            var panelToHide = document.getElementById("pnlConfirmDeleteHostedGame");
            var panelToShow = document.getElementById("pnlHostedGames");

            panelToHide.style = "display:none";
            panelToShow.style = "display:block";

            var deleteDisplay = document.getElementById("lblGameToDeleteDisplay");
            deleteDisplay.innerText = "";
            globalDeleteGameName = "";
            firebase.database().ref('users/' + user.uid + '/' + deleteSlot).set('none').then((snapshot) => {
              loadGames();
            });
          });
        }
        else 
        {
          alert('You are not hosting this game');
        }
      });
      
      
    }
    else 
    {
      alert('You are not hosting this game');
    }

  });

  
}

function loadCharacterCreation(module, joinGameName)
{
  var mainMenuDiv = document.getElementById("divMainMenu");
  firebase.database().ref('modules/' + module).once('value').then((snapshot) => {
    globalPlayingGame = joinGameName;
    mainMenuDiv.style = "display:none";
    var createCharDiv = document.getElementById("divCreateCharacterMenu");
    createCharDiv.style = "display:block";
    var biomeObject = snapshot.child('biomes').val();
    var themeObject = snapshot.child('themes').val();
    var slChildProf= document.getElementById("slGameMenuCreateCharChildProfType");
    var slCarProf = document.getElementById("slGameMenuCreateCharCarProfType");
    var option = document.createElement("option");
    option.value = biomeObject.biome1;
    option.text = biomeObject.biome1;
    slChildProf.options.add(option);

    option = document.createElement("option");
    option.value = biomeObject.biome2;
    option.text = biomeObject.biome2;
    slChildProf.options.add(option);

    option = document.createElement("option");
    option.value = biomeObject.biome3;
    option.text = biomeObject.biome3;
    slChildProf.options.add(option);
    
    option = document.createElement("option");
    option.value = biomeObject.biome4;
    option.text = biomeObject.biome4;
    slChildProf.options.add(option);

    option = document.createElement("option");
    option.value = biomeObject.biome5;
    option.text = biomeObject.biome5;
    slChildProf.options.add(option);

    option = document.createElement("option");
    option.value = themeObject.theme1;
    option.text = themeObject.theme1;
    slCarProf.options.add(option);

    option = document.createElement("option");
    option.value = themeObject.theme2;
    option.text = themeObject.theme2;
    slCarProf.options.add(option);

    option = document.createElement("option");
    option.value = themeObject.theme3;
    option.text = themeObject.theme3;
    slCarProf.options.add(option);

    option = document.createElement("option");
    option.value = themeObject.theme4;
    option.text = themeObject.theme4;
    slCarProf.options.add(option);

    option = document.createElement("option");
    option.value = themeObject.theme5;
    option.text = themeObject.theme5;
    slCarProf.options.add(option);
  });
}

function loadGameMenu()
{
  document.getElementById("divMainMenu").style = "display:none";
  document.getElementById("divGameMenu").style = "";

  loadMyCharacter();
  loadJourneyMap();
}

function updateJourneyMapSelections(choice, tier, location)
{
  if (choice != "none")
  {
    document.getElementById("divT" + tier + "L" + location + "Choose").style = "display:none";
    document.getElementById("divT" + tier + "L" + location).style = "display:block";
  }
  else
  {
    document.getElementById("divT" + tier + "L" + location + "Choose").style = "display:block";
    document.getElementById("divT" + tier + "L" + location).style = "display:none";
  }
}

function loadJourneyMap()
{
  firebase.database().ref("games/" + globalPlayingGame).on('value', (snapshot) => {
    globalJourneyMapObject = snapshot.val().journeyMap;
    var gameObject = snapshot.val();
    globalPlayingGameObject = snapshot.val();

    document.getElementById("lblGameMenuStatusNemesis").textContent = gameObject.nemesisName;
    document.getElementById("lblGameMenuStatusMistakes").textContent = gameObject.mistakePoints;

    loadMyCharacterFromObject();

    document.getElementById("divGameMenuJourneyMap").style = "";
    document.getElementById("divEncounterSheet").style = "display:none";
    document.getElementById("divScenePage").style = "display:none";

    document.getElementById("tdT1L2").style = "display:none";
    document.getElementById("tdT1L3").style = "display:none";
    document.getElementById("tdT1L4").style = "display:none";
    document.getElementById("tdT1L5").style = "display:none";

    document.getElementById("tdT2L2").style = "display:none";
    document.getElementById("tdT2L3").style = "display:none";
    document.getElementById("tdT2L4").style = "display:none";
    document.getElementById("tdT2L5").style = "display:none";

    document.getElementById("tdT3L2").style = "display:none";
    document.getElementById("tdT3L3").style = "display:none";
    document.getElementById("tdT3L4").style = "display:none";
    document.getElementById("tdT3L5").style = "display:none";

    document.getElementById("tblGameMenuChoosePlayer").style = "display:none";
    document.getElementById("btnGameMenuShowTier2").style = "display:none";
    document.getElementById("btnGameMenuShowTier3").style = "display:none";
    document.getElementById("btnGameMenuShowFinalConfrontation").style = "display:none";

    document.getElementById("btnT1L1O1").innerHTML = globalJourneyMapObject.t1Loc1Op1.theme + " " + globalJourneyMapObject.t1Loc1Op1.biome;
    document.getElementById("btnT1L1O2").innerHTML = globalJourneyMapObject.t1Loc1Op2.theme + " " + globalJourneyMapObject.t1Loc1Op2.biome;
    document.getElementById("btnT1L2O1").innerHTML = globalJourneyMapObject.t1Loc2Op1.theme + " " + globalJourneyMapObject.t1Loc2Op1.biome;
    document.getElementById("btnT1L2O2").innerHTML = globalJourneyMapObject.t1Loc2Op2.theme + " " + globalJourneyMapObject.t1Loc2Op2.biome;
    document.getElementById("btnT1L3O1").innerHTML = globalJourneyMapObject.t1Loc3Op1.theme + " " + globalJourneyMapObject.t1Loc3Op1.biome;
    document.getElementById("btnT1L3O2").innerHTML = globalJourneyMapObject.t1Loc3Op2.theme + " " + globalJourneyMapObject.t1Loc3Op2.biome;
    document.getElementById("btnT1L4O1").innerHTML = globalJourneyMapObject.t1Loc4Op1.theme + " " + globalJourneyMapObject.t1Loc4Op1.biome;
    document.getElementById("btnT1L4O2").innerHTML = globalJourneyMapObject.t1Loc4Op2.theme + " " + globalJourneyMapObject.t1Loc4Op2.biome;
    document.getElementById("btnT1L5O1").innerHTML = globalJourneyMapObject.t1Loc5Op1.theme + " " + globalJourneyMapObject.t1Loc5Op1.biome;
    document.getElementById("btnT1L5O2").innerHTML = globalJourneyMapObject.t1Loc5Op2.theme + " " + globalJourneyMapObject.t1Loc5Op2.biome;

    document.getElementById("btnT2L1O1").innerHTML = globalJourneyMapObject.t2Loc1Op1.theme + " " + globalJourneyMapObject.t2Loc1Op1.biome;
    document.getElementById("btnT2L1O2").innerHTML = globalJourneyMapObject.t2Loc1Op2.theme + " " + globalJourneyMapObject.t2Loc1Op2.biome;
    document.getElementById("btnT2L2O1").innerHTML = globalJourneyMapObject.t2Loc2Op1.theme + " " + globalJourneyMapObject.t2Loc2Op1.biome;
    document.getElementById("btnT2L2O2").innerHTML = globalJourneyMapObject.t2Loc2Op2.theme + " " + globalJourneyMapObject.t2Loc2Op2.biome;
    document.getElementById("btnT2L3O1").innerHTML = globalJourneyMapObject.t2Loc3Op1.theme + " " + globalJourneyMapObject.t2Loc3Op1.biome;
    document.getElementById("btnT2L3O2").innerHTML = globalJourneyMapObject.t2Loc3Op2.theme + " " + globalJourneyMapObject.t2Loc3Op2.biome;
    document.getElementById("btnT2L4O1").innerHTML = globalJourneyMapObject.t2Loc4Op1.theme + " " + globalJourneyMapObject.t2Loc4Op1.biome;
    document.getElementById("btnT2L4O2").innerHTML = globalJourneyMapObject.t2Loc4Op2.theme + " " + globalJourneyMapObject.t2Loc4Op2.biome;
    document.getElementById("btnT2L5O1").innerHTML = globalJourneyMapObject.t2Loc5Op1.theme + " " + globalJourneyMapObject.t2Loc5Op1.biome;
    document.getElementById("btnT2L5O2").innerHTML = globalJourneyMapObject.t2Loc5Op2.theme + " " + globalJourneyMapObject.t2Loc5Op2.biome;

    document.getElementById("btnT3L1O1").innerHTML = globalJourneyMapObject.t3Loc1Op1.theme + " " + globalJourneyMapObject.t3Loc1Op1.biome;
    document.getElementById("btnT3L1O2").innerHTML = globalJourneyMapObject.t3Loc1Op2.theme + " " + globalJourneyMapObject.t3Loc1Op2.biome;
    document.getElementById("btnT3L2O1").innerHTML = globalJourneyMapObject.t3Loc2Op1.theme + " " + globalJourneyMapObject.t3Loc2Op1.biome;
    document.getElementById("btnT3L2O2").innerHTML = globalJourneyMapObject.t3Loc2Op2.theme + " " + globalJourneyMapObject.t3Loc2Op2.biome;
    document.getElementById("btnT3L3O1").innerHTML = globalJourneyMapObject.t3Loc3Op1.theme + " " + globalJourneyMapObject.t3Loc3Op1.biome;
    document.getElementById("btnT3L3O2").innerHTML = globalJourneyMapObject.t3Loc3Op2.theme + " " + globalJourneyMapObject.t3Loc3Op2.biome;
    document.getElementById("btnT3L4O1").innerHTML = globalJourneyMapObject.t3Loc4Op1.theme + " " + globalJourneyMapObject.t3Loc4Op1.biome;
    document.getElementById("btnT3L4O2").innerHTML = globalJourneyMapObject.t3Loc4Op2.theme + " " + globalJourneyMapObject.t3Loc4Op2.biome;
    document.getElementById("btnT3L5O1").innerHTML = globalJourneyMapObject.t3Loc5Op1.theme + " " + globalJourneyMapObject.t3Loc5Op1.biome;
    document.getElementById("btnT3L5O2").innerHTML = globalJourneyMapObject.t3Loc5Op2.theme + " " + globalJourneyMapObject.t3Loc5Op2.biome;

    //document.getElementById("divGameMenuFinalConfrontation").style = "display:none";


    // REVEAL TIER 1 LOCATIONS
    var completedLocations = 0;

    updateJourneyMapSelections(gameObject.journeyMap.t1Loc1Choice, "1", "1");
    if (gameObject.journeyMap.t1Loc1Choice != "none")
    {
      completedLocations += 1;
      if (gameObject.journeyMap.t1Loc1Choice == 1)
      {
        document.getElementById("lblGameMenuT1L1Type").innerHTML = "Type: " + globalPlayingGameObject.journeyMap.t1Loc1Op1.theme + " " + globalPlayingGameObject.journeyMap.t1Loc1Op1.biome;
      }
      else if (gameObject.journeyMap.t1Loc1Choice == 2)
      {
        document.getElementById("lblGameMenuT1L1Type").innerHTML = "Type: " + globalPlayingGameObject.journeyMap.t1Loc1Op2.theme + " " + globalPlayingGameObject.journeyMap.t1Loc1Op2.biome;
      }
      document.getElementById("lblGameMenuT1L1Choice").innerHTML = "Choice: " + String(gameObject.journeyMap.t1Loc1Choice);
      document.getElementById("lblGameMenuT1L1Player").innerHTML = "Player: " + globalPlayingGameObject.journeyMap.t1Loc1Player;
      document.getElementById("tdT1L2").style = "";
    }
    else
    {
      document.getElementById("tdT1L2").style = "display:none";
      document.getElementById("tdT1L3").style = "display:none";
      document.getElementById("tdT1L4").style = "display:none";
      document.getElementById("tdT1L5").style = "display:none";
    }

    updateJourneyMapSelections(gameObject.journeyMap.t1Loc2Choice, "1", "2");
    if (gameObject.journeyMap.t1Loc2Choice != "none")
    {
      completedLocations += 1;
      if (gameObject.journeyMap.t1Loc2Choice == 1)
      {
        document.getElementById("lblGameMenuT1L2Type").innerHTML = "Type: " + globalPlayingGameObject.journeyMap.t1Loc2Op1.theme + " " + globalPlayingGameObject.journeyMap.t1Loc2Op1.biome;
      }
      else if (gameObject.journeyMap.t1Loc2Choice == 2)
      {
        document.getElementById("lblGameMenuT1L2Type").innerHTML = "Type: " + globalPlayingGameObject.journeyMap.t1Loc2Op2.theme + " " + globalPlayingGameObject.journeyMap.t1Loc2Op2.biome;
      }
      document.getElementById("lblGameMenuT1L2Choice").innerHTML = "Choice: " + String(gameObject.journeyMap.t1Loc2Choice);
      document.getElementById("lblGameMenuT1L2Player").innerHTML = "Player: " + globalPlayingGameObject.journeyMap.t1Loc2Player;
      if (Number(gameObject.numPlayers) > 2)
      {
        document.getElementById("tdT1L3").style = "";
        updateJourneyMapSelections(gameObject.journeyMap.t1Loc3Choice, "1", "3");
        if (gameObject.journeyMap.t1Loc3Choice != "none")
        {
          completedLocations += 1;
          if (gameObject.journeyMap.t1Loc3Choice == 1)
          {
            document.getElementById("lblGameMenuT1L3Type").innerHTML = "Type: " + globalPlayingGameObject.journeyMap.t1Loc3Op1.theme + " " + globalPlayingGameObject.journeyMap.t1Loc3Op1.biome;
          }
          else if (gameObject.journeyMap.t1Loc3Choice == 2)
          {
            document.getElementById("lblGameMenuT1L3Type").innerHTML = "Type: " + globalPlayingGameObject.journeyMap.t1Loc3Op2.theme + " " + globalPlayingGameObject.journeyMap.t1Loc3Op2.biome;
          }
          document.getElementById("lblGameMenuT1L3Choice").innerHTML = "Choice: " + String(gameObject.journeyMap.t1Loc3Choice);
          document.getElementById("lblGameMenuT1L3Player").innerHTML = "Player: " + globalPlayingGameObject.journeyMap.t1Loc3Player;

          if (Number(gameObject.numPlayers) > 3)
          {
            document.getElementById("tdT1L4").style = "";
            updateJourneyMapSelections(gameObject.journeyMap.t1Loc4Choice, "1", "4");
            if (gameObject.journeyMap.t1Loc4Choice != "none")
            {
              completedLocations += 1;
              if (gameObject.journeyMap.t1Loc4Choice == 1)
              {
                document.getElementById("lblGameMenuT1L4Type").innerHTML = "Type: " + globalPlayingGameObject.journeyMap.t1Loc4Op1.theme + " " + globalPlayingGameObject.journeyMap.t1Loc4Op1.biome;
              }
              else if (gameObject.journeyMap.t1Loc4Choice == 2)
              {
                document.getElementById("lblGameMenuT1L4Type").innerHTML = "Type: " + globalPlayingGameObject.journeyMap.t1Loc4Op2.theme + " " + globalPlayingGameObject.journeyMap.t1Loc4Op2.biome;
              }
              document.getElementById("lblGameMenuT1L4Choice").innerHTML = "Choice: " + String(gameObject.journeyMap.t1Loc4Choice);
              document.getElementById("lblGameMenuT1L4Player").innerHTML = "Player: " + globalPlayingGameObject.journeyMap.t1Loc4Player;

              if (Number(gameObject.numPlayers) > 4)
              {
                document.getElementById("tdT1L5").style = "";
                updateJourneyMapSelections(gameObject.journeyMap.t1Loc5Choice, "1", "5");
                if (gameObject.journeyMap.t1Loc5Choice != "none")
                {
                  completedLocations += 1;
                  if (gameObject.journeyMap.t1Loc5Choice == 1)
                  {
                    document.getElementById("lblGameMenuT1L5Type").innerHTML = "Type: " + globalPlayingGameObject.journeyMap.t1Loc5Op1.theme + " " + globalPlayingGameObject.journeyMap.t1Loc5Op1.biome;
                  }
                  else if (gameObject.journeyMap.t1Loc5Choice == 2)
                  {
                    document.getElementById("lblGameMenuT1L5Type").innerHTML = "Type: " + globalPlayingGameObject.journeyMap.t1Loc5Op2.theme + " " + globalPlayingGameObject.journeyMap.t1Loc5Op2.biome;
                  }
                  document.getElementById("lblGameMenuT1L5Choice").innerHTML = "Choice: " + String(gameObject.journeyMap.t1Loc5Choice);
                  document.getElementById("lblGameMenuT1L5Player").innerHTML = "Player: " + globalPlayingGameObject.journeyMap.t1Loc5Player;
                }
                else
                {
                  document.getElementById("tblGameMenuChoosePlayer").style = "";
                }
              }
            }
            else
            {
              document.getElementById("tblGameMenuChoosePlayer").style = "";
              document.getElementById("tdT1L5").style = "display:none";
            }
          }
          
        }
        else
        {
          document.getElementById("tdT1L4").style = "display:none";
          document.getElementById("tdT1L5").style = "display:none";
          document.getElementById("tblGameMenuChoosePlayer").style = "";
        }
      }
    }
    else
    {
      document.getElementById("tdT1L3").style = "display:none";
      document.getElementById("tdT1L4").style = "display:none";
      document.getElementById("tdT1L5").style = "display:none";
      document.getElementById("tblGameMenuChoosePlayer").style = "";
    }

    // REVEAL TIER 2 LOCATIONS
    if (completedLocations >= gameObject.numPlayers)
    {
      completedLocations = 0;
      document.getElementById("btnGameMenuShowTier2").style = "";
      updateJourneyMapSelections(gameObject.journeyMap.t2Loc1Choice, "2", "1");
      if (gameObject.journeyMap.t2Loc1Choice != "none")
      {
        completedLocations += 1;
        if (gameObject.journeyMap.t2Loc1Choice == 1)
        {
          document.getElementById("lblGameMenuT2L1Type").innerHTML = "Type: " + globalPlayingGameObject.journeyMap.t2Loc1Op1.theme + " " + globalPlayingGameObject.journeyMap.t2Loc1Op1.biome;
        }
        else if (gameObject.journeyMap.t2Loc1Choice == 2)
        {
          document.getElementById("lblGameMenuT2L1Type").innerHTML = "Type: " + globalPlayingGameObject.journeyMap.t2Loc1Op2.theme + " " + globalPlayingGameObject.journeyMap.t2Loc1Op2.biome;
        }
        document.getElementById("lblGameMenuT2L1Choice").innerHTML = "Choice: " + String(gameObject.journeyMap.t2Loc1Choice);
        document.getElementById("lblGameMenuT2L1Player").innerHTML = "Player: " + globalPlayingGameObject.journeyMap.t2Loc1Player;
        document.getElementById("tdT2L2").style = "";
      }
      else
      {
        document.getElementById("tdT2L2").style = "display:none";
        document.getElementById("tdT2L3").style = "display:none";
        document.getElementById("tdT2L4").style = "display:none";
        document.getElementById("tdT2L5").style = "display:none";
      }

      updateJourneyMapSelections(gameObject.journeyMap.t2Loc2Choice, "2", "2");
      if (gameObject.journeyMap.t2Loc2Choice != "none")
      {
        completedLocations += 1;
        if (gameObject.journeyMap.t2Loc2Choice == 1)
        {
          document.getElementById("lblGameMenuT2L2Type").innerHTML = "Type: " + globalPlayingGameObject.journeyMap.t2Loc2Op1.theme + " " + globalPlayingGameObject.journeyMap.t2Loc2Op1.biome;
        }
        else if (gameObject.journeyMap.t2Loc2Choice == 2)
        {
          document.getElementById("lblGameMenuT2L2Type").innerHTML = "Type: " + globalPlayingGameObject.journeyMap.t2Loc2Op2.theme + " " + globalPlayingGameObject.journeyMap.t2Loc2Op2.biome;
        }
        document.getElementById("lblGameMenuT2L2Choice").innerHTML = "Choice: " + String(gameObject.journeyMap.t2Loc2Choice);
        document.getElementById("lblGameMenuT2L2Player").innerHTML = "Player: " + globalPlayingGameObject.journeyMap.t2Loc2Player;
        if (Number(gameObject.numPlayers) > 2)
        {
          document.getElementById("tdT2L3").style = "";
          updateJourneyMapSelections(gameObject.journeyMap.t2Loc3Choice, "2", "3");
          if (gameObject.journeyMap.t2Loc3Choice != "none")
          {
            completedLocations += 1;
            if (gameObject.journeyMap.t2Loc3Choice == 1)
            {
              document.getElementById("lblGameMenuT2L3Type").innerHTML = "Type: " + globalPlayingGameObject.journeyMap.t2Loc3Op1.theme + " " + globalPlayingGameObject.journeyMap.t2Loc3Op1.biome;
            }
            else if (gameObject.journeyMap.t2Loc3Choice == 2)
            {
              document.getElementById("lblGameMenuT2L3Type").innerHTML = "Type: " + globalPlayingGameObject.journeyMap.t2Loc3Op2.theme + " " + globalPlayingGameObject.journeyMap.t2Loc3Op2.biome;
            }
            document.getElementById("lblGameMenuT2L3Choice").innerHTML = "Choice: " + String(gameObject.journeyMap.t2Loc3Choice);
            document.getElementById("lblGameMenuT2L3Player").innerHTML = "Player: " + globalPlayingGameObject.journeyMap.t2Loc3Player;

            if (Number(gameObject.numPlayers) > 3)
            {
              document.getElementById("tdT2L4").style = "";
              updateJourneyMapSelections(gameObject.journeyMap.t2Loc4Choice, "2", "4");
              if (gameObject.journeyMap.t2Loc4Choice != "none")
              {
                completedLocations += 1;
                if (gameObject.journeyMap.t2Loc4Choice == 1)
                {
                  document.getElementById("lblGameMenuT2L4Type").innerHTML = "Type: " + globalPlayingGameObject.journeyMap.t2Loc4Op1.theme + " " + globalPlayingGameObject.journeyMap.t2Loc4Op1.biome;
                }
                else if (gameObject.journeyMap.t2Loc4Choice == 2)
                {
                  document.getElementById("lblGameMenuT2L4Type").innerHTML = "Type: " + globalPlayingGameObject.journeyMap.t2Loc4Op2.theme + " " + globalPlayingGameObject.journeyMap.t2Loc4Op2.biome;
                }
                document.getElementById("lblGameMenuT2L4Choice").innerHTML = "Choice: " + String(gameObject.journeyMap.t2Loc4Choice);
                document.getElementById("lblGameMenuT2L4Player").innerHTML = "Player: " + globalPlayingGameObject.journeyMap.t2Loc4Player;

                if (Number(gameObject.numPlayers) > 4)
                {
                  document.getElementById("tdT2L5").style = "";
                  updateJourneyMapSelections(gameObject.journeyMap.t2Loc5Choice, "2", "5");
                  if (gameObject.journeyMap.t2Loc5Choice != "none")
                  {
                    completedLocations += 1;
                    if (gameObject.journeyMap.t2Loc5Choice == 1)
                    {
                      document.getElementById("lblGameMenuT2L5Type").innerHTML = "Type: " + globalPlayingGameObject.journeyMap.t2Loc5Op1.theme + " " + globalPlayingGameObject.journeyMap.t2Loc5Op1.biome;
                    }
                    else if (gameObject.journeyMap.t2Loc5Choice == 2)
                    {
                      document.getElementById("lblGameMenuT2L5Type").innerHTML = "Type: " + globalPlayingGameObject.journeyMap.t2Loc5Op2.theme + " " + globalPlayingGameObject.journeyMap.t2Loc5Op2.biome;
                    }
                    document.getElementById("lblGameMenuT2L5Choice").innerHTML = "Choice: " + String(gameObject.journeyMap.t2Loc5Choice);
                    document.getElementById("lblGameMenuT2L5Player").innerHTML = "Player: " + globalPlayingGameObject.journeyMap.t2Loc5Player;
                  }
                  else
                  {
                    document.getElementById("tblGameMenuChoosePlayer").style = "";
                  }
                }
              }
              else
              {
                document.getElementById("tblGameMenuChoosePlayer").style = "";
                document.getElementById("tdT2L5").style = "display:none";
              }
            }
            
          }
          else
          {
            document.getElementById("tdT2L4").style = "display:none";
            document.getElementById("tdT2L5").style = "display:none";
            document.getElementById("tblGameMenuChoosePlayer").style = "";
          }
        }
      }
      else
      {
        document.getElementById("tdT2L3").style = "display:none";
        document.getElementById("tdT2L4").style = "display:none";
        document.getElementById("tdT2L5").style = "display:none";
        document.getElementById("tblGameMenuChoosePlayer").style = "";
      }
    }
    else
    {
      completedLocations = 0;
    }

    // REVEAL TIER 3 LOCATIONS
    if (completedLocations >= gameObject.numPlayers)
    {
      completedLocations = 0;
      document.getElementById("btnGameMenuShowTier3").style = "";
      updateJourneyMapSelections(gameObject.journeyMap.t3Loc1Choice, "3", "1");
      if (gameObject.journeyMap.t3Loc1Choice != "none")
      {
        completedLocations += 1;
        if (gameObject.journeyMap.t3Loc1Choice == 1)
        {
          document.getElementById("lblGameMenuT3L1Type").innerHTML = "Type: " + globalPlayingGameObject.journeyMap.t3Loc1Op1.theme + " " + globalPlayingGameObject.journeyMap.t3Loc1Op1.biome;
        }
        else if (gameObject.journeyMap.t3Loc1Choice == 2)
        {
          document.getElementById("lblGameMenuT3L1Type").innerHTML = "Type: " + globalPlayingGameObject.journeyMap.t3Loc1Op2.theme + " " + globalPlayingGameObject.journeyMap.t3Loc1Op2.biome;
        }
        document.getElementById("lblGameMenuT3L1Choice").innerHTML = "Choice: " + String(gameObject.journeyMap.t3Loc1Choice);
        document.getElementById("lblGameMenuT3L1Player").innerHTML = "Player: " + globalPlayingGameObject.journeyMap.t3Loc1Player;
        document.getElementById("tdT3L2").style = "";
      }
      else
      {
        document.getElementById("tdT3L2").style = "display:none";
        document.getElementById("tdT3L3").style = "display:none";
        document.getElementById("tdT3L4").style = "display:none";
        document.getElementById("tdT3L5").style = "display:none";
      }

      updateJourneyMapSelections(gameObject.journeyMap.t3Loc2Choice, "3", "2");
      if (gameObject.journeyMap.t3Loc2Choice != "none")
      {
        completedLocations += 1;
        if (gameObject.journeyMap.t3Loc2Choice == 1)
        {
          document.getElementById("lblGameMenuT3L2Type").innerHTML = "Type: " + globalPlayingGameObject.journeyMap.t3Loc2Op1.theme + " " + globalPlayingGameObject.journeyMap.t3Loc2Op1.biome;
        }
        else if (gameObject.journeyMap.t3Loc2Choice == 2)
        {
          document.getElementById("lblGameMenuT3L2Type").innerHTML = "Type: " + globalPlayingGameObject.journeyMap.t3Loc2Op2.theme + " " + globalPlayingGameObject.journeyMap.t3Loc2Op2.biome;
        }
        document.getElementById("lblGameMenuT3L2Choice").innerHTML = "Choice: " + String(gameObject.journeyMap.t3Loc2Choice);
        document.getElementById("lblGameMenuT3L2Player").innerHTML = "Player: " + globalPlayingGameObject.journeyMap.t3Loc2Player;
        if (Number(gameObject.numPlayers) > 2)
        {
          document.getElementById("tdT3L3").style = "";
          updateJourneyMapSelections(gameObject.journeyMap.t3Loc3Choice, "3", "3");
          if (gameObject.journeyMap.t3Loc3Choice != "none")
          {
            completedLocations += 1;
            if (gameObject.journeyMap.t3Loc3Choice == 1)
            {
              document.getElementById("lblGameMenuT3L3Type").innerHTML = "Type: " + globalPlayingGameObject.journeyMap.t3Loc3Op1.theme + " " + globalPlayingGameObject.journeyMap.t3Loc3Op1.biome;
            }
            else if (gameObject.journeyMap.t3Loc3Choice == 2)
            {
              document.getElementById("lblGameMenuT3L3Type").innerHTML = "Type: " + globalPlayingGameObject.journeyMap.t3Loc3Op2.theme + " " + globalPlayingGameObject.journeyMap.t3Loc3Op2.biome;
            }
            document.getElementById("lblGameMenuT3L3Choice").innerHTML = "Choice: " + String(gameObject.journeyMap.t3Loc3Choice);
            document.getElementById("lblGameMenuT3L3Player").innerHTML = "Player: " + globalPlayingGameObject.journeyMap.t3Loc3Player;

            if (Number(gameObject.numPlayers) > 3)
            {
              document.getElementById("tdT3L4").style = "";
              updateJourneyMapSelections(gameObject.journeyMap.t3Loc4Choice, "3", "4");
              if (gameObject.journeyMap.t3Loc4Choice != "none")
              {
                completedLocations += 1;
                if (gameObject.journeyMap.t3Loc4Choice == 1)
                {
                  document.getElementById("lblGameMenuT3L4Type").innerHTML = "Type: " + globalPlayingGameObject.journeyMap.t3Loc4Op1.theme + " " + globalPlayingGameObject.journeyMap.t3Loc4Op1.biome;
                }
                else if (gameObject.journeyMap.t3Loc4Choice == 2)
                {
                  document.getElementById("lblGameMenuT3L4Type").innerHTML = "Type: " + globalPlayingGameObject.journeyMap.t3Loc4Op2.theme + " " + globalPlayingGameObject.journeyMap.t3Loc4Op2.biome;
                }
                document.getElementById("lblGameMenuT3L4Choice").innerHTML = "Choice: " + String(gameObject.journeyMap.t3Loc4Choice);
                document.getElementById("lblGameMenuT3L4Player").innerHTML = "Player: " + globalPlayingGameObject.journeyMap.t3Loc4Player;

                if (Number(gameObject.numPlayers) > 4)
                {
                  document.getElementById("tdT3L5").style = "";
                  updateJourneyMapSelections(gameObject.journeyMap.t3Loc5Choice, "3", "5");
                  if (gameObject.journeyMap.t3Loc5Choice != "none")
                  {
                    completedLocations += 1;
                    if (gameObject.journeyMap.t3Loc5Choice == 1)
                    {
                      document.getElementById("lblGameMenuT3L5Type").innerHTML = "Type: " + globalPlayingGameObject.journeyMap.t3Loc5Op1.theme + " " + globalPlayingGameObject.journeyMap.t3Loc5Op1.biome;
                    }
                    else if (gameObject.journeyMap.t3Loc5Choice == 2)
                    {
                      document.getElementById("lblGameMenuT3L5Type").innerHTML = "Type: " + globalPlayingGameObject.journeyMap.t3Loc5Op2.theme + " " + globalPlayingGameObject.journeyMap.t3Loc5Op2.biome;
                    }
                    document.getElementById("lblGameMenuT3L5Choice").innerHTML = "Choice: " + String(gameObject.journeyMap.t3Loc5Choice);
                    document.getElementById("lblGameMenuT3L5Player").innerHTML = "Player: " + globalPlayingGameObject.journeyMap.t3Loc5Player;
                  }
                  else
                  {
                    document.getElementById("tblGameMenuChoosePlayer").style = "";
                  }
                }
              }
              else
              {
                document.getElementById("tblGameMenuChoosePlayer").style = "";
                document.getElementById("tdT3L5").style = "display:none";
              }
            }
            
          }
          else
          {
            document.getElementById("tdT3L4").style = "display:none";
            document.getElementById("tdT3L5").style = "display:none";
            document.getElementById("tblGameMenuChoosePlayer").style = "";
          }
        }
      }
      else
      {
        document.getElementById("tdT3L3").style = "display:none";
        document.getElementById("tdT3L4").style = "display:none";
        document.getElementById("tdT3L5").style = "display:none";
        document.getElementById("tblGameMenuChoosePlayer").style = "";
      }
    }
    else
    {
      completedLocations = 0;
    }

    if (completedLocations >= gameObject.numPlayers && gameObject.state == 0) 
    {
      if (globalPlayerNum == 1)
      {
        completedLocations = 0;
        var updates = {};
        updates["games/" + globalPlayingGame + "/nemesisHealth"] = getNemesisHealth(gameObject.mistakePoints, gameObject.numPlayers);
        updates["games/" + globalPlayingGame + "/state"] = 3;
        firebase.database().ref().update(updates);
      }
    }

    
    
    if (gameObject.state == 1)
    {
      document.getElementById("divGameMenuJourneyMap").style = "display:none";
      document.getElementById("divEncounterSheet").style = "";
      try
      {
        document.getElementById("lblGameMenuEncounterSheetName").innerHTML = gameObject.activeEncounter.name;
        document.getElementById("lblGameMenuEncounterSheetDesc").innerHTML = gameObject.activeEncounter.desc;
        document.getElementById("lblGameMenuEncounterSheetNumSuccess").innerHTML = String(gameObject.activeEncounter.currentSuccess) + "/" + String(gameObject.activeEncounter.successCount) + " Successes";
        document.getElementById("lblGameMenuEncounterSheetChallengePD").innerHTML = gameObject.activeEncounter.challengeLevelPD;
        document.getElementById("lblGameMenuEncounterSheetChallengeAC").innerHTML = gameObject.activeEncounter.challengeLevelAC;
        document.getElementById("lblGameMenuEncounterSheetChallengeIA").innerHTML = gameObject.activeEncounter.challengeLevelIA;
        document.getElementById("lblGameMenuEncounterSheetRewardPD").innerHTML = gameObject.activeEncounter.rewardPD;
        document.getElementById("lblGameMenuEncounterSheetRewardAC").innerHTML = gameObject.activeEncounter.rewardAC;
        document.getElementById("lblGameMenuEncounterSheetRewardIA").innerHTML = gameObject.activeEncounter.rewardIA;
        document.getElementById("lblGameMenuEncounterSheetRewardValue").innerHTML = gameObject.activeEncounter.reward;
      }
      catch
      {

      }
      
    }
    else if (gameObject.state == 2)
    {
      document.getElementById("divScenePage").style = "";
      document.getElementById("divGameMenuJourneyMap").style = "display:none";
    }
    else if (gameObject.state == 3)
    {
      //document.getElementById("divGameMenuFinalConfrontation").style = "";
      document.getElementById("btnGameMenuShowFinalConfrontation").style = "";
      document.getElementById("lblGameMenuNemesisName").innerHTML = gameObject.nemesisName;
      document.getElementById("lblGameMenuNemesisMistakes").innerHTML = gameObject.mistakePoints;
      document.getElementById("lblGameMenuNemesisHealth").innerHTML = gameObject.nemesisHealth;
    }

    var numP = Number(snapshot.val().numPlayers);
    
    var slUsernames = document.getElementById("slGameMenuChoosePlayer");
    slUsernames.innerHTML = "";

    var slEncounterPlayers = document.getElementById("slGameMenuEncounterSheetPlayers");
    slEncounterPlayers.innerHTML = "";

    
    for (var i = 1; i <= numP; i++)
    {
      var option = document.createElement("option");
      var option2 = document.createElement("option");
      if (i == 1)
      {
        try
        {
          if (gameObject.player1char.exhausted)
          {
            continue;
          }
        }
        catch
        {
          continue;
        }
        
        option.text = gameObject.player1;
        option2.text = gameObject.player1;
      }
      else if (i == 2)
      {
        try
        {
          if (gameObject.player2char.exhausted)
          {
            continue;
          }
        }
        catch
        {
          continue;
        }
        option.text = gameObject.player2;
        option2.text = gameObject.player2;
      }
      else if (i == 3)
      {
        try
        {
          if (gameObject.player3char.exhausted)
          {
            continue;
          }
        }
        catch
        {
          continue;
        }
        option.text = gameObject.player3;
        option2.text = gameObject.player3;
      }
      else if (i == 4)
      {
        try
        {
          if (gameObject.player4char.exhausted)
          {
            continue;
          }
        }
        catch
        {
          continue;
        }
        option.text = gameObject.player4;
        option2.text = gameObject.player4;
      }
      else if (i == 5)
      {
        try
        {
          if (gameObject.player5char.exhausted)
          {
            continue;
          }
        }
        catch
        {
          continue;
        }
        option.text = gameObject.player5;
        option2.text = gameObject.player5;
      }
      
      slUsernames.options.add(option);
      slEncounterPlayers.options.add(option2);
    }

    if (document.getElementById("divGameMenuSelectTier").style.display != "none")
    {
      //console.log(document.getElementById("divGameMenuSelectTier").style);
      document.getElementById("tblGameMenuChoosePlayer").style = "display:none";


    }
  });
  
}

function getNemesisHealth(mistakes, numPlayers)
{
  return numPlayers * 10 + mistakes * 2;
}

function btnJoinGamesJoinGame_Click()
{
  
  var joinGameName = document.getElementById("taJoinedGamesName").value;


  firebase.database().ref('games/' + joinGameName).once('value').then((snapshot) => {
    var gameObject = snapshot.val();
    var userEmail = firebase.auth().currentUser.email;
    if (gameObject.player1 == userEmail)
    {
      alert('You are the host of this game! Join from the host game menu.')
    }
    else if (gameObject.player2 == userEmail || gameObject.player3 == userEmail || gameObject.player4 == userEmail || gameObject.player5 == userEmail)
    {
      var playerNum = 2;
      if (gameObject.player3 == userEmail) {playerNum = 3;}
      else if (gameObject.player4 == userEmail) {playerNum = 4;}
      else if (gameObject.player5 == userEmail) {playerNum = 5;}
      globalPlayerNum = playerNum;
      if (snapshot.hasChild('player' + String(playerNum) + 'char'))
      {
        globalPlayingGame = joinGameName;
        globalPlayingModule = snapshot.val().module;
        loadGameMenu();

      }
      else
      {
        loadCharacterCreation(gameObject.module, joinGameName);
        globalPlayingGame = joinGameName;
      }
      
    }
    else
    {
      alert('You are not part of this game.')
    }
  });
}

function btnGameMenuCreateCharConfirm_Click()
{
  if (document.getElementById("taGameMenuCreateCharName").value == "")
  {
    alert('Name cannot be empty!');
    return;
  }
  else if (document.getElementById("taGameMenuCreateCharDeepSecret").value == "")
  {
    alert('Deep Secret cannot be empty!');
    return;
  }
  else
  {
    
    firebase.database().ref('games/' + globalPlayingGame + '/player' + String(globalPlayerNum) + 'char').set({
      name: document.getElementById("taGameMenuCreateCharName").value,
      experience: 0,
      exhausted: false,
      childProfType: document.getElementById("slGameMenuCreateCharChildProfType").value,
      childProf: 1,
      carProfType: document.getElementById("slGameMenuCreateCharCarProfType").value,
      carProf: 1,
      abil1: document.getElementById("slGameMenuCreateCharAbil1Aspect").value,
      abil2: document.getElementById("slGameMenuCreateCharAbil2Aspect").value,
      abil3: document.getElementById("slGameMenuCreateCharAbil3Aspect").value,
      abil4: document.getElementById("slGameMenuCreateCharAbil4Aspect").value,
      abil5: document.getElementById("slGameMenuCreateCharAbil5Aspect").value,
      abil6: document.getElementById("slGameMenuCreateCharAbil6Aspect").value,
      abil7: document.getElementById("slGameMenuCreateCharAbil7Aspect").value,
      abil8: document.getElementById("slGameMenuCreateCharAbil8Aspect").value,
      maturityPD: 1,
      maturityAC: 1,
      maturityIA: 1,
      woundPD1: 0,
      woundPD1Desc: "",
      woundPD2: 0,
      woundPD2Desc: "",
      woundPD3: 0,
      woundPD3Desc: "",
      woundAC1: 0,
      woundAC1Desc: "",
      woundAC2: 0,
      woundAC2Desc: "",
      woundAC3: 0,
      woundAC3Desc: "",
      woundIA1: 0,
      woundIA1Desc: "",
      woundIA2: 0,
      woundIA2Desc: "",
      woundIA3: 0,
      woundIA3Desc: "",
      deepSecret: document.getElementById("taGameMenuCreateCharDeepSecret").value
    }).then((snapshot) => {
      btnGameMenuCreateCharCancel_Click();
    });
  }
}

function btnGameMenuCreateCharCancel_Click()
{
  document.getElementById("divCreateCharacterMenu").style = "display:none";
  document.getElementById("divMainMenu").style = "display:block";
  globalPlayingGame = "none";
  globalPlayingModule = "none";
  globalPlayerNum = 0;

  document.getElementById("taGameMenuCreateCharName").value = "";
  document.getElementById("taGameMenuCreateCharDeepSecret").value = "";

  document.getElementById("slGameMenuCreateCharChildProfType").innerHTML = "";
  document.getElementById("slGameMenuCreateCharCarProfType").innerHTML = "";

  for (var i = 0; i < 8; i++)
  {
    document.getElementById("slGameMenuCreateCharAbil" + String(i+1) + "Aspect").selectedIndex = "0";
  }
}

function btnJoinHostedGame_Click()
{
  var joinGameName = document.getElementById("slGameList").value;
  if (joinGameName == "")
  {
    alert('Invalid game!');
    return;
  }

  firebase.database().ref('users/' + firebase.auth().currentUser.uid).once('value').then((snapshot) => {
    var snapVal = snapshot.val();
    if (snapVal.game1 == joinGameName || snapVal.game2 == joinGameName || snapVal.game3 == joinGameName || snapVal.game4 == joinGameName || snapVal.game5 == joinGameName || snapVal.game6 == joinGameName || snapVal.game7 == joinGameName || snapVal.game8 == joinGameName)
    {
      firebase.database().ref("games/" + joinGameName).once('value').then((snapshot) => {
        var okay = false;
        if (snapshot.val().player1 == firebase.auth().currentUser.email) {
          okay = true;
          globalPlayerNum = 1;
            if (snapshot.hasChild('player1char'))
            {
              globalPlayingModule = snapshot.val().module;
              globalPlayingGame = joinGameName;
              loadGameMenu();
            }
            else
            {
              globalPlayingModule = snapshot.val().module;
              globalPlayingGame = joinGameName;
              loadCharacterCreation(snapshot.val().module, joinGameName);
            }
        }
        else {
          alert('This game is not valid!');
        }
      });
      /*firebase.database().ref('games').once('value').then((snapshot) => {
        if (snapshot.hasChild(joinGameName))
        {
          if (snapshot.child(joinGameName).val().player1 == globalUsername)
          {
            globalPlayerNum = 1;
            if (snapshot.child(joinGameName).hasChild('player1char'))
            {
              globalPlayingModule = snapshot.child(joinGameName).val().module;
              globalPlayingGame = joinGameName;
              loadGameMenu();
            }
            else
            {
              globalPlayingModule = snapshot.child(joinGameName).val().module;
              globalPlayingGame = joinGameName;
              loadCharacterCreation(snapshot.child(joinGameName).val().module, joinGameName);
            }
          }
          else
          {
            alert('You are not hosting this game!');
          }
        }
        else
        {
          alert('This game does not exist!');
        }
      });*/
    }
    else
    {
      alert('You are not hosting this game!');
    }
  });

}

function btnGameMenuMyCharSave_Click()
{
  var charName = document.getElementById("taGameMenuMyCharName").value;
  var charExp = document.getElementById("nbxGameMenuMyCharExperience").value;
  var charExhausted = document.getElementById("cbxGameMenuMyCharExhausted").checked;
  //var charChildProfType = document.getElementById("slGameMenuMyCharChildProfType").value;
  //var charCarProfType = document.getElementById("slGameMenuMyCharCarProfType").value;
  var charChildProf = document.getElementById("nbxGameMenuMyCharChildProfVal").value;
  var charCarProf = document.getElementById("nbxGameMenuMyCharCarProfVal").value;
  var charAbil1 = document.getElementById("slGameMenuMyCharAbil1Aspect").value;
  var charAbil2 = document.getElementById("slGameMenuMyCharAbil2Aspect").value;
  var charAbil3 = document.getElementById("slGameMenuMyCharAbil3Aspect").value;
  var charAbil4 = document.getElementById("slGameMenuMyCharAbil4Aspect").value;
  var charAbil5 = document.getElementById("slGameMenuMyCharAbil5Aspect").value;
  var charAbil6 = document.getElementById("slGameMenuMyCharAbil6Aspect").value;
  var charAbil7 = document.getElementById("slGameMenuMyCharAbil7Aspect").value;
  var charAbil8 = document.getElementById("slGameMenuMyCharAbil8Aspect").value;
  var charMaturityPD = document.getElementById("nbxGameMenuMyCharMaturityPD").value;
  var charMaturityAC = document.getElementById("nbxGameMenuMyCharMaturityAC").value;
  var charMaturityIA = document.getElementById("nbxGameMenuMyCharMaturityIA").value;
  var charWoundPD1 = document.getElementById("nbxGameMenuMyCharWoundPD1").value;
  var charWoundPD1Desc = document.getElementById("taGameMenuMyCharWoundPD1").value;
  var charWoundAC1 = document.getElementById("nbxGameMenuMyCharWoundAC1").value;
  var charWoundAC1Desc = document.getElementById("taGameMenuMyCharWoundAC1").value;
  var charWoundIA1 = document.getElementById("nbxGameMenuMyCharWoundIA1").value;
  var charWoundIA1Desc = document.getElementById("taGameMenuMyCharWoundIA1").value;
  var charWoundPD2 = document.getElementById("nbxGameMenuMyCharWoundPD2").value;
  var charWoundPD2Desc = document.getElementById("taGameMenuMyCharWoundPD2").value;
  var charWoundAC2 = document.getElementById("nbxGameMenuMyCharWoundAC2").value;
  var charWoundAC2Desc = document.getElementById("taGameMenuMyCharWoundAC2").value;
  var charWoundIA2 = document.getElementById("nbxGameMenuMyCharWoundIA2").value;
  var charWoundIA2Desc = document.getElementById("taGameMenuMyCharWoundIA2").value;
  var charWoundPD3 = document.getElementById("nbxGameMenuMyCharWoundPD3").value;
  var charWoundPD3Desc = document.getElementById("taGameMenuMyCharWoundPD3").value;
  var charWoundAC3 = document.getElementById("nbxGameMenuMyCharWoundAC3").value;
  var charWoundAC3Desc = document.getElementById("taGameMenuMyCharWoundAC3").value;
  var charWoundIA3 = document.getElementById("nbxGameMenuMyCharWoundIA3").value;
  var charWoundIA3Desc = document.getElementById("taGameMenuMyCharWoundIA3").value;
  var charDeepSecret = document.getElementById("taGameMenuMyCharDeepSecret").value;
  /*var charInfo = {
    name: charName,
    experience: charExp,
    exhausted: charExhausted,
    childProfType: charChildProfType,
    childProf: charChildProf,
    carProfType: charCarProfType,
    carProf: charCarProf,
    // abil1: charAbil1,
    // abil2: charAbil2,
    // abil3: charAbil3,
    // abil4: charAbil4,
    // abil5: charAbil5,
    // abil6: charAbil6,
    // abil7: charAbil7,
    // abil8: charAbil8,
    // abil1: charAbil1,
    // abil2: charAbil2,
    // abil3: charAbil3,
    // abil4: charAbil4,
    // abil5: charAbil5,
    // abil6: charAbil6,
    // abil7: charAbil7,
    // abil8: charAbil8,
    maturityPD: charMaturityPD,
    maturityAC: charMaturityAC,
    maturityIA: charMaturityIA,
    woundPD1: charWoundPD1,
    woundPD1Desc: charWoundPD1Desc,
    woundPD2: charWoundPD2,
    woundPD2Desc: charWoundPD2Desc,
    woundPD3: charWoundPD3,
    woundPD3Desc: charWoundPD3Desc,
    woundAC1: charWoundAC1,
    woundAC1Desc: charWoundAC1Desc,
    woundAC2: charWoundAC2,
    woundAC2Desc: charWoundAC2Desc,
    woundAC3: charWoundAC3,
    woundAC3Desc: charWoundAC3Desc,
    woundIA1: charWoundIA1,
    woundIA1Desc: charWoundIA1Desc,
    woundIA2: charWoundIA2,
    woundIA2Desc: charWoundIA2Desc,
    woundIA3: charWoundIA3,
    woundIA3Desc: charWoundIA3Desc,
    deepSecret: charDeepSecret
  };*/
  var updates = {};
  updates["games/" + globalPlayingGame + "/player" + String(globalPlayerNum) + "char" + "/name"] = charName;
  updates["games/" + globalPlayingGame + "/player" + String(globalPlayerNum) + "char" + "/experience"] = charExp;
  updates["games/" + globalPlayingGame + "/player" + String(globalPlayerNum) + "char" + "/exhausted"] = charExhausted;
  //updates["games/" + globalPlayingGame + "/player" + String(globalPlayerNum) + "char" + "/childProfType"] = charChildProfType;
  updates["games/" + globalPlayingGame + "/player" + String(globalPlayerNum) + "char" + "/childProf"] = charChildProf;
  //updates["games/" + globalPlayingGame + "/player" + String(globalPlayerNum) + "char" + "/carProfType"] = charCarProfType;
  updates["games/" + globalPlayingGame + "/player" + String(globalPlayerNum) + "char" + "/carProf"] = charCarProf;
  updates["games/" + globalPlayingGame + "/player" + String(globalPlayerNum) + "char" + "/maturityPD"] = charMaturityPD;
  updates["games/" + globalPlayingGame + "/player" + String(globalPlayerNum) + "char" + "/maturityAC"] = charMaturityAC;
  updates["games/" + globalPlayingGame + "/player" + String(globalPlayerNum) + "char" + "/maturityIA"] = charMaturityIA;
  updates["games/" + globalPlayingGame + "/player" + String(globalPlayerNum) + "char" + "/woundPD1"] = charWoundPD1;
  updates["games/" + globalPlayingGame + "/player" + String(globalPlayerNum) + "char" + "/woundPD2"] = charWoundPD2;
  updates["games/" + globalPlayingGame + "/player" + String(globalPlayerNum) + "char" + "/woundPD3"] = charWoundPD3;
  updates["games/" + globalPlayingGame + "/player" + String(globalPlayerNum) + "char" + "/woundAC1"] = charWoundAC1;
  updates["games/" + globalPlayingGame + "/player" + String(globalPlayerNum) + "char" + "/woundAC2"] = charWoundAC2;
  updates["games/" + globalPlayingGame + "/player" + String(globalPlayerNum) + "char" + "/woundAC3"] = charWoundAC3;
  updates["games/" + globalPlayingGame + "/player" + String(globalPlayerNum) + "char" + "/woundIA1"] = charWoundIA1;
  updates["games/" + globalPlayingGame + "/player" + String(globalPlayerNum) + "char" + "/woundIA2"] = charWoundIA2;
  updates["games/" + globalPlayingGame + "/player" + String(globalPlayerNum) + "char" + "/woundIA3"] = charWoundIA3;
  updates["games/" + globalPlayingGame + "/player" + String(globalPlayerNum) + "char" + "/woundPD1Desc"] = charWoundPD1Desc;
  updates["games/" + globalPlayingGame + "/player" + String(globalPlayerNum) + "char" + "/woundPD2Desc"] = charWoundPD2Desc;
  updates["games/" + globalPlayingGame + "/player" + String(globalPlayerNum) + "char" + "/woundPD3Desc"] = charWoundPD3Desc;
  updates["games/" + globalPlayingGame + "/player" + String(globalPlayerNum) + "char" + "/woundAC1Desc"] = charWoundAC1Desc;
  updates["games/" + globalPlayingGame + "/player" + String(globalPlayerNum) + "char" + "/woundAC2Desc"] = charWoundAC2Desc;
  updates["games/" + globalPlayingGame + "/player" + String(globalPlayerNum) + "char" + "/woundAC3Desc"] = charWoundAC3Desc;
  updates["games/" + globalPlayingGame + "/player" + String(globalPlayerNum) + "char" + "/woundIA1Desc"] = charWoundIA1Desc;
  updates["games/" + globalPlayingGame + "/player" + String(globalPlayerNum) + "char" + "/woundIA2Desc"] = charWoundIA2Desc;
  updates["games/" + globalPlayingGame + "/player" + String(globalPlayerNum) + "char" + "/woundIA3Desc"] = charWoundIA3Desc;
  updates["games/" + globalPlayingGame + "/player" + String(globalPlayerNum) + "char" + "/deepSecret"] = charDeepSecret;
  firebase.database().ref().update(updates);


  // firebase.database().ref("games/" + globalPlayingGame + "/player" + String(globalPlayerNum) + "char").set({
  //   name: charName,
  //   experience: charExp,
  //   exhausted: charExhausted,
  //   childProfType: charChildProfType,
  //   childProf: charChildProf,
  //   carProfType: charCarProfType,
  //   carProf: charCarProf,
  //   // abil1: charAbil1,
  //   // abil2: charAbil2,
  //   // abil3: charAbil3,
  //   // abil4: charAbil4,
  //   // abil5: charAbil5,
  //   // abil6: charAbil6,
  //   // abil7: charAbil7,
  //   // abil8: charAbil8,
  //   maturityPD: charMaturityPD,
  //   maturityAC: charMaturityAC,
  //   maturityIA: charMaturityIA,
  //   woundPD1: charWoundPD1,
  //   woundPD1Desc: charWoundPD1Desc,
  //   woundPD2: charWoundPD2,
  //   woundPD2Desc: charWoundPD2Desc,
  //   woundPD3: charWoundPD3,
  //   woundPD3Desc: charWoundPD3Desc,
  //   woundAC1: charWoundAC1,
  //   woundAC1Desc: charWoundAC1Desc,
  //   woundAC2: charWoundAC2,
  //   woundAC2Desc: charWoundAC2Desc,
  //   woundAC3: charWoundAC3,
  //   woundAC3Desc: charWoundAC3Desc,
  //   woundIA1: charWoundIA1,
  //   woundIA1Desc: charWoundIA1Desc,
  //   woundIA2: charWoundIA2,
  //   woundIA2Desc: charWoundIA2Desc,
  //   woundIA3: charWoundIA3,
  //   woundIA3Desc: charWoundIA3Desc,
  //   deepSecret: charDeepSecret
  // });/*.then((snapshot) => {
  //   alert('This ran');
  // });*/
}

function btnMainMenuSignOut_Click()
{
  firebase.auth().signOut().then((result) => {
    var mainMenuDiv = document.getElementById("divMainMenu");
    mainMenuDiv.style = "display:none";
    var slGame = document.getElementById('slGameList');
    slGame.innerHTML = "";
    document.getElementById("divStartMenu").style = "display:block";
  });
}

function btnGameMenuExitGame_Click()
{
  firebase.database().ref("games/" + globalPlayingGame).off();
  globalJourneyMapObject = null;
  document.getElementById("taGameMenuMyCharName").value = "";
  document.getElementById("nbxGameMenuMyCharExperience").value = "";
  document.getElementById("cbxGameMenuMyCharExhausted").checked = false;
  document.getElementById("slGameMenuMyCharChildProfType").value = "";
  document.getElementById("nbxGameMenuMyCharChildProfVal").value = "";
  document.getElementById("slGameMenuMyCharCarProfType").value = "";
  document.getElementById("nbxGameMenuMyCharCarProfVal").value = "";
  document.getElementById("slGameMenuMyCharAbil1Aspect").value = "";
  document.getElementById("slGameMenuMyCharAbil2Aspect").value = "";
  document.getElementById("slGameMenuMyCharAbil3Aspect").value = "";
  document.getElementById("slGameMenuMyCharAbil4Aspect").value = "";
  document.getElementById("slGameMenuMyCharAbil5Aspect").value = "";
  document.getElementById("slGameMenuMyCharAbil6Aspect").value = "";
  document.getElementById("slGameMenuMyCharAbil7Aspect").value = "";
  document.getElementById("slGameMenuMyCharAbil8Aspect").value = "";
  document.getElementById("nbxGameMenuMyCharMaturityPD").value = "";
  document.getElementById("nbxGameMenuMyCharMaturityAC").value = "";
  document.getElementById("nbxGameMenuMyCharMaturityIA").value = "";
  document.getElementById("taGameMenuMyCharWoundPD1").value = "";
  document.getElementById("nbxGameMenuMyCharWoundPD1").value = "";
  document.getElementById("taGameMenuMyCharWoundPD2").value = "";
  document.getElementById("nbxGameMenuMyCharWoundPD2").value = "";
  document.getElementById("taGameMenuMyCharWoundPD3").value = "";
  document.getElementById("nbxGameMenuMyCharWoundPD3").value = "";
  document.getElementById("taGameMenuMyCharWoundAC1").value = "";
  document.getElementById("nbxGameMenuMyCharWoundAC1").value = "";
  document.getElementById("taGameMenuMyCharWoundAC2").value = "";
  document.getElementById("nbxGameMenuMyCharWoundAC2").value = "";
  document.getElementById("taGameMenuMyCharWoundAC3").value = "";
  document.getElementById("nbxGameMenuMyCharWoundAC3").value = "";
  document.getElementById("taGameMenuMyCharWoundIA1").value = "";
  document.getElementById("nbxGameMenuMyCharWoundIA1").value = "";
  document.getElementById("taGameMenuMyCharWoundIA2").value = "";
  document.getElementById("nbxGameMenuMyCharWoundIA2").value = "";
  document.getElementById("taGameMenuMyCharWoundIA3").value = "";
  document.getElementById("nbxGameMenuMyCharWoundIA3").value = "";
  document.getElementById("taGameMenuMyCharDeepSecret").value = "";
  globalPlayerAbilAspects[0] = "";
  document.getElementById("lblGameMenuMyCharAbil1Aspect").innerHTML = "";
  globalPlayerAbilAspects[1] = "";
  document.getElementById("lblGameMenuMyCharAbil2Aspect").innerHTML = "";
  globalPlayerAbilAspects[2] = "";
  document.getElementById("lblGameMenuMyCharAbil3Aspect").innerHTML = "";
  globalPlayerAbilAspects[3] = "";
  document.getElementById("lblGameMenuMyCharAbil4Aspect").innerHTML = "";
  globalPlayerAbilAspects[4] = "";
  document.getElementById("lblGameMenuMyCharAbil5Aspect").innerHTML = "";
  globalPlayerAbilAspects[5] = "";
  document.getElementById("lblGameMenuMyCharAbil6Aspect").innerHTML = "";
  globalPlayerAbilAspects[6] = "";
  document.getElementById("lblGameMenuMyCharAbil7Aspect").innerHTML = "";
  globalPlayerAbilAspects[7] = "";
  document.getElementById("lblGameMenuMyCharAbil8Aspect").innerHTML = "";

  document.getElementById("divGameMenu").style = "display:none";
  document.getElementById("divMainMenu").style = "display:block";

  document.getElementById("btnGameMenuShowTier1").style = "";
  document.getElementById("btnGameMenuShowTier2").style = "display:none";
  document.getElementById("btnGameMenuShowTier3").style = "display:none";
  document.getElementById("divGameMenuTier1").style = "display:none";
  document.getElementById("divGameMenuTier2").style = "display:none";
  document.getElementById("divGameMenuTier3").style = "display:none";
  document.getElementById("divGameMenuSelectTier").style = "display:block";
  document.getElementById("btnGameMenuHideTier").style = "display:none";
}

function btnGameMenuDiceRollManual_Click()
{
  tbl = document.getElementById("tblDieResults");
  if (tbl.rows.length >= 10)
  {
    return;
  }
  insertGameMenuDiceResult(document.getElementById("nbxGameMenuDiceRollManual").value);
  activateAspectAbilities();
}

function btnGameMenuDiceRoll_Click()
{
  tbl = document.getElementById("tblDieResults");
  if (tbl.rows.length >= 10)
  {
    return;
  }
  insertGameMenuDiceResult(rolld8());
  activateAspectAbilities();
}

function insertGameMenuDiceResult(num)
{
  var tbl = document.getElementById("tblDieResults");
  var newRow = document.createElement("tr");

  tbl.insertRow(newRow);
  var newCell = document.createElement("td");
  tbl.rows[0].insertCell(newCell);
  tbl.rows[0].cells[0].innerHTML = "<button value=\"" + String(num) +"\" class=\"btn btn-warning\" name=\"dieRolls\">" + getAspectAbility(num) + " [" + String(num) + "]</button>";
  var btns = document.getElementsByName("dieRolls");

  //console.log("This on button: " + btns[0].innerHTML);
  btns[0].addEventListener('click', dieRollEventListener)
}

function rolld8()
{
  return Math.floor(Math.random() * 10) % 8 + 1;
}

function getAspectAbility(num)
{
  lblNamePrefix = "lblGameMenuMyCharAbil";
  lblNameSuffix = "Aspect";
  lblName = document.getElementById(lblNamePrefix + String(num) + lblNameSuffix);
  if (lblName.innerText != "P&D" && lblName.innerText != "A&C" && lblName.innerText != "I&A")
  {
    return "none";
  }
  return lblName.innerText;
}

function btnGameMenuActionHandRoll_Click()
{
  tbl = document.getElementById("tblDieResults");
  if (tbl.rows.length >= 6)
  {
    return;
  }
  for (var i = 0; i < 5; i++)
  {
    insertGameMenuDiceResult(rolld8());
  }
  activateAspectAbilities();
}

function btnGameMenuClearDice_Click()
{
  var tbl = document.getElementById("tblDieResults");
  tbl.innerHTML = "";

  clearAspectAbilities();
  clearDieImages();
}

function clearAspectAbilities()
{
  for (var i = 1; i <= 8; i++)
  {
    cbx = document.getElementById("cbxGameMenuMyCharAbil" + String(i) + "Active");
    cbx.checked = false;
  }
}

function activateAspectAbilities()
{
  tbl = document.getElementById("tblDieResults");
  //console.log(tbl.rows.length);

  var abilCount = [0,0,0,0,0,0,0,0];

  for (var i = 0; i < tbl.rows.length; i++)
  {
    var innerHTML = tbl.rows[i].cells[0].innerHTML;
    var valPos = innerHTML.search("value=");
    var btnNum = Number(innerHTML.slice(valPos+7,valPos+8));
    abilCount[btnNum-1] += 1;
    //console.log("value: " + String(btnNum));
  }

  for (var i = 0; i < 8; i++)
  {
    if (abilCount[i] >= 2)
    {
      cbx = document.getElementById("cbxGameMenuMyCharAbil" + String(i+1) + "Active");
      cbx.checked = true;
    }
  }
}

function dieRollEventListener(event)
{
  clearDieImages();
  var result = rolld8();
  img = document.getElementById("imgDieResult" + String(result));
  img.style = "display:block";
  console.log("Rolled a " + getAspectAbility(Number(this.value)) + " Aspect check with a result of " + String(result));
  this.parentElement.innerHTML = "<label>Used " + getAspectAbility(Number(this.value)) + "[" + String(this.value) + "]" + " with a result of " + String(result) + "</label>";
  //this.parentNode.removeChild(this);
}

function clearDieImages()
{
  for (var i = 1; i <= 8; i++)
  {
    img = document.getElementById("imgDieResult" + String(i));
    img.style = "display:none";
  }
}

function randomNum(lowerBound, upperBound)
{
  return Math.floor(Math.random() * 1000) % upperBound + lowerBound;
}

function getBiomeName(moduleItem, index)
{
  if (index == 1)
  {
    return moduleItem.biomes.biome1;
  }
  else if (index == 2)
  {
    return moduleItem.biomes.biome2;
  }
  else if (index == 3)
  {
    return moduleItem.biomes.biome3;
  }
  else if (index == 4)
  {
    return moduleItem.biomes.biome4;
  }
  else if (index == 5)
  {
    return moduleItem.biomes.biome5;
  }
  return "none";
}

function getThemeName(moduleItem, index)
{
  if (index == 1)
  {
    return moduleItem.themes.theme1;
  }
  else if (index == 2)
  {
    return moduleItem.themes.theme2;
  }
  else if (index == 3)
  {
    return moduleItem.themes.theme3;
  }
  else if (index == 4)
  {
    return moduleItem.themes.theme4;
  }
  else if (index == 5)
  {
    return moduleItem.themes.theme5;
  }
  return "none";
}

function createJourneyMap(module, numPlayers, gameName)
{
  firebase.database().ref('modules/' + module).once('value').then((snapshot) => {
    var moduleItem = snapshot.val();

    var t1Loc1Choice = "none";
    var t1Loc1Player = "none";
    var t1Loc2Choice = "none";
    var t1Loc2Player = "none";
    var t1Loc3Choice = "none";
    var t1Loc3Player = "none";
    var t1Loc4Choice = "none";
    var t1Loc4Player = "none";
    var t1Loc5Choice = "none";
    var t1Loc5Player = "none";

    var t1Loc1Op1Biome = getBiomeName(moduleItem, randomNum(1,5));
    var t1Loc1Op1Theme = getThemeName(moduleItem, randomNum(1,3));
    var t1Loc1Op2Biome = getBiomeName(moduleItem, randomNum(1,5));
    var t1Loc1Op2Theme = getThemeName(moduleItem, randomNum(1,3));

    var t1Loc2Op1Biome = getBiomeName(moduleItem, randomNum(1,5));
    var t1Loc2Op1Theme = getThemeName(moduleItem, randomNum(1,3));
    var t1Loc2Op2Biome = getBiomeName(moduleItem, randomNum(1,5));
    var t1Loc2Op2Theme = getThemeName(moduleItem, randomNum(1,3));

    var t1Loc3Op1Biome = "none";
    var t1Loc3Op1Theme = "none";
    var t1Loc3Op2Biome = "none";
    var t1Loc3Op2Theme = "none";

    var t1Loc4Op1Biome = "none";
    var t1Loc4Op1Theme = "none";
    var t1Loc4Op2Biome = "none";
    var t1Loc4Op2Theme = "none";

    var t1Loc5Op1Biome = "none";
    var t1Loc5Op1Theme = "none";
    var t1Loc5Op2Biome = "none";
    var t1Loc5Op2Theme = "none";

    if (numPlayers >= 3)
    {
      t1Loc3Op1Biome = getBiomeName(moduleItem, randomNum(1,5));
      t1Loc3Op1Theme = getThemeName(moduleItem, randomNum(1,3));
      t1Loc3Op2Biome = getBiomeName(moduleItem, randomNum(1,5));
      t1Loc3Op2Theme = getThemeName(moduleItem, randomNum(1,3));
    }
    if (numPlayers >= 4)
    {
      t1Loc4Op1Biome = getBiomeName(moduleItem, randomNum(1,5));
      t1Loc4Op1Theme = getThemeName(moduleItem, randomNum(1,3));
      t1Loc4Op2Biome = getBiomeName(moduleItem, randomNum(1,5));
      t1Loc4Op2Theme = getThemeName(moduleItem, randomNum(1,3));
    }
    if (numPlayers >= 5)
    {
      t1Loc5Op1Biome = getBiomeName(moduleItem, randomNum(1,5));
      t1Loc5Op1Theme = getThemeName(moduleItem, randomNum(1,3));
      t1Loc5Op2Biome = getBiomeName(moduleItem, randomNum(1,5));
      t1Loc5Op2Theme = getThemeName(moduleItem, randomNum(1,3));
    }

    var t2Loc1Choice = "none";
    var t2Loc1Player = "none";
    var t2Loc2Choice = "none";
    var t2Loc2Player = "none";
    var t2Loc3Choice = "none";
    var t2Loc3Player = "none";
    var t2Loc4Choice = "none";
    var t2Loc4Player = "none";
    var t2Loc5Choice = "none";
    var t2Loc5Player = "none";
    

    var t2Loc1Op1Biome = getBiomeName(moduleItem, randomNum(1,5));
    var t2Loc1Op1Theme = getThemeName(moduleItem, randomNum(1,5));
    var t2Loc1Op2Biome = getBiomeName(moduleItem, randomNum(1,5));
    var t2Loc1Op2Theme = getThemeName(moduleItem, randomNum(1,5));

    var t2Loc2Op1Biome = getBiomeName(moduleItem, randomNum(1,5));
    var t2Loc2Op1Theme = getThemeName(moduleItem, randomNum(1,5));
    var t2Loc2Op2Biome = getBiomeName(moduleItem, randomNum(1,5));
    var t2Loc2Op2Theme = getThemeName(moduleItem, randomNum(1,5));

    var t2Loc3Op1Biome = "none";
    var t2Loc3Op1Theme = "none";
    var t2Loc3Op2Biome = "none";
    var t2Loc3Op2Theme = "none";

    var t2Loc4Op1Biome = "none";
    var t2Loc4Op1Theme = "none";
    var t2Loc4Op2Biome = "none";
    var t2Loc4Op2Theme = "none";

    var t2Loc5Op1Biome = "none";
    var t2Loc5Op1Theme = "none";
    var t2Loc5Op2Biome = "none";
    var t2Loc5Op2Theme = "none";

    if (numPlayers >= 3)
    {
      t2Loc3Op1Biome = getBiomeName(moduleItem, randomNum(1,5));
      t2Loc3Op1Theme = getThemeName(moduleItem, randomNum(1,5));
      t2Loc3Op2Biome = getBiomeName(moduleItem, randomNum(1,5));
      t2Loc3Op2Theme = getThemeName(moduleItem, randomNum(1,5));
    }
    if (numPlayers >= 4)
    {
      t2Loc4Op1Biome = getBiomeName(moduleItem, randomNum(1,5));
      t2Loc4Op1Theme = getThemeName(moduleItem, randomNum(1,5));
      t2Loc4Op2Biome = getBiomeName(moduleItem, randomNum(1,5));
      t2Loc4Op2Theme = getThemeName(moduleItem, randomNum(1,5));
    }
    if (numPlayers >= 5)
    {
      t2Loc5Op1Biome = getBiomeName(moduleItem, randomNum(1,5));
      t2Loc5Op1Theme = getThemeName(moduleItem, randomNum(1,5));
      t2Loc5Op2Biome = getBiomeName(moduleItem, randomNum(1,5));
      t2Loc5Op2Theme = getThemeName(moduleItem, randomNum(1,5));
    }

    var t3Loc1Choice = "none";
    var t3Loc1Player = "none";
    var t3Loc2Choice = "none";
    var t3Loc2Player = "none";
    var t3Loc3Choice = "none";
    var t3Loc3Player = "none";
    var t3Loc4Choice = "none";
    var t3Loc4Player = "none";
    var t3Loc5Choice = "none";
    var t3Loc5Player = "none";

    var t3Loc1Op1Biome = getBiomeName(moduleItem, randomNum(1,5));
    var t3Loc1Op1Theme = getThemeName(moduleItem, randomNum(2,4));
    var t3Loc1Op2Biome = getBiomeName(moduleItem, randomNum(1,5));
    var t3Loc1Op2Theme = getThemeName(moduleItem, randomNum(2,4));

    var t3Loc2Op1Biome = getBiomeName(moduleItem, randomNum(1,5));
    var t3Loc2Op1Theme = getThemeName(moduleItem, randomNum(2,4));
    var t3Loc2Op2Biome = getBiomeName(moduleItem, randomNum(1,5));
    var t3Loc2Op2Theme = getThemeName(moduleItem, randomNum(2,4));

    var t3Loc3Op1Biome = "none";
    var t3Loc3Op1Theme = "none";
    var t3Loc3Op2Biome = "none";
    var t3Loc3Op2Theme = "none";

    var t3Loc4Op1Biome = "none";
    var t3Loc4Op1Theme = "none";
    var t3Loc4Op2Biome = "none";
    var t3Loc4Op2Theme = "none";

    var t3Loc5Op1Biome = "none";
    var t3Loc5Op1Theme = "none";
    var t3Loc5Op2Biome = "none";
    var t3Loc5Op2Theme = "none";

    if (numPlayers >= 3)
    {
      t3Loc3Op1Biome = getBiomeName(moduleItem, randomNum(1,5));
      t3Loc3Op1Theme = getThemeName(moduleItem, randomNum(2,4));
      t3Loc3Op2Biome = getBiomeName(moduleItem, randomNum(1,5));
      t3Loc3Op2Theme = getThemeName(moduleItem, randomNum(2,4));
    }
    if (numPlayers >= 4)
    {
      t3Loc4Op1Biome = getBiomeName(moduleItem, randomNum(1,5));
      t3Loc4Op1Theme = getThemeName(moduleItem, randomNum(2,4));
      t3Loc4Op2Biome = getBiomeName(moduleItem, randomNum(1,5));
      t3Loc4Op2Theme = getThemeName(moduleItem, randomNum(2,4));
    }
    if (numPlayers >= 5)
    {
      t3Loc5Op1Biome = getBiomeName(moduleItem, randomNum(1,5));
      t3Loc5Op1Theme = getThemeName(moduleItem, randomNum(2,4));
      t3Loc5Op2Biome = getBiomeName(moduleItem, randomNum(1,5));
      t3Loc5Op2Theme = getThemeName(moduleItem, randomNum(2,4));
    }

    var updates = {};
    updates["games/" + gameName + "/journeyMap/t1Loc1Choice"] = t1Loc1Choice;
    updates["games/" + gameName + "/journeyMap/t1Loc2Choice"] = t1Loc2Choice;
    updates["games/" + gameName + "/journeyMap/t1Loc3Choice"] = t1Loc3Choice;
    updates["games/" + gameName + "/journeyMap/t1Loc4Choice"] = t1Loc4Choice;
    updates["games/" + gameName + "/journeyMap/t1Loc5Choice"] = t1Loc5Choice;
    updates["games/" + gameName + "/journeyMap/t2Loc1Choice"] = t2Loc1Choice;
    updates["games/" + gameName + "/journeyMap/t2Loc2Choice"] = t2Loc2Choice;
    updates["games/" + gameName + "/journeyMap/t2Loc3Choice"] = t2Loc3Choice;
    updates["games/" + gameName + "/journeyMap/t2Loc4Choice"] = t2Loc4Choice;
    updates["games/" + gameName + "/journeyMap/t2Loc5Choice"] = t2Loc5Choice;
    updates["games/" + gameName + "/journeyMap/t3Loc1Choice"] = t3Loc1Choice;
    updates["games/" + gameName + "/journeyMap/t3Loc2Choice"] = t3Loc2Choice;
    updates["games/" + gameName + "/journeyMap/t3Loc3Choice"] = t3Loc3Choice;
    updates["games/" + gameName + "/journeyMap/t3Loc4Choice"] = t3Loc4Choice;
    updates["games/" + gameName + "/journeyMap/t3Loc5Choice"] = t3Loc5Choice;

    updates["games/" + gameName + "/journeyMap/t1Loc1Player"] = t1Loc1Player;
    updates["games/" + gameName + "/journeyMap/t1Loc2Player"] = t1Loc2Player;
    updates["games/" + gameName + "/journeyMap/t1Loc3Player"] = t1Loc3Player;
    updates["games/" + gameName + "/journeyMap/t1Loc4Player"] = t1Loc4Player;
    updates["games/" + gameName + "/journeyMap/t1Loc5Player"] = t1Loc5Player;
    updates["games/" + gameName + "/journeyMap/t2Loc1Player"] = t2Loc1Player;
    updates["games/" + gameName + "/journeyMap/t2Loc2Player"] = t2Loc2Player;
    updates["games/" + gameName + "/journeyMap/t2Loc3Player"] = t2Loc3Player;
    updates["games/" + gameName + "/journeyMap/t2Loc4Player"] = t2Loc4Player;
    updates["games/" + gameName + "/journeyMap/t2Loc5Player"] = t2Loc5Player;
    updates["games/" + gameName + "/journeyMap/t3Loc1Player"] = t3Loc1Player;
    updates["games/" + gameName + "/journeyMap/t3Loc2Player"] = t3Loc2Player;
    updates["games/" + gameName + "/journeyMap/t3Loc3Player"] = t3Loc3Player;
    updates["games/" + gameName + "/journeyMap/t3Loc4Player"] = t3Loc4Player;
    updates["games/" + gameName + "/journeyMap/t3Loc5Player"] = t3Loc5Player;

    updates["games/" + gameName + "/journeyMap/t1Loc1Choice"] = t1Loc1Player;
    updates["games/" + gameName + "/journeyMap/t1Loc2Choice"] = t1Loc2Player;
    updates["games/" + gameName + "/journeyMap/t1Loc3Choice"] = t1Loc3Player;
    updates["games/" + gameName + "/journeyMap/t1Loc4Choice"] = t1Loc4Player;
    updates["games/" + gameName + "/journeyMap/t1Loc5Choice"] = t1Loc5Player;
    updates["games/" + gameName + "/journeyMap/t2Loc1Choice"] = t2Loc1Player;
    updates["games/" + gameName + "/journeyMap/t2Loc2Choice"] = t2Loc2Player;
    updates["games/" + gameName + "/journeyMap/t2Loc3Choice"] = t2Loc3Player;
    updates["games/" + gameName + "/journeyMap/t2Loc4Choice"] = t2Loc4Player;
    updates["games/" + gameName + "/journeyMap/t2Loc5Choice"] = t2Loc5Player;
    updates["games/" + gameName + "/journeyMap/t3Loc1Choice"] = t3Loc1Player;
    updates["games/" + gameName + "/journeyMap/t3Loc2Choice"] = t3Loc2Player;
    updates["games/" + gameName + "/journeyMap/t3Loc3Choice"] = t3Loc3Player;
    updates["games/" + gameName + "/journeyMap/t3Loc4Choice"] = t3Loc4Player;
    updates["games/" + gameName + "/journeyMap/t3Loc5Choice"] = t3Loc5Player;

    updates["games/" + gameName + "/journeyMap/t1Loc1Op1/biome"] = t1Loc1Op1Biome;
    updates["games/" + gameName + "/journeyMap/t1Loc1Op2/biome"] = t1Loc1Op2Biome;
    updates["games/" + gameName + "/journeyMap/t1Loc1Op1/theme"] = t1Loc1Op1Theme;
    updates["games/" + gameName + "/journeyMap/t1Loc1Op2/theme"] = t1Loc1Op2Theme;

    updates["games/" + gameName + "/journeyMap/t1Loc2Op1/biome"] = t1Loc2Op1Biome;
    updates["games/" + gameName + "/journeyMap/t1Loc2Op2/biome"] = t1Loc2Op2Biome;
    updates["games/" + gameName + "/journeyMap/t1Loc2Op1/theme"] = t1Loc2Op1Theme;
    updates["games/" + gameName + "/journeyMap/t1Loc2Op2/theme"] = t1Loc2Op2Theme;

    updates["games/" + gameName + "/journeyMap/t1Loc3Op1/biome"] = t1Loc3Op1Biome;
    updates["games/" + gameName + "/journeyMap/t1Loc3Op2/biome"] = t1Loc3Op2Biome;
    updates["games/" + gameName + "/journeyMap/t1Loc3Op1/theme"] = t1Loc3Op1Theme;
    updates["games/" + gameName + "/journeyMap/t1Loc3Op2/theme"] = t1Loc3Op2Theme;

    updates["games/" + gameName + "/journeyMap/t1Loc4Op1/biome"] = t1Loc4Op1Biome;
    updates["games/" + gameName + "/journeyMap/t1Loc4Op2/biome"] = t1Loc4Op2Biome;
    updates["games/" + gameName + "/journeyMap/t1Loc4Op1/theme"] = t1Loc4Op1Theme;
    updates["games/" + gameName + "/journeyMap/t1Loc4Op2/theme"] = t1Loc4Op2Theme;

    updates["games/" + gameName + "/journeyMap/t1Loc5Op1/biome"] = t1Loc5Op1Biome;
    updates["games/" + gameName + "/journeyMap/t1Loc5Op2/biome"] = t1Loc5Op2Biome;
    updates["games/" + gameName + "/journeyMap/t1Loc5Op1/theme"] = t1Loc5Op1Theme;
    updates["games/" + gameName + "/journeyMap/t1Loc5Op2/theme"] = t1Loc5Op2Theme;

    updates["games/" + gameName + "/journeyMap/t2Loc1Op1/biome"] = t2Loc1Op1Biome;
    updates["games/" + gameName + "/journeyMap/t2Loc1Op2/biome"] = t2Loc1Op2Biome;
    updates["games/" + gameName + "/journeyMap/t2Loc1Op1/theme"] = t2Loc1Op1Theme;
    updates["games/" + gameName + "/journeyMap/t2Loc1Op2/theme"] = t2Loc1Op2Theme;

    updates["games/" + gameName + "/journeyMap/t2Loc2Op1/biome"] = t2Loc2Op1Biome;
    updates["games/" + gameName + "/journeyMap/t2Loc2Op2/biome"] = t2Loc2Op2Biome;
    updates["games/" + gameName + "/journeyMap/t2Loc2Op1/theme"] = t2Loc2Op1Theme;
    updates["games/" + gameName + "/journeyMap/t2Loc2Op2/theme"] = t2Loc2Op2Theme;

    updates["games/" + gameName + "/journeyMap/t2Loc3Op1/biome"] = t2Loc3Op1Biome;
    updates["games/" + gameName + "/journeyMap/t2Loc3Op2/biome"] = t2Loc3Op2Biome;
    updates["games/" + gameName + "/journeyMap/t2Loc3Op1/theme"] = t2Loc3Op1Theme;
    updates["games/" + gameName + "/journeyMap/t2Loc3Op2/theme"] = t2Loc3Op2Theme;

    updates["games/" + gameName + "/journeyMap/t2Loc4Op1/biome"] = t2Loc4Op1Biome;
    updates["games/" + gameName + "/journeyMap/t2Loc4Op2/biome"] = t2Loc4Op2Biome;
    updates["games/" + gameName + "/journeyMap/t2Loc4Op1/theme"] = t2Loc4Op1Theme;
    updates["games/" + gameName + "/journeyMap/t2Loc4Op2/theme"] = t2Loc4Op2Theme;

    updates["games/" + gameName + "/journeyMap/t2Loc5Op1/biome"] = t2Loc5Op1Biome;
    updates["games/" + gameName + "/journeyMap/t2Loc5Op2/biome"] = t2Loc5Op2Biome;
    updates["games/" + gameName + "/journeyMap/t2Loc5Op1/theme"] = t2Loc5Op1Theme;
    updates["games/" + gameName + "/journeyMap/t2Loc5Op2/theme"] = t2Loc5Op2Theme;

    updates["games/" + gameName + "/journeyMap/t3Loc1Op1/biome"] = t3Loc1Op1Biome;
    updates["games/" + gameName + "/journeyMap/t3Loc1Op2/biome"] = t3Loc1Op2Biome;
    updates["games/" + gameName + "/journeyMap/t3Loc1Op1/theme"] = t3Loc1Op1Theme;
    updates["games/" + gameName + "/journeyMap/t3Loc1Op2/theme"] = t3Loc1Op2Theme;

    updates["games/" + gameName + "/journeyMap/t3Loc2Op1/biome"] = t3Loc2Op1Biome;
    updates["games/" + gameName + "/journeyMap/t3Loc2Op2/biome"] = t3Loc2Op2Biome;
    updates["games/" + gameName + "/journeyMap/t3Loc2Op1/theme"] = t3Loc2Op1Theme;
    updates["games/" + gameName + "/journeyMap/t3Loc2Op2/theme"] = t3Loc2Op2Theme;

    updates["games/" + gameName + "/journeyMap/t3Loc3Op1/biome"] = t3Loc3Op1Biome;
    updates["games/" + gameName + "/journeyMap/t3Loc3Op2/biome"] = t3Loc3Op2Biome;
    updates["games/" + gameName + "/journeyMap/t3Loc3Op1/theme"] = t3Loc3Op1Theme;
    updates["games/" + gameName + "/journeyMap/t3Loc3Op2/theme"] = t3Loc3Op2Theme;

    updates["games/" + gameName + "/journeyMap/t3Loc4Op1/biome"] = t3Loc4Op1Biome;
    updates["games/" + gameName + "/journeyMap/t3Loc4Op2/biome"] = t3Loc4Op2Biome;
    updates["games/" + gameName + "/journeyMap/t3Loc4Op1/theme"] = t3Loc4Op1Theme;
    updates["games/" + gameName + "/journeyMap/t3Loc4Op2/theme"] = t3Loc4Op2Theme;

    updates["games/" + gameName + "/journeyMap/t3Loc5Op1/biome"] = t3Loc5Op1Biome;
    updates["games/" + gameName + "/journeyMap/t3Loc5Op2/biome"] = t3Loc5Op2Biome;
    updates["games/" + gameName + "/journeyMap/t3Loc5Op1/theme"] = t3Loc5Op1Theme;
    updates["games/" + gameName + "/journeyMap/t3Loc5Op2/theme"] = t3Loc5Op2Theme;

    updates["games/" + gameName + "/journeyMap/currentPlayer"] = "none";
    firebase.database().ref().update(updates);
  });
}

function btnGameMenuShowTier1_Click()
{
  document.getElementById("divGameMenuSelectTier").style = "display:none";
  document.getElementById("divGameMenuTier1").style = "";
  document.getElementById("btnGameMenuHideTier").style = "";
  if (
  (globalPlayingGameObject.journeyMap.t1Loc1Choice == "none") || 
  (globalPlayingGameObject.journeyMap.t1Loc2Choice == "none") || 
  (globalPlayingGameObject.numPlayers > 2 && globalPlayingGameObject.journeyMap.t1Loc3Choice == "none") || 
  (globalPlayingGameObject.numPlayers > 3 && globalPlayingGameObject.journeyMap.t1Loc4Choice == "none") || 
  (globalPlayingGameObject.numPlayers > 4 && globalPlayingGameObject.journeyMap.t1Loc5Choice == "none")
  )
  {
    document.getElementById("tblGameMenuChoosePlayer").style = "";
  }
}

function btnGameMenuShowTier2_Click()
{
  document.getElementById("divGameMenuSelectTier").style = "display:none";
  document.getElementById("divGameMenuTier2").style = "";
  document.getElementById("btnGameMenuHideTier").style = "";
  if (
  (globalPlayingGameObject.journeyMap.t2Loc1Choice == "none") || 
  (globalPlayingGameObject.journeyMap.t2Loc2Choice == "none") || 
  (globalPlayingGameObject.numPlayers > 2 && globalPlayingGameObject.journeyMap.t2Loc3Choice == "none") || 
  (globalPlayingGameObject.numPlayers > 3 && globalPlayingGameObject.journeyMap.t2Loc4Choice == "none") || 
  (globalPlayingGameObject.numPlayers > 4 && globalPlayingGameObject.journeyMap.t2Loc5Choice == "none")
  )
  {
    document.getElementById("tblGameMenuChoosePlayer").style = "";
  }
}

function btnGameMenuShowTier3_Click()
{
  document.getElementById("divGameMenuSelectTier").style = "display:none";
  document.getElementById("divGameMenuTier3").style = "";
  document.getElementById("btnGameMenuHideTier").style = "";
  if (
  (globalPlayingGameObject.journeyMap.t3Loc1Choice == "none") || 
  (globalPlayingGameObject.journeyMap.t3Loc2Choice == "none") || 
  (globalPlayingGameObject.numPlayers > 2 && globalPlayingGameObject.journeyMap.t3Loc3Choice == "none") || 
  (globalPlayingGameObject.numPlayers > 3 && globalPlayingGameObject.journeyMap.t3Loc4Choice == "none") || 
  (globalPlayingGameObject.numPlayers > 4 && globalPlayingGameObject.journeyMap.t3Loc5Choice == "none")
  )
  {
    document.getElementById("tblGameMenuChoosePlayer").style = "";
  }
}

function btnGameMenuHideTier_Click()
{
  document.getElementById("divGameMenuSelectTier").style = "";
  document.getElementById("divGameMenuTier1").style = "display:none";
  document.getElementById("tblGameMenuChoosePlayer").style = "display:none";
  document.getElementById("divGameMenuTier2").style = "display:none";
  document.getElementById("divGameMenuTier3").style = "display:none";
  document.getElementById("btnGameMenuHideTier").style = "display:none";
  document.getElementById("divGameMenuFinalConfrontation").style = "display:none";
}

function getThemeNum(themeName, moduleThemes)
{
  if (moduleThemes.theme1 == themeName)
  {
    return 1;
  }
  else if (moduleThemes.theme2 == themeName)
  {
    return 2;
  }
  else if (moduleThemes.theme3 == themeName)
  {
    return 3;
  }
  else if (moduleThemes.theme4 == themeName)
  {
    return 4;
  }
  else if (moduleThemes.theme5 == themeName)
  {
    return 5;
  }
  return 0;
}

function getBiomeNum(biomeName, moduleBiomes)
{
  if (moduleBiomes.biome1 == biomeName)
  {
    return 1;
  }
  else if (moduleBiomes.biome2 == biomeName)
  {
    return 2;
  }
  else if (moduleBiomes.biome3 == biomeName)
  {
    return 3;
  }
  else if (moduleBiomes.biome4 == biomeName)
  {
    return 4;
  }
  else if (moduleBiomes.biome5 == biomeName)
  {
    return 5;
  }
  return 0;
}

function loadNewEncounter(biome, theme)
{
  firebase.database().ref("modules/" + globalPlayingModule).once("value").then((snapshot) => {
      moduleObject = snapshot.val();
      var biomeNum = getBiomeNum(biome, moduleObject.biomes);
      var themeNum = getThemeNum(theme, moduleObject.themes);

      var randInt = randomNum(1,2);
      var randID = 0;
      console.log(randInt);
      if (randInt == 1)
      {
        themeNum = 0;
        randID = randomNum(1,4);
      }
      else
      {
        randID = randomNum(1,2);
      }

      try
      {
        firebase.database().ref("modules/" + globalPlayingModule + "/encounters/biome" + String(biomeNum) + "/theme" + String(themeNum) + "/id" + String(randID)).once("value").then((snapshot) => {
          try
          {
            console.log(snapshot.val().name);
            console.log("Biome " + String(biomeNum) + ", Theme " + String(themeNum) + ", ID " + String(randID) + " succeeded.");
            var enc = snapshot.val();
            var updates = {};
            updates["games/" + globalPlayingGame + "/activeEncounter/challengeLevelAC"] = enc.challengeLevelAC;
            updates["games/" + globalPlayingGame + "/activeEncounter/challengeLevelIA"] = enc.challengeLevelIA;
            updates["games/" + globalPlayingGame + "/activeEncounter/challengeLevelPD"] = enc.challengeLevelPD;
            updates["games/" + globalPlayingGame + "/activeEncounter/desc"] = enc.desc;
            updates["games/" + globalPlayingGame + "/activeEncounter/name"] = enc.name;
            updates["games/" + globalPlayingGame + "/activeEncounter/reward"] = enc.reward;
            updates["games/" + globalPlayingGame + "/activeEncounter/rewardAC"] = enc.rewardAC;
            updates["games/" + globalPlayingGame + "/activeEncounter/rewardIA"] = enc.rewardIA;
            updates["games/" + globalPlayingGame + "/activeEncounter/rewardPD"] = enc.rewardPD;
            updates["games/" + globalPlayingGame + "/activeEncounter/successCount"] = enc.successCount;
            updates["games/" + globalPlayingGame + "/activeEncounter/currentSuccess"] = 0;
            updates["games/" + globalPlayingGame + "/state"] = 1;
            firebase.database().ref().update(updates);
          }
          catch
          {
            console.log("Biome " + String(biomeNum) + ", Theme " + String(themeNum) + ", ID " + String(randID) + " failed.");
          }
          
        });
      }
      catch
      {
        console.log("Biome " + String(biomeNum) + ", Theme " + String(themeNum) + ", ID " + String(randID) + " failed.");
      }
      
  });
}

function lookUpUserCharacter(selectedUserName)
{
  if (globalPlayingGameObject.player1 == selectedUserName)
  {
    try
    {
      return globalPlayingGameObject.player1char.name;
    }
    catch
    {
      return "none";
    }
  }
  else if (globalPlayingGameObject.player2 == selectedUserName)
  {
    try
    {
      return globalPlayingGameObject.player2char.name;
    }
    catch
    {
      return "none";
    }
  }
  else if (globalPlayingGameObject.player3 == selectedUserName)
  {
    try
    {
      return globalPlayingGameObject.player3char.name;
    }
    catch
    {
      return "none";
    }
  }
  else if (globalPlayingGameObject.player4 == selectedUserName)
  {
    try
    {
      return globalPlayingGameObject.player4char.name;
    }
    catch
    {
      return "none";
    }
  }
  else if (globalPlayingGameObject.player5 == selectedUserName)
  {
    try
    {
      return globalPlayingGameObject.player5char.name;
    }
    catch
    {
      return "none";
    }
  }
}

function btnT1L1O1_Click()
{
  if (globalPlayerNum != 1) {return;}
  var updates = {};
  updates["games/" + globalPlayingGame + "/journeyMap/t1Loc1Choice"] = 1;
  loadT1L1(updates, 1);

}

function btnT1L1O2_Click()
{
  if (globalPlayerNum != 1) {return;}
  var updates = {};
  updates["games/" + globalPlayingGame + "/journeyMap/t1Loc1Choice"] = 2;
  loadT1L1(updates, 2);
}

function loadT1L1(updates, choice)
{
  updates["games/" + globalPlayingGame + "/journeyMap/t1Loc1Player"] = lookUpUserCharacter(document.getElementById("slGameMenuChoosePlayer").value);
  updates["games/" + globalPlayingGame + "/journeyMap/currentPlayer"] = document.getElementById("slGameMenuChoosePlayer").value;
  firebase.database().ref().update(updates).then((snapshot) => {
    if (choice == 1)
    {
      loadNewEncounter(globalPlayingGameObject.journeyMap.t1Loc1Op1.biome, globalPlayingGameObject.journeyMap.t1Loc1Op1.theme);
    }
    else
    {
      loadNewEncounter(globalPlayingGameObject.journeyMap.t1Loc1Op2.biome, globalPlayingGameObject.journeyMap.t1Loc1Op2.theme);
    }
  });
}


function btnT1L2O1_Click()
{
  if (globalPlayerNum != 1) {return;}
  var updates = {};
  updates["games/" + globalPlayingGame + "/journeyMap/t1Loc2Choice"] = 1;
  loadT1L2(updates, 1);

}

function btnT1L2O2_Click()
{
  if (globalPlayerNum != 1) {return;}
  var updates = {};
  updates["games/" + globalPlayingGame + "/journeyMap/t1Loc2Choice"] = 2;
  loadT1L2(updates, 2);
}

function loadT1L2(updates, choice)
{
  updates["games/" + globalPlayingGame + "/journeyMap/t1Loc2Player"] = lookUpUserCharacter(document.getElementById("slGameMenuChoosePlayer").value);
  updates["games/" + globalPlayingGame + "/journeyMap/currentPlayer"] = document.getElementById("slGameMenuChoosePlayer").value;
  firebase.database().ref().update(updates).then((snapshot) => {
    if (choice == 1)
    {
      loadNewEncounter(globalPlayingGameObject.journeyMap.t1Loc2Op1.biome, globalPlayingGameObject.journeyMap.t1Loc2Op1.theme);
    }
    else
    {
      loadNewEncounter(globalPlayingGameObject.journeyMap.t1Loc2Op2.biome, globalPlayingGameObject.journeyMap.t1Loc2Op2.theme);
    }
  });
}
function btnT1L3O1_Click()
{
  if (globalPlayerNum != 1) {return;}
  var updates = {};
  updates["games/" + globalPlayingGame + "/journeyMap/t1Loc3Choice"] = 1;
  loadT1L3(updates, 1);

}

function btnT1L3O2_Click()
{
  if (globalPlayerNum != 1) {return;}
  var updates = {};
  updates["games/" + globalPlayingGame + "/journeyMap/t1Loc3Choice"] = 2;
  loadT1L3(updates, 2);
}

function loadT1L3(updates, choice)
{
  updates["games/" + globalPlayingGame + "/journeyMap/t1Loc3Player"] = lookUpUserCharacter(document.getElementById("slGameMenuChoosePlayer").value);
  updates["games/" + globalPlayingGame + "/journeyMap/currentPlayer"] = document.getElementById("slGameMenuChoosePlayer").value;
  firebase.database().ref().update(updates).then((snapshot) => {
    if (choice == 1)
    {
      loadNewEncounter(globalPlayingGameObject.journeyMap.t1Loc3Op1.biome, globalPlayingGameObject.journeyMap.t1Loc3Op1.theme);
    }
    else
    {
      loadNewEncounter(globalPlayingGameObject.journeyMap.t1Loc3Op2.biome, globalPlayingGameObject.journeyMap.t1Loc3Op2.theme);
    }
  });
}

function btnT1L4O1_Click()
{
  if (globalPlayerNum != 1) {return;}
  var updates = {};
  updates["games/" + globalPlayingGame + "/journeyMap/t1Loc4Choice"] = 1;
  loadT1L4(updates, 1);

}

function btnT1L4O2_Click()
{
  if (globalPlayerNum != 1) {return;}
  var updates = {};
  updates["games/" + globalPlayingGame + "/journeyMap/t1Loc4Choice"] = 2;
  loadT1L4(updates, 2);
}

function loadT1L4(updates, choice)
{
  updates["games/" + globalPlayingGame + "/journeyMap/t1Loc4Player"] = lookUpUserCharacter(document.getElementById("slGameMenuChoosePlayer").value);
  updates["games/" + globalPlayingGame + "/journeyMap/currentPlayer"] = document.getElementById("slGameMenuChoosePlayer").value;
  firebase.database().ref().update(updates).then((snapshot) => {
    if (choice == 1)
    {
      loadNewEncounter(globalPlayingGameObject.journeyMap.t1Loc4Op1.biome, globalPlayingGameObject.journeyMap.t1Loc4Op1.theme);
    }
    else
    {
      loadNewEncounter(globalPlayingGameObject.journeyMap.t1Loc4Op2.biome, globalPlayingGameObject.journeyMap.t1Loc4Op2.theme);
    }
  });
}

function btnT1L5O1_Click()
{
  if (globalPlayerNum != 1) {return;}
  var updates = {};
  updates["games/" + globalPlayingGame + "/journeyMap/t1Loc5Choice"] = 1;
  loadT1L5(updates, 1);

}

function btnT1L5O2_Click()
{
  if (globalPlayerNum != 1) {return;}
  var updates = {};
  updates["games/" + globalPlayingGame + "/journeyMap/t1Loc5Choice"] = 2;
  loadT1L5(updates, 2);
}

function loadT1L5(updates, choice)
{
  updates["games/" + globalPlayingGame + "/journeyMap/t1Loc5Player"] = lookUpUserCharacter(document.getElementById("slGameMenuChoosePlayer").value);
  updates["games/" + globalPlayingGame + "/journeyMap/currentPlayer"] = document.getElementById("slGameMenuChoosePlayer").value;
  firebase.database().ref().update(updates).then((snapshot) => {
    if (choice == 1)
    {
      loadNewEncounter(globalPlayingGameObject.journeyMap.t1Loc5Op1.biome, globalPlayingGameObject.journeyMap.t1Loc5Op1.theme);
    }
    else
    {
      loadNewEncounter(globalPlayingGameObject.journeyMap.t1Loc5Op2.biome, globalPlayingGameObject.journeyMap.t1Loc5Op2.theme);
    }
  });
}



function btnT2L1O1_Click()
{
  if (globalPlayerNum != 1) {return;}
  var updates = {};
  updates["games/" + globalPlayingGame + "/journeyMap/t2Loc1Choice"] = 1;
  loadT2L1(updates, 1);

}

function btnT2L1O2_Click()
{
  if (globalPlayerNum != 1) {return;}
  var updates = {};
  updates["games/" + globalPlayingGame + "/journeyMap/t2Loc1Choice"] = 2;
  loadT2L1(updates, 2);
}

function loadT2L1(updates, choice)
{
  updates["games/" + globalPlayingGame + "/journeyMap/t2Loc1Player"] = lookUpUserCharacter(document.getElementById("slGameMenuChoosePlayer").value);
  updates["games/" + globalPlayingGame + "/journeyMap/currentPlayer"] = document.getElementById("slGameMenuChoosePlayer").value;
  firebase.database().ref().update(updates).then((snapshot) => {
    if (choice == 1)
    {
      loadNewEncounter(globalPlayingGameObject.journeyMap.t2Loc1Op1.biome, globalPlayingGameObject.journeyMap.t2Loc1Op1.theme);
    }
    else
    {
      loadNewEncounter(globalPlayingGameObject.journeyMap.t2Loc1Op2.biome, globalPlayingGameObject.journeyMap.t2Loc1Op2.theme);
    }
  });
}

function btnT2L2O1_Click()
{
  if (globalPlayerNum != 1) {return;}
  var updates = {};
  updates["games/" + globalPlayingGame + "/journeyMap/t2Loc2Choice"] = 1;
  loadT2L2(updates, 1);
}

function btnT2L2O2_Click()
{
  if (globalPlayerNum != 1) {return;}
  var updates = {};
  updates["games/" + globalPlayingGame + "/journeyMap/t2Loc2Choice"] = 2;
  loadT2L2(updates, 2);
}

function loadT2L2(updates, choice)
{
  updates["games/" + globalPlayingGame + "/journeyMap/t2Loc2Player"] = lookUpUserCharacter(document.getElementById("slGameMenuChoosePlayer").value);
  updates["games/" + globalPlayingGame + "/journeyMap/currentPlayer"] = document.getElementById("slGameMenuChoosePlayer").value;
  firebase.database().ref().update(updates).then((snapshot) => {
    if (choice == 1)
    {
      loadNewEncounter(globalPlayingGameObject.journeyMap.t2Loc2Op1.biome, globalPlayingGameObject.journeyMap.t2Loc2Op1.theme);
    }
    else
    {
      loadNewEncounter(globalPlayingGameObject.journeyMap.t2Loc2Op2.biome, globalPlayingGameObject.journeyMap.t2Loc2Op2.theme);
    }
  });
}

function btnT2L3O1_Click()
{
  if (globalPlayerNum != 1) {return;}
  var updates = {};
  updates["games/" + globalPlayingGame + "/journeyMap/t2Loc3Choice"] = 1;
  loadT2L3(updates, 1);
}

function btnT2L3O2_Click()
{
  if (globalPlayerNum != 1) {return;}
  var updates = {};
  updates["games/" + globalPlayingGame + "/journeyMap/t2Loc3Choice"] = 2;
  loadT2L3(updates, 2);
}

function loadT2L3(updates, choice)
{
  updates["games/" + globalPlayingGame + "/journeyMap/t2Loc3Player"] = lookUpUserCharacter(document.getElementById("slGameMenuChoosePlayer").value);
  updates["games/" + globalPlayingGame + "/journeyMap/currentPlayer"] = document.getElementById("slGameMenuChoosePlayer").value;
  firebase.database().ref().update(updates).then((snapshot) => {
    if (choice == 1)
    {
      loadNewEncounter(globalPlayingGameObject.journeyMap.t2Loc3Op1.biome, globalPlayingGameObject.journeyMap.t2Loc3Op1.theme);
    }
    else
    {
      loadNewEncounter(globalPlayingGameObject.journeyMap.t2Loc3Op2.biome, globalPlayingGameObject.journeyMap.t2Loc3Op2.theme);
    }
  });
}

function btnT2L4O1_Click()
{
  if (globalPlayerNum != 1) {return;}
  var updates = {};
  updates["games/" + globalPlayingGame + "/journeyMap/t2Loc4Choice"] = 1;
  loadT2L4(updates, 1);
}

function btnT2L4O2_Click()
{
  if (globalPlayerNum != 1) {return;}
  var updates = {};
  updates["games/" + globalPlayingGame + "/journeyMap/t2Loc4Choice"] = 2;
  loadT2L4(updates, 2);
}

function loadT2L4(updates, choice)
{
  updates["games/" + globalPlayingGame + "/journeyMap/t2Loc4Player"] = lookUpUserCharacter(document.getElementById("slGameMenuChoosePlayer").value);
  updates["games/" + globalPlayingGame + "/journeyMap/currentPlayer"] = document.getElementById("slGameMenuChoosePlayer").value;
  firebase.database().ref().update(updates).then((snapshot) => {
    if (choice == 1)
    {
      loadNewEncounter(globalPlayingGameObject.journeyMap.t2Loc4Op1.biome, globalPlayingGameObject.journeyMap.t2Loc4Op1.theme);
    }
    else
    {
      loadNewEncounter(globalPlayingGameObject.journeyMap.t2Loc4Op2.biome, globalPlayingGameObject.journeyMap.t2Loc4Op2.theme);
    }
  });
}

function btnT2L5O1_Click()
{
  if (globalPlayerNum != 1) {return;}
  var updates = {};
  updates["games/" + globalPlayingGame + "/journeyMap/t2Loc5Choice"] = 1;
  loadT2L5(updates, 1);
}

function btnT2L5O2_Click()
{
  if (globalPlayerNum != 1) {return;}
  var updates = {};
  updates["games/" + globalPlayingGame + "/journeyMap/t2Loc5Choice"] = 2;
  loadT2L5(updates, 2);
}

function loadT2L5(updates, choice)
{
  updates["games/" + globalPlayingGame + "/journeyMap/t2Loc5Player"] = lookUpUserCharacter(document.getElementById("slGameMenuChoosePlayer").value);
  updates["games/" + globalPlayingGame + "/journeyMap/currentPlayer"] = document.getElementById("slGameMenuChoosePlayer").value;
  firebase.database().ref().update(updates).then((snapshot) => {
    if (choice == 1)
    {
      loadNewEncounter(globalPlayingGameObject.journeyMap.t2Loc5Op1.biome, globalPlayingGameObject.journeyMap.t2Loc5Op1.theme);
    }
    else
    {
      loadNewEncounter(globalPlayingGameObject.journeyMap.t2Loc5Op2.biome, globalPlayingGameObject.journeyMap.t2Loc5Op2.theme);
    }
  });
}



function btnT3L1O1_Click()
{
  if (globalPlayerNum != 1) {return;}
  var updates = {};
  updates["games/" + globalPlayingGame + "/journeyMap/t3Loc1Choice"] = 1;
  loadT3L1(updates, 1);

}

function btnT3L1O2_Click()
{
  if (globalPlayerNum != 1) {return;}
  var updates = {};
  updates["games/" + globalPlayingGame + "/journeyMap/t3Loc1Choice"] = 2;
  loadT3L1(updates, 2);
}

function loadT3L1(updates, choice)
{
  updates["games/" + globalPlayingGame + "/journeyMap/t3Loc1Player"] = lookUpUserCharacter(document.getElementById("slGameMenuChoosePlayer").value);
  updates["games/" + globalPlayingGame + "/journeyMap/currentPlayer"] = document.getElementById("slGameMenuChoosePlayer").value;
  firebase.database().ref().update(updates).then((snapshot) => {
    if (choice == 1)
    {
      loadNewEncounter(globalPlayingGameObject.journeyMap.t3Loc1Op1.biome, globalPlayingGameObject.journeyMap.t3Loc1Op1.theme);
    }
    else
    {
      loadNewEncounter(globalPlayingGameObject.journeyMap.t3Loc1Op2.biome, globalPlayingGameObject.journeyMap.t3Loc1Op2.theme);
    }
  });
}

function btnT3L2O1_Click()
{
  if (globalPlayerNum != 1) {return;}
  var updates = {};
  updates["games/" + globalPlayingGame + "/journeyMap/t3Loc2Choice"] = 1;
  loadT3L2(updates, 1);

}

function btnT3L2O2_Click()
{
  if (globalPlayerNum != 1) {return;}
  var updates = {};
  updates["games/" + globalPlayingGame + "/journeyMap/t3Loc2Choice"] = 2;
  loadT3L2(updates, 2);
}

function loadT3L2(updates, choice)
{
  updates["games/" + globalPlayingGame + "/journeyMap/t3Loc2Player"] = lookUpUserCharacter(document.getElementById("slGameMenuChoosePlayer").value);
  updates["games/" + globalPlayingGame + "/journeyMap/currentPlayer"] = document.getElementById("slGameMenuChoosePlayer").value;
  firebase.database().ref().update(updates).then((snapshot) => {
    if (choice == 1)
    {
      loadNewEncounter(globalPlayingGameObject.journeyMap.t3Loc2Op1.biome, globalPlayingGameObject.journeyMap.t3Loc2Op1.theme);
    }
    else
    {
      loadNewEncounter(globalPlayingGameObject.journeyMap.t3Loc2Op2.biome, globalPlayingGameObject.journeyMap.t3Loc2Op2.theme);
    }
  });
}

function btnT3L3O1_Click()
{
  if (globalPlayerNum != 1) {return;}
  var updates = {};
  updates["games/" + globalPlayingGame + "/journeyMap/t3Loc3Choice"] = 1;
  loadT3L3(updates, 1);

}

function btnT3L3O2_Click()
{
  if (globalPlayerNum != 1) {return;}
  var updates = {};
  updates["games/" + globalPlayingGame + "/journeyMap/t3Loc3Choice"] = 2;
  loadT3L3(updates, 2);
}

function loadT3L3(updates, choice)
{
  updates["games/" + globalPlayingGame + "/journeyMap/t3Loc3Player"] = lookUpUserCharacter(document.getElementById("slGameMenuChoosePlayer").value);
  updates["games/" + globalPlayingGame + "/journeyMap/currentPlayer"] = document.getElementById("slGameMenuChoosePlayer").value;
  firebase.database().ref().update(updates).then((snapshot) => {
    if (choice == 1)
    {
      loadNewEncounter(globalPlayingGameObject.journeyMap.t3Loc3Op1.biome, globalPlayingGameObject.journeyMap.t3Loc3Op1.theme);
    }
    else
    {
      loadNewEncounter(globalPlayingGameObject.journeyMap.t3Loc3Op2.biome, globalPlayingGameObject.journeyMap.t3Loc3Op2.theme);
    }
  });
}

function btnT3L4O1_Click()
{
  if (globalPlayerNum != 1) {return;}
  var updates = {};
  updates["games/" + globalPlayingGame + "/journeyMap/t3Loc4Choice"] = 1;
  loadT3L4(updates, 1);

}

function btnT3L4O2_Click()
{
  if (globalPlayerNum != 1) {return;}
  var updates = {};
  updates["games/" + globalPlayingGame + "/journeyMap/t3Loc4Choice"] = 2;
  loadT3L4(updates, 2);
}

function loadT3L4(updates, choice)
{
  updates["games/" + globalPlayingGame + "/journeyMap/t3Loc4Player"] = lookUpUserCharacter(document.getElementById("slGameMenuChoosePlayer").value);
  updates["games/" + globalPlayingGame + "/journeyMap/currentPlayer"] = document.getElementById("slGameMenuChoosePlayer").value;
  firebase.database().ref().update(updates).then((snapshot) => {
    if (choice == 1)
    {
      loadNewEncounter(globalPlayingGameObject.journeyMap.t3Loc4Op1.biome, globalPlayingGameObject.journeyMap.t3Loc4Op1.theme);
    }
    else
    {
      loadNewEncounter(globalPlayingGameObject.journeyMap.t3Loc4Op2.biome, globalPlayingGameObject.journeyMap.t3Loc4Op2.theme);
    }
  });
}

function btnT3L5O1_Click()
{
  if (globalPlayerNum != 1) {return;}
  var updates = {};
  updates["games/" + globalPlayingGame + "/journeyMap/t3Loc5Choice"] = 1;
  loadT3L5(updates, 1);

}

function btnT3L5O2_Click()
{
  if (globalPlayerNum != 1) {return;}
  var updates = {};
  updates["games/" + globalPlayingGame + "/journeyMap/t3Loc5Choice"] = 2;
  loadT3L5(updates, 2);
}

function loadT3L5(updates, choice)
{
  updates["games/" + globalPlayingGame + "/journeyMap/t3Loc5Player"] = lookUpUserCharacter(document.getElementById("slGameMenuChoosePlayer").value);
  updates["games/" + globalPlayingGame + "/journeyMap/currentPlayer"] = document.getElementById("slGameMenuChoosePlayer").value;
  firebase.database().ref().update(updates).then((snapshot) => {
    if (choice == 1)
    {
      loadNewEncounter(globalPlayingGameObject.journeyMap.t3Loc5Op1.biome, globalPlayingGameObject.journeyMap.t3Loc5p1.theme);
    }
    else
    {
      loadNewEncounter(globalPlayingGameObject.journeyMap.t3Loc5Op2.biome, globalPlayingGameObject.journeyMap.t3Loc5Op2.theme);
    }
  });
}

function btnGameMenuShowFinalConfrontation_Click()
{
  document.getElementById("divGameMenuSelectTier").style = "display:none";
  document.getElementById("divGameMenuFinalConfrontation").style = "";
  document.getElementById("btnGameMenuHideTier").style = "";

}

function btnGameMenuNemesisHealthDec_Click()
{
  if (globalPlayerNum != 1 || globalPlayingGameObject.nemesisHealth <= 0)
  {
    return;
  }

  var updates = {};
  updates["games/" + globalPlayingGame + "/nemesisHealth"] = globalPlayingGameObject.nemesisHealth - 1;
  firebase.database().ref().update(updates);
}

function btnGameMenuNemesisHealthInc_Click()
{
  if (globalPlayerNum != 1 || globalPlayingGameObject.nemesisHealth >= 1000)
  {
    return;
  }

  var updates = {};
  updates["games/" + globalPlayingGame + "/nemesisHealth"] = globalPlayingGameObject.nemesisHealth + 1;
  firebase.database().ref().update(updates);
}

function btnGameMenuEncounterSheetIncSuccess_Click()
{
  console.log("Fdadsa");
  try
  {
    var updates = {};
    updates["games/" + globalPlayingGame + "/activeEncounter/currentSuccess"] = globalPlayingGameObject.activeEncounter.currentSuccess + 1;
    firebase.database().ref().update(updates);
  }
  catch
  {

  }
  
}

function btnGameMenuEncounterSheetDecSuccess_Click()
{
  try
  {
    var updates = {};
    updates["games/" + globalPlayingGame + "/activeEncounter/currentSuccess"] = globalPlayingGameObject.activeEncounter.currentSuccess - 1;
    firebase.database().ref().update(updates);
  }
  catch
  {

  }
}

function btnGameMenuEncounterSheetSuccess_Click()
{
  var updates = {};
  updates["games/" + globalPlayingGame + "/state"] = 2;
  updates["games/" + globalPlayingGame + "/activeEncounter"] = null;
  
  //var slPlayer = document.getElementById("slGameMenuEncounterSheetPlayers");
  var player = globalPlayingGameObject.journeyMap.currentPlayer;

  if (player == globalPlayingGameObject.player1)
  {
    updates["games/" + globalPlayingGame + "/player1char/exhausted"] = true;
    var thing = "5";
    
    updates["games/" + globalPlayingGame + "/player1char/experience"] = Number(globalPlayingGameObject.player1char.experience) + 6;
  } 
  else if (player == globalPlayingGameObject.player2)
  {
    updates["games/" + globalPlayingGame + "/player2char/exhausted"] = true;
    updates["games/" + globalPlayingGame + "/player2char/experience"] = Number(globalPlayingGameObject.player2char.experience) + 6;
  }
  else if (player == globalPlayingGameObject.player3)
  {
    updates["games/" + globalPlayingGame + "/player3char/exhausted"] = true;
    updates["games/" + globalPlayingGame + "/player3char/experience"] = Number(globalPlayingGameObject.player3char.experience) + 6;
  }
  else if (player == globalPlayingGameObject.player4)
  {
    updates["games/" + globalPlayingGame + "/player4char/exhausted"] = true;
    updates["games/" + globalPlayingGame + "/player4char/experience"] = Number(globalPlayingGameObject.player4char.experience) + 6;
  }
  else if (player == globalPlayingGameObject.player5)
  {
    updates["games/" + globalPlayingGame + "/player5char/exhausted"] = true;
    updates["games/" + globalPlayingGame + "/player5char/experience"] = Number(globalPlayingGameObject.player5char.experience) + 6;
  }
  firebase.database().ref().update(updates);
}

function btnGameMenuEncounterSheetFailure_Click()
{
  var updates = {};
  updates["games/" + globalPlayingGame + "/mistakePoints"] = Number(globalPlayingGameObject.mistakePoints) + 1;
  updates["games/" + globalPlayingGame + "/state"] = 2;
  updates["games/" + globalPlayingGame + "/activeEncounter"] = null;
  
  //var slPlayer = document.getElementById("slGameMenuEncounterSheetPlayers");
  var player = globalPlayingGameObject.journeyMap.currentPlayer;

  if (player == globalPlayingGameObject.player1)
  {
    updates["games/" + globalPlayingGame + "/player1char/exhausted"] = true;
    updates["games/" + globalPlayingGame + "/player1char/experience"] = Number(globalPlayingGameObject.player1char.experience) + 6;
  } 
  else if (player == globalPlayingGameObject.player2)
  {
    updates["games/" + globalPlayingGame + "/player2char/exhausted"] = true;
    updates["games/" + globalPlayingGame + "/player2char/experience"] = Number(globalPlayingGameObject.player2char.experience) + 6;
  }
  else if (player == globalPlayingGameObject.player3)
  {
    updates["games/" + globalPlayingGame + "/player3char/exhausted"] = true;
    updates["games/" + globalPlayingGame + "/player3char/experience"] = Number(globalPlayingGameObject.player3char.experience) + 6;
  }
  else if (player == globalPlayingGameObject.player4)
  {
    updates["games/" + globalPlayingGame + "/player4char/exhausted"] = true;
    updates["games/" + globalPlayingGame + "/player4char/experience"] = Number(globalPlayingGameObject.player4char.experience) + 6;
  }
  else if (player == globalPlayingGameObject.player5)
  {
    updates["games/" + globalPlayingGame + "/player5char/exhausted"] = true;
    updates["games/" + globalPlayingGame + "/player5char/experience"] = Number(globalPlayingGameObject.player5char.experience) + 6;
  }
  firebase.database().ref().update(updates);
}

function btnGameMenuScenePageContinue_Click()
{
  if (globalPlayerNum != 1)
  {
    return;
  }

  var updates = {};
  var newMistakeCount = 0;
  try
  {
    var player1ExpCount = 0;
    var p1PDWound1 = Number(globalPlayingGameObject.player1char.woundPD1); if (p1PDWound1 >= 4) {newMistakeCount += 1; p1PDWound1 = 0; updates["games/" + globalPlayingGame + "/player1char/woundPD1"] = 0; player1ExpCount += 4;}
    var p1PDWound2 = Number(globalPlayingGameObject.player1char.woundPD2); if (p1PDWound2 >= 4) {newMistakeCount += 1; p1PDWound2 = 0; updates["games/" + globalPlayingGame + "/player1char/woundPD2"] = 0; player1ExpCount += 4;}
    var p1PDWound3 = Number(globalPlayingGameObject.player1char.woundPD3); if (p1PDWound3 >= 4) {newMistakeCount += 1; p1PDWound3 = 0; updates["games/" + globalPlayingGame + "/player1char/woundPD3"] = 0; player1ExpCount += 4;}

    var p1ACWound1 = Number(globalPlayingGameObject.player1char.woundAC1); if (p1ACWound1 >= 4) {newMistakeCount += 1; p1ACWound1 = 0; updates["games/" + globalPlayingGame + "/player1char/woundAC1"] = 0; player1ExpCount += 4;}
    var p1ACWound2 = Number(globalPlayingGameObject.player1char.woundAC2); if (p1ACWound2 >= 4) {newMistakeCount += 1; p1ACWound2 = 0; updates["games/" + globalPlayingGame + "/player1char/woundAC2"] = 0; player1ExpCount += 4;}
    var p1ACWound3 = Number(globalPlayingGameObject.player1char.woundAC3); if (p1ACWound3 >= 4) {newMistakeCount += 1; p1ACWound3 = 0; updates["games/" + globalPlayingGame + "/player1char/woundAC3"] = 0; player1ExpCount += 4;}

    var p1IAWound1 = Number(globalPlayingGameObject.player1char.woundIA1); if (p1IAWound1 >= 4) {newMistakeCount += 1; p1IAWound1 = 0; updates["games/" + globalPlayingGame + "/player1char/woundIA1"] = 0; player1ExpCount += 4;}
    var p1IAWound2 = Number(globalPlayingGameObject.player1char.woundIA2); if (p1IAWound2 >= 4) {newMistakeCount += 1; p1IAWound2 = 0; updates["games/" + globalPlayingGame + "/player1char/woundIA2"] = 0; player1ExpCount += 4;}
    var p1IAWound3 = Number(globalPlayingGameObject.player1char.woundIA3); if (p1IAWound3 >= 4) {newMistakeCount += 1; p1IAWound3 = 0; updates["games/" + globalPlayingGame + "/player1char/woundIA3"] = 0; player1ExpCount += 4;}

    if (player1ExpCount > 0) {updates["games/" + globalPlayingGame + "/player1char/experience"] = Number(globalPlayingGameObject.player1char.experience) + player1ExpCount;}

    if (p1PDWound1 > 0) {updates["games/" + globalPlayingGame + "/player1char/woundPD1"] = p1PDWound1+1;}
    if (p1PDWound2 > 0) {updates["games/" + globalPlayingGame + "/player1char/woundPD2"] = p1PDWound2+1;}
    if (p1PDWound3 > 0) {updates["games/" + globalPlayingGame + "/player1char/woundPD3"] = p1PDWound3+1;}

    if (p1ACWound1 > 0) {updates["games/" + globalPlayingGame + "/player1char/woundAC1"] = p1ACWound1+1;}
    if (p1ACWound2 > 0) {updates["games/" + globalPlayingGame + "/player1char/woundAC2"] = p1ACWound2+1;}
    if (p1ACWound3 > 0) {updates["games/" + globalPlayingGame + "/player1char/woundAC3"] = p1ACWound3+1;}

    if (p1IAWound1 > 0) {updates["games/" + globalPlayingGame + "/player1char/woundIA1"] = p1IAWound1+1;}
    if (p1IAWound2 > 0) {updates["games/" + globalPlayingGame + "/player1char/woundIA2"] = p1IAWound2+1;}
    if (p1IAWound3 > 0) {updates["games/" + globalPlayingGame + "/player1char/woundIA3"] = p1IAWound3+1;}
  }
  catch{}

  try
  {
    var player2ExpCount = 0;
    var p2PDWound1 = Number(globalPlayingGameObject.player2char.woundPD1); if (p2PDWound1 >= 4) {newMistakeCount += 1; p2PDWound1 = 0; updates["games/" + globalPlayingGame + "/player2char/woundPD1"] = 0; player2ExpCount += 4;}
    var p2PDWound2 = Number(globalPlayingGameObject.player2char.woundPD2); if (p2PDWound2 >= 4) {newMistakeCount += 1; p2PDWound2 = 0; updates["games/" + globalPlayingGame + "/player2char/woundPD2"] = 0; player2ExpCount += 4;}
    var p2PDWound3 = Number(globalPlayingGameObject.player2char.woundPD3); if (p2PDWound3 >= 4) {newMistakeCount += 1; p2PDWound3 = 0; updates["games/" + globalPlayingGame + "/player2char/woundPD3"] = 0; player2ExpCount += 4;}

    var p2ACWound1 = Number(globalPlayingGameObject.player2char.woundAC1); if (p2ACWound1 >= 4) {newMistakeCount += 1; p2ACWound1 = 0; updates["games/" + globalPlayingGame + "/player2char/woundAC1"] = 0; player2ExpCount += 4;}
    var p2ACWound2 = Number(globalPlayingGameObject.player2char.woundAC2); if (p2ACWound2 >= 4) {newMistakeCount += 1; p2ACWound2 = 0; updates["games/" + globalPlayingGame + "/player2char/woundAC2"] = 0; player2ExpCount += 4;}
    var p2ACWound3 = Number(globalPlayingGameObject.player2char.woundAC3); if (p2ACWound3 >= 4) {newMistakeCount += 1; p2ACWound3 = 0; updates["games/" + globalPlayingGame + "/player2char/woundAC3"] = 0; player2ExpCount += 4;}

    var p2IAWound1 = Number(globalPlayingGameObject.player2char.woundIA1); if (p2IAWound1 >= 4) {newMistakeCount += 1; p2IAWound1 = 0; updates["games/" + globalPlayingGame + "/player2char/woundIA1"] = 0; player2ExpCount += 4;}
    var p2IAWound2 = Number(globalPlayingGameObject.player2char.woundIA2); if (p2IAWound2 >= 4) {newMistakeCount += 1; p2IAWound2 = 0; updates["games/" + globalPlayingGame + "/player2char/woundIA2"] = 0; player2ExpCount += 4;}
    var p2IAWound3 = Number(globalPlayingGameObject.player2char.woundIA3); if (p2IAWound3 >= 4) {newMistakeCount += 1; p2IAWound3 = 0; updates["games/" + globalPlayingGame + "/player2char/woundIA3"] = 0; player2ExpCount += 4;}

    if (player2ExpCount > 0) {updates["games/" + globalPlayingGame + "/player2char/experience"] = Number(globalPlayingGameObject.player2char.experience) + player2ExpCount;}

    if (p2PDWound1 > 0) {updates["games/" + globalPlayingGame + "/player2char/woundPD1"] = p2PDWound1+1;}
    if (p2PDWound2 > 0) {updates["games/" + globalPlayingGame + "/player2char/woundPD2"] = p2PDWound2+1;}
    if (p2PDWound3 > 0) {updates["games/" + globalPlayingGame + "/player2char/woundPD3"] = p2PDWound3+1;}

    if (p2ACWound1 > 0) {updates["games/" + globalPlayingGame + "/player2char/woundAC1"] = p2ACWound1+1;}
    if (p2ACWound2 > 0) {updates["games/" + globalPlayingGame + "/player2char/woundAC2"] = p2ACWound2+1;}
    if (p2ACWound3 > 0) {updates["games/" + globalPlayingGame + "/player2char/woundAC3"] = p2ACWound3+1;}

    if (p2IAWound1 > 0) {updates["games/" + globalPlayingGame + "/player2char/woundIA1"] = p2IAWound1+1;}
    if (p2IAWound2 > 0) {updates["games/" + globalPlayingGame + "/player2char/woundIA2"] = p2IAWound2+1;}
    if (p2IAWound3 > 0) {updates["games/" + globalPlayingGame + "/player2char/woundIA3"] = p2IAWound3+1;}
  }
  catch{}

  try
  {
    var player3ExpCount = 0;
    var p3PDWound1 = Number(globalPlayingGameObject.player3char.woundPD1); if (p3PDWound1 >= 4) {newMistakeCount += 1; p3PDWound1 = 0; updates["games/" + globalPlayingGame + "/player3char/woundPD1"] = 0; player3ExpCount += 4;}
    var p3PDWound2 = Number(globalPlayingGameObject.player3char.woundPD2); if (p3PDWound2 >= 4) {newMistakeCount += 1; p3PDWound2 = 0; updates["games/" + globalPlayingGame + "/player3char/woundPD2"] = 0; player3ExpCount += 4;}
    var p3PDWound3 = Number(globalPlayingGameObject.player3char.woundPD3); if (p3PDWound3 >= 4) {newMistakeCount += 1; p3PDWound3 = 0; updates["games/" + globalPlayingGame + "/player3char/woundPD3"] = 0; player3ExpCount += 4;}

    var p3ACWound1 = Number(globalPlayingGameObject.player3char.woundAC1); if (p3ACWound1 >= 4) {newMistakeCount += 1; p3ACWound1 = 0; updates["games/" + globalPlayingGame + "/player3char/woundAC1"] = 0; player3ExpCount += 4;}
    var p3ACWound2 = Number(globalPlayingGameObject.player3char.woundAC2); if (p3ACWound2 >= 4) {newMistakeCount += 1; p3ACWound2 = 0; updates["games/" + globalPlayingGame + "/player3char/woundAC2"] = 0; player3ExpCount += 4;}
    var p3ACWound3 = Number(globalPlayingGameObject.player3char.woundAC3); if (p3ACWound3 >= 4) {newMistakeCount += 1; p3ACWound3 = 0; updates["games/" + globalPlayingGame + "/player3char/woundAC3"] = 0; player3ExpCount += 4;}

    var p3IAWound1 = Number(globalPlayingGameObject.player3char.woundIA1); if (p3IAWound1 >= 4) {newMistakeCount += 1; p3IAWound1 = 0; updates["games/" + globalPlayingGame + "/player3char/woundIA1"] = 0; player3ExpCount += 4;}
    var p3IAWound2 = Number(globalPlayingGameObject.player3char.woundIA2); if (p3IAWound2 >= 4) {newMistakeCount += 1; p3IAWound2 = 0; updates["games/" + globalPlayingGame + "/player3char/woundIA2"] = 0; player3ExpCount += 4;}
    var p3IAWound3 = Number(globalPlayingGameObject.player3char.woundIA3); if (p3IAWound3 >= 4) {newMistakeCount += 1; p3IAWound3 = 0; updates["games/" + globalPlayingGame + "/player3char/woundIA3"] = 0; player3ExpCount += 4;}

    if (player3ExpCount > 0) {updates["games/" + globalPlayingGame + "/player3char/experience"] = Number(globalPlayingGameObject.player3char.experience) + player3ExpCount;}

    if (p3PDWound1 > 0) {updates["games/" + globalPlayingGame + "/player3char/woundPD1"] = p3PDWound1+1;}
    if (p3PDWound2 > 0) {updates["games/" + globalPlayingGame + "/player3char/woundPD2"] = p3PDWound2+1;}
    if (p3PDWound3 > 0) {updates["games/" + globalPlayingGame + "/player3char/woundPD3"] = p3PDWound3+1;}

    if (p3ACWound1 > 0) {updates["games/" + globalPlayingGame + "/player3char/woundAC1"] = p3ACWound1+1;}
    if (p3ACWound2 > 0) {updates["games/" + globalPlayingGame + "/player3char/woundAC2"] = p3ACWound2+1;}
    if (p3ACWound3 > 0) {updates["games/" + globalPlayingGame + "/player3char/woundAC3"] = p3ACWound3+1;}

    if (p3IAWound1 > 0) {updates["games/" + globalPlayingGame + "/player3char/woundIA1"] = p3IAWound1+1;}
    if (p3IAWound2 > 0) {updates["games/" + globalPlayingGame + "/player3char/woundIA2"] = p3IAWound2+1;}
    if (p3IAWound3 > 0) {updates["games/" + globalPlayingGame + "/player3char/woundIA3"] = p3IAWound3+1;}
  }
  catch{}

  try
  {
    var player4ExpCount = 0;
    var p4PDWound1 = Number(globalPlayingGameObject.player4char.woundPD1); if (p4PDWound1 >= 4) {newMistakeCount += 1; p4PDWound1 = 0; updates["games/" + globalPlayingGame + "/player4char/woundPD1"] = 0; player4ExpCount += 4;}
    var p4PDWound2 = Number(globalPlayingGameObject.player4char.woundPD2); if (p4PDWound2 >= 4) {newMistakeCount += 1; p4PDWound2 = 0; updates["games/" + globalPlayingGame + "/player4char/woundPD2"] = 0; player4ExpCount += 4;}
    var p4PDWound3 = Number(globalPlayingGameObject.player4char.woundPD3); if (p4PDWound3 >= 4) {newMistakeCount += 1; p4PDWound3 = 0; updates["games/" + globalPlayingGame + "/player4char/woundPD3"] = 0; player4ExpCount += 4;}

    var p4ACWound1 = Number(globalPlayingGameObject.player4char.woundAC1); if (p4ACWound1 >= 4) {newMistakeCount += 1; p4ACWound1 = 0; updates["games/" + globalPlayingGame + "/player4char/woundAC1"] = 0; player4ExpCount += 4;}
    var p4ACWound2 = Number(globalPlayingGameObject.player4char.woundAC2); if (p4ACWound2 >= 4) {newMistakeCount += 1; p4ACWound2 = 0; updates["games/" + globalPlayingGame + "/player4char/woundAC2"] = 0; player4ExpCount += 4;}
    var p4ACWound3 = Number(globalPlayingGameObject.player4char.woundAC3); if (p4ACWound3 >= 4) {newMistakeCount += 1; p4ACWound3 = 0; updates["games/" + globalPlayingGame + "/player4char/woundAC3"] = 0; player4ExpCount += 4;}

    var p4IAWound1 = Number(globalPlayingGameObject.player4char.woundIA1); if (p4IAWound1 >= 4) {newMistakeCount += 1; p4IAWound1 = 0; updates["games/" + globalPlayingGame + "/player4char/woundIA1"] = 0; player4ExpCount += 4;}
    var p4IAWound2 = Number(globalPlayingGameObject.player4char.woundIA2); if (p4IAWound2 >= 4) {newMistakeCount += 1; p4IAWound2 = 0; updates["games/" + globalPlayingGame + "/player4char/woundIA2"] = 0; player4ExpCount += 4;}
    var p4IAWound3 = Number(globalPlayingGameObject.player4char.woundIA3); if (p4IAWound3 >= 4) {newMistakeCount += 1; p4IAWound3 = 0; updates["games/" + globalPlayingGame + "/player4char/woundIA3"] = 0; player4ExpCount += 4;}

    if (player4ExpCount > 0) {updates["games/" + globalPlayingGame + "/player4char/experience"] = Number(globalPlayingGameObject.player4char.experience) + player4ExpCount;}

    if (p4PDWound1 > 0) {updates["games/" + globalPlayingGame + "/player4char/woundPD1"] = p4PDWound1+1;}
    if (p4PDWound2 > 0) {updates["games/" + globalPlayingGame + "/player4char/woundPD2"] = p4PDWound2+1;}
    if (p4PDWound3 > 0) {updates["games/" + globalPlayingGame + "/player4char/woundPD3"] = p4PDWound3+1;}

    if (p4ACWound1 > 0) {updates["games/" + globalPlayingGame + "/player4char/woundAC1"] = p4ACWound1+1;}
    if (p4ACWound2 > 0) {updates["games/" + globalPlayingGame + "/player4char/woundAC2"] = p4ACWound2+1;}
    if (p4ACWound3 > 0) {updates["games/" + globalPlayingGame + "/player4char/woundAC3"] = p4ACWound3+1;}

    if (p4IAWound1 > 0) {updates["games/" + globalPlayingGame + "/player4char/woundIA1"] = p4IAWound1+1;}
    if (p4IAWound2 > 0) {updates["games/" + globalPlayingGame + "/player4char/woundIA2"] = p4IAWound2+1;}
    if (p4IAWound3 > 0) {updates["games/" + globalPlayingGame + "/player4char/woundIA3"] = p4IAWound3+1;}
  }
  catch{}

  try
  {
    var player5ExpCount = 0;
    var p5PDWound1 = Number(globalPlayingGameObject.player5char.woundPD1); if (p5PDWound1 >= 4) {newMistakeCount += 1; p5PDWound1 = 0; updates["games/" + globalPlayingGame + "/player5char/woundPD1"] = 0; player5ExpCount += 4;}
    var p5PDWound2 = Number(globalPlayingGameObject.player5char.woundPD2); if (p5PDWound2 >= 4) {newMistakeCount += 1; p5PDWound2 = 0; updates["games/" + globalPlayingGame + "/player5char/woundPD2"] = 0; player5ExpCount += 4;}
    var p5PDWound3 = Number(globalPlayingGameObject.player5char.woundPD3); if (p5PDWound3 >= 4) {newMistakeCount += 1; p5PDWound3 = 0; updates["games/" + globalPlayingGame + "/player5char/woundPD3"] = 0; player5ExpCount += 4;}

    var p5ACWound1 = Number(globalPlayingGameObject.player5char.woundAC1); if (p5ACWound1 >= 4) {newMistakeCount += 1; p5ACWound1 = 0; updates["games/" + globalPlayingGame + "/player5char/woundAC1"] = 0; player5ExpCount += 4;}
    var p5ACWound2 = Number(globalPlayingGameObject.player5char.woundAC2); if (p5ACWound2 >= 4) {newMistakeCount += 1; p5ACWound2 = 0; updates["games/" + globalPlayingGame + "/player5char/woundAC2"] = 0; player5ExpCount += 4;}
    var p5ACWound3 = Number(globalPlayingGameObject.player5char.woundAC3); if (p5ACWound3 >= 4) {newMistakeCount += 1; p5ACWound3 = 0; updates["games/" + globalPlayingGame + "/player5char/woundAC3"] = 0; player5ExpCount += 4;}

    var p5IAWound1 = Number(globalPlayingGameObject.player5char.woundIA1); if (p5IAWound1 >= 4) {newMistakeCount += 1; p5IAWound1 = 0; updates["games/" + globalPlayingGame + "/player5char/woundIA1"] = 0; player5ExpCount += 4;}
    var p5IAWound2 = Number(globalPlayingGameObject.player5char.woundIA2); if (p5IAWound2 >= 4) {newMistakeCount += 1; p5IAWound2 = 0; updates["games/" + globalPlayingGame + "/player5char/woundIA2"] = 0; player5ExpCount += 4;}
    var p5IAWound3 = Number(globalPlayingGameObject.player5char.woundIA3); if (p5IAWound3 >= 4) {newMistakeCount += 1; p5IAWound3 = 0; updates["games/" + globalPlayingGame + "/player5char/woundIA3"] = 0; player5ExpCount += 4;}

    if (player5ExpCount > 0) {updates["games/" + globalPlayingGame + "/player5char/experience"] = Number(globalPlayingGameObject.player5char.experience) + player5ExpCount;}

    if (p5PDWound1 > 0) {updates["games/" + globalPlayingGame + "/player5char/woundPD1"] = p5PDWound1+1;}
    if (p5PDWound2 > 0) {updates["games/" + globalPlayingGame + "/player5char/woundPD2"] = p5PDWound2+1;}
    if (p5PDWound3 > 0) {updates["games/" + globalPlayingGame + "/player5char/woundPD3"] = p5PDWound3+1;}

    if (p5ACWound1 > 0) {updates["games/" + globalPlayingGame + "/player5char/woundAC1"] = p5ACWound1+1;}
    if (p5ACWound2 > 0) {updates["games/" + globalPlayingGame + "/player5char/woundAC2"] = p5ACWound2+1;}
    if (p5ACWound3 > 0) {updates["games/" + globalPlayingGame + "/player5char/woundAC3"] = p5ACWound3+1;}

    if (p5IAWound1 > 0) {updates["games/" + globalPlayingGame + "/player5char/woundIA1"] = p5IAWound1+1;}
    if (p5IAWound2 > 0) {updates["games/" + globalPlayingGame + "/player5char/woundIA2"] = p5IAWound2+1;}
    if (p5IAWound3 > 0) {updates["games/" + globalPlayingGame + "/player5char/woundIA3"] = p5IAWound3+1;}
  }
  catch{}

  if (newMistakeCount > 0) {updates["games/" + globalPlayingGame + "/mistakePoints"] = globalPlayingGameObject.mistakePoints + newMistakeCount;}

  updates["games/" + globalPlayingGame + "/state"] = 0;
  firebase.database().ref().update(updates);
}

function btnGameMenuStatusIncMistakes_Click()
{
  if (globalPlayerNum != 1)
  {
    return;
  }
  var updates = {};
  updates["games/" + globalPlayingGame + "/mistakePoints"] = Number(globalPlayingGameObject.mistakePoints) + 1;

  firebase.database().ref().update(updates);
}

function btnGameMenuStatusDecMistakes_Click()
{
  if (globalPlayerNum != 1)
  {
    return;
  }
  var updates = {};
  updates["games/" + globalPlayingGame + "/mistakePoints"] = Number(globalPlayingGameObject.mistakePoints) - 1;

  firebase.database().ref().update(updates);
}

function btnMainMenuRulebook_Click()
{
  window.location.href = "https://we-journeyed-together.web.app/rules.html";
}