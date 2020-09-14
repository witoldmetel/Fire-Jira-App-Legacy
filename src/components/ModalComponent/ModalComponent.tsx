import React from 'react';
import { History } from 'history';
import { Modal } from 'semantic-ui-react';

export interface Props {
  header: string | Element;
  content: string | JSX.Element;
  actionButtons: JSX.Element;
  history: History;
}

export class ModalComponent extends React.Component<Props> {
  state = { open: true };

  private closeModal = () => {
    this.setState({ open: false });
    this.props.history.goBack();
  };

  public render() {
    return (
      <Modal dimmer="blurring" open={this.state.open} onClose={this.closeModal}>
        <Modal.Header>{this.props.header}</Modal.Header>
        <Modal.Content>{this.props.content}</Modal.Content>
        <Modal.Actions>{this.props.actionButtons}</Modal.Actions>
      </Modal>
    );
  }
}
