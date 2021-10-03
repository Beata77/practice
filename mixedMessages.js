const generateRandomNumber = num => {
 
    return Math.floor(Math.random() * num)
  }
  
  const fortuneTeller = {
    signInfo: ['air', 'earth', 'water'],
    fortuneOutput: ['funny person', 'too mad', 'very wise', 'just cheer up', 'please relax'],
    advice: ['go out and dance', 'trust no one', 'not read this', 'play more']
  }
  
  // Store the 'wisdom'
  let myWisdom = []
  
  // Iterate over the object
  for(let prop in fortuneTeller) {
    let option = generateRandomNumber(fortuneTeller[prop].length)
  
    // use the object's properties to customize the message being added to myWisdom  
    switch(prop) {
      case 'signInfo':
        myWisdom.push(`Your sign right now is a "${fortuneTeller[prop][option]}".`)
        break
      case 'fortuneOutput':
        myWisdom.push(`You are having: "${fortuneTeller[prop][option]}".`)
        break
      case 'advice':
        myWisdom.push(`You should: "${fortuneTeller[prop][option]}".`)
        break
      default:
        myWisdom.push('There is not enough info.')
    }
  }
  
  formatWisdom = wisdom => {
  
    const formatted = myWisdom.join('\n')
    console.log(formatted)
  }
  
  formatWisdom(myWisdom);