
// Connect to spreadsheet

var data_feed = [];
var videoTags = [];
var videoLinks = [];
var videoTitles = [];
var videoDesc = [];
var splitDataFeed;

var isDataLoaded = false;

$.getJSON("https://spreadsheets.google.com/feeds/list/1Xmzj5w5aOo21CwK-btoEB2OLQfqiL62hEg4flySJP5c/od6/public/values?alt=json", function(data) {
  for (var el in data.feed.entry) {
    videoLinks.push(data.feed.entry[el].gsx$videourl.$t);
    videoTags.push(data.feed.entry[el].gsx$videotag.$t);
    videoTitles.push(data.feed.entry[el].gsx$videotitle.$t);
    videoDesc.push(data.feed.entry[el].gsx$videodesc.$t);
  }
  console.log(videoLinks);
  isDataLoaded = true;
});

var loadVideoButton = document.getElementById('loadVideos');

loadVideoButton.onclick = function() {
  console.log("caca");
  loadVideo(2);
};

function loadVideo(v) {
  if (isDataLoaded) {
    console.log(videoLinks[v]);
  }
};

loadVideo(1);

// loadVideoFeed(data_feed);


function createVideoTag(v) {

}

function createVideoLink(v) {

}

function createVideoDescription(v) {

}
