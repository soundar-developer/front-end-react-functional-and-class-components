import React, { Component } from 'react';

class ClassComponentWithProps extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isAdmin : false
        }
    }

    onClickEventHandler = () => {
        this.setState({
            isAdmin: true
        });
    }

    render() {
        return (
            <div className='class-component'>
                <h1>
                    Hello World from Class Component With Props
                </h1>
                <h1> 
                    My Name is {this.props.name} 
                </h1>
                <h1> 
                    My Age is {this.props.age} 
                </h1>
                { this.state.isAdmin ? 
                 <div>
                    <button>
                        Submit
                    </button>
                 </div> : 
                 <div>
                    <button onClick={this.onClickEventHandler}>
                        Click this button to see the Summit button
                    </button>
                 </div>
                }
            </div>
        );
    }
}

export default ClassComponentWithProps
