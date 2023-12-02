function ping(){
    return fetch('/ping')
        .then(res => res.json())
        .then(data => data.message)
}

export default ping;