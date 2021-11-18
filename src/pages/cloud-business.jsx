import React, { Component } from "react";
import { ShopSelector } from "cloud-business";
import { Button } from "cloud-react";

let serverName = "https://qa-ual.shuyun.com"; // https://qa-ual.shuyun.com 或者 https://ual.shuyun.com
let selectedShop = ["offline_201809201497"]; // ['jos_19890202']

const singleOption = {
  tenantId: "qiushi6",
  // 添加用户平台参数platform，数组形式，['jos', 'taobao', 'offline']
  platform: ["jos", "taobao", "offline"],
  selectedShop,
  isSingleSelected: true,
  serverName,
  requiredSelected: true,
};

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
  };

  onOk = (list) => {
    this.setState({
      visible: false,
    });
    console.log("--------singleSelectedShop-------", list);
  };

  test = () => {
    this.setState({ val: this.state.val + 1 }, () => {
      console.log("[setStateTest]In callback " + this.state.val);
    });
    console.log("[setStateTest] Direct call " + this.state.val);
    setTimeout(() => {
      console.log("[setStateTest] begin of setTimeout" + this.state.val);
      this.setState({ val: this.state.val + 1 }, () => {
        console.log(
          "[setStateTest] setTimeout setState callback " + this.state.val
        );
      });
      setTimeout(() => {
        console.log(
          "[setStateTest] setTimeout of settimeout " + this.state.val
        );
      }, 0);
      console.log("[setStateTest] end of setTimeout " + this.state.val);
    }, 0);
  };

  render() {
    return (
      <div className="app-contain">
        <Button type="normal" onClick={this.onOpenShopSelector}>
          单选店铺选择器
        </Button>
        <ShopSelector
          visible={this.state.visible}
          onOk={this.onOk}
          onClose={this.onClose}
          onCancel={this.onCancel}
          option={singleOption}
        />
      </div>
    );
  }
}
