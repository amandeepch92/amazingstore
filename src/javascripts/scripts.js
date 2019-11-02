
const modalAddToCart = document.querySelector('.modal');
const closeBtnAddToCart = document.querySelector('.js-close-modal');
const myCartBtn = document.querySelector('.js-my-cart');
const modalMyCart = document.querySelector('.modal-cart-container');
const closeBtnMyCart = document.querySelector('.js-close-my-cart');
var totalItemInCart = [];
const createMyCartItems = function (totalItemInCart) {
  const obj = {};
  obj.totalItemInCart = totalItemInCart;
  const documentFragment = document.createDocumentFragment();
  obj.myCartclass = document.querySelector('.product_item');
  obj.myCartclass.innerHTML = '';
  if (obj.totalItemInCart.length > 0) {
    document.querySelector('.product').style.display = 'block';
    document.querySelector('.product_item_bottom').style.display = 'block';
    for (let item = 0; item < obj.totalItemInCart.length; item++) {
      const div = document.createElement('div');
      div.className = 'product_item_list';
      const image = document.createElement('img');
      image.src = `${obj.totalItemInCart[item].image}-s.jpg`;
      const p = document.createElement('p');
      p.textContent = obj.totalItemInCart[item].text;
      const a = document.createElement('a');
      a.text = obj.totalItemInCart[item].price;
      a.href = 'javascript:void(0)';
      const i = document.createElement('i');
      i.dataset.index = item;
      i.addEventListener('click', (event) => {
        const el = event.target.closest('.product_item_list');
        el.parentNode.removeChild(el);
        totalItemInCart.splice(event.target.dataset.index, 1);
        document.getElementById('id_my_cart_count').innerHTML = totalItemInCart.length;
        if (!totalItemInCart.length) {
          document.querySelector('.product').style.display = 'none';
          document.querySelector('.product_item_bottom').style.display = 'none';
        }
      });
      div.appendChild(image);
      div.appendChild(p);
      div.appendChild(a);
      div.appendChild(i);
      documentFragment.appendChild(div);
    }
    obj.myCartclass.appendChild(documentFragment);
  } else {
    document.querySelector('.product').style.display = 'none';
    document.querySelector('.product_item_bottom').style.display = 'none';
  }
  return obj.myCartclass;
};
const addToMyCart = function (productDetails) {
  document.getElementById('id_add_to_cart_btn').innerHTML = 'Added to Cart';
  totalItemInCart.push(productDetails);
  document.getElementById('id_my_cart_count').innerHTML = totalItemInCart.length;
  createMyCartItems(totalItemInCart);
};
const openModalAddToCart = function (event) {
  const productDetail = { ...event.target.dataset };
  document.getElementById('id_product_text').innerHTML = productDetail.text;
  document.getElementById('id_product_details').innerHTML = productDetail.text;
  document.getElementById('id_product_image').src = `${productDetail.image}-l.jpg`;
  document.getElementById('id_product_price').innerHTML = productDetail.price;
  document.getElementById('id_product_reviews').innerHTML = productDetail.reviews;
  document.getElementById('id_product_measurement').innerHTML = productDetail.measurement;
  document.getElementById('id_add_to_cart_btn').addEventListener('click', addToMyCart.bind(null, productDetail), { once: true });
  document.getElementById('id_add_to_cart_btn').innerHTML = 'Add to Cart';
  modalAddToCart.style.display = 'block';
};
closeBtnAddToCart.onclick = function () {
  modalAddToCart.style.display = 'none';
};

myCartBtn.onclick = function () {
  if (!window.totalItemInCart.length) {
    document.querySelector('.product').style.display = 'none';
    document.querySelector('.product_item_bottom').style.display = 'none';
    document.getElementById('id_my_cart_count').innerHTML = 0;
  }
  modalMyCart.style.display = 'block';
}; document.getElementById('id_add_to_cart_btn').innerHTML = 'Added to Cart';
closeBtnMyCart.onclick = function () {
  modalMyCart.style.display = 'none';
};
