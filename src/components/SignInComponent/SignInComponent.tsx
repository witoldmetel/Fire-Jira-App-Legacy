import React from 'react';
import { History } from 'history';
import { connect } from 'react-redux';

import { Credentials, Auth } from '../../fixtures/types';
import { signIn } from '../../store/actions';
import { Modal, Button, Form, Field } from '../index';
import { MODAL_SIZE } from '../../fixtures/constants';

export interface Props {
  auth: Auth;
  authError: string;
  history: History;

  signIn: (credentials: Credentials, calback) => void;
}

class SignInComponent extends React.Component<Props> {
  state = {
    email: '',
    password: '',
    error: null
  };

  private onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ [e.target.id]: e.target.value });
  };

  private get content() {
    return (
      <Form
        initialValues={[this.state.email, this.state.password]}
        errorMessage={this.state.error}
        onSubmit={this.handleSubmit}
      >
        <Field id="email" label="Email" placeholder="Email" onChange={this.onInputChange} />
        <Field id="password" label="Password" placeholder="Password" type="password" onChange={this.onInputChange} />
      </Form>
    );
  }

  private handleSubmit = () => {
    this.setState({ error: this.props.authError });
    this.props.signIn(this.state, this.handleCancel);
  };

  private handleCancel = () => {
    this.setState({ error: null });
    this.props.history.push('/');
  };

  private get actionButtons() {
    return (
      <React.Fragment>
        <Button label="Login" className="positive" onClick={this.handleSubmit} />
        <Button label="Cancel" onClick={this.handleCancel} />
      </React.Fragment>
    );
  }

  public render() {
    return (
      <Modal
        header="Sign In"
        content={this.content}
        actionButtons={this.actionButtons}
        history={this.props.history}
        size={MODAL_SIZE.TINY}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    authError: state.auth.authError
  };
};

export default connect(mapStateToProps, { signIn })(SignInComponent);
