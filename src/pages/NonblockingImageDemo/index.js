import React, { Component, Fragment } from "react";

import "./index.css";

import Examples from "../../components/Examples";
import FileInput from '../../components/FileInput';

const MAX_CANVAS_WIDTH = 480;
const MAX_CANVAS_HEIGHT = 320;

class NonblockingImageDemo extends Component {
    handleInputChange = (event) => {
        const { files } = event.target;
        const firstFile = files[0];

        if (!firstFile) return;

        this.worker.postMessage({
            file: firstFile,
            id: 1,
        });
    };

    drawImage = blob => {
        const canvas = this.canvas;
        const img = document.createElement("img");

        img.onload = () => {
            let ctx = canvas.getContext("2d");
            ctx.drawImage(img, 0, 0);

            let width = img.width;
            let height = img.height;

            // если картинка больше заданных констант, то изменяем её размер
            if (width > height && width > MAX_CANVAS_WIDTH) {
                height *= MAX_CANVAS_WIDTH / width;
                width = MAX_CANVAS_WIDTH;
            } else if (height > MAX_CANVAS_HEIGHT) {
                width *= MAX_CANVAS_HEIGHT / height;
                height = MAX_CANVAS_HEIGHT;
            }

            canvas.width = width;
            canvas.height = height;
            ctx = canvas.getContext("2d");
            ctx.drawImage(img, 0, 0, width, height);
        };

        img.src = URL.createObjectURL(blob);

        if (this.input) {
            this.input.value = "";
        }
    }

    componentDidMount() {
        this.worker = new Worker("imageWorker.js");

        this.worker.onmessage = event => {
            this.drawImage(event.data);
        };
    }

    render() {
        return (
            <Fragment>
                <h1>Демо воркера</h1>
                <div className="nonblocking-image-demo__layout">
                    <Examples />
                    <canvas
                        ref={node => {
                            this.canvas = node;
                        }}
                    />
                    </div>
                <FileInput onChange={this.handleInputChange} />
            </Fragment>
        );
    }
}

export default NonblockingImageDemo;
