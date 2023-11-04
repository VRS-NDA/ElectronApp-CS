// renderers/home.js

addEventListener('load',async  () =>{
    //const profile = await window.electronAPI.getProfile();
    //document.getElementById('picture').src = profile.picture;
    //document.getElementById('name').innerText = profile.name;
    //document.getElementById('success').innerText = 'You successfully used OpenID Connect and OAuth 2.0 to authenticate.';
  });
  
  document.getElementById('getscore').onclick = async () => {
    var output = await window.electronAPI.getLeaderboard();
    console.log(output);
    console.log(output[0]);
    var unity = window.electronAPI.getUnityInstance();
    console.log(unity);

    unity.SendMessage("VRS Singleton", "GetLeaderboard", output);
  };
  document.getElementById('setscore').onclick = async () => {
    var profile = await window.electronAPI.getProfile();
    var inputData = {points: 1000, game:"CS", uid:profile.sub};
    console.log(inputData);
    var output = await window.electronAPI.setLeaderboard(inputData);
    console.log(output);
  };
  