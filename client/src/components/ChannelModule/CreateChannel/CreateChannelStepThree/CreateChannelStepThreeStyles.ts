import styled from 'styled-components';

/**
 * [Step 3]
 */
export const InviteContainerLeft = styled.div`
  flex: 1;
  padding: 0 10px;
  width: 50%;
`;

export const InviteContainerRight = styled.div`
  flex: 1;
  padding: 0 10px;
  width: 50%;
`;

export const InviteHeading = styled.h2`
  color: #666;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 20px;
  margin-bottom: 10px;
  padding: 20px 0;
  text-align: center;
`;

export const InviteHeader = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 0 10px;
  margin-bottom: 10px;
`;

export const InviteSearchInput = styled.input`
  border: 1px solid #CCC;
  border-radius: 2px;
  display: block;
  flex: 1;
  padding: 8px;
  margin-right: 10px;

  &:focus {
    outline: none;
  }
`;

export const InviteSearchButton = styled.button`
  background: black;
  border: none;
  border-radius: 2px;
  cursor: pointer;
  color: white;
  padding: 8px 10px;

  &:hover {
    background: #333;
  }
`;

export const InviteFriendsList = styled.div`

`;

/**
 * Invite Requests
 */
// Input Request
export const InviteRequest = styled.div`
  background: #F4F4F4;
  align-items: center;
  display: flex;
  margin-bottom: 16px;
  padding: 6px 10px;
`;

export const InviteRequestInputBox = styled(InviteRequest)`
  padding: 16px 10px;
`;

export const InviteRequestButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 10px;

  &:hover {
    background: #CCC;
    border-radius: 50%;
  }

  &:focus {
    outline: none;
  }
`;

export const RequestButtonIcon = styled.img`
  display: block;
  height: 15px;
  width: 15px;
`;

export const InviteRequestEmail = styled.p`
  background: #F4F4F4;
  color: #666;
  flex: 1;
  font-size: 15px;
  font-family: Arial, Helvetica, sans-serif;
  padding: 12px 10px;
  width: 100%;
`;


// Input Box
export const InviteRequestInput = styled.input`
  background: white;
  border: none;
  display: block;
  padding: 10px;
  width: 100%;

  &:focus {
    outline: none;
  }
`;
