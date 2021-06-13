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
		}
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
		<nTable v-bind="$props">
			<nTableRow height="48px">
				<nTableCell isHeader>First name</nTableCell>
				<nTableCell isHeader>Last name</nTableCell>
			</nTableRow>
			<nTableRow height="64px">
				<nTableCell>Jane</nTableCell>
				<nTableCell>Doe</nTableCell>
			</nTableRow>
			<nTableRow height="64px">
				<nTableCell>John</nTableCell>
				<nTableCell>Doe</nTableCell>
			</nTableRow>
		</nTable>
	`,
});

export const SimpleTable = SimpleTableTemplate.bind({});

SimpleTable.args = {
	width: '420px'
}

const TableWithHeaderAndFooterTemplate = (args, { argTypes }) => ({
	components: {
		nTable,
		nTableRow,
		nTableCell
	},
	props: Object.keys(argTypes),
	template: `
		<nTable v-bind="$props">
			<template v-slot:thead>
				<nTableRow height="48px">
					<nTableCell>First name</nTableCell>
					<nTableCell>Last name</nTableCell>
				</nTableRow>
			</template>
			</nTableRow>
			<nTableRow height="64px">
				<nTableCell>Jane</nTableCell>
				<nTableCell>Doe</nTableCell>
			</nTableRow>
			<nTableRow height="64px">
				<nTableCell>John</nTableCell>
				<nTableCell>Doe</nTableCell>
			</nTableRow>
		</nTable>
	`,
});

export const TableWithHeaderAndFooter = TableWithHeaderAndFooterTemplate.bind({});

TableWithHeaderAndFooter.args = {
	width: '420px'
}