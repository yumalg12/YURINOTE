import { useState, useEffect } from "react";
import { setPageTitle } from "../util.js";
import Header from "../component/Common/Header";
import SettingPage from "../component/User/SettingPage";

const Setting = () => {
    useEffect(() => {
        setPageTitle("설정");
    }, []);

    return (
      <>
      <Header
      title={'노트 설정'}
      />
    <SettingPage/>
      </>
    );
};

export default Setting;