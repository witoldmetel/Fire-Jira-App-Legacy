import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { addTask, searchTask, setFilter } from '../../actions';
import InputBar from '../../components/InputBar';
import SearchBar from '../../components/SearchBar';
import InputFilter from '../../components/InputFilter';

export interface Props {
  addTask: () => void;
  searchTask: () => void;
  setFilter: (filterName: string) => void;
}

class AppHeader extends React.Component<Props> {
  state = { activeFilter: 1 };

  private setActiveFilter = (id: number, filterName: string) => {
    this.setState({ activeFilter: id });
    this.props.setFilter(filterName);
  };

  public render() {
    const filters = [
      { name: 'All', id: 1, filterName: 'SHOW_ALL' },
      { name: 'Incompleted', id: 2, filterName: 'SHOW_INCOMPLETED' },
      { name: 'Completed', id: 3, filterName: 'SHOW_COMPLETED' },
    ];

    return (
      <header className="ui menu">
        <nav className="ui container">
          <a href="#" className="header item">
            <img className="logo" src={`https://api.adorable.io/avatars/${Math.random()}.png`} />
            Task List App
          </a>
          <InputBar addTask={this.props.addTask} />
          <SearchBar searchTask={this.props.searchTask} />
          <div className="ui filter buttons">
            return (
            {filters.map((filter) => {
              return (
                <InputFilter
                  key={filter.id}
                  name={filter.name}
                  isActive={this.state.activeFilter === filter.id}
                  onClick={() => this.setActiveFilter(filter.id, filter.filterName)}
                />
              );
            })}
            )
          </div>
        </nav>
      </header>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      addTask: addTask,
      searchTask: searchTask,
      setFilter: setFilter,
    },
    dispatch,
  );
}

export default connect(null, mapDispatchToProps)(AppHeader);