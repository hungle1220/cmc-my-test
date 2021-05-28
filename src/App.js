import "./App.scss";
import bt_menu_icon from "./assets/images/edit.svg";

function App() {
  return (
    <div className="my-test">
      <div className="main">
        <div className="top">
          <div className="header text-center bold">
            Nghiệp vụ tài sản cố định
          </div>
          <div className="content">
            <div className="line line-top">
              <div className="line-top__item">
                <img src={bt_menu_icon} alt="icon" />
                <div className="text">Điều chuyển</div>
                <div className="vertical" />
              </div>
              <div className="line-top__item">
                <img src={bt_menu_icon} alt="icon" />
                <div className="text">Tính khấu hao</div>
                <div className="vertical" />
              </div>
              <div className="line-top__item">
                <img src={bt_menu_icon} alt="icon" />
                <div className="text">
                  Chuyển TS thuê tài <br /> chính thành TS sở hữu
                </div>
                <div className="vertical" />
              </div>
            </div>
            <div className="line line-center">
              <div className="line-center__item">
                <img src={bt_menu_icon} alt="icon" />
                <div className="text">Ghi tăng</div>
              </div>
              <div className="horizontal">
                <i className="arrow right"></i>
              </div>
            </div>
            <div className="line line-bottom">
              <div className="line-bottom__item">
                <div className="vertical" />
                <img src={bt_menu_icon} alt="icon" />
                <div className="text">Đánh giá tài sản</div>
              </div>
              <div className="line-bottom__item">
                <div className="vertical" />
                <img src={bt_menu_icon} alt="icon" />
                <div className="text">Ghi giảm</div>
              </div>
              <div className="line-bottom__item">
                <div className="vertical" />
                <img src={bt_menu_icon} alt="icon" />
                <div className="text">Kiểm kê tài sản</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bottom">
          <div className="menu">
            <div className="menu-item">
              <img src={bt_menu_icon} alt="icon menu" />
              <h3>Cơ cấu tổ chức</h3>
            </div>
            <div className="menu-item">
              <img src={bt_menu_icon} alt="icon menu" />
              <h3>Loại tài sản</h3>
            </div>
            <div className="menu-item">
              <img src={bt_menu_icon} alt="icon menu" />
              <h3>Tiện ích</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
