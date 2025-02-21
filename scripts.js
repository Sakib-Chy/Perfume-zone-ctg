// Scroll to Contact Section
document.querySelector('a[href="#contact"]').addEventListener('click', function(event) {
    event.preventDefault();
    document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
});
// Wishlist functionality (Mock-up using localStorage)
document.getElementById('add-to-wishlist').addEventListener('click', function() {
    let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    wishlist.push('Perfume Name');
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
    alert('Added to Wishlist');
});
