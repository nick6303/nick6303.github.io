import './style.sass'
import { ref } from 'vue'
import Boards from './Boards.vue'

function checkWinner(sequence) {
  const checkArray = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]

  for (let i = 0; i < checkArray.length; i++) {
    const a = sequence[checkArray[i][0]]
    const b = sequence[checkArray[i][1]]
    const c = sequence[checkArray[i][2]]
    if (a === b && b === c && c === a) {
      return a
    }
  }
  return false
}

export default {
  name: 'ticTacToe',
  setup() {
    const history = ref([
      {
        sequence: Array(9).fill(null),
      },
    ])
    const isNextX = ref(true)
    const stepNumber = ref(0)

    const handleClick = (i) => {
      const historyCopy = history.value.slice(0, stepNumber.value + 1)
      const current = history.value[historyCopy.length - 1]
      const sequence = current.sequence.slice()
      if (checkWinner(sequence) || sequence[i]) {
        return
      }
      sequence[i] = isNextX.value ? 'X' : 'O'

      history.value = historyCopy.concat([{ sequence: sequence }])
      isNextX.value = !isNextX.value
      stepNumber.value = historyCopy.length
    }

    const jumpTo = (step) => {
      stepNumber.value = step
      isNextX.value = step % 2 === 0
    }

    return { history, isNextX, handleClick, stepNumber, jumpTo }
  },
  render(h) {
    const { history, isNextX, handleClick, stepNumber, jumpTo } = h
    const current = history[stepNumber]
    const winner = checkWinner(current.sequence)

    const move = history.map((step, move) => {
      const stepWord = move ? 'move to step #' + move : 'Go to Step Start'
      return (
        <li key={move}>
          <button onClick={() => jumpTo(move)}>{stepWord}</button>
        </li>
      )
    })

    let status
    if (winner) {
      status = 'winner is: ' + winner
    } else {
      status = 'next player: ' + (isNextX ? 'X' : 'O')
    }

    return (
      <div class="root">
        <div className="game">
          <div className="gameBox">
            <h1>{status}</h1>
            <Boards onChoose={handleClick} sequence={current.sequence}></Boards>
          </div>
          <div className="gameInfo">
            <ul>{move}</ul>
          </div>
        </div>
      </div>
    )
  },
}
