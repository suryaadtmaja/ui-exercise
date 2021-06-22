<script>
export default {
  render() {
    return this.$slots.default()[0];
  },
  inject: ["handleClass"],
  mounted() {
    console.log(this.$el);
    this.$el.classList.add(this.handleClass);
  },

  // setup(props, context) {
  //   const handleClass = inject("handleClass");
  //   onMounted(() => {
  //     context.$el.classList.add(handleClass);
  //   });
  //   return () => context.slots.default();
  // },
};
</script>
