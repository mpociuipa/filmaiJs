const ajaxService = (term) => {
    const url = "http://www.omdbapi.com/?t=";
    const apiKey = "28be5430";
    return fetch(`${url}${term}&apikey=${apiKey}`)
        .then(response => response.json());
};

export default ajaxService;