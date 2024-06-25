/*new Promise((resolve) => {
    resolve(1);
}).then((result) => {
    console.log(result); // 1
    return result * 2;
}).then((result) => {
    console.log(result); // 2
    return result * 3;
}).then((result) => {
    console.log(result); // 6
});*/



function fetchUser() {
    return new Promise(function(resolve) {
        setTimeout(function() {
            resolve({ id: 1, username: 'user123' });
        }, 1000);
    });
}

function fetchPosts(userId) {
    return new Promise(function(resolve) {
        setTimeout(function() {
            resolve(['post1', 'post2', 'post3']);
        }, 1500);
    });
}

function fetchComments(post) {
    return new Promise(function(resolve) {
        setTimeout(function() {
            resolve('Comments for ' + post);
        }, 2000);
    });
}

fetchUser()
    .then(function(user) {
        console.log('User:', user);
        return fetchPosts(user.id);
    })
    .then(function(posts) {
        console.log('Posts:', posts);
        return fetchComments(posts[0]);
        
    })
    .then(function(comments) {
        console.log('Comments:', comments);
    })
    .catch(function(error) {
        console.error('Error:', error);
    });



