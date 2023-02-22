import { ref } from 'vue'
import SlotReel from './SlotReel.vue'
import './style.sass'
export default {
  name: 'slots',
  setup() {
    const reel1 = ref(null)
    const reel2 = ref(null)
    const reel3 = ref(null)
    const reel4 = ref(null)
    const spin = () => {
      reel1.value.run(6)
      reel2.value.run(12)
      reel3.value.run(18)
      reel4.value.run(24)
    }
    return {
      spin,
      reel1,
      reel2,
      reel3,
      reel4,
    }
  },
  render(h) {
    const { spin } = h
    return (
      <div class="slotMachine">
        <div class="slotMachine-main">
          <button onClick={spin}>點擊</button>
          <div class="slotMachine-reels">
            <div class="slotMachine-reels-inner">
              <SlotReel ref="reel1"></SlotReel>
              <SlotReel ref="reel2"></SlotReel>
              <SlotReel ref="reel3"></SlotReel>
              <SlotReel ref="reel4"></SlotReel>
            </div>
          </div>
        </div>
      </div>
    )
  },
}
