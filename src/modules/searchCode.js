import ajaxService from "./ajaxService";
import renderMovieData from "./renderMovieData";
 
const searchCode = () => {
    document.querySelector("form").addEventListener("submit", (e) => {
        e.preventDefault();
        const searchTerm = document.querySelector(".term").value;
        ajaxService(searchTerm)
            .then(result => renderMovieData(result));
    });
};
 
export default searchCode;
//sukoduoti klaidos pranesima, kad ismestu tokio adreso nera