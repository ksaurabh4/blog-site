const responsive = {
  0: {
    items: 1,
  },
  320: {
    items: 1,
  },
  560: {
    items: 2,
  },
  960: {
    items: 3,
  },
};

$(document).ready(function () {
  $nav = $('.nav');
  $toggleCollapse = $('.toggle-collapse');

  /**click event on toggle menu */
  $toggleCollapse.click(function () {
    $nav.toggleClass('collapse');
  });

  //owl-carousel for blog
  $('.owl-carousel').owlCarousel({
    loop: true,
    autoplay: false,
    autoplayTimeout: 3000,
    dots: false,
    nav: true,
    navText: [
      $('.owl-navigation .owl-nav-prev'),
      $('.owl-navigation .owl-nav-next'),
    ],
    responsive: responsive,
  });

  //click to scroll up
  $('.move-up span').click(function () {
    $('html, body').animate(
      {
        scrollTop: 0,
      },
      1000
    );
  });

  //AOS instance
  AOS.init();
  //Create Post to show main body of the blog if clicked - CONTROLLER
  function createBlogBody(e) {
    let x;
    if (
      e.target.className !== undefined &&
      e.target.className === 'btn post-btn'
    ) {
      x = e.target.parentElement.parentElement;
    } else if (
      e.target.className !== undefined &&
      e.target.className === 'img'
    ) {
      x = e.target.parentElement.parentElement.parentElement;
    }

    if (
      x !== undefined &&
      x.className === 'post-content aos-init aos-animate'
    ) {
      clearPostArea(); //to clear any pre-existing blog-body
      let blogImg, blogTitle;
      x.childNodes.forEach((e) => {
        if (e.className !== undefined && e.className === 'post-image') {
          blogImg = e;
        } else if (e.className !== undefined && e.className === 'post-title') {
          blogTitle = e.childNodes[1].textContent;
        }
      });

      //postList.style.display = 'none';
      postList.innerHTML = '';
      posts.insertAdjacentHTML(
        'afterbegin',
        `<div
        class="post-content post-body"
        data-aos="zoom-in"
        data-aos-delay="200"
      >
        <div class="post-image">
        ${blogImg.innerHTML}        
        </div>
        <div class="post-title">
          <h2
            >${blogTitle}</h2
          >
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Nesciunt, voluptates voluptatibus enim, itaque sed ab beatae
            vel temporibus placeat quisquam optio quos minima quam? Eum
            iusto quaerat dignissimos ab accusantium, harum sint ea
            laborum rerum laboriosam, impedit illum ad ipsum tenetur
            magnam itaque doloribus quasi nostrum fugiat consectetur
            repellendus.
          </p>
          <p>
            cupiditate illo sint deserunt voluptates! Atque debitis
            voluptatem quidem odio accusantium! Officia soluta voluptate
            facilis reiciendis a, ducimus expedita optio aspernatur enim
            laudantium nemo sunt sed modi ipsum ipsa voluptates minima eos
            esse non adipisci. Illum, architecto! Exercitationem earum
            culpa, inventore repellat officiis molestias cumque facilis
            veniam quidem, eaque laboriosam non provident delectus
            adipisci blanditiis libero autem? Delectus impedit nobis quam,
            tempore, consectetur cum quae inventore debitis ratione aut
            sint ab consequuntur incidunt optio soluta nulla sed atque
            temporibus quasi? Placeat voluptates atque excepturi vitae ea
            ab expedita, ad at. Tempore et laboriosam rem minima quisquam
            vero optio voluptate repellendus voluptatum culpa nobis eum
            inventore ea officia accusantium esse, molestias quas
            explicabo facere. Fuga, quia incidunt ut dolore porro
            consequatur eos a culpa veritatis iure atque officia eveniet
            delectus omnis fugit, eius neque placeat repellat dolores
            pariatur, odit ducimus minus. Facilis, ipsam dignissimos
            tempora excepturi cum, officiis reiciendis voluptates expedita
            aspernatur quae adipisci nisi dolorum nostrum nihil atque
            facere enim pariatur reprehenderit quibusdam animi. Quia atque
            soluta velit perferendis dignissimos dolore nesciunt
            assumenda, molestias fuga sapiente possimus alias ullam
            maiores natus. Eaque repudiandae saepe pariatur tenetur in rem
            voluptate! Totam cupiditate odio tenetur recusandae inventore
            iusto fuga expedita vero voluptatem? Eius, veniam beatae.
          </p>
          <p>
            architecto cupiditate ipsum officiis velit, quos nisi facilis
            quod dolore eos, quo ex quam, fugiat eaque dolorum! Fugit
            deleniti accusantium commodi ad autem, odio vitae minus totam
            eum eaque quod nisi provident nostrum voluptatibus enim
            praesentium necessitatibus aperiam porro sequi! In expedita
            porro, doloremque iusto voluptate blanditiis sequi distinctio
            unde id esse libero, odio voluptatem minus ab explicabo
            laudantium quae voluptates ipsa magnam, delectus eum mollitia
            exercitationem fugiat sint. Dolor ipsam quo nemo culpa fugiat
            est saepe adipisci rerum consectetur eius, repudiandae
            explicabo rem blanditiis pariatur laborum expedita ea in modi.
            Quod a consectetur perspiciatis quo impedit explicabo
            inventore quidem quos vitae quibusdam recusandae dignissimos
            excepturi dolorum minus incidunt, repudiandae nam quam quis
            voluptatum culpa expedita molestiae! Atque nostrum illum
            doloremque, eaque temporibus cum nisi debitis modi commodi
            ullam error voluptas molestias, rem harum iusto ducimus
            perspiciatis. Laudantium modi quod vitae! Ab molestias aut
            mollitia et.
          </p>
        </div>
      </div>`
      );
      posts.scrollIntoView();
    }
  }
  //createlist to display  CONTROLLER
  function getBloglist(e, arr) {
    let blogDisplay;
    postList.innerHTML = '';
    posts.firstChild.innerHTML = '';
    if (
      e.target.className !== undefined &&
      e.target.className.includes('list-items')
    ) {
      if (
        e.target.className !== undefined &&
        e.target.className.includes('software')
      ) {
        blogDisplay = arr[0];
      } else if (
        e.target.className !== undefined &&
        e.target.className.includes('technologies')
      ) {
        blogDisplay = arr[1];
      } else if (
        e.target.className !== undefined &&
        e.target.className.includes('lifestyle')
      ) {
        blogDisplay = arr[2];
      } else if (
        e.target.className !== undefined &&
        e.target.className.includes('shopping')
      ) {
        blogDisplay = arr[3];
      } else if (
        e.target.className !== undefined &&
        e.target.className.includes('food')
      ) {
        blogDisplay = arr[4];
      }
    }
    return blogDisplay;
  }

  // display list               - VIEW
  function createListBlogCategoriesWise(e, arr) {
    getBloglist(e, arr).forEach((item) => {
      postList.insertAdjacentHTML('afterbegin', `${item.outerHTML}<hr/>`);
    });
  }

  // get category wise blogs and numbers - CONTROLLER
  function getNumBlogPerCategories() {
    let blogsArr = document.querySelectorAll('.post-content'); //list of blogs
    let blogCategories = [0, 0, 0, 0, 0]; //num of blogs in each category
    let blogs = [[], [], [], [], []];
    blogsArr.forEach((e) => {
      let desc = e.getAttribute('description');
      if (desc !== null && desc === 'software') {
        blogCategories[0] += 1;
        blogs[0].push(e);
      } else if (desc !== null && desc === 'technologies') {
        blogCategories[1] += 1;
        blogs[1].push(e);
      } else if (desc !== null && desc === 'lifestyle') {
        blogCategories[2] += 1;
        blogs[2].push(e);
      } else if (desc !== null && desc === 'shopping') {
        blogCategories[3] += 1;
        blogs[3].push(e);
      } else if (desc !== null && desc === 'food') {
        blogCategories[4] += 1;
        blogs[4].push(e);
      }
    });
    return [blogCategories, blogs];
  }

  const blogList = getNumBlogPerCategories()[1];
  const blogCount = getNumBlogPerCategories()[0];

  const categoriesArr = [
    'software',
    'technologies',
    'lifestyle',
    'shopping',
    'food',
  ];
  //display total number of post in each category - VIEW
  function showActualNumber() {
    const categoriesList = document.querySelectorAll(
      '.category-list .list-items'
    );

    let categories, numOfBlogs;
    categoriesList.forEach((e) => {
      let desc = e.getAttribute('class');
      if (desc.includes('software')) {
        categories = 'software';
        numOfBlogs = blogCount[0];
      } else if (desc.includes('technologies')) {
        categories = 'technologies';
        numOfBlogs = blogCount[1];
      } else if (desc.includes('lifestyle')) {
        categories = 'lifestyle';
        numOfBlogs = blogCount[2];
      } else if (desc.includes('shopping')) {
        categories = 'shopping';
        numOfBlogs = blogCount[3];
      } else if (desc.includes('food')) {
        categories = 'food';
        numOfBlogs = blogCount[4];
      }
      document.querySelector(`.list-items.${categories} span`).textContent =
        numOfBlogs < 10 ? `(0${numOfBlogs})` : `(${numOfBlogs})`;
    });
  }

  //clear pre existing blog body
  function clearPostArea() {
    document.querySelectorAll('.post-body').forEach(function (a) {
      a.remove();
    });
  }

  //Event listeners for read more button
  const popularPost = document.querySelector('.popular-post');
  const posts = document.querySelector('.posts');
  const catList = document.querySelector('.category-list');
  const postList = document.getElementById('list-of-blogs');

  //click on the categories
  catList.addEventListener('click', (e) => {
    createListBlogCategoriesWise(e, blogList);
    //posts.innerHTML = '';
  });

  //click on blogs to read
  [popularPost, posts].forEach((item) => {
    item.addEventListener('click', (e) => {
      createBlogBody(e);
    });
  });
  showActualNumber();
});
