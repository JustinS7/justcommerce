const createFooter = () => {
  let footer = document.querySelector('footer');

  footer.innerHTML = `
  <div class="footer-content">
        <h1 class="brandlogo">Just | Commerce</h1>
        <div class="footer-ul">
          <ul class="category">
            <li class="category-title">men</li>
            <li><a href="#" class="footer-link">T-shirt</a></li>
            <li><a href="#" class="footer-link">Sweatshirts</a></li>
            <li><a href="#" class="footer-link">Jeans</a></li>
            <li><a href="#" class="footer-link">Shoes</a></li>
            <li><a href="#" class="footer-link">Casuals</a></li>
            <li><a href="#" class="footer-link">Formals</a></li>
            <li><a href="#" class="footer-link">Watch</a></li>
          </ul>
          <ul class="category">
            <li class="category-title">Women</li>
            <li><a href="#" class="footer-link">T-shirt</a></li>
            <li><a href="#" class="footer-link">Sweatshirts</a></li>
            <li><a href="#" class="footer-link">Jeans</a></li>
            <li><a href="#" class="footer-link">Shoes</a></li>
            <li><a href="#" class="footer-link">Casuals</a></li>
            <li><a href="#" class="footer-link">Formals</a></li>
            <li><a href="#" class="footer-link">Watch</a></li>
          </ul>
        </div>
      </div>
      <p class="footer-title">about company</p>
        <p class="info">JustCommerce is an international fast fashion e-commerce company. The company mainly focuses on women's wear, but it also offers men's apparel, children's clothes, accessories, shoes, bags and other fashion items. JustCommerce mainly targets Europe, America, Australia, and the Middle East along with other consumer markets. Its business covers more than 150 countries and territories around the world.</p>
        <p class="info">Support email - help@justcommerce.com,
          customersupport@justcommerce.com
        </p>
        <p class="info">telephone - +1 408-452-6397</p>
        <div class="footer-social-container">
          <div>
            <a href="#" class="social-link">terms & service</a>
            <a href="#" class="social-link">privacy page</a>
          </div>
          <div>
            <a href="#" class="social-link"><i class="fab fa-instagram"></i>Instagram</a>
            <a href="#" class="social-link"><i class="fab fa-facebook-square"></i>Facebook</a>
            <a href="#" class="social-link"><i class="fab fa-twitter"></i>Twitter</a>
          </div>
        </div>
        <p class="footer-credit">Clothing, Best Collections online store</p>
  `;
}

createFooter();