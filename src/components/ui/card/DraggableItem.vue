<script>
export default {
  setup(props, context) {
    return () => context.slots.default()[0];
  },
};
</script>
