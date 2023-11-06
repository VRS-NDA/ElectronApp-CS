// renderers/home.js

addEventListener('load',async  () =>{
    const profile = await window.electronAPI.getProfile();
    //document.getElementById('picture').src = profile.picture;
    //document.getElementById('name').innerText = profile.name;
    //document.getElementById('success').innerText = 'You successfully used OpenID Connect and OAuth 2.0 to authenticate.';
  });
  
  document.getElementById('getscore').onclick = async () => {
    var output = await window.electronAPI.getLeaderboard();
    console.log(output);
    console.log(output[0]);
    //var unity = window.electronAPI.getUnityInstance();
    var frame = document.getElementById('fieldViewiframe');
    console.log(frame);
    frame.contentWindow.postMessage(JSON.stringify(output),'*');

    //unity.SendMessage("VRS Singleton", "GetLeaderboard", output);
  };

  //for communicating with unity IFRAME
  window.onmessage = function(e) {
    console.log("messagesent");
    if (e.data == 'unity') {
        alert('It works!');
    }
};

window.top.onmessage = function(e) {
    console.log("messageseddnt");
    if (e.data) {
        sendLeaderData(e.data);
        alert('It works!');
    }
};

async function sendLeaderData(data)
{
    var profile = await window.electronAPI.getProfile();
    var inputData = {points: data.points, game:data.game, uid:profile.sub, name:profile.name};
    console.log(inputData);
    var output = await window.electronAPI.setLeaderboard(inputData);
    console.log(output);
}
  /*document.getElementById('setscore').onclick = async () => {
    
  };*/

