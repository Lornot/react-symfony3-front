import fetch from 'isomorphic-fetch';

export function fetchBlogPost(id) {
    return fetch('http://sa/web/app_dev.php/get/'+id, {
        method: 'GET',
        mode:   'CORS'
    }).then(res => res.json())
        .catch(err => err);
}

export function fetchBlogPosts() {
    return fetch('http://sa/web/app_dev.php/cget', {
        method: 'GET',
        mode:   'CORS'
    }).then(res => res.json())
        .catch(err => err);
}

export function createBlogPost(data) {
    return fetch('http://sa/web/app_dev.php/post', {
        method: 'POST',
        mode: 'CORS',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        return res;
    }).catch(err => err)
}

export function updateBlogPost(id, data) {
    return fetch('http://sa/web/app_dev.php/put/'+id, {
        method: 'PUT',
        mode:   'CORS',
        body:   JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        return res;
    }).catch(err => err);
}

export function deleteBlogPost(id) {
    return fetch('http://sa/web/app_dev.php/delete/' + id, {
        method: 'DELETE',
        mode: 'CORS'
    }).then(res => res)
    .catch(err => err);
}