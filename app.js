let vm = Vue.createApp({
  data() {
    return {
      isPurple: false,
      selectedColor: "",
      size: 150,
      transform_text:"rotate(30deg)"
    };
  },
  computed: {
    circle_classes() {
      return { purple: this.isPurple };
    },
    textClasses() {
      return {
        width: this.size + "px",
        height: this.size + "px",
        lineHeight: this.size + "px",
      };
    },
  },
}).mount("#app");
