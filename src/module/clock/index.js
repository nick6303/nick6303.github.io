import { computed, onMounted, ref } from 'vue'
import './style.sass'

export default {
  name: 'clock',
  setup() {
    const second = ref(0)
    const secondAngel = computed(() => {
      const angle = (second.value / 60) * 360
      return `transform: translateY(15%) rotate(${angle}deg)`
    })

    const minute = ref(0)
    const minuteAngel = computed(() => {
      const angle = (minute.value / 60) * 360
      return `transform: rotate(${angle}deg)`
    })

    const hour = ref(0)
    const hourAngel = computed(() => {
      const angle = (hour.value / 12) * 360 + (minute.value / 60) * 30
      return `transform: rotate(${angle}deg)`
    })

    onMounted(() => {
      setInterval(() => {
        const time = new Date()
        second.value = time.getSeconds()
        minute.value = time.getMinutes()
        hour.value = time.getHours()
      }, 1000)
    })

    return {
      secondAngel,
      minuteAngel,
      hourAngel,
    }
  },
  render(h) {
    const { secondAngel, minuteAngel, hourAngel } = h
    return (
      <div class="withClock">
        <div class="clock">
          <img src={require('./img/clockBody.png')} alt="" />
          <div class="second" style={secondAngel}>
            <img src={require('./img/second.png')} alt="" />
          </div>
          <div class="minute" style={minuteAngel}>
            <img src={require('./img/minute.png')} alt="" />
          </div>
          <div class="hour" style={hourAngel}>
            <img src={require('./img/hour.png')} alt="" />
          </div>
          <div class="point">
            <img src={require('./img/clockMaterial.png')} alt="" />
          </div>
        </div>
      </div>
    )
  },
}
