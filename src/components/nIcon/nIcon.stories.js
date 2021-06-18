import nIcon from './nIcon.vue'
import nBadge from '@/components/nBadge/nBadge.vue'

export default {
	title: 'Content/Icon',
	component: nIcon,
	argTypes: {
		badgeValue: {
			control: 'text'
		},
		badgeSize: {
			control: 'text'
		},
		badgeFontSize: {
			control: 'text'
		},
		badgePadding: {
			control: 'text'
		}
	}
}

const Template = (args, { argTypes }) => ({
	components: {
		nIcon,
		nBadge
	},
	data: () => ({
		svg: `
			<svg width="100%" height="100%" viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M14 0C10.287 0 6.726 1.475 4.10049 4.1005C1.47498 6.72601 -1.89732e-05 10.287 -1.89732e-05 14C-0.0119416 16.0766 0.449758 18.1286 1.34998 20C1.505 20.3425 1.6786 20.6764 1.86998 21C2.06331 21.3333 2.26665 21.6667 2.47998 22C3.76893 23.8565 5.48817 25.3733 7.4908 26.4209C9.49343 27.4685 11.7199 28.0156 13.98 28.0156C16.2401 28.0156 18.4665 27.4685 20.4692 26.4209C22.4718 25.3733 24.191 23.8565 25.48 22C25.69 21.69 25.9 21.37 26.09 21C26.2783 20.6763 26.4486 20.3425 26.6 20C27.5165 18.1324 27.9953 16.0804 28 14C28 10.287 26.525 6.72601 23.8995 4.1005C21.274 1.475 17.713 0 14 0ZM14 26C12.1799 25.9939 10.3851 25.5739 8.7514 24.7717C7.11766 23.9696 5.68778 22.8063 4.56998 21.37C5.686 19.931 7.11639 18.7664 8.75171 17.9652C10.387 17.1639 12.1839 16.7474 14.005 16.7474C15.826 16.7474 17.6229 17.1639 19.2583 17.9652C20.8936 18.7664 22.324 19.931 23.44 21.37C22.3211 22.8077 20.8897 23.9717 19.2541 24.7739C17.6185 25.5761 15.8217 25.9954 14 26ZM24.83 19.15C24.76 19.31 24.67 19.46 24.59 19.61C23.2757 18.0901 21.6497 16.8709 19.8224 16.0352C17.9951 15.1996 16.0093 14.7671 14 14.7671C11.9907 14.7671 10.0049 15.1996 8.17757 16.0352C6.35025 16.8709 4.72423 18.0901 3.40998 19.61C3.32998 19.45 3.23998 19.3 3.15998 19.13C2.38933 17.5301 1.99266 15.7758 1.99998 14C1.99998 10.8174 3.26426 7.76516 5.5147 5.51472C7.76514 3.26428 10.8174 2 14 2C17.1826 2 20.2348 3.26428 22.4853 5.51472C24.7357 7.76516 26 10.8174 26 14C26.0062 15.7832 25.6061 17.5445 24.83 19.15Z" fill="black"/>
				<path d="M14 3.87C13.0111 3.87 12.0444 4.16324 11.2221 4.71265C10.3999 5.26206 9.75902 6.04295 9.38058 6.95658C9.00214 7.87021 8.90313 8.87555 9.09605 9.84545C9.28898 10.8154 9.76518 11.7063 10.4644 12.4055C11.1637 13.1048 12.0546 13.581 13.0245 13.7739C13.9944 13.9669 14.9998 13.8678 15.9134 13.4894C16.827 13.111 17.6079 12.4701 18.1573 11.6479C18.7067 10.8256 19 9.85891 19 8.87C19 7.54392 18.4732 6.27215 17.5355 5.33447C16.5978 4.39678 15.3261 3.87 14 3.87ZM14 11.87C13.4066 11.87 12.8266 11.6941 12.3333 11.3644C11.8399 11.0348 11.4554 10.5662 11.2283 10.0181C11.0013 9.46987 10.9419 8.86667 11.0576 8.28473C11.1734 7.70279 11.4591 7.16824 11.8787 6.74868C12.2982 6.32912 12.8328 6.0434 13.4147 5.92764C13.9967 5.81189 14.5999 5.8713 15.148 6.09836C15.6962 6.32542 16.1647 6.70994 16.4944 7.20329C16.824 7.69664 17 8.27666 17 8.87C16.9947 9.66218 16.6763 10.4201 16.1143 10.9784C15.5522 11.5367 14.7922 11.85 14 11.85V11.87Z" fill="black"/>
			</svg>
		`
	}),
	props: Object.keys(argTypes),
	template: `
		<nIcon v-bind="$props">
			<div
				class="svg-icon"
				style="width: 100%; height: 100%;"
				v-html="svg"
			/>
			<template v-slot:badge>
				<nBadge
					backgroundColor="red"
					color="white"
					fontSize="10px"
					:size="badgeSize"
					:fontSize="badgeFontSize"
					:borderRadius="badgeSize"
					:padding="badgePadding"
				>
					{{ badgeValue }}
				</nBadge>
			</template>
		</nIcon>
    `,
});

export const Default = Template.bind({});
Default.args = {
	size: 32,
	badgeSize: 18,
	badgeValue: '12',
	badgeFontSize: '10px',
	badgePadding: '0 4px'
}
