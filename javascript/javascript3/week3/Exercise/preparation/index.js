class Comment {
    constructor(username, content, time) {
        this.username = username;
        this.content = content;
        this.time = time;
    }

    // Get help from students to write this method!
    getTimeSincePost() {
        return new Date().getTime() - this.time.getTime();
    }

    // Get help from students to write this method!
    hasSwearWord() {
        const swearWords = ['crap', 'damn'];
        const postWords = this.content.split(' ');
        const hasSwearWord = swearWords.find(swearWord => postWords.includes(swearWord));
  
        return Boolean(hasSwearWord);
    }
}

const comment1 = new Comment('test', 'post', new Date());

console.log(comment1.hasSwearWord())
comment1.content = 'shit crap'
console.log(comment1.hasSwearWord())
setTimeout(() => {
  console.log(comment1.getTimeSincePost())
}, 1000);

// data
// username, content, time

// functionality
// getTimeSincePost, hasSwearWord


//Class post
class Post {
    // setup
    constructor(username, content, postTime, likes, comments, shares) {
        this.username = username;
        this.content = content;
        this.postTime = postTime;
        this.likes = likes;
        this.comments = comments;
        this.shares = shares;
    }

    addLike(username, time) {
        const like = {
            username: username,
            time: time
        };

        this.likes.push(like);
    }

    addComment(username, content, time) {
        this.comments.push(new Comment(username, content, time));
    }

    doShare() {

    }

    save() {

    }

    logThis() {
        console.log(this.username);
    }
}

const post1 = new Post('benna100', 'asd', '10/02/1019', [], [], []);
const post2 = new Post('habsdhjd', 'asdajhdb', '10/02/1019', [], [], []);

post1.addLike('bennaasdasd', '14:07');
console.log(post1.likes);

post1.addComment('ugg', 'Great post', '14:16');
console.log(post1.comments);

post1.logThis();
post2.logThis();