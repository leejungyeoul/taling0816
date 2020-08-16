import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class LoginForm extends Component {
    render () {
        return (
            <section className="main">
                <div className="m_login signin">
                <h3><span><img src={require("../img/main/log_img.png")} alt="" />
                </span>LOGIN</h3>
                <div className="log_box">
                    <div className="in_ty1">
                        <span><img src={require("../img/main/m_log_i3.png")} alt="" /></span>
                        <input type="text" id="email_val" placeholder="이메일" />
                    </div>
                    <div  className="in_ty1">
                        <span className="ic_2">
                            <img src={require("../img/main/m_log_i2.png")} alt="" />
                        </span>
                        <input type="password" id="pwd_val" placeholder="비밀번호" />
                    </div>
                    <ul className="af">
                        <li><Link to={'/register'}>회원가입</Link></li>
                        <li className="pwr_b" onClick={this.pwdResetClick}><a href="#n">비밀번호 재설정</a></li>
                    </ul>
                    <div className="s_bt" type="" onClick={(e) => this.submitClick(e)}>로그인</div>
                </div>
                </div>
                <div className="m_login m_pw chgpw">
                <h3 className="pw_ls">비밀번호 재설정 <span className="compl1">완료</span></h3>
                <div className="log_box">
                    <div className="pw_one">
                        <div className="in_ty1">
                        <span><img src={require("../img/main/m_log_i3.png")} alt="" /></span>
                        <input type="text" id="reset_email_val" name="" placeholder="이메일"/>
                        </div>
                        <div  className="in_ty1">
                        <span className=""><img src={require("../img/main/m_log_i1.png")} alt="" /></span>
                        <input type="text" id="reset_name_val" name="" placeholder="성명"/>
                        </div>
                        <div className="btn_confirm btn_confirm_m">
                        <div className="bt_ty bt_ty_m bt_ty1 cancel_ty1" 
                        onClick={this.pwdResetCancleClick}>취소</div>
                        <a href="#n" className="bt_ty bt_ty_m bt_ty2 submit_ty1" 
                        onClick={this.pwdResetConfim}>확인</a>
                        </div>
                    </div>
                </div>
                </div>
            </section>
        );
    }
}

export default LoginForm;