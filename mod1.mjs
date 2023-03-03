const mod1 = console.log('mod1 loaded')

process.on('exit', () => {
  console.log('process event handler called')
})

export default mod1

