import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaShoppingCart } from 'react-icons/fa';

const CartNotification = ({ initialCount = 0 ,onClick=onClick}) => {
  const [count, setCount] = useState(initialCount);


// I wanna to lesigtn the any change in the initialCount
  useEffect(() => {
    setCount(initialCount);
  }, [initialCount]);
  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      <FaShoppingCart size={24} onClick={()=>{onClick()}} style={{ cursor: 'pointer' }} />
      <AnimatePresence>
        {count > 0 && (
          <motion.div
            key={count}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            style={{
              position: 'absolute',
              top: -10,
              right: -10,
              background: 'red',
              color: 'white',
              borderRadius: '50%',
              width: 20,
              height: 20,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              fontSize: 12,
              fontWeight: 'bold',
            }}
          >
            {count}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CartNotification;