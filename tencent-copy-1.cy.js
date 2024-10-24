describe('Product Management Page Tests', () => {
  before(() => {
    // 访问产品页面
    cy.visit('http://www.primefaces.org/showcase/ui/data/datatable/crud.xhtml?jfwid=9aaa0'); // 替换为你实际的产品页面URL
  });
  it('新增商品信息并进行编辑', () => {
    
    cy.wait(1000); // 等待 1 秒
    cy.get('#form').within(() => {
      cy.contains('New').click(); // 点击文本为"New"的按钮
      cy.wait(3000); // 等待 1 秒
      
    });
 
      
    cy.get('[id="dialogs:name"]').type('juesheng');
  
    
    cy.get('#dialogs\\:category > div:nth-child(1) > div:nth-child(2) > div > div.ui-radiobutton-box.ui-widget.ui-corner-all.ui-state-default > span').click();
    cy.get("#dialogs\\:price_input").type("100");
    cy.get("#dialogs\\:quantity_input").clear().type("100");
    cy.get("#dialogs\\:j_idt300 > span.ui-button-text.ui-c").click();

    cy.get("#form\\:dt-products\\:globalFilter").type("juesheng");
    cy.contains('juesheng');
    // cy.get("#form\:dt-products_data").click()
    cy.wait(3000); // 等待 1 秒

    cy.get('#form\\:dt-products\\:0\\:j_idt272').click();
    cy.wait(3000);
    cy.get('[id="dialogs:name"]').clear().type('rename_juesheng');
    
    // cy.get('#form\\:dt-products\\:0\\:j_idt272').find('span.ui-button-text.ui-c').click();

    cy.get("#dialogs\\:price_input").clear().type("200");
    cy.get("#dialogs\\:quantity_input").clear().type("200");
    cy.get("#dialogs\\:j_idt300 > span.ui-button-text.ui-c").click();
    cy.wait(3000); 
    cy.get("#form\\:dt-products\\:globalFilter").clear().type("rename_juesheng");
    cy.wait(3000); 
    cy.contains('rename_juesheng');
    cy.wait(3000); 
    // cy.get('[id="dialogs:name"]').clear().type('rename_juesheng');
    

    cy.get("#form\\:dt-products\\:0\\:j_idt273 > span.ui-button-icon-left.ui-icon.ui-c.pi.pi-trash").click();
    cy.wait(3000);
    cy.get("#dialogs\\:j_idt303").click;
    cy.get('#dialogs\\:j_idt303 > span.ui-button-text.ui-c').click();
    cy.wait(3000);
    cy.contains("No records found.");
  });
})