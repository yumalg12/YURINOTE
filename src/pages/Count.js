import { useRef, useEffect, useState } from 'react';
import Header from "../component/Diary/Header";
import logo from "../img/heart.svg"
import Controller from '../component/Count/Controller';
import Viewer from '../component/Count/Viewer';

function Count() {

    const [count, setCount] = useState(0);
    const handleSetCount = (value) => {
        setCount(count + value);
    };

    const [text, setText] = useState("");
    const handleSetText = (e) => {
        setText(e.target.value);
    };

    const didMountRef = useRef(false);

    useEffect(() => {
        if (!didMountRef.current) {
            didMountRef.current = true;
            return;
        } else {
            console.log("component updated!");
        }
    });

    useEffect(() => {
        console.log("component mounted");
    }, []);

    useEffect(() => {
        const intervalID = setInterval(() => {
            console.log("Flick");
        }, 10000);

        return () => {
            console.log("cleaning up");
            clearInterval(intervalID);
        };
    });

    function Even() {
        useEffect(() => {
            return () => {
                console.log("Even component unmounted");
            };
        }, []);

        return (<><span>←짝수</span></>);
    };

    return (
        <div>
            <Header
                title={"카운터"}
                leftChild={
                    <>
                        <img src={logo} alt="로고" width={30} style={{ margin: '0 0.5rem' }} />
                    </>
                }
                rightChild={
                    <>
                        <img src={logo} alt="로고" width={30} style={{ margin: '0 0.5rem' }} />
                    </>
                }
            >

            </Header>
            <div className="Count">
                <h1>카운터</h1>
                <section>
                    <input value={text} onChange={handleSetText} />
                </section>
                <section>
                    <Viewer count={count} />
                    {count % 2 === 0 && <Even />}
                </section>
                <section>
                    <Controller handleSetCount={handleSetCount} />
                </section>
                <section>
                    <canvas></canvas>
                </section>
            </div>
        </div>
    );
}

export default Count;
