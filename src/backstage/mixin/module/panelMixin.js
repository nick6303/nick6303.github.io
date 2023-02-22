import { useStore } from 'vuex'

export default function(){
  const store = useStore()

  const openImgSeletor = (images, getImgValue)=> {
    const settings = {
      component: 'ImgSeletor',
      headerTitle: '選擇圖片',
      contentSize: {
        width: '560px',
        height: '70%',
      },
      bgPanel: '#05517c',
    }

    const props = {
      images
    }

    const events = {
      getImgValue
    }

    store.dispatch('panels/addPanel', { settings, props, events })
  }

  return {
    openImgSeletor
  }
}