// Write your code here
import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {isShowHideFirstName: false, isShowHideLastName: false}

  onShowHideFirstName = () => {
    this.setState(prevState => ({
      isShowHideFirstName: !prevState.isShowHideFirstName,
    }))
  }

  onShowHideLastName = () => {
    this.setState(prevState => ({
      isShowHideLastName: !prevState.isShowHideLastName,
    }))
  }

  render() {
    const {isShowHideFirstName, isShowHideLastName} = this.state

    return (
      <div className="container">
        <h1 className="h1">Show/Hide</h1>
        <div className="set-container">
          <div>
            <button
              type="button"
              className="button"
              onClick={this.onShowHideFirstName}
            >
              Show/Hide Firstname
            </button>
            {isShowHideFirstName && (
              <p className="paragraph small-box">Rajpoot</p>
            )}
          </div>

          <div>
            <button
              type="button"
              className="button"
              onClick={this.onShowHideLastName}
            >
              Show/Hide Lastname
            </button>
            {isShowHideLastName && <p className="paragraph small-box">Siyog</p>}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
