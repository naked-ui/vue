import nTable from './nTable'
import nTableRow from './nTableRow'
import nTableCell from './nTableCell'

export default {
	title: 'Content/Table',
	components: {
		nTable,
		nTableRow,
		nTableCell
	},
	argTypes: {
		width: {
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
		nTable,
		nTableRow,
		nTableCell
	},
	props: Object.keys(argTypes),
	template: `
		<nTable v-bind="$props"
			:borderWidth="tableBorderWidth"
			:borderStyle="tableBorderStyle"
			:borderColor="tableBorderColor"
		>

			<nTableRow
				:height="cellHeight"
				:padding="cellPadding"
				:borderBottomWidth="rowBorderBottomWidth"
				:borderBottomStyle="rowBorderBottomStyle"
				:borderBottomColor="rowBorderBottomColor"
			>
				<nTableCell
					:borderWidth="cellBorderWidth"
					:borderStyle="cellBorderStyle"
					:borderColor="cellBorderColor"
					isHeader
				>
					First name
				</nTableCell>
				<nTableCell
					:borderWidth="cellBorderWidth"
					:borderStyle="cellBorderStyle"
					:borderColor="cellBorderColor"
					isHeader
				>
					Last name
				</nTableCell>
			</nTableRow>

			<nTableRow
				:height="cellHeight"
				:padding="cellPadding"
				:borderBottomWidth="rowBorderBottomWidth"
				:borderBottomStyle="rowBorderBottomStyle"
				:borderBottomColor="rowBorderBottomColor"
			>
				<nTableCell
					:borderWidth="cellBorderWidth"
					:borderStyle="cellBorderStyle"
					:borderColor="cellBorderColor"
				>
					Jane
				</nTableCell>
				<nTableCell
					:borderWidth="cellBorderWidth"
					:borderStyle="cellBorderStyle"
					:borderColor="cellBorderColor"
				>
					Doe
				</nTableCell>
			</nTableRow>

			<nTableRow
				:height="cellHeight"
				:padding="cellPadding"
				:borderBottomWidth="rowBorderBottomWidth"
				:borderBottomStyle="rowBorderBottomStyle"
				:borderBottomColor="rowBorderBottomColor"
			>
				<nTableCell
					:borderWidth="cellBorderWidth"
					:borderStyle="cellBorderStyle"
					:borderColor="cellBorderColor"
				>
					John
				</nTableCell>
				<nTableCell
					:borderWidth="cellBorderWidth"
					:borderStyle="cellBorderStyle"
					:borderColor="cellBorderColor"
				>
					Doe
				</nTableCell>
			</nTableRow>
			
		</nTable>
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
		nTable,
		nTableRow,
		nTableCell
	},
	props: Object.keys(argTypes),
	template: `
		<nTable v-bind="$props"
			:borderWidth="tableBorderWidth"
			:borderStyle="tableBorderStyle"
			:borderColor="tableBorderColor"
		>

			<template v-slot:thead>
				<nTableRow
					:height="cellHeight"
					:padding="cellPadding"
					:borderBottomWidth="rowBorderBottomWidth"
					:borderBottomStyle="rowBorderBottomStyle"
					:borderBottomColor="rowBorderBottomColor"
					background="#ddd"
				>
					<nTableCell
						:borderWidth="cellBorderWidth"
						:borderStyle="cellBorderStyle"
						:borderColor="cellBorderColor"
					>
						Header content 1
					</nTableCell>
					<nTableCell
						:borderWidth="cellBorderWidth"
						:borderStyle="cellBorderStyle"
						:borderColor="cellBorderColor"
					>
						Header content 2
					</nTableCell>
				</nTableRow>
			</template>

			<template v-slot:tbody>
				<nTableRow
					:height="cellHeight"
					:padding="cellPadding"
					:borderBottomWidth="rowBorderBottomWidth"
					:borderBottomStyle="rowBorderBottomStyle"
					:borderBottomColor="rowBorderBottomColor"
				>
					<nTableCell
						:borderWidth="cellBorderWidth"
						:borderStyle="cellBorderStyle"
						:borderColor="cellBorderColor"
					>
						Body content 1
					</nTableCell>
					<nTableCell
						:borderWidth="cellBorderWidth"
						:borderStyle="cellBorderStyle"
						:borderColor="cellBorderColor"
					>
						Body content 2
					</nTableCell>
				</nTableRow>
				<nTableRow
					:height="cellHeight"
					:padding="cellPadding"
					:borderBottomWidth="rowBorderBottomWidth"
					:borderBottomStyle="rowBorderBottomStyle"
					:borderBottomColor="rowBorderBottomColor"
				>
					<nTableCell
						:borderWidth="cellBorderWidth"
						:borderStyle="cellBorderStyle"
						:borderColor="cellBorderColor"
					>
						Body content 1
					</nTableCell>
					<nTableCell
						:borderWidth="cellBorderWidth"
						:borderStyle="cellBorderStyle"
						:borderColor="cellBorderColor"
					>
						Body content 2
					</nTableCell>
				</nTableRow>
			</template>

			<template v-slot:tfoot>
				<nTableRow
					:height="cellHeight"
					:padding="cellPadding"
					:borderBottomWidth="rowBorderBottomWidth"
					:borderBottomStyle="rowBorderBottomStyle"
					:borderBottomColor="rowBorderBottomColor"
				>
					<nTableCell
						:borderWidth="cellBorderWidth"
						:borderStyle="cellBorderStyle"
						:borderColor="cellBorderColor"
					>
						Footer content 1
					</nTableCell>
					<nTableCell
						:borderWidth="cellBorderWidth"
						:borderStyle="cellBorderStyle"
						:borderColor="cellBorderColor"
					>
						Footer content 2
					</nTableCell>
				</nTableRow>
			</template>

		</nTable>
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
	bodyIsCollapsable: 'false',
}

const TableWithHeaderAndCellHeadersTemplate = (args, { argTypes }) => ({
	components: {
		nTable,
		nTableRow,
		nTableCell
	},
	props: Object.keys(argTypes),
	template: `
		<nTable v-bind="$props"
			:borderWidth="tableBorderWidth"
			:borderStyle="tableBorderStyle"
			:borderColor="tableBorderColor"
		>

			<template v-slot:thead>
				<nTableRow
					:height="cellHeight"
					:padding="cellPadding"
					:borderBottomWidth="rowBorderBottomWidth"
					:borderBottomStyle="rowBorderBottomStyle"
					:borderBottomColor="rowBorderBottomColor"
					background="#ddd"
				>
					<nTableCell
						:borderWidth="cellBorderWidth"
						:borderStyle="cellBorderStyle"
						:borderColor="cellBorderColor"
					>
						Header content 1
					</nTableCell>
					<nTableCell
						:borderWidth="cellBorderWidth"
						:borderStyle="cellBorderStyle"
						:borderColor="cellBorderColor"
					>
						Header content 2
					</nTableCell>
					<nTableCell
						:borderWidth="cellBorderWidth"
						:borderStyle="cellBorderStyle"
						:borderColor="cellBorderColor"
					>
						Header content 3
					</nTableCell>
				</nTableRow>
			</template>

			<template v-slot:tbody>
				<nTableRow
					:height="cellHeight"
					:padding="cellPadding"
					:borderBottomWidth="rowBorderBottomWidth"
					:borderBottomStyle="rowBorderBottomStyle"
					:borderBottomColor="rowBorderBottomColor"
				>
					<nTableCell
						:borderWidth="cellBorderWidth"
						:borderStyle="cellBorderStyle"
						:borderColor="cellBorderColor"
					isHeader background="#eee">Cell header 1</nTableCell>
					<nTableCell
						:borderWidth="cellBorderWidth"
						:borderStyle="cellBorderStyle"
						:borderColor="cellBorderColor"
					>
						Body content 1
					</nTableCell>
					<nTableCell
						:borderWidth="cellBorderWidth"
						:borderStyle="cellBorderStyle"
						:borderColor="cellBorderColor"
					>
						Body content 2
					</nTableCell>
				</nTableRow>
				<nTableRow
					:height="cellHeight"
					:padding="cellPadding"
					:borderBottomWidth="rowBorderBottomWidth"
					:borderBottomStyle="rowBorderBottomStyle"
					:borderBottomColor="rowBorderBottomColor"
				>
					<nTableCell
						:borderWidth="cellBorderWidth"
						:borderStyle="cellBorderStyle"
						:borderColor="cellBorderColor"
					isHeader background="#eee">Cell header 2</nTableCell>
					<nTableCell
						:borderWidth="cellBorderWidth"
						:borderStyle="cellBorderStyle"
						:borderColor="cellBorderColor"
					>
						Body content 1
					</nTableCell>
					<nTableCell
						:borderWidth="cellBorderWidth"
						:borderStyle="cellBorderStyle"
						:borderColor="cellBorderColor"
					>
						Body content 2
					</nTableCell>
				</nTableRow>
			</template>
			
		</nTable>
	`,
});

export const TableWithHeaderAndCellHeaders = TableWithHeaderAndCellHeadersTemplate.bind({});

TableWithHeaderAndCellHeaders.storyName = 'Table with Header and Cell Headers'
TableWithHeaderAndCellHeaders.argTypes = {
	bodyIsCollapsable: {
		control: 'boolean'
	}
}
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
