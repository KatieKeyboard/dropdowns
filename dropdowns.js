// Resources:
// https://qa-practice.netlify.app/dropdowns.html
// https://testsheepnz.github.io/BasicCalculator.html

describe('Dropdowns', () => {
	describe('Automation Practice - Dropdown', () => {
		beforeEach(() => {
			cy.visit('https://qa-practice.netlify.app/dropdowns.html');
			cy.url().should('include', 'practice');
		});

		it('Selects Countries from Simple Dropdown', () => {
			cy.get('#dropdown-menu option:selected')
				.should('be.selected')
				.and('have.text', 'Select a country...');

			cy.get('#dropdown-menu').select('Japan').should('contain.text', 'Japan');

			cy.get('#dropdown-menu').select(143).should('have.value', 'Monaco');

			cy.get('#dropdown-menu')
				.select('New Zealand')
				.should('have.value', 'New Zealand')
				.children('option:nth-child(199)')
				.should('have.value', 'Seychelles');
		});
	});
});

describe('Test Sheep Dropdown', () => {
	beforeEach(() => {
		cy.visit('https://testsheepnz.github.io/BasicCalculator.html');
		cy.url().should('include', 'Calculator');
	});

	it('Checks Integer Box', () => {
		cy.get('#integerSelect').check().should('be.checked').and('have.value', 1);
	});

	it('Types Numbers into Input Fields ', () => {
		// generate random integers
		const thousand = Math.floor(Math.random() * 1001);
		const hundred = Math.floor(Math.random() * 101);

		cy.get('#number1Field')
			.should('be.empty')
			.type(hundred)
			.should('have.value', hundred);

		cy.get('#number2Field')
			.should('be.empty')
			.type(thousand)
			.should('have.value', thousand);
	});

	it('Selects an Operation from Dropdown Box', () => {
		cy.get('#selectOperationDropdown')
			.select('Multiply')
			.should('have.value', '2');
		cy.get('option:nth-child(3)').should('be.selected');
	});

	it('Clicks "Calculate" Button', () => {
		cy.get('#calculateButton').should('have.value', 'Calculate').click();
	});
});
