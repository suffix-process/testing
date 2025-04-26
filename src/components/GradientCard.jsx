// // src/components/GradientCard.jsx
// import styled from 'styled-components';
// import { motion } from 'framer-motion';

// const GradientCard = styled(motion.div)`
//   position: relative;
//   border-radius: 20px;
//   background: linear-gradient(163deg, #00ff75 0%, #3700ff 100%);
//   overflow: hidden;
//   transition: box-shadow 0.3s;

//   &:hover {
//     box-shadow: 0 0 30px 1px rgba(0, 255, 117, 0.3);
//   }

//   .inner {
//     position: relative;
//     width: 100%;
//     height: 100%;
//     background-color: #ffff;
//     border-radius: 20px;
//     transition: transform 0.2s;

//     &:hover {
//       transform: scale(0.98);
//     }
//   }
// `;

// export default GradientCard;
///////////////////////////////////////////////
// src/components/GradientCard.jsx
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';

// 1. Define the keyframes that will shift the gradient
const gradientAnimation = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

const GradientCard = styled(motion.div)`
  position: relative;
  border-radius: 20px;

  /* 2. Use a larger background-size so the gradient can scroll */
  background: linear-gradient(163deg, #00ff75 0%, #3700ff 100%);
  background-size: 200% 200%;
  
  /* 3. Apply the animation */
  animation: ${gradientAnimation} 1s ease infinite;
  
  overflow: hidden;
  transition: box-shadow 0.3s;

  &:hover {
    box-shadow: 0 0 30px 1px rgba(0, 255, 117, 0.3);
  }

  .inner {
    position: relative;
    width: 100%;
    height: 100%;
    background-color: #fff;
    border-radius: 20px;
    transition: transform 0.2s;

    &:hover {
      transform: scale(0.98);
    }
  }
`;

export default GradientCard;
