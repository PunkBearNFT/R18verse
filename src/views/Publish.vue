<style>
</style>

<template>
	<div class="md:pt-12 flex justify-center sm:pt-4">
		<div class="w-11/12 flex items-center flex-col">
			<div class="w-8/12">
				<h3>Publish Artwork</h3>
			</div>
			<div class="line"></div>
			<div class="md:w-8/12 sm:w-11/12">
				<h4>Artwork Name</h4>
				<input type="text" class="input" placeholder="Artwork Name e.g. “Floating Ethoz”" />
				<h4>Artwork Describe</h4>
				<h6 class="text-gray-600 mb-2 mx-1">
					Please describe your work in simple words. Accurate and effective
					description can help other users to understand your work more
					accurately.
				</h6>
				<textarea class="input-textArea" placeholder="Artwork Name e.g. “Floating Ethoz”" />
				<h4>Percentage of earnings</h4>
				<h6 class="text-gray-600 mb-2 mx-1">
					When your item is shared and profited by others, what percentage of
					the profits you want from the share of the profits
				</h6>
				<input type="text" class="input-halfwidth" placeholder="Propertie e.g. Size" />
				<h4>Payment currency</h4>
				<h6 class="text-gray-600 mb-2 mx-1">
					Please select the payment currency of your support (enter token symbol or address)
				</h6>
				<input type="text" class="input" placeholder="Propertie e.g. Size" />
				<h4>Maximum number of shares (MAX： 65535)</h4>
				<h6 class="text-gray-600 mb-2 mx-1">
					How many times do you want each user to help you spread?
				</h6>
				<input type="text" class="input-halfwidth" placeholder="Propertie e.g. Size" />
				<h4>Selling price (MATIC)</h4>
				<input type="text" class="input-halfwidth" placeholder="Propertie e.g. Size" />
				<h4>Artwork authority</h4>
				<label class="checkboxLabel">
					<input type="checkbox" class="checkbox" />
					<span class="ml-2 text-stone-900 text-xl">
						Allow secondary creation
					</span>
				</label>
				<label class="checkboxLabel">
					<input type="checkbox" class="checkbox" />
					<span class="ml-2 text-stone-900 text-xl">
						Allow commercial use
					</span>
				</label>
				<label class="checkboxLabel">
					<input type="checkbox" class="checkbox" />
					<span class="ml-2 text-stone-900 text-xl">
						First-class nodes are allowed to be cast free of charge.
					</span>
				</label>
				<h4>Artwork Type</h4>
				<div class="w-full px-4 py-4">
					<div class="w-full mx-auto">
						<RadioGroup v-model="selected">
							<RadioGroupLabel class="sr-only">Server size</RadioGroupLabel>
							<div class="space-y-2">
								<RadioGroupOption as="template" v-for="plan in plans" :key="plan.name" :value="plan"
									v-slot="{ active, checked }">
									<div :class="[
				      active
				        ? 'ring-2 ring-offset-2 ring-offset-sky-300 ring-white ring-opacity-60'
				        : '',
				      checked
				        ? 'bg-sky-900 bg-opacity-75 text-white '
				        : 'bg-white ',
				    ]" class="
				      relative
				      flex
				      px-5
				      py-4
				      rounded-lg
				      shadow-md
				      cursor-pointer
				      focus:outline-none
				    ">
										<div class="flex items-center justify-between w-full">
											<div class="flex items-center">
												<div class="text-sm">
													<RadioGroupLabel as="p"
														:class="checked ? 'text-white' : 'text-gray-900'"
														class="font-medium">
														{{ plan.name }}
													</RadioGroupLabel>
													<RadioGroupDescription as="span"
														:class="checked ? 'text-sky-100' : 'text-gray-500'"
														class="inline">
														<span> {{ plan.desc }}</span>
													</RadioGroupDescription>
												</div>
											</div>
											<div v-show="checked" class="flex-shrink-0 text-white">
												<svg class="w-6 h-6" viewBox="0 0 24 24" fill="none">
													<circle cx="12" cy="12" r="12" fill="#fff" fill-opacity="0.2" />
													<path d="M7 13l3 3 7-7" stroke="#fff" stroke-width="1.5"
														stroke-linecap="round" stroke-linejoin="round" />
												</svg>
											</div>
										</div>
									</div>
								</RadioGroupOption>
							</div>
						</RadioGroup>
					</div>
				</div>
				
				<h4>Upload Artwork Cover</h4>
				<div class="uploadArea">
					<UploadIcon class="text-blue-500 w-10" />
					<p>PNG, JPEG, GIF, WEBP, Max 10 MB.</p>
					<button class="btn-medium-outline">Browse</button>
				</div>
				<h4>Upload Artwork</h4>
				<div class="uploadArea">
					<UploadIcon class="text-blue-500 w-10" />
					<p>Any Type Max 100MB.</p>
					<button class="btn-medium-outline">Browse</button>
				</div>
				<div class="w-full flex">
					<a class="btn-medium w-5/12 my-5">Submit ArtWork</a>
				</div>

			</div>
		</div>
	</div>
</template>
<script>
	import {
		ref
	} from "vue";
	import {
		UploadIcon
	} from "@heroicons/vue/outline";
	import {
		RadioGroup,
		RadioGroupLabel,
		RadioGroupDescription,
		RadioGroupOption,
	} from "@headlessui/vue";
	const plans = [{
			name: "Open Source Publish",
			desc: "Defaultly choose open source release, users can download and view the content of the work regardless of whether the work is purchased or not.",
		},
		{
			name: "Encrypt Publish",
			desc: "Choose encrypted release, only users who have purchased the NFT work are allowed to view the content of the work.",
		},
	];
	export default {
		components: {
			RadioGroup,
			RadioGroupLabel,
			RadioGroupOption,
			RadioGroupDescription,
			UploadIcon,
		},
		setup() {
			const selected = ref(plans[0]);
			return {
				selected,
				plans
			};
		},
	};
</script>
