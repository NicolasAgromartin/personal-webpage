export const opacity = {
  hidden : { opacity: 0, },
  visible : { opacity: 1 , transition: { duration: .5 , ease: 'easeInOut'  } }
};

export const fromAbove = {
  hidden : { opacity: 0, y:-100 },
  visible : { opacity: 1 , y:0, transition: { duration: .5 , ease: 'easeInOut'  } }
};

export const fromLeft = {
  hidden : { opacity: 0, x:-100 },
  visible : { opacity: 1 , x:0, transition: { duration: .5 , ease: 'easeInOut'  } }
};

export const fromRight = {
  hidden : { opacity: 0, },
  visible : { opacity: 1 , transition: { duration: .5 , ease: 'easeInOut'  } }
};

