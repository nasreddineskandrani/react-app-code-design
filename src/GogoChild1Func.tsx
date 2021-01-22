import React, { useCallback, useEffect, useLayoutEffect, useState } from 'react';
import { useMemo } from "react";

function useGWithMemo(x: number) { 
    console.log('__ memo wrapper GogoChild1Func');
    return useMemo(() => {
        console.log('__ use memo inside GogoChild1Func');
        return x * 2;
    }, []) 
}

export function GogoChild1Func() {
    console.log('__ render GogoChild1Func');

    const [number2, setNumber2] = useState(0);
    const [number3, setNumber3] = useState(0);
    const [number4, setNumber4] = useState(0);
    const [number5, setNumber5] = useState(0);

    const resultWithMemo = useGWithMemo(3);

    useEffect(() => {
        console.log('__ useEffect GogoChild1Func');
        setNumber3(3);
    }, [number5]);

    useLayoutEffect(() => {
        console.log('__ useLayoutEffect GogoChild1Func');
        setNumber4(4);
    }, []);

    const callback = useCallback(() => {
        console.log('__ useCallback GogoChild1Func');
        setNumber5(5);
    }, []);


    function doSomething() {
        setNumber2(2)
    }

    console.log('__ rendering done GogoChild1Func');
    return (
      <div>
          {'child'}
          <button onClick={() => doSomething()}>udpate</button>
          <button onClick={() => callback()}>callback</button>
      </div>
    );
  }