import React, { useContext, useEffect } from 'react';
import GlobalContext from 'global.context';
import { initUserListMsgHandler } from 'logics/socketLogic';
import PropTypes from 'prop-types';
import UserListStyle from './UserList.style';

UserList.propTypes = {
  userList: PropTypes.arrayOf(
    PropTypes.shape({ nickname: PropTypes.string, socketId: PropTypes.string }),
  ),
};

export default function UserList({ userList }) {
  const { gameSocket } = useContext(GlobalContext);

  useEffect(() => {
    const initSocket = async () => {
      if (!gameSocket) return;
      initUserListMsgHandler(gameSocket, { setUserList });
    };
    initSocket();
  });
  const UserComponents = userList.map((user) => (
    <div style={{ width: '40px', height: '40px' }}>{user.nickname}</div>
  ));

  return <UserListStyle>{UserComponents}</UserListStyle>;
}
