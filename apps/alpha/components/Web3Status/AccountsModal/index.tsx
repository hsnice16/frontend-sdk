import { useState } from "react";
import styled from "styled-components";

import { Account as AccountType } from "@symmio-client/core/types/user";

import { useAppDispatch } from "@symmio-client/core/state";
import { updateAccount } from "@symmio-client/core/state/user/actions";
import { useActiveAccountAddress } from "@symmio-client/core/state/user/hooks";

import { RowCenter } from "components/Row";
import CreateAccountModal from "components/ReviewModal/CreateAccountModal";
import Account from "./Account";

const HoverWrapper = styled.div`
  padding: 0px 8px 12px 8px;
  width: clamp(200px, 360px, 99%);
  max-height: 240px;
  position: absolute;
  top: 48px;
  right: 0;
  background: ${({ theme }) => theme.bg1};
  border-radius: 4px;
  overflow: scroll;
`;

const GradientColorButton = styled(RowCenter)<{ disabled?: boolean }>`
  height: 40px;
  flex-wrap: nowrap;
  background: ${({ theme }) => theme.secondaryButton};
  border: 1px solid ${({ theme }) => theme.CTAPink};

  &:focus,
  &:hover,
  &:active {
    cursor: ${({ disabled }) => !disabled && "pointer"};
    background: ${({ theme }) => theme.hoverSecondaryButton};
  }
`;

const GradientButtonLabel = styled.span`
  font-weight: 600;
  font-size: 12px;
  line-height: 14px;
  color: ${({ theme }) => theme.text0};
`;

export default function AccountsModal({
  data,
  onDismiss,
}: {
  data: AccountType[];
  onDismiss: () => void;
}) {
  const activeAccountAddress = useActiveAccountAddress();
  const dispatch = useAppDispatch();
  const [createAccountModal, setCreateAccountModal] = useState(false);

  const onClick = (account: AccountType) => {
    dispatch(updateAccount(account));
    onDismiss();
  };

  function getInnerContent() {
    return (
      <div>
        {data.map((account, index) => {
          return (
            <Account
              account={account}
              key={index}
              active={
                activeAccountAddress
                  ? activeAccountAddress === account.accountAddress
                  : false
              }
              onClick={() => onClick(account)}
            />
          );
        })}

        <GradientColorButton onClick={() => setCreateAccountModal(true)}>
          <GradientButtonLabel>Create New Account</GradientButtonLabel>
        </GradientColorButton>
      </div>
    );
  }

  return (
    <HoverWrapper>
      {getInnerContent()}
      <CreateAccountModal
        isOpen={createAccountModal}
        onDismiss={() => setCreateAccountModal(false)}
      />
    </HoverWrapper>
  );
}
