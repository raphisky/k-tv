
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
  isDataLoaded = true;
  createVideoTags();
});

function loadVideo(v) {
  if (isDataLoaded) {
    console.log(videoLinks[v]);
  }
};

function loadVide_os() {
  for (var i = 0; i < videoLinks.length; i++) {
    displayVideoTag(i);
    displayVideoTitle(i);
    getVideo
  }
}


function playVideo(i) {
  console.log(videoLinks[i]);
  var player = document.getElementById("videoPlayer");
  player.setAttribute("data-href",videoLinks[i]);
}

// loadVideoFeed(data_feed);


function createVideoTags() {
  for (var i = 0; i < videoLinks.length; i++) {
    var tagContainer = document.getElementById("tags");
    var newTag = document.createElement("div");
    var tagText = videoTags[i];
    var newTagText = document.createTextNode(tagText);
    newTag.appendChild(newTagText);
    tagContainer.appendChild(newTag);
    newTag.setAttribute("class","video_tag");
    newTag.setAttribute("id","video_"+i);
  }
}



function createVideo(v) {
  var videoContainer = document.getElementById("videoPlayerContainer");
  var newVideo = document.createElement("div");
  videoContainer.appendChild(newVideo);
  newVideo.setAttribute("class","fb-video");
  newVideo.setAttribute("data-href",videoLinks[v]);
  newVideo.setAttribute("data-width","800");
  newVideo.setAttribute("data-autoplay","true");

}

createVideo(0);
