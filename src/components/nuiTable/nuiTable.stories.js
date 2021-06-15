import nuiTable from './nuiTable'
import nuiTableRow from './nuiTableRow'
import nuiTableCell from './nuiTableCell'

export default {
	title: 'Table',
	components: {
		nuiTable,
		nuiTableRow,
		nuiTableCell
	},
	argTypes: {
		width: {
			control: 'text'
		},
		bodyIsCollapsable: {
			control: 'boolean'
		},
		bodyMaxHeight: {
			control: 'text'
		},
		cellHeight: {
			control: 'text'
		},
		cellPadding: {
			control: 'text'
		},
		tableBorderWidth: {
			control: 'text'
		},
		tableBorderStyle: {
			control: 'text'
		},
		tableBorderColor: {
			control: 'text'
		},
		rowBorderWidth: {
			control: 'text'
		},
		rowBorderStyle: {
			control: 'text'
		},
		rowBorderColor: {
			control: 'text'
		},
		rowBorderBottomWidth: {
			control: 'text'
		},
		rowBorderBottomStyle: {
			control: 'text'
		},
		rowBorderBottomColor: {
			control: 'text'
		},
		cellBorderWidth: {
			control: 'text'
		},
		cellBorderStyle: {
			control: 'text'
		},
		cellBorderColor: {
			control: 'text'
		},
	}
}

const SimpleTableTemplate = (args, { argTypes }) => ({
	components: {
		nuiTable,
		nuiTableRow,
		nuiTableCell
	},
	props: Object.keys(argTypes),
	template: `
		<nuiTable v-bind="$props"
			:borderWidth="tableBorderWidth"
			:borderStyle="tableBorderStyle"
			:borderColor="tableBorderColor"
		>

			<nuiTableRow
				:height="cellHeight"
				:padding="cellPadding"
				:borderBottomWidth="rowBorderBottomWidth"
				:borderBottomStyle="rowBorderBottomStyle"
				:borderBottomColor="rowBorderBottomColor"
			>
				<nuiTableCell
					:borderWidth="cellBorderWidth"
					:borderStyle="cellBorderStyle"
					:borderColor="cellBorderColor"
					isHeader
				>
					First name
				</nuiTableCell>
				<nuiTableCell
					:borderWidth="cellBorderWidth"
					:borderStyle="cellBorderStyle"
					:borderColor="cellBorderColor"
					isHeader
				>
					Last name
				</nuiTableCell>
			</nuiTableRow>

			<nuiTableRow
				:height="cellHeight"
				:padding="cellPadding"
				:borderBottomWidth="rowBorderBottomWidth"
				:borderBottomStyle="rowBorderBottomStyle"
				:borderBottomColor="rowBorderBottomColor"
			>
				<nuiTableCell
					:borderWidth="cellBorderWidth"
					:borderStyle="cellBorderStyle"
					:borderColor="cellBorderColor"
				>
					Jane
				</nuiTableCell>
				<nuiTableCell
					:borderWidth="cellBorderWidth"
					:borderStyle="cellBorderStyle"
					:borderColor="cellBorderColor"
				>
					Doe
				</nuiTableCell>
			</nuiTableRow>

			<nuiTableRow
				:height="cellHeight"
				:padding="cellPadding"
				:borderBottomWidth="rowBorderBottomWidth"
				:borderBottomStyle="rowBorderBottomStyle"
				:borderBottomColor="rowBorderBottomColor"
			>
				<nuiTableCell
					:borderWidth="cellBorderWidth"
					:borderStyle="cellBorderStyle"
					:borderColor="cellBorderColor"
				>
					John
				</nuiTableCell>
				<nuiTableCell
					:borderWidth="cellBorderWidth"
					:borderStyle="cellBorderStyle"
					:borderColor="cellBorderColor"
				>
					Doe
				</nuiTableCell>
			</nuiTableRow>
			
		</nuiTable>
	`,
});

export const SimpleTable = SimpleTableTemplate.bind({});

