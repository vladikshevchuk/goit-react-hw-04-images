const API_KEY = '32444862-74c043f950c5843d050ee612b';

export default function fetchApi(searchLine, page) {
    return fetch(
        `https://pixabay.com/api/?q=${searchLine}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
      )
        .then(resp => resp.json());
}