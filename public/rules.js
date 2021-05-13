// Citation https://support.google.com/youtube/answer/171780?hl=en

var tempButton = document.getElementById("btnMainMenuSection1");
tempButton.onclick = btnMainMenuSection1_Click;
tempButton = document.getElementById("btnMainMenuSection2");
tempButton.onclick = btnMainMenuSection2_Click;
tempButton = document.getElementById("btnMainMenuSection31");
tempButton.onclick = btnMainMenuSection31_Click;
tempButton = document.getElementById("btnMainMenuSection32");
tempButton.onclick = btnMainMenuSection32_Click;
tempButton = document.getElementById("btnMainMenuSection33");
tempButton.onclick = btnMainMenuSection33_Click;
tempButton = document.getElementById("btnMainMenuSection34");
tempButton.onclick = btnMainMenuSection34_Click;
tempButton = document.getElementById("btnMainMenuSection35");
tempButton.onclick = btnMainMenuSection35_Click;

tempButton = document.getElementById("btnReturn");
tempButton.onclick = btnReturn_Click;

function btnMainMenuSection1_Click()
{
  document.getElementById("divMainMenu").style = "display:none";
  document.getElementById("divSection1").style = "";
  document.getElementById("divButtonReturn").style = "";
}

function btnMainMenuSection2_Click()
{
  document.getElementById("divMainMenu").style = "display:none";
  document.getElementById("divSection2").style = "";
  document.getElementById("divButtonReturn").style = "";
}

function btnMainMenuSection31_Click()
{
  document.getElementById("divMainMenu").style = "display:none";
  document.getElementById("divSection31").style = "";
  document.getElementById("divButtonReturn").style = "";
}

function btnMainMenuSection32_Click()
{
  document.getElementById("divMainMenu").style = "display:none";
  document.getElementById("divSection32").style = "";
  document.getElementById("divButtonReturn").style = "";
}

function btnMainMenuSection33_Click()
{
  document.getElementById("divMainMenu").style = "display:none";
  document.getElementById("divSection33").style = "";
  document.getElementById("divButtonReturn").style = "";
}

function btnMainMenuSection34_Click()
{
  document.getElementById("divMainMenu").style = "display:none";
  document.getElementById("divSection34").style = "";
  document.getElementById("divButtonReturn").style = "";
}

function btnMainMenuSection35_Click()
{
  document.getElementById("divMainMenu").style = "display:none";
  document.getElementById("divSection35").style = "";
  document.getElementById("divButtonReturn").style = "";
}

function btnReturn_Click()
{
  document.getElementById("divMainMenu").style = "";

  document.getElementById("divSection1").style = "display:none";
  document.getElementById("divSection2").style = "display:none";
  document.getElementById("divSection31").style = "display:none";
  document.getElementById("divSection32").style = "display:none";
  document.getElementById("divSection33").style = "display:none";
  document.getElementById("divSection34").style = "display:none";
  document.getElementById("divSection35").style = "display:none";
  document.getElementById("divButtonReturn").style = "display:none";
}