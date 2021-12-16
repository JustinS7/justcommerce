const createNav = () => {
  let nav = document.querySelector('.navbar');

  nav.innerHTML = `
  <div class="nav">
  <div class="brandlogo">Just | Commerce</div>
  <div class="nav-items">
      <a href="#"><i class="fas fa-user"></i>
      </a>
      <a href="#"><i class="fas fa-shopping-cart"></i></i>
      </a>
    </div>
  </div>
</div>
<ul class="links-container">
  <li class="link-item"><a href="/Public/index.html" class="link">Home</a></li>
  <li class="link-item"><a href="/Public/product.html" class="link">Women</a></li>
  <li class="link-item"><a href="/Public/productm.html" class="link">Men</a></li>
  <li class="link-item"><a href="/Public/productw.html" class="link">Accessories</a></li>
  <li class="link-item"><a href="/Public/search.html" class="link">Search</a></li>
</ul>`;
}

createNav();
