import React, { Component, Fragment } from "react";

import Examples from "../../components/Examples";

const SECOND = 1000;

class CycleBlockingDemo extends Component {
    handleClick = () => {
        const startingTime = Number(new Date());

        while (true) {
            const timeNow = Number(new Date());

            if (timeNow - startingTime > 5 * SECOND) break;
        }
    };

    render() {
        return (
            <Fragment>
                <h1>Демо блокирования потока</h1>
                <Examples />
                <button onClick={this.handleClick}>
                    Заблокировать поток на 5 секунд
                </button>
            </Fragment>
        );
    }
}

export default CycleBlockingDemo;
