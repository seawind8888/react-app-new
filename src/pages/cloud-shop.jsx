import React, { Component, lazy, Suspense } from "react";
// import { ShopSelector } from "cloud-business";
import { Button } from "cloud-react";

let serverName = "https://qa-ual.shuyun.com"; // https://qa-ual.shuyun.com 或者 https://ual.shuyun.com
let selectedShop = [
  "offline_201809201888",
  "jos_10194354",
  "offline_2018092015474",
];

const commonOptions = {
  isSupportedChannel: true,
  platform: ["taobao", "jos", "douyin", "offline", "youzan", "suning"], // 添加用户平台参数platform，数组形式，['jos', 'taobao', 'offline']
  // selectedShop,
  serverName,
  tenantId: "qiushi6",
  isOpenSelectedTab: false,
};

const OtherComponent = lazy(() => import('cloud-business'));

export default class ShopSelectorDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
  }


  onOpenShopSelector = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  onCancel = () => {
    this.setState({
      visible: false,
    });
    console.log("--------cancel-------");
  };

  onOk = (list) => {
    this.setState({
      visible: false,
    });
    console.log("--------selectedShopList-------", list);
  };

  render() {
	  console.log('[OtherComponent]',OtherComponent)
    return (
      <div className="app-contain">
        <Button type="normal" onClick={this.onOpenShopSelector}>
          多选店铺选择器
        </Button>
      </div>
    );
  }
}
