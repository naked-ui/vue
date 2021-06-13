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
			<nTableRow height="48px">
				<nTableCell>Jane</nTableCell>
				<nTableCell>Doe</nTableCell>
			</nTableRow>
			<nTableRow height="48px">
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

const TableWithTheadTbodyAndTfootTemplate = (args, { argTypes }) => ({
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
					<nTableCell>Header content 1</nTableCell>
					<nTableCell>Header content 2</nTableCell>
				</nTableRow>
			</template>
			<template v-slot:tbody>
				<nTableRow height="64px">
					<nTableCell>Body content 1</nTableCell>
					<nTableCell>Body content 2</nTableCell>
				</nTableRow>
			</template>
			<nTableRow height="64px">
				<nTableCell>Body content 1</nTableCell>
				<nTableCell>Body content 2</nTableCell>
			</nTableRow>
			<template v-slot:tfoot>
				<nTableRow height="48px">
					<nTableCell>Footer content 1</nTableCell>
					<nTableCell>Footer content 2</nTableCell>
				</nTableRow>
			</template>
		</nTable>
	`,
});

export const TableWithTheadTbodyAndTfoot = TableWithTheadTbodyAndTfootTemplate.bind({});

TableWithTheadTbodyAndTfoot.args = {
	width: '420px'
}