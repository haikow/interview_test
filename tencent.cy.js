
describe('Product Management Page Tests', () => {
  before(() => {
    // 访问产品页面
    cy.visit('http://www.primefaces.org/showcase/ui/data/datatable/crud.xhtml?jfwid=9aaa0'); // 替换为你实际的产品页面URL
  });

  it('Should display product table with correct headers', () => {
    // 检查产品表的列名是否正确
    cy.get('#form').within(() => {
      cy.contains('Code');
      cy.contains('Name');
      cy.contains('Image');
      cy.contains('Price');
      cy.contains('Category');
      cy.contains('Reviews');
      cy.contains('Status');
    });
  });

  // it('Should display correct product details for Yoga Mat', () => {
  //   // 验证“Yoga Mat”的信息
  //   cy.contains('tr', 'Yoga Mat').within(() => {
  //     cy.get('td').eq(1).should('contain', 'Yoga Mat'); // 验证名称
  //     cy.get('td').eq(3).should('contain', '$20.00'); // 验证价格
  //     cy.get('td').eq(4).should('contain', 'Fitness'); // 验证分类
  //     cy.get('td').eq(5).find('svg').should('have.length', 5); // 验证5星评价
  //     cy.get('td').eq(6).should('contain', 'IN STOCK'); // 验证库存状态
  //   });
  // });
  


  it('Should display correct product details for Shoes', () => {
    // 验证“Shoe”的信息
    cy.wait(1000); // 等待 1 秒
    cy.get('form').within(() => {
      cy.get('New').click(); // 点击文本为"New"的按钮
      cy.get('#dialogs\:name').type('juesheng');
      // cy.contains('tr', 'Shoes').should('be.visible'); 

      cy.get('#dialogs\:category > div:nth-child(1) > div:nth-child(2) > div > div.ui-radiobutton-box.ui-widget.ui-corner-all.ui-state-default > span').click();
      cy.get("#dialogs\:price_input").type("100");
      cy.get("#dialogs\:quantity_input").type("100");
      cy.get("#form\:dt-products\:globalFilter").type("juesheng");
      cy.contains('juesheng');
    });
  });

  // it('Should have functional edit and delete buttons', () => {
  //   // 检查编辑和删除按钮是否存在并可点击
  //   cy.contains('#form').within(() => {
  //     cy.get('.edit-btn').should('exist').click(); // 点击编辑按钮
  //     cy.get('.delete-btn').should('exist'); // 验证删除按钮存在
  //   });
  // });

  // it('Should filter products correctly using search', () => {
  //   // 输入“Shoes”并检查过滤结果
  //   cy.get('input[type="search"]').type('Shoes');
  //   cy.contains('tr', 'Shoes').should('be.visible'); // 验证“Shoe”显示
  //   cy.contains('tr', 'Yoga Mat').should('not.exist'); // 验证其他产品未显示
  // });
});
