```javascript
import React, { useRef, useEffect } from 'react';

const MyComponent = () => {
  const myRef = useRef(null);
  const [isMounted, setIsMounted] = React.useState(true);

  useEffect(() => {
    setIsMounted(true);
    const intervalId = setInterval(() => {
      if (isMounted && myRef.current) {
        myRef.current.doSomething();
      }
    }, 100);
    return () => {
      setIsMounted(false);
      clearInterval(intervalId);
    };
  }, []);

  return (
    <View ref={myRef}>
      {/* ... */}
    </View>
  );
};

export default MyComponent;
```