const SPECIALS = '!@#$%^&*()_+{}:"<>?\|[]\',./`~'
const LOWERCASE = 'abcdefghijklmnopqrstuvwxyz'
const UPPERCASE = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const NUMBERS = '0123456789'
const ALL = `${SPECIALS}${LOWERCASE}${UPPERCASE}${NUMBERS}`

// adding +1 to avoid 0 as a value in case we want to use it differently than the index.
const getIterable = (length) => Array.from({length}, (_, index) => index + 1)

const pick = (set, min, max) => {
    let length = min

    if (typeof max !== 'undefined') {
        length += Math.floor(Math.random() * (max - min))
    }

    // creating an iterable element with empty strings to avoid for and while loops
    // and using a more declarative approach.

    return getIterable(length).map(() => (
        set.charAt(Math.floor(Math.random() * set.length))
    )).join('');
  }

const shuffle = (set) => {
    let array = set.split('')
    let length = array.length
    // we reverse the iterable to get value from max to min.
    let iterable = getIterable(length).reverse()

    let shuffled = iterable.reduce((acc, value, index) => {
        let randomIndex = Math.floor(Math.random() * value)

        [acc[value -1], acc[randomIndex]] = [acc[randomIndex], acc[value - 1]]

        return acc
    }, [...array])

    return shuffled.join('')
}

module.exports = () => {
  let password = (pick(SPECIALS, 1)
    + pick(LOWERCASE, 1)
    + pick(NUMBERS, 1)
    + pick(UPPERCASE, 1)
    + pick(ALL, 4, 12))

  return shuffle(password)
}
