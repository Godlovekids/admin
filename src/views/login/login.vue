<template>
	<div class="login-container">
		<el-form
			:model="loginFormData"
			:rules="loginFormRules"
			ref="loginForm"
			class="login-form"
			label-position="left"
		>
			<el-row class="login-title">Login</el-row>
			<el-form-item prop="username">
				<svg-icon name="user"></svg-icon>
				<el-input v-model="loginFormData.username" placeholder="请输入用户名" />
			</el-form-item>
			<el-form-item prop="password">
				<svg-icon name="password"></svg-icon>
				<el-input
					v-model="loginFormData.password"
					placeholder="请输入密码"
					show-password
					@keyup.enter.native="login"
				></el-input>
			</el-form-item>
			<el-row class="login-button">
				<el-button @click="reset(loginForm)">重置</el-button>
				<el-button :loading="configData.loading" type="primary" @click.native="login"
					>登陆</el-button
				>
			</el-row>
		</el-form>
	</div>
</template>

<script lang="ts" setup>
import { onMounted, ref, watch } from 'vue';
// eslint-disable-next-line no-unused-vars
import reset from '@utils/common';
import { ElMessage } from 'element-plus';
import store from '@store/index';
import router from '@router/index';
import { useRoute } from 'vue-router';
// 用户信息接口限制
interface LoginFormFace {
	username: string;
	password: string;
}
// 用户信息
// eslint-disable-next-line no-unused-vars
const loginFormData = ref<LoginFormFace>({
	username: 'admin',
	password: 'admin'
});
// 密码显隐以及loading
// eslint-disable-next-line no-unused-vars
const configData = ref({
	// 密码框类型标记
	passwordType: 'password',
	// loading标识
	loading: false
});
// 跳转地址
const redirect = ref<unknown>(null);
onMounted(() => {
	const route = useRoute();
	watch(route, () => {
		redirect.value = route.query?.redirect;
	});
});
// 登陆表单
// eslint-disable-next-line no-unused-vars
const loginForm = ref<HTMLFormElement | null>(null);
// eslint-disable-next-line no-unused-vars
const loginFormRules = {
	username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
	password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
};
// 登录方法
// eslint-disable-next-line no-unused-vars
const login = (): void => {
	loginForm.value!.validate((valid: boolean) => {
		if (valid) {
			configData.value.loading = true;
			store
				.dispatch('user/login', loginFormData)
				.then(() => {
					ElMessage.success('登录成功');
					configData.value.loading = false;
					// router.push({ path: (redirect.value || '/') as string });
					router.push({ path: '/' });
				})
				.catch((error: string | undefined) => {
					configData.value.loading = false;
					throw new Error(error);
				});
		} else {
			ElMessage('请填写用户信息');
		}
	});
};
</script>

<style lang="scss">
.login-container {
	width: 100%;
	height: 100%;
	background: url('@assets/login/loginBg.jpg') center center no-repeat;
	background-size: cover;
	position: relative;
	.login-form {
		position: absolute;
		z-index: 2;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
		width: 520px;
		.login-title {
			font-size: 26px;
			color: #fff;
			margin: 0px auto 40px;
			justify-content: center;
			font-weight: bold;
		}
		.el-form-item {
			border: 1px solid rgba(255, 255, 255, 0.1);
			background: rgba(0, 0, 0, 0.1);
			border-radius: 4px;
			.el-input {
				width: calc(100% - 50px);
				input {
					background: transparent;
					border: 0px;
					-webkit-appearance: none;
					border-radius: 0px;
					color: #fff;
				}
				.el-input__icon {
					color: #fff;
				}
			}
		}
		.login-button {
			justify-content: center;
		}
	}
}
</style>
