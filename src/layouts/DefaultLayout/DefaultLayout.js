import classNames from "classnames/bind";
import images from "~/assets/images";

import Menu from "../components/Menu";
import Sidebar from "../components/Sidebar";
import styles from "./DefaultLayout.module.scss";

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
  return (
    <div className={cx("wrapper")}>
        <Menu/>
      <div className={cx("sidebar-wrapper")}>
        <div className={cx('header')}>s</div>
        <div className={cx('toolbar')}>Header</div>
        <div className={cx('container')}>
            
        </div>
      </div>

      <div className={cx("content")}>{children}</div>
    </div>
  );
}

export default DefaultLayout;
