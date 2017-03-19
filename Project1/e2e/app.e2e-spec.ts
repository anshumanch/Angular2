import { Project1Page } from './app.po';

describe('project1 App', () => {
  let page: Project1Page;

  beforeEach(() => {
    page = new Project1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });

  it('should display the table', () => {
    page.navigateTo();
    expect(page.getTableText()).toEqual(`
    <table>
      <tr>
        <td>Anshuman</td>
        <td>POC</td>
        <td>10</td>
        <td>Arpita</td>
        <td>Development</td>
        <td>20</td>
        <td>Aryan</td>
        <td>Testing</td>
        <td>15</td>
        <td>Manjula</td>
        <td>Deployment</td>
        <td>10</td>
      </tr>
    </table>
    `);
  });
});
