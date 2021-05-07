import { computed } from 'vue';
import store from '@store/index';
// 展开状态
const collapse = computed(() => {
	return store().collapse;
});
export default collapse;
