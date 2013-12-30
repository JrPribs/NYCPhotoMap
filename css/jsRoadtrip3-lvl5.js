function genericPost(xin,yin,postNumin,connectionsToin) {
  this.x = xin; 
  this.y = yin;
  this.postNum = postNumin; 
  this.connectionsTo = connectionsToin;
  this.sendRopeTo = function ( connectedPost ) {
    if(this.connectionsTo == undefined){
      var postArray = [ ];
      postArray.push(connectedPost);
      this.connectionsTo = postArray;
    } else {
      this.connectionsTo.push(connectedPost);
    }
  };
  if (this.y%2 === 0){
  	this.numBirds = 0;
    this.lightsOn = false;
  }
  if(this.postNum !== 9 && this.connectionsTo.indexOf('9') !== -1){
    this.weatherVan = "N";
  }
}
var post8 = genericPost(0,-3,8,10);
var post9 = genericPost(6,8,9,10);
var post10 = genericPost(-2,3,10,"8,9");
