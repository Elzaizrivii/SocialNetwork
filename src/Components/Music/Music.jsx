import React from "react";
import s from "./Music.module.css";

const Music = (props) => {
    return (
        <div className={s.container}>
            <div className={s.content}>
                <div className={s.clock}>
                    <div className={s.border}>
                        <div className={s.lines}>
                            <div>
                                <div>
                                    <div>
                                        <div>
                                            <div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={s.numbers}>
                            <div>
                            </div>
                        </div>
                        <div className={s.arrow}></div>
                        <div className={s.gradient}></div>
                        <div className={s.glass}></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Music;