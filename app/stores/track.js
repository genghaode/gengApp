const log = ({type, ...other}) => {
  console.log('%c'+type, 'color:blue', other)
}

module.exports = store => next => action => {
  log(action)
  return next(action)
}