SimpleTable.args = {
	width: '480px',
	cellHeight: '48px',
	cellPadding: '12px',
	rowBorderBottomWidth: '1px',
	rowBorderBottomStyle: 'solid'
}

const TableWithHeaderBodyAndFooterTemplate = (args, { argTypes }) => ({
	components: {
		nuiTable,
		nuiTableRow,
		nuiTableCell
	},
	props: Object.keys(argTypes),
	template: `
		<nuiTable v-bind="$props"
			:borderWidth="tableBorderWidth"
			:borderStyle="tableBorderStyle"
			:borderColor="tableBorderColor"
		>

			<template v-slot:thead>
				<nuiTableRow
					:height="cellHeight"
					:padding="cellPadding"
					:borderBottomWidth="rowBorderBottomWidth"
					:borderBottomStyle="rowBorderBottomStyle"
					:borderBottomColor="rowBorderBottomColor"
					background="#ddd"
				>
					<nuiTableCell
						:borderWidth="cellBorderWidth"
						:borderStyle="cellBorderStyle"
						:borderColor="cellBorderColor"
					>
						Header content 1
					</nuiTableCell>
					<nuiTableCell
						:borderWidth="cellBorderWidth"
						:borderStyle="cellBorderStyle"
						:borderColor="cellBorderColor"
					>
						Header content 2
					</nuiTableCell>
				</nuiTableRow>
			</template>

			<template v-slot:tbody>
				<nuiTableRow
					:height="cellHeight"
					:padding="cellPadding"
					:borderBottomWidth="rowBorderBottomWidth"
					:borderBottomStyle="rowBorderBottomStyle"
					:borderBottomColor="rowBorderBottomColor"
				>
					<nuiTableCell
						:borderWidth="cellBorderWidth"
						:borderStyle="cellBorderStyle"
						:borderColor="cellBorderColor"
					>
						Body content 1
					</nuiTableCell>
					<nuiTableCell
						:borderWidth="cellBorderWidth"
						:borderStyle="cellBorderStyle"
						:borderColor="cellBorderColor"
					>
						Body content 2
					</nuiTableCell>
				</nuiTableRow>
				<nuiTableRow
					:height="cellHeight"
					:padding="cellPadding"
					:borderBottomWidth="rowBorderBottomWidth"
					:borderBottomStyle="rowBorderBottomStyle"
					:borderBottomColor="rowBorderBottomColor"
				>
					<nuiTableCell
						:borderWidth="cellBorderWidth"
						:borderStyle="cellBorderStyle"
						:borderColor="cellBorderColor"
					>
						Body content 1
					</nuiTableCell>
					<nuiTableCell
						:borderWidth="cellBorderWidth"
						:borderStyle="cellBorderStyle"
						:borderColor="cellBorderColor"
					>
						Body content 2
					</nuiTableCell>
				</nuiTableRow>
			</template>

			<template v-slot:tfoot>
				<nuiTableRow
					:height="cellHeight"
					:padding="cellPadding"
					:borderBottomWidth="rowBorderBottomWidth"
					:borderBottomStyle="rowBorderBottomStyle"
					:borderBottomColor="rowBorderBottomColor"
				>
					<nuiTableCell
						:borderWidth="cellBorderWidth"
						:borderStyle="cellBorderStyle"
						:borderColor="cellBorderColor"
					>
						Footer content 1
					</nuiTableCell>
					<nuiTableCell
						:borderWidth="cellBorderWidth"
						:borderStyle="cellBorderStyle"
						:borderColor="cellBorderColor"
					>
						Footer content 2
					</nuiTableCell>
				</nuiTableRow>
			</template>

		</nuiTable>
	`,
});

export const TableWithHeaderBodyAndFooter = TableWithHeaderBodyAndFooterTemplate.bind({});

TableWithHeaderBodyAndFooter.argTypes = {
	bodyIsCollapsable: {
		control: 'boolean'
	}
}
TableWithHeaderBodyAndFooter.storyName = 'Table with Header, Body and Footer'
TableWithHeaderBodyAndFooter.args = {
	width: '480px',
	cellHeight: '48px',
	cellPadding: '12px',
	rowBorderBottomWidth: '1px',
	rowBorderBottomStyle: 'solid',
	tableBorderWidth: '2px',
	tableBorderStyle: 'solid',
}

