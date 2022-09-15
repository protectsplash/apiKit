<template>
	<div class="admin">
		<!-- Dashboard -->
		<v-main class="dashboard pl-6">
			<v-container>
				<!-- Content -->
				<v-layout wrap>
					<v-tabs v-model="methodsTab" background-color="yellow" color="basil" grow>
						<v-tab>
							GET
						</v-tab>
						<v-tab>
							POST
						</v-tab>
						<v-tab>
							PUT
						</v-tab>
						<v-tab>
							DELETE
						</v-tab>
					</v-tabs>
					<v-tabs-items v-model="methodsTab" class="tabs-items">
						<v-tab-item>
							<div class="border mt-4">
								<v-btn @click="postAPIsActive" color="yellow">
									POST API 테스트 시작
								</v-btn>
								<v-tabs v-model="postTab" background-color="transparent" color="basil" grow>
									<v-tab v-for="tab in tabTitles" :key="tab">
										{{ tab }}
									</v-tab>
								</v-tabs>
								<v-tabs-items v-model="postTab">
									<v-tab-item>
										<json-viewer :key="jsonViewerKey" :value="postAPIs" :expand-depth="5" copyable boxed sort></json-viewer>
									</v-tab-item>
									<v-tab-item>
										<json-viewer :key="jsonViewerKey" :value="postSuccessDatas" :expand-depth="5" copyable boxed sort></json-viewer>
									</v-tab-item>
									<v-tab-item>
										<json-viewer :key="jsonViewerKey" :value="postFailsDatas" :expand-depth="5" copyable boxed sort></json-viewer>
									</v-tab-item>
								</v-tabs-items>
							</div>
						</v-tab-item>
						<v-tab-item>
							<v-flex xs12>
								<div class="border mt-4">
									<v-btn @click="getAPIsActive" color="green" class="mt-4">
										GET API 테스트 시작
									</v-btn>
									<v-tabs v-model="getTab" background-color="transparent" color="basil" grow>
										<v-tab v-for="tab in tabTitles" :key="tab">
											{{ tab }}
										</v-tab>
									</v-tabs>
									<v-tabs-items v-model="getTab">
										<v-tab-item>
											<json-viewer :key="jsonViewerKey" :value="getAPIs" :expand-depth="5" copyable boxed sort></json-viewer>
										</v-tab-item>
										<v-tab-item>
											<json-viewer :key="jsonViewerKey" :value="getSuccessDatas" :expand-depth="5" copyable boxed sort></json-viewer>
										</v-tab-item>
										<v-tab-item>
											<json-viewer :key="jsonViewerKey" :value="getFailsDatas" :expand-depth="5" copyable boxed sort></json-viewer>
										</v-tab-item>
									</v-tabs-items>
								</div>
							</v-flex>
						</v-tab-item>
						<v-tab-item>
							<v-flex xs12>
								<div class="border mt-4">
									<v-btn @click="putAPIsActive" color="warning" class="mt-4">
										PUT API 테스트 시작
									</v-btn>
									<v-tabs v-model="putTab" background-color="transparent" color="basil" grow>
										<v-tab v-for="tab in tabTitles" :key="tab">
											{{ tab }}
										</v-tab>
									</v-tabs>
									<v-tabs-items v-model="putTab">
										<v-tab-item>
											<json-viewer :key="jsonViewerKey" :value="putAPIs" :expand-depth="5" copyable boxed sort></json-viewer>
										</v-tab-item>
										<v-tab-item>
											<json-viewer :key="jsonViewerKey" :value="putSuccessDatas" :expand-depth="5" copyable boxed sort></json-viewer>
										</v-tab-item>
										<v-tab-item>
											<json-viewer :key="jsonViewerKey" :value="putFailsDatas" :expand-depth="5" copyable boxed sort></json-viewer>
										</v-tab-item>
									</v-tabs-items>
								</div>
							</v-flex>
						</v-tab-item>
						<v-tab-item>
							<v-flex xs12>
								<div class="border mt-4">
									<v-btn @click="deleteAPIsActive" color="red">
										DELETE API 테스트 시작
									</v-btn>
									<v-tabs v-model="deleteTab" background-color="transparent" color="basil" grow>
										<v-tab v-for="tab in tabTitles" :key="tab">
											{{ tab }}
										</v-tab>
									</v-tabs>
									<v-tabs-items v-model="deleteTab">
										<v-tab-item>
											<json-viewer :key="jsonViewerKey" :value="deleteAPIs" :expand-depth="5" copyable boxed sort></json-viewer>
										</v-tab-item>
										<v-tab-item>
											<json-viewer :key="jsonViewerKey" :value="deleteSuccessDatas" :expand-depth="5" copyable boxed sort></json-viewer>
										</v-tab-item>
										<v-tab-item>
											<json-viewer :key="jsonViewerKey" :value="deleteFailsDatas" :expand-depth="5" copyable boxed sort></json-viewer>
										</v-tab-item>
									</v-tabs-items>
								</div>
							</v-flex>
						</v-tab-item>
					</v-tabs-items>
				</v-layout>
			</v-container>
		</v-main>
	</div>
