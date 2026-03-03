import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): React.JSX.Element {
    const [leftVal, setLeftVal] = useState<number>(1);
    const [rightVal, setRightVal] = useState<number>(2);

    return (
        <div>
            Two Dice
            <span data-testid="left-die">{leftVal}</span>
            <span data-testid="right-die">{rightVal}</span>
            <Button
                onClick={() => {
                    setLeftVal(d6);
                }}
            >
                Roll Left
            </Button>
            <Button
                onClick={() => {
                    setRightVal(d6);
                }}
            >
                Roll Right
            </Button>
            {leftVal === rightVal && leftVal !== 1 && <span>Win</span>}
            {leftVal === rightVal && leftVal === 1 && <span>Lose</span>}
        </div>
    );
}