const TableWithHeaderAndCellHeadersTemplate = (args, { argTypes }) => ({
	components: {
		nuiTable,
		nuiTableRow,
		nuiTableCell
	},
	props: Object.keys(argTypes),
	template: `
		<nuiTable v-bind="$props"
			:borderWidth="tableBorderWidth"
			:borderStyle="tableBorderStyle"
			:borderColor="tableBorderColor"
		>

			<template v-slot:thead>
				<nuiTableRow
					:height="cellHeight"
					:padding="cellPadding"
					:borderBottomWidth="rowBorderBottomWidth"
					:borderBottomStyle="rowBorderBottomStyle"
					:borderBottomColor="rowBorderBottomColor"
					background="#ddd"
				>
					<nuiTableCell
						:borderWidth="cellBorderWidth"
						:borderStyle="cellBorderStyle"
						:borderColor="cellBorderColor"
					>
						Header content 1
					</nuiTableCell>
					<nuiTableCell
						:borderWidth="cellBorderWidth"
						:borderStyle="cellBorderStyle"
						:borderColor="cellBorderColor"
					>
						Header content 2
					</nuiTableCell>
					<nuiTableCell
						:borderWidth="cellBorderWidth"
						:borderStyle="cellBorderStyle"
						:borderColor="cellBorderColor"
					>
						Header content 3
					</nuiTableCell>
				</nuiTableRow>
			</template>

			<template v-slot:tbody>
				<nuiTableRow
					:height="cellHeight"
					:padding="cellPadding"
					:borderBottomWidth="rowBorderBottomWidth"
					:borderBottomStyle="rowBorderBottomStyle"
					:borderBottomColor="rowBorderBottomColor"
				>
					<nuiTableCell
						:borderWidth="cellBorderWidth"
						:borderStyle="cellBorderStyle"
						:borderColor="cellBorderColor"
					isHeader background="#eee">Cell header 1</nuiTableCell>
					<nuiTableCell
						:borderWidth="cellBorderWidth"
						:borderStyle="cellBorderStyle"
						:borderColor="cellBorderColor"
					>
						Body content 1
					</nuiTableCell>
					<nuiTableCell
						:borderWidth="cellBorderWidth"
						:borderStyle="cellBorderStyle"
						:borderColor="cellBorderColor"
					>
						Body content 2
					</nuiTableCell>
				</nuiTableRow>
				<nuiTableRow
					:height="cellHeight"
					:padding="cellPadding"
					:borderBottomWidth="rowBorderBottomWidth"
					:borderBottomStyle="rowBorderBottomStyle"
					:borderBottomColor="rowBorderBottomColor"
				>
					<nuiTableCell
						:borderWidth="cellBorderWidth"
						:borderStyle="cellBorderStyle"
						:borderColor="cellBorderColor"
					isHeader background="#eee">Cell header 2</nuiTableCell>
					<nuiTableCell
						:borderWidth="cellBorderWidth"
						:borderStyle="cellBorderStyle"
						:borderColor="cellBorderColor"
					>
						Body content 1
					</nuiTableCell>
					<nuiTableCell
						:borderWidth="cellBorderWidth"
						:borderStyle="cellBorderStyle"
						:borderColor="cellBorderColor"
					>
						Body content 2
					</nuiTableCell>
				</nuiTableRow>
			</template>
			
		</nuiTable>
	`,
});

export const TableWithHeaderAndCellHeaders = TableWithHeaderAndCellHeadersTemplate.bind({});

TableWithHeaderAndCellHeaders.storyName = 'Table with Header and Cell Headers'
// TableWithHeaderAndCellHeaders.argTypes = {
// 	bodyIsCollapsable: {
// 		control: 'boolean'
// 	}
// }
TableWithHeaderAndCellHeaders.args = {
	width: '640px',
	cellHeight: '48px',
	cellPadding: '12px',
	tableBorderWidth: '1px',
	tableBorderStyle: 'solid',
	rowBorderBottomWidth: '1px',
	rowBorderBottomStyle: 'solid',
	bodyIsCollapsable: 'false',
}

