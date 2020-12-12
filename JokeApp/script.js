const VoiceRSS = require ("./voiceRSS");


// const button = document.getElementById('button');
// const audioElement = document.getElementById('audio');


function test() {
// VoiceRSS Speech Parameters
  VoiceRSS.speech({
    key: 'd9e60df7a92c4a9c87e89d05261016e7',
    src: 'hello world',
    hl: 'en-au',
    r: 0,
    c: 'mp3',
    f: '44khz_16bit_stereo',
    ssml: false,
    callback: function (error, content) {
      console.log(error || content);
    }
  });
}
test();


//Get jokes from Joke API
// async function getJokes() {
//   let joke = '';
//   const apiUrl = '';

// Event Listeners
