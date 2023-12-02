

function url(path){
    const isHashRouter = window.location.hash.includes('#');
    return isHashRouter ? `#/${path}` : path
}

export default url;