const TableWithHeaderAndScrollableBodyTemplate = (args, { argTypes }) => ({
	components: {
		nuiTable,
		nuiTableRow,
		nuiTableCell
	},
	props: Object.keys(argTypes),
	template: `
		<nuiTable v-bind="$props"
			:borderWidth="tableBorderWidth"
			:borderStyle="tableBorderStyle"
			:borderColor="tableBorderColor"
		>

			<template v-slot:thead>
				<nuiTableRow
					:height="cellHeight"
					:padding="cellPadding"
					:borderBottomWidth="rowBorderBottomWidth"
					:borderBottomStyle="rowBorderBottomStyle"
					:borderBottomColor="rowBorderBottomColor"
					background="#ddd"
				>
					<nuiTableCell
						:borderWidth="cellBorderWidth"
						:borderStyle="cellBorderStyle"
						:borderColor="cellBorderColor"
					>
						Header content 1
					</nuiTableCell>
					<nuiTableCell
						:borderWidth="cellBorderWidth"
						:borderStyle="cellBorderStyle"
						:borderColor="cellBorderColor"
					>
						Header content 2
					</nuiTableCell>
				</nuiTableRow>
			</template>

			<template v-slot:tbody>
				<nuiTableRow
					:height="cellHeight"
					:padding="cellPadding"
					:borderBottomWidth="rowBorderBottomWidth"
					:borderBottomStyle="rowBorderBottomStyle"
					:borderBottomColor="rowBorderBottomColor"
				>
					<nuiTableCell
						:borderWidth="cellBorderWidth"
						:borderStyle="cellBorderStyle"
						:borderColor="cellBorderColor"
					>
						Body content 1
					</nuiTableCell>
					<nuiTableCell
						:borderWidth="cellBorderWidth"
						:borderStyle="cellBorderStyle"
						:borderColor="cellBorderColor"
					>
						Body content 2
					</nuiTableCell>
				</nuiTableRow>
				<nuiTableRow
					:height="cellHeight"
					:padding="cellPadding"
					:borderBottomWidth="rowBorderBottomWidth"
					:borderBottomStyle="rowBorderBottomStyle"
					:borderBottomColor="rowBorderBottomColor"
				>
					<nuiTableCell
						:borderWidth="cellBorderWidth"
						:borderStyle="cellBorderStyle"
						:borderColor="cellBorderColor"
					>
						Body content 1
					</nuiTableCell>
					<nuiTableCell
						:borderWidth="cellBorderWidth"
						:borderStyle="cellBorderStyle"
						:borderColor="cellBorderColor"
					>
						Body content 2
					</nuiTableCell>
				</nuiTableRow>
				<nuiTableRow
					:height="cellHeight"
					:padding="cellPadding"
					:borderBottomWidth="rowBorderBottomWidth"
					:borderBottomStyle="rowBorderBottomStyle"
					:borderBottomColor="rowBorderBottomColor"
				>
					<nuiTableCell
						:borderWidth="cellBorderWidth"
						:borderStyle="cellBorderStyle"
						:borderColor="cellBorderColor"
					>
						Body content 1
					</nuiTableCell>
					<nuiTableCell
						:borderWidth="cellBorderWidth"
						:borderStyle="cellBorderStyle"
						:borderColor="cellBorderColor"
					>
						Body content 2
					</nuiTableCell>
				</nuiTableRow>
				<nuiTableRow
					:height="cellHeight"
					:padding="cellPadding"
					:borderBottomWidth="rowBorderBottomWidth"
					:borderBottomStyle="rowBorderBottomStyle"
					:borderBottomColor="rowBorderBottomColor"
				>
					<nuiTableCell
						:borderWidth="cellBorderWidth"
						:borderStyle="cellBorderStyle"
						:borderColor="cellBorderColor"
					>
						Body content 1
					</nuiTableCell>
					<nuiTableCell
						:borderWidth="cellBorderWidth"
						:borderStyle="cellBorderStyle"
						:borderColor="cellBorderColor"
					>
						Body content 2
					</nuiTableCell>
				</nuiTableRow>
				<nuiTableRow
					:height="cellHeight"
					:padding="cellPadding"
					:borderBottomWidth="rowBorderBottomWidth"
					:borderBottomStyle="rowBorderBottomStyle"
					:borderBottomColor="rowBorderBottomColor"
				>
					<nuiTableCell
						:borderWidth="cellBorderWidth"
						:borderStyle="cellBorderStyle"
						:borderColor="cellBorderColor"
					>
						Body content 1
					</nuiTableCell>
					<nuiTableCell
						:borderWidth="cellBorderWidth"
						:borderStyle="cellBorderStyle"
						:borderColor="cellBorderColor"
					>
						Body content 2
					</nuiTableCell>
				</nuiTableRow>
				<nuiTableRow
					:height="cellHeight"
					:padding="cellPadding"
					:borderBottomWidth="rowBorderBottomWidth"
					:borderBottomStyle="rowBorderBottomStyle"
					:borderBottomColor="rowBorderBottomColor"
				>
					<nuiTableCell
						:borderWidth="cellBorderWidth"
						:borderStyle="cellBorderStyle"
						:borderColor="cellBorderColor"
					>
						Body content 1
					</nuiTableCell>
					<nuiTableCell
						:borderWidth="cellBorderWidth"
						:borderStyle="cellBorderStyle"
						:borderColor="cellBorderColor"
					>
						Body content 2
					</nuiTableCell>
				</nuiTableRow>
				<nuiTableRow
					:height="cellHeight"
					:padding="cellPadding"
					:borderBottomWidth="rowBorderBottomWidth"
					:borderBottomStyle="rowBorderBottomStyle"
					:borderBottomColor="rowBorderBottomColor"
				>
					<nuiTableCell
						:borderWidth="cellBorderWidth"
						:borderStyle="cellBorderStyle"
						:borderColor="cellBorderColor"
					>
						Body content 1
					</nuiTableCell>
					<nuiTableCell
						:borderWidth="cellBorderWidth"
						:borderStyle="cellBorderStyle"
						:borderColor="cellBorderColor"
					>
						Body content 2
					</nuiTableCell>
				</nuiTableRow>
				<nuiTableRow
					:height="cellHeight"
					:padding="cellPadding"
					:borderBottomWidth="rowBorderBottomWidth"
					:borderBottomStyle="rowBorderBottomStyle"
					:borderBottomColor="rowBorderBottomColor"
				>
					<nuiTableCell
						:borderWidth="cellBorderWidth"
						:borderStyle="cellBorderStyle"
						:borderColor="cellBorderColor"
					>
						Body content 1
					</nuiTableCell>
					<nuiTableCell
						:borderWidth="cellBorderWidth"
						:borderStyle="cellBorderStyle"
						:borderColor="cellBorderColor"
					>
						Body content 2
					</nuiTableCell>
				</nuiTableRow>
				<nuiTableRow
					:height="cellHeight"
					:padding="cellPadding"
					:borderBottomWidth="rowBorderBottomWidth"
					:borderBottomStyle="rowBorderBottomStyle"
					:borderBottomColor="rowBorderBottomColor"
				>
					<nuiTableCell
						:borderWidth="cellBorderWidth"
						:borderStyle="cellBorderStyle"
						:borderColor="cellBorderColor"
					>
						Body content 1
					</nuiTableCell>
					<nuiTableCell
						:borderWidth="cellBorderWidth"
						:borderStyle="cellBorderStyle"
						:borderColor="cellBorderColor"
					>
						Body content 2
					</nuiTableCell>
				</nuiTableRow>
				<nuiTableRow
					:height="cellHeight"
					:padding="cellPadding"
					:borderBottomWidth="rowBorderBottomWidth"
					:borderBottomStyle="rowBorderBottomStyle"
					:borderBottomColor="rowBorderBottomColor"
				>
					<nuiTableCell
						:borderWidth="cellBorderWidth"
						:borderStyle="cellBorderStyle"
						:borderColor="cellBorderColor"
					>
						Body content 1
					</nuiTableCell>
					<nuiTableCell
						:borderWidth="cellBorderWidth"
						:borderStyle="cellBorderStyle"
						:borderColor="cellBorderColor"
					>
						Body content 2
					</nuiTableCell>
				</nuiTableRow>
				<nuiTableRow
					:height="cellHeight"
					:padding="cellPadding"
					:borderBottomWidth="rowBorderBottomWidth"
					:borderBottomStyle="rowBorderBottomStyle"
					:borderBottomColor="rowBorderBottomColor"
				>
					<nuiTableCell
						:borderWidth="cellBorderWidth"
						:borderStyle="cellBorderStyle"
						:borderColor="cellBorderColor"
					>
						Body content 1
					</nuiTableCell>
					<nuiTableCell
						:borderWidth="cellBorderWidth"
						:borderStyle="cellBorderStyle"
						:borderColor="cellBorderColor"
					>
						Body content 2
					</nuiTableCell>
				</nuiTableRow>
				<nuiTableRow
					:height="cellHeight"
					:padding="cellPadding"
					:borderBottomWidth="rowBorderBottomWidth"
					:borderBottomStyle="rowBorderBottomStyle"
					:borderBottomColor="rowBorderBottomColor"
				>
					<nuiTableCell
						:borderWidth="cellBorderWidth"
						:borderStyle="cellBorderStyle"
						:borderColor="cellBorderColor"
					>
						Body content 1
					</nuiTableCell>
					<nuiTableCell
						:borderWidth="cellBorderWidth"
						:borderStyle="cellBorderStyle"
						:borderColor="cellBorderColor"
					>
						Body content 2
					</nuiTableCell>
				</nuiTableRow>
				<nuiTableRow
					:height="cellHeight"
					:padding="cellPadding"
					:borderBottomWidth="rowBorderBottomWidth"
					:borderBottomStyle="rowBorderBottomStyle"
					:borderBottomColor="rowBorderBottomColor"
				>
					<nuiTableCell
						:borderWidth="cellBorderWidth"
						:borderStyle="cellBorderStyle"
						:borderColor="cellBorderColor"
					>
						Body content 1
					</nuiTableCell>
					<nuiTableCell
						:borderWidth="cellBorderWidth"
						:borderStyle="cellBorderStyle"
						:borderColor="cellBorderColor"
					>
						Body content 2
					</nuiTableCell>
				</nuiTableRow>
				<nuiTableRow
					:height="cellHeight"
					:padding="cellPadding"
					:borderBottomWidth="rowBorderBottomWidth"
					:borderBottomStyle="rowBorderBottomStyle"
					:borderBottomColor="rowBorderBottomColor"
				>
					<nuiTableCell
						:borderWidth="cellBorderWidth"
						:borderStyle="cellBorderStyle"
						:borderColor="cellBorderColor"
					>
						Body content 1
					</nuiTableCell>
					<nuiTableCell
						:borderWidth="cellBorderWidth"
						:borderStyle="cellBorderStyle"
						:borderColor="cellBorderColor"
					>
						Body content 2
					</nuiTableCell>
				</nuiTableRow>
			</template>

		</nuiTable>
	`,
});

export const TableWithHeaderAndScrollableBody = TableWithHeaderAndScrollableBodyTemplate.bind({});

TableWithHeaderAndScrollableBody.argTypes = {
	bodyIsCollapsable: {
		control: 'boolean'
	}
}

TableWithHeaderAndScrollableBody.args = {
	width: '480px',
	bodyMaxHeight: '360px',
	cellHeight: '48px',
	cellPadding: '12px',
	rowBorderBottomWidth: '1px',
	rowBorderBottomStyle: 'solid',
	tableBorderWidth: '2px',
	tableBorderStyle: 'solid',
}