import nTable from './nTable'
import nTableHeader from './nTableHeader'
import nTableRow from './nTableRow'
import nTableCell from './nTableCell'

export default {
	title: 'Content/Table',
	components: {
		nTable,
		nTableHeader,
		nTableRow,
		nTableCell
	}
}

const DefaultTemplate = (args, { argTypes }) => ({
	components: {
		nTable,
		nTableHeader,
		nTableRow,
		nTableCell
	},
	props: Object.keys(argTypes),
	template: `
		<nTable>
			<nTableHeader>
				<nTableCell>One</nTableCell>
				<nTableCell>Two</nTableCell>
				<nTableCell>Three</nTableCell>
			</nTableHeader>
			<nTableRow>
				<nTableCell>One</nTableCell>
				<nTableCell>Two</nTableCell>
				<nTableCell>Three</nTableCell>
			</nTableRow>
			<nTableRow>
				<nTableCell>One</nTableCell>
				<nTableCell>Two</nTableCell>
				<nTableCell>Three</nTableCell>
			</nTableRow>
		</nTable>
	`,
});

export const Default = DefaultTemplate.bind({});

Default.args = {
	size: '32px'
}
