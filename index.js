// Get all the images
image_array = [
    'beast.jpg',
    'butler.jpg',
    'dragon.jpg',
    'dropsies.jpg',
    'construct.jpg'
]
fetch("./data/cards.json")
function get_random_image(){
    // Get a random index
    random_index = Math.floor(Math.random() * image_array.length);

    // Get an image at the random_index
    selected_image = image_array[random_index]

    // Display the image
    document.getElementById('image_shower').src = `./assets/${selected_image}`
}
