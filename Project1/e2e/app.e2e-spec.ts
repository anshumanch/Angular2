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
    expect(page.getTableText()).toContain("Name");
    expect(page.getTableText()).toContain("Task");
    expect(page.getTableText()).toContain("Hours");
    expect(page.getTableText()).toContain("Anshuman");
    expect(page.getTableText()).toContain("POC");
    expect(page.getTableText()).toContain("10");
    expect(page.getTableText()).toContain("Arpita");
    expect(page.getTableText()).toContain("Development");
    expect(page.getTableText()).toContain("20");
    expect(page.getTableText()).toContain("Aryan");
    expect(page.getTableText()).toContain("Testing");
    expect(page.getTableText()).toContain("15");
    expect(page.getTableText()).toContain("Manjula");
    expect(page.getTableText()).toContain("Deployment");
    expect(page.getTableText()).toContain("10");
  });
});
