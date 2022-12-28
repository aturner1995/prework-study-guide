console.log("Here are the topics we learned through Prework:");
var topic = ['HTML', 'CSS', 'Git', 'JavaScript'];
var randomTopic = topic[Math.floor(Math.random()* topic.length)];

function listTopics() {
    for (var i=0; i<topic.length; i++) {
        console.log(topic[i]);
    }
}

function selectTopic(){
    if (randomTopic === `HTML`) {
        console.log("Let's Study HTML!");
    }
    else if (randomTopic === `CSS`) {
        console.log("Let's Study CSS!");
    }
    else if (randomTopic === `Git`) {
        console.log("Let's Study Git!");
    }
    else if (randomTopic === `JavaScript`) {
        console.log("Let's Study JavaScript!");
    }
    else {
        console.log("Please Try Again!");
    }
}
listTopics();
console.log('Which topic should we study first?');
selectTopic()
