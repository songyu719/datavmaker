<template>
  <div style="width: 100%; height: 100%;">
    <div class="loginPage">
      <img :src="require('@/assets/img/bg.png')" alt />
      <div class="loginTitle">
        <span class="sys_name">区域医疗注册服务系统</span>
      </div>
      <div class="loginInfo">
        <p>用户登录</p>
        <a-input
          placeholder="用户名"
        />
        <a-input
          type="password"
          placeholder="密码"
          style="margin-bottom: 5px"
        />
        <!-- <div class="forget"><span @click="forget">忘记密码</span></div> -->
        <a-button type="primary">登录</a-button>
      </div>
      <div class="loginFooter">
        <div>版本号：</div>
         <div>©成都本千医疗科技有限公司</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts"></script>

<style lang="less" scoped>
.loginPage {
  width: 100%;
  height: 100%;
  background-color: #fff;
  position: relative;

  .loginTitle {
    position: absolute;
    top: 245px;
    color: #fff;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    &_logo {
      width: 40px;
    }
    .sys_name {
      display: inline-block;
      font-size: 30px;
      letter-spacing: 3px;
      line-height: 1;
    }
  }

  .loginBody {
    width: 502px;
    height: 421px;
    background: #fff;
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
    opacity: 0.31;
    margin: -165px auto 0;
  }

  .loginInfo {
    width: 500px;
    height: 522px;
    background: #fff;
    opacity: 1;
    position: absolute;
    top: 340px;
    margin: 0 auto;
    left: calc(calc(100% - 484px) / 2);
    padding: 47px 72px;
    box-shadow: 0px 5px 10px rgba(24, 144, 255, 0.5);
    border: 8px solid rgba(255, 255, 255, 0.3);
    background-clip: padding-box;
    p {
      font-size: 21px;
      font-weight: bold;
      line-height: 38px;
      color: #1890ff;
      margin-bottom: 71px;
    }

    .ant-input {
      height: 52px;
      margin-bottom: 25px;
      padding: 13px 23px;
    }
    .ant-btn {
      width: 100%;
      height: 52px;
      font-size: 21px;
      background: #1890ff;
      margin-top: 90px;
    }
    .forget {
      color: #1890ff;
      font-size: 14px;
      cursor: pointer;
      text-align: right;
    }
    .forget:hover {
      opacity: 0.8;
    }
  }
  .loginFooter {
    line-height: 2;
    text-align: center;
    padding-top: 30px;
  }
}
</style>
