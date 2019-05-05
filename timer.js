
var time = 0

var argv = process.argv

if(process.argv[2]){
  // console.log('in if process.argv[]:',process.argv[2])

  if(process.argv[2].slice(-1)=='s'){
    time = parseInt(process.argv[2])
    // console.log('time:',time)
    for(let i=time-1;i>=0;i--){
      setTimeout(function(){
        console.log(`Left: ${i}s`)
      },1000)
    }
  }
  if(process.argv[2].slice(-3)=='min'){
    // console.log('in if min')
    time = parseInt(process.argv[2])
    // console.log('time:',time)
    for(let i=(time*60)-1;i>=0;i--){
      setTimeout(function(){
        console.log(`Left: ${i}s`)
      },1000)
    }
  }

}
if (!process.argv[2] ) {
  // console.log('in if !process.argv[]:',process.argv[2])

  console.log('Please provide an argument')
  process.exit(1)
}
