async function getHandler(request, h) {
    return "get";
}

async function postHandler(request, h) {
    return "post";
}

module.exports = {
    getHandler: getHandler,
    postHandler: postHandler
}