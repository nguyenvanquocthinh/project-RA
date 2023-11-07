function renderHeader() {
    const headerContent = document.getElementById('header')

    headerContent.innerHTML =`  <section class="header">
        <div class="header__logo">
          <img
            src="https://bizweb.dktcdn.net/100/441/086/themes/896335/assets/logo.png?1688958482989"
            alt=""
          />
        </div>

        <div class="header__search">
          <div class="header__search-text">
            <input type="text" id="text" placeholder="Bạn cần tìm gì.." />
          </div>
          <div class="header__search-button">
            <button>
              <i class="fa-solid fa-magnifying-glass fa-xl"></i>
            </button>
          </div>
        </div>

        <div class="header__information">
          <div class="header__information-phone">
            <div class="header__information-phone-img">
              <img
                src="https://bizweb.dktcdn.net/100/441/086/themes/896335/assets/phone-icon.png?1688958482989"
                alt=""
              />
            </div>
            <div class="header__information-phone-content">
              <a href="">
                <p>Gọi mua hàng</p>
                <p
                  class="header__information-phone-content-p"
                  style="font-weight: 800"
                >
                  19006750
                </p>
              </a>
            </div>
          </div>

          <div class="header__information-address">
            <div class="header__information-address-img">
              <img
                src="https://bizweb.dktcdn.net/100/441/086/themes/896335/assets/address-icon.png?1688958482989"
                alt=""
              />
            </div>
            <div class="header__information-address-content">
              <a href="">
                <p>
                  Hệ thống <br />
                  cửa hàng
                </p>
              </a>
            </div>
          </div>

          <div class="header__information-log-in">
            <div class="header__information-log-in-img">
              <img
                src="https://bizweb.dktcdn.net/100/441/086/themes/896335/assets/account-icon.png?1688958482989"
                alt=""
              />
            </div>
            <div class="header__information-log-in-content">
              <a href="./pages/auth/login/index.html">
                <p>Tài Khoản</p>
                <p class="header__information-log-in-content-p">đăng nhập</p>
              </a>
            </div>
          </div>
        </div>

        <div class="header__cart">
          <button>
            <a class="header__cart-button-a" href="">
              <img
                src="https://bizweb.dktcdn.net/100/441/086/themes/896335/assets/cart-icon.png?1688958482989"
                alt=""
              />
              <p>0</p>
              <span>Giỏ hàng</span>
            </a>
          </button>
        </div>
      </section>`
    }
    renderHeader()