export default function albums() {
    return $fetch('https://jsonplaceholder.typicode.com/photos?_limit=200')
}