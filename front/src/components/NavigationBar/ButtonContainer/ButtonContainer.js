import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ButtonContainerStyle, NavImage } from './ButtonContainer.style';

import NOTICE from '../../../asset/notice.png';
import MYPAGE from '../../../asset/mypage.png';
import LOGOUT from '../../../asset/logout.png';
import Button from './Button/Button';
import APP_URI from '../../../util/uri';
import Messages from '../../Messages/Messages';

const ButtonContainer = () => {
  const [openNotice, setOpenNotice] = useState(false);
  // logics 로 분리예정
  function logout() {
    window.location.href = `${APP_URI.REACT_APP_API_URI}/auth/logout`;
  }

  function switchNotice() {
    setOpenNotice((cur) => !cur);
  }

  return (
    <ButtonContainerStyle>
      {Button(<NavImage src={NOTICE} onClick={switchNotice} />)}
      {openNotice ? <Messages /> : null}
      {Button(
        <Link to="mypage">
          <NavImage src={MYPAGE} />
        </Link>,
      )}
      {Button(<NavImage src={LOGOUT} onClick={logout} />)}
    </ButtonContainerStyle>
  );
};

export default ButtonContainer;
