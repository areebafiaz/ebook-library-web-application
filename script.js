let cartCount = 0;

function addToCart(bookName) {
  cartCount++;
  document.getElementById("cart-count").innerText = cartCount;
  showPopup(bookName + " added to cart!");
}

function showPopup(message) {
  let popup = document.createElement("div");
  popup.className = "cart-popup";
  popup.innerText = message;
  document.body.appendChild(popup);

  setTimeout(() => {
    popup.remove();
  }, 3000);
}

let books = [
  {title: "The book Theif", price: 10.99, img: "https://img.buzzfeed.com/buzzfeed-static/static/2020-06/23/6/asset/30742b775cd7/sub-buzz-13460-1592894098-1.jpg?downsize=900:*&output-format=auto&output-quality=auto"},
  {title: "ROMAN", price: 12.99, img: "https://marketplace.canva.com/EAFY729lDrY/1/0/1003w/canva-brown-mystery-novel-book-cover-4DDntvlI-Fc.jpg"},
  {title: "Old mother rhymes", price: 14.99, img: "https://c8.alamy.com/comp/AY0K31/title-page-illustration-from-old-mother-gooses-rhymes-and-tales-AY0K31.jpg"},
  {title: "Before we were free", price: 19.99, img: "https://res.cloudinary.com/hzpwrwfdi/image/upload/w_220/media/covers/9780399555497_unj0a1"},
  {title: "We part to meet again", price: 11.99, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREk568J5svny31xILRu0iUDJqMSrSapZ-xkIaBJx20YEYkeBZ7T4-zFX3nnIpqHogwoWg&usqp=CAU"},
  {title: "The perigriene", price: 18.99, img: "https://images-eu.bookshop.org/images/9780008216214.jpg?height=250&v=v4-1e3d8a8e4b19efd1fc5b8a35e8461c46"},
      {title: "Liar's dictionary", price: 9.99, img: "https://s26162.pcdn.co/wp-content/uploads/2021/11/91Lt4nhj8TL-683x1024.jpg"},
      {title: "The goldfinch", price: 13.99, img: "https://www.boredpanda.com/blog/wp-content/uploads/2023/05/best-book-covers-55-645a0d7055430__700.jpg"},
      {title: "Charlotte's web", price: 15.99, img: "https://www.adazing.com/wp-content/uploads/2023/01/famous-book-covers-charlottes-web.jpg"}

];

let bookContainer = document.getElementById("book-container");

books.forEach(book => {
  let bookElement = document.createElement("div");
  bookElement.className = "item";

  bookElement.innerHTML = `
    <img src="${book.img}" alt="${book.title}">
    <h3>${book.title}</h3>
    <p>Price: $${book.price}</p>
    <button onclick="addToCart('${book.title}')">Add to Cart</button>
  `;

  bookContainer.appendChild(bookElement);
});

// Email Validation Function
function validateEmail(email) {
  let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailPattern.test(email);
}

// Contact Form Submission with Validation
document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();
  
  let emailInput = document.querySelector('input[type="email"]').value;
  
  if (!validateEmail(emailInput)) {
    alert("Please enter a valid email address.");
    return;
  }

  alert('Message sent successfully!');
  this.reset();
});
