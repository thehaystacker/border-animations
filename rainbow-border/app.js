const Video = function () {
  this.title = "The title";
  this.tags = [1, 2, 3];
};

Video.prototype.showTags = function () {
  this.tags.forEach(function (tag) {
    console.log(this);
    console.log(this.title);
  }, this);
};

var v = new Video();
v.showTags();
