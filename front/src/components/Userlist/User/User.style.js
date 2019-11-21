import styled from 'styled-components';
import {
  FlexRowStyle,
  FlexColumnStyle,
} from '../../globalComponents/Container/Flex.style';

export const UserStyle = styled(FlexRowStyle)`
  width: 16rem;
  height: 7rem;
  margin: 0.3rem;
  margin-bottom: 0.6rem;
  background-color: ${(props) => props.theme.surfCrest};
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius: 0.3rem;
`;

export const UserInfoStyle = styled(FlexColumnStyle)`
  padding-left: 1rem;
`;

export const UserImage = styled.img`
  margin-left: 5px;
  width: 100px;
  height: 100px;
  min-width: 100px;
  min-height: 100px;
  border-radius: 0.3rem;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

export const Ranking = styled.span`
  font-size: 32px;
  font-weight: 820;
  margin-right: 10px;
  text-shadow: 1px 1px 2px #000000;
`;

export const UserNickName = styled.div``;

export const Text = styled.span`
  font-size: 28px;
  font-weight: 680;
  color: ${(props) => props.theme.navigationBarColor};
  text-shadow: 1px 1px 2px #000000;
`;
export const Drawer = styled.img`
  width: 20px;
  height: 20px;
  margin-left: 10px;
`;

export const Score = styled.div`
  font-weight: 600;
  font-size: 18px;
  color: ${(props) => props.theme.stormBrain};
`;