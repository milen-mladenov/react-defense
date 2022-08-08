const hostUrl = 'https://parseapi.back4app.com/classes';


async function request(url, method, data) {
    const options = {
        method,
        headers: {
            'X-Parse-Application-Id': 'ZzsEoelt01CRLQreVhYhwKuv5nFTZq8ml4fgmd0I',
            'X-Parse-REST-API-Key': 'GsS6idExCD7o9vIw1M4jH1c6aasAmhSXMSENJKCC'
        }
    };

    if (data !== undefined) {
        options.headers['content-type'] = 'application/json'
        options.body = JSON.stringify(data)
    }

    try {

        const res = await fetch(hostUrl + url, options)

        if (res.ok == false) {
            const error = await res.json()
            throw new Error(error.message)
        }

        if (res.status == 204) {
            return res
        } else {
            return res.json()
        }
    } catch (err) {
        alert(err.message)
        throw err
    }
}

export async function get(url) {
    return request(url, 'get')
}
export async function post(url, data) {
    return request(url, 'post', data)
}
export async function put(url, data) {
    return request(url, 'put', data)
}
export async function del(url) {
    return request(url, 'delete')
}