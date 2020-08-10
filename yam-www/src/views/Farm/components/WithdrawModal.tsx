import React from 'react'
import styled from 'styled-components'

import Button from '../../../components/Button'
import Input from '../../../components/Input'
import Modal, { ModalProps } from '../../../components/Modal'
import ModalActions from '../../../components/ModalActions'
import ModalTitle from '../../../components/ModalTitle'
import TokenInput from '../../../components/TokenInput'

interface WithdrawModalProps extends ModalProps {
  tokenName?: string,
}

const WithdrawModal: React.FC<WithdrawModalProps> = ({ onDismiss, tokenName = '' }) => (
  <Modal>
    <ModalTitle text={`Withdraw ${tokenName}`} />
    <TokenInput max={10000} symbol={tokenName} />
    <ModalActions>
      <Button text="Cancel" variant="secondary" onClick={onDismiss} />
      <Button text="Confirm" />
    </ModalActions>
  </Modal>
)


export default WithdrawModal