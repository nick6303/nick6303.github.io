import { ref, onMounted } from 'vue'

export default {
  name: 'clock2',
  setup() {
    const time = ref('')
    const timerContext = ref('')
    const timerContext2 = ref('')

    const getTime = () => {
      const time = new Date()
      const evening = time.getHours() > 12 ? '下午' : '上午 '

      let hour = time.getHours() % 12 !== 0 ? time.getHours() % 12 : 12
      hour = hour < 10 ? '0' + hour : hour

      let minute = time.getMinutes()
      minute = minute < 10 ? '0' + minute : minute

      let second = time.getSeconds()
      second = second < 10 ? '0' + second : second

      const year = time.getFullYear()
      const month = time.getMonth() + 1
      const day = time.getDate()

      timerContext.value = `${evening} ${hour}:${minute}:${second}`
      timerContext2.value = `${year}/${month}/${day}`
    }

    onMounted(() => {
      setInterval(() => {
        getTime()
      }, 1000)
    })
    return {
      getTime,
      time,
      timerContext,
      timerContext2,
    }
  },
  render(h) {
    const { timerContext, timerContext2 } = h
    return (
      <div class="time">
        {timerContext}
        <br></br>
        {timerContext2}
      </div>
    )
  },
}
