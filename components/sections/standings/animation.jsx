const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const listItem = {
  hidden: { y: -20 },
  show: { y: 0, transition: { type: 'spring', stiffness: 40 } },
}

export { container, listItem }
