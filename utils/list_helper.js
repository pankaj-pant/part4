const dummy = (blogs) => {
  return 1
}


const totalLikes = (blogs) => {
  const initialValue = 0
  const sum = blogs.reduce(
    (accumulator, currentValue) => accumulator + currentValue.likes
    , initialValue
  )

  return blogs.length === 0
    ? 0 :
    sum
}

const favoriteBlog = (blogs) => {
  let highestLikes = 0
  let blogIndex = 0
  blogs.map(function(b, index){
    if(b.likes > highestLikes){
      highestLikes = b.likes
      blogIndex = index
    }
  })

  const answer = {
    title: blogs[blogIndex].title,
    author: blogs[blogIndex].author,
    likes: blogs[blogIndex].likes
  }

  return answer
}

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog
}
