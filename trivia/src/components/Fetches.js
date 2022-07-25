import Axios from 'axios'

export const categoryFetch = () => {
    return Axios
        .get("https://opentdb.com/api_category.php")
        .then((response) =>
            (response.data.trivia_categories)
        )
        .catch((err) => console.log(err))
};


export const questionFetch = (id) => {
    const url = "https://opentdb.com/api.php?amount=10&category=" + id.chosenCategory + "&type=multiple"
    return Axios
        .get(url)
        .then((response) =>
            (response.data.results)
        )
        .catch((err) => console.log(err))
};