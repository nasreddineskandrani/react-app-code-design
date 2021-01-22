import React, { useCallback, useEffect, useLayoutEffect, useState } from 'react';
import { useMemo } from "react";
import { GogoChild1Func } from './GogoChild1Func';

function useGWithMemo(x: number) { 
    console.log('__ memo wrapper GogoParentFunc');
    return useMemo(() => {
        console.log('__ use memo inside GogoParentFunc');
        return x * 2;
    }, []) 
}

export function GogoParentFunc() {
    console.log('__ render GogoParentFunc');

    const [number2, setNumber2] = useState(new Date());
    const [number3, setNumber3] = useState(0);
    const [number4, setNumber4] = useState(0);
    const [number5, setNumber5] = useState(0);

    const resultWithMemo = useGWithMemo(3);

    useEffect(() => {
        console.log('__ useEffect GogoParentFunc');
        setNumber3(3);
    }, [number5]);

    useLayoutEffect(() => {
        console.log('__ useLayoutEffect GogoParentFunc');
        setNumber4(4);
    }, []);

    const callback = useCallback(() => {
        console.log('__ useCallback GogoParentFunc');
        setNumber5(5);
    }, []);


    function doSomething() {
        setNumber2(new Date())
    }

    console.log('__ rendering done GogoParentFunc');
    return (
      <div>
            {'parent'} 
            <button onClick={() => doSomething()}>udpate</button>
            <button onClick={() => callback()}>callback</button>

            <GogoChild1Func date={number2}></GogoChild1Func>
      </div>
    );
  }