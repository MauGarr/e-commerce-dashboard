<script lang="ts" setup>
const route = useRoute()

if (route.query.theme) {
  const theme = route.query.theme as string
  const layout = useLayoutStore()
  layout.setDarkTheme(theme === 'dark')
}
useRouter().replace('/dashboard/ecommerce')
</script>
