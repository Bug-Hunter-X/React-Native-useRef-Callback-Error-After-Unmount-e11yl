# React Native useRef Callback Error After Unmount

This repository demonstrates a common error in React Native applications involving the `useRef` hook and component unmounting.  The error occurs when a callback function associated with `useRef` attempts to access or modify a component that has already been unmounted from the DOM. This usually happens when navigating away from a screen quickly before a long-running task using `useRef` to store a variable completes or an animation finishes.

## Problem
The provided `bug.js` file contains a component that uses `useRef` to interact with a DOM element. If you navigate away from the screen rapidly, before the `setInterval` callback completes, you will encounter a potential error. This is because the component is unmounted, but the callback attempts to access `myRef.current`, leading to unexpected behavior or crashes.

## Solution
The solution in `bugSolution.js` addresses this by adding a check within the callback to determine if the component is still mounted before attempting to access `myRef.current`.  This prevents the error by ensuring the callback only executes if the component remains active.  An additional cleanup function in the useEffect hook ensures that the interval is cleared properly when the component unmounts.  This prevents the issue altogether.