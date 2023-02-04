import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import { MdMessage, MdOutlineMessage } from "react-icons/md";
import {
  RiContactsBook2Fill,
  RiContactsBook2Line,
  RiSuitcaseFill,
  RiSuitcaseLine,
} from "react-icons/ri";
import { IoCloudOutline, IoCloudySharp } from "react-icons/io5";
import {
  AiFillCheckSquare,
  AiFillSetting,
  AiOutlineCheckSquare,
  AiOutlineSetting,
} from "react-icons/ai";

import images from "~/assets/images";
import styles from "./Menu.module.scss";

const cx = classNames.bind(styles);
function Menu() {
  return (
    <div className={cx("menu-wrapper")}>
      <div className={cx("menu-avatar")}>
        <img src={images.menu_avatar} alt="" />
      </div>
      <div className={cx("menu-top")}>
        <ul className={cx("menu-list")}>
          <li className={cx("menu-item", "active")}>
            <Link to={"/"} className={cx("menu-tab")}>
              <MdOutlineMessage className={cx("icon", "f")} />
              <MdMessage className={cx("icon", "s")} />
            </Link>
          </li>
          <li className={cx("menu-item")}>
            <Link to={"/"} className={cx("menu-tab")}>
              <RiContactsBook2Line className={cx("icon", "f")} />
              <RiContactsBook2Fill className={cx("icon", "s")} />
            </Link>
          </li>
          <li className={cx("menu-item")}>
            <Link to={"/"} className={cx("menu-tab")}>
              <AiOutlineCheckSquare className={cx("icon", "f")} />
              <AiFillCheckSquare className={cx("icon", "s")} />
            </Link>
          </li>
        </ul>
      </div>
      <div className={cx("menu-bottom")}>
        <ul className={cx("menu-list")}>
          <li className={cx("menu-item")}>
            <Link to={"/"} className={cx("menu-tab")}>
              <IoCloudOutline className={cx("icon", "f")} />
              <IoCloudySharp className={cx("icon", "s")} />
            </Link>
          </li>
          <li className={cx("menu-item")}>
            <Link to={"/"} className={cx("menu-tab")}>
              <RiSuitcaseLine className={cx("icon", "f")} />
              <RiSuitcaseFill className={cx("icon", "s")} />
            </Link>
          </li>
          <li className={cx("menu-item")}>
            <Link to={"/"} className={cx("menu-tab")}>
              <AiOutlineSetting className={cx("icon", "f")} />
              <AiFillSetting className={cx("icon", "s")} />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Menu;
