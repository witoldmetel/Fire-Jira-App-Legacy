import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';

import { Task } from '../../fixtures/types';
import { getTask, updateTask } from '../../store/actions';
import { RandomImg } from '../index';

export interface Props {
  id: string;
  task: Task;
  history: any;
  getTask: (id: string) => void;
  updateTask: (task: Task, id: string) => void;
}

class TaskEdit extends React.Component<Props> {
  state = {
    title: this.props.task?.title || '',
    description: this.props.task?.description || '',
  };

  public componentDidMount() {
    this.props.getTask(this.props.id);
  }

  public componentDidUpdate(prevProps) {
    if (prevProps.task !== this.props.task && prevProps.task === null) {
      this.setState({
        title: this.props.task.title,
        description: this.props.task.description,
      });
    }
  }

  private onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ [e.target.id]: e.target.value });
  };

  private onConfirmClick = () => {
    if (this.state.title.trim() !== '' && this.state.description.trim()) {
      this.props.updateTask(this.state, this.props.id);
      this.setState({ title: '', description: '' });
    }

    this.props.history.push('/');
  };

  private onCancelClick = () => this.props.history.push('/');

  private get content() {
    return (
      <div className="ui dimmer modals visible active">
        <div onClick={(e) => e.stopPropagation()} className="ui small modal visible active">
          <div className="header">Edit Task</div>
          <div className="content">
            <RandomImg randomFace={this.props.id} />
            <form className="ui action input">
              <input
                type="text"
                id="title"
                placeholder="task title"
                value={this.state.title}
                onChange={this.onInputChange}
              />
              <input
                type="text"
                id="description"
                placeholder="description"
                value={this.state.description}
                onChange={this.onInputChange}
              />
            </form>
          </div>
          <div className="actions">
            <button className="ui positive button" type="submit" onClick={this.onConfirmClick}>
              Ok
            </button>
            <button className="ui button" onClick={this.onCancelClick}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    );
  }

  public render() {
    return !this.props.task ? (
      <div className="ui active inverted dimmer">
        <div className="ui text loader">Loading task</div>
      </div>
    ) : (
      this.content
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const tasks = state.firestore.data.tasks;
  const task = tasks ? tasks[id] : null;

  return { task, id };
};

export default compose(
  firestoreConnect([{ collection: 'tasks' }]),
  connect(mapStateToProps, { getTask, updateTask }),
)(TaskEdit);