</template>
<script>
import axios from 'axios'
export default {
	data() {
		return {
			methodsTab: 0,
			tabTitles: ['APIs 리스트', '성공 APIs(200)', '실패 APIs(400)'],
			jsonViewerKey: 0,
			methods: ['GET', 'POST', 'PUT', 'DELETE'],
			postTab: 0,
			postAPIs: [
				{
					title: '로그인1',
					url: 'http://localhost:20593/auth/local',
					body: { identifier: 'test3', password: 'asdasd' },
					headers: {},
				},
				{
					title: '로그인2',
					url: 'http://localhost:20593/auth/local',
					body: { identifier: 'test3', password: 'asdasd1' },
					headers: {},
				},
			],
			postSuccessDatas: [],
			postFailsDatas: [],
			getTab: 0,
			getAPIs: [
				{
					title: '유저 리스트 Auth',
					url: 'http://localhost:20593/users',
					headers: {
						authorization:
							'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaWF0IjoxNjYzMjA4NjQ5LCJleHAiOjE2NjU4MDA2NDl9.hzhodnwO9IPIeUzRpa8zzuT0ANOx7vgjb_dx3bW5PY0',
					},
				},
				{
					title: '유저 리스트 no-Auth',
					url: 'http://localhost:20593/users',
					headers: {},
				},
			],
			getSuccessDatas: [],
			getFailsDatas: [],
			putTab: 0,
			putAPIs: [
				{
					title: '유저 업데이트',
					url: 'http://localhost:20593/users/1',
					body: {
						name: 'user1',
					},
					headers: {
						authorization:
							'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaWF0IjoxNjYzMjA4NjQ5LCJleHAiOjE2NjU4MDA2NDl9.hzhodnwO9IPIeUzRpa8zzuT0ANOx7vgjb_dx3bW5PY0',
					},
				},
			],
			putSuccessDatas: [],
			putFailsDatas: [],
			deleteTab: 0,
			deleteAPIs: [
				{
					title: '유저 삭제',
					url: 'http://localhost:20593/users/5',
					headers: {
						authorization:
							'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaWF0IjoxNjYzMjA4NjQ5LCJleHAiOjE2NjU4MDA2NDl9.hzhodnwO9IPIeUzRpa8zzuT0ANOx7vgjb_dx3bW5PY0',
					},
				},
			],
			deleteSuccessDatas: [],
			deleteFailsDatas: [],
		}
	},
	methods: {
		getAPIsActive() {
			this.getSuccessDatas = []
			this.getFailsDatas = []
			this.getAPIs.forEach((el, index) => {
				axios
					.get(el.url, { headers: el.headers })
					.then(res => {
						this.getSuccessDatas.push(el)
						el.status = res.status ? res.status : '성공'
					})
					.catch(err => {
						this.getFailsDatas.push(el)
						el.status = err.status ? err.status : '실패'
					})
				if (index === this.getAPIs.length - 1) {
					this.jsonViewerKey += 1
				}
			})
		},
		postAPIsActive() {
			this.postSuccessDatas = []
			this.postFailsDatas = []
			this.postAPIs.forEach((el, index) => {
				axios
					.post(el.url, el.body, { headers: el.headers })
					.then(res => {
						console.log(res)
						this.postSuccessDatas.push(el)
						el.status = res.status ? res.status : '성공'
					})
					.catch(err => {
						this.postFailsDatas.push(el)
						el.status = err.status ? err.status : '실패'
					})
				if (index === this.postAPIs.length - 1) {
					this.jsonViewerKey += 1
				}
			})
		},
		putAPIsActive() {
			this.putSuccessDatas = []
			this.putFailsDatas = []
			this.putAPIs.forEach((el, index) => {
				axios
					.put(el.url, el.body, { headers: el.headers })
					.then(res => {
						this.putSuccessDatas.push(el)
						el.status = res.status ? res.status : '성공'
					})
					.catch(err => {
						this.putFailsDatas.push(el)
						el.status = err.status ? err.status : '실패'
					})
				if (index === this.putAPIs.length - 1) {
					this.jsonViewerKey += 1
				}
			})
		},
		deleteAPIsActive() {
			this.deleteSuccessDatas = []
			this.deleteFailsDatas = []
			this.deleteAPIs.forEach((el, index) => {
				axios
					.delete(el.url, { headers: el.headers })
					.then(res => {
						this.deleteSuccessDatas.push(el)
						el.status = res.status ? res.status : '성공'
					})
					.catch(err => {
						this.deleteFailsDatas.push(el)
						el.status = err.status ? err.status : '실패'
					})
				if (index === this.deleteAPIs.length - 1) {
					this.jsonViewerKey += 1
				}
			})
		},
	},
	created() {},
}
</script>
<style lang="scss">
.border {
	border: 1px solid black;
}
.tabs-items {
	width: 100% !important;
}
</style>
