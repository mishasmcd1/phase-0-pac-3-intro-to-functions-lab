function shout(string) {
    // todo
  }
  function shout(string) {
    return string.toUpperCase();
  }
function whisper(string) {
    return string.toLowerCase();
} 
function logShout(string) {
    console.log(string.toUpperCase());
}
console.log(string);
console.log(string.toUpperCase());
function logWhisper(string) {
    console.log(string.toLowerCase());
}
function sayHiToHeadphonedRoommate({whisper, shout}) {
    console.log(whisper, shout)
    if (logWhisper) {
        return "I can't hear you!"
    } else if (logShout){
        return "YES INDEED!";
    } 
}
console.log(sayHiToHeadphonedRoommate);
console.log(logWhisper);
console.log(logShout);
console.log("I can't hear you!");
console.log("YES INDEED!")