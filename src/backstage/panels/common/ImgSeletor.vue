<template lang="pug">
.panelContent
  .contentWrapper
    button(
      v-for="item in imgArray"
      @click="selectImg(item)"
    )
      img(:src="getImgUrl(item)", alt="alt")
</template>

<script>
export default {
  name:'ImgSeletor',
  props:{
    configProps:{
      type: Object,
      default: null
    }
  },
  setup( props, { emit } ){
    const { images } = props.configProps ?? null
    const imgArray = images.keys()

    const getImgUrl =(item) => {
      return images(item)
    }

    const selectImg = (item)=>{
      emit('eventEmit',{
        name: 'getImgValue',
        props: item
      })

      emit('close')
    }

    return {
      imgArray,
      selectImg,
      getImgUrl
    }
  }
}
</script>

<style lang="scss" scoped>
.contentWrapper {
  width: 800px;
  max-height: calc(100vh - 150px);
  overflow: auto;
  button {
    width: calc(50% - 10px);
    margin: 5px;
    border: 1px solid #ccc;
  }
}
</style>