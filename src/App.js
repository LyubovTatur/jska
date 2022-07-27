import './App.scss';
import Header from "./components/Header";
import {useEffect} from "react";

function App() {
    useEffect(() => {
        var c = document.getElementById("canvasBG");
        var ctx = c.getContext("2d");
        ctx.lineWidth=10
        ctx.lineCap = 'round';
        const dashWidth = (c.offsetWidth-28)/10
        const dashSpace = dashWidth/2
        ctx.setLineDash([dashWidth,dashSpace ]);
        const height = c.offsetHeight / 7;
        let yPos = height
        ctx.strokeStyle = '#f1d7a6'
        while (yPos < c.offsetHeight) {
            ctx.moveTo(10, yPos);
            ctx.lineTo(2000, yPos);
            yPos+=height

        }
        ctx.stroke();

    }, [])

    return (
        <div className="App">
            <Header/>
            <content>
                <canvas id='canvasBG' width={window.innerWidth-18} height={window.innerHeight}>

                </canvas>
                <div className="note">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </div>
            </content>
        </div>
    );
}

export default App;
