// form重置
const reset = (dom: HTMLFormElement | null) => {
	dom!.value.resetFields();
};
export default reset;